import TextField from "src/components/TextField";
import Button from "src/components/Button";
import { useEffect, useState } from "preact/hooks";
import { VNode } from "preact";
import { Validation, checkErrors, convertFieldsForValidation } from "src/utils";
import { NavLink } from "react-router-dom";
import { loginUser } from "src/services/AuthService";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { accountAtom } from "src/recoilState/account";
import Loader from "src/components/Loader";

function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordChecked, setIsPasswordChecked] = useState<boolean>(false);
  const [account, setAccount] = useRecoilState<AccountModel | undefined>(
    accountAtom
  );
  const [fields, updateFields] = useState<Array<InputFieldType>>([
    {
      type: "text",
      value: "",
      key: "email",
      name: "Email address",
      placeHolder: "Please enter the email id",
      error: "",
      maxLength: 50,
      rules: "required|email|max:50",
      className: "form-control input-field",
    },
    {
      type: "password",
      value: "",
      key: "password",
      name: "Password",
      placeHolder: "******",
      error: "",
      maxLength: 256,
      rules: "required|no_space|min:6|max:256",
      className: "form-control input-field",
    },
  ]);
  useEffect(() => {
    updateFields((prevState): Array<InputFieldType> => {
      prevState[1] = {
        ...prevState[1],
        type: isPasswordChecked ? "text" : "password",
      };
      return [...prevState];
    });
  }, [isPasswordChecked]);
  const updateOneField = (
    index: number,
    fieldName: string,
    value: any
  ): void => {
    updateFields((prevState): Array<InputFieldType> => {
      prevState[index] = { ...prevState[index], [fieldName]: value };
      return [...prevState];
    });
  };
  console.log(account, "loginnnnnn");
  const submit = async (event: MouseEvent) => {
    event.preventDefault();
    if (
      checkErrors(
        Validation.validate(convertFieldsForValidation(fields)),
        (index: number, value: any) => updateOneField(index, "error", value)
      )
    )
      return;
    setIsLoading(true);
    const login: AsyncResposeType = await loginUser(
      fields[0].value,
      fields[1].value
    );
    setIsLoading(false);
    console.log(login, "login");
    if (!login?.success) {
      return toast.error(login?.message);
    } else {
      setAccount({
        id: login?.data?.uid || "",
        email: login?.data?.email || "",
        isAdmin: true,
      });
      localStorage.setItem("user", JSON.stringify(login?.data));
      return toast.success(login?.message);
    }
  };

  const renderInputs = (): VNode => {
    return (
      <div>
        {fields.map((field: InputFieldType, index: number) => {
          if (field?.key === "email") {
            return (
              <div class="from-group">
                <label
                  for="formGroupExampleInput"
                  class="form-label input-label-fonts"
                >
                  Email id
                </label>
                <TextField
                  type={field.type}
                  value={field.value}
                  onChange={(newValue: string) =>
                    updateOneField(index, "value", newValue)
                  }
                  placeHolder={field.placeHolder}
                  error={field.error}
                  className={field?.className}
                ></TextField>
              </div>
            );
          } else {
            return (
              <div class="from-group">
                <label
                  for="formGroupExampleInput2"
                  class="form-label input-label-fonts"
                >
                  Password
                </label>
                <div class="position-relative">
                  <TextField
                    type={field.type}
                    value={field.value}
                    onChange={(newValue: string) =>
                      updateOneField(index, "value", newValue)
                    }
                    placeHolder={field.placeHolder}
                    error={field.error}
                    className={field?.className}
                  ></TextField>
                  <button
                    type="button"
                    class="toggle-password"
                    onClick={() => setIsPasswordChecked(!isPasswordChecked)}
                  >
                    <img src="/images/passwordEye.png" />
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  };

  return (
    <>
      <h1>Login</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <div class="my-3 my-md-4 my-lg-5">
        {renderInputs()}
        <div class="text-end">
          <NavLink
            to="/forgot-password"
            className={"theme-text text-decoration-underline"}
          >
            Forgot Password?
          </NavLink>
        </div>
      </div>
      <div class="text-center">
        <Button
          title="Login"
          isLoading={isLoading}
          className="theme-btn"
          onClick={(event: MouseEvent) => submit(event)}
        />
      </div>
      {isLoading && <Loader />}
    </>
  );
}

export default Login;
