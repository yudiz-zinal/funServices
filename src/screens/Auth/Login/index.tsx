import TextField from "components/TextField";
import Button from "components/Button";
import EmailField from "components/EmailField";
import PasswordField from "components/PasswordField";
import { useState } from "preact/hooks";
import { VNode } from "preact";
import { Validation, checkErrors, convertFieldsForValidation } from "utils";
import { loginUser } from "services/AuthService";

import { NavLink } from "react-router-dom";

function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fields, updateFields] = useState<Array<InputFieldType>>([
    {
      type: "text",
      value: "",
      key: "email",
      name: "Email address",
      placeHolder: "Enter your email address",
      error: "",
      maxLength: 50,
      rules: "required|email|max:50",
      className: "Please enter the email id",
    },
    {
      type: "password",
      value: "",
      key: "password",
      name: "Password",
      placeHolder: "********",
      error: "",
      maxLength: 256,
      rules: "required|no_space|min:6|max:256",
      className: "form-control input-field",
    },
  ]);

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

  const submit = async (event: MouseEvent) => {
    event.preventDefault();
    console.log(fields, "fields");
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

    if (!login.success) {
      return alert(login.message);
    }
  };

  const renderInputs = (): VNode => {
    return (
      <div>
        {fields.map((field: InputFieldType, index: number) => {
          return (
            <div>
              <TextField
                type={field.type}
                value={field.value}
                onChange={(newValue: string) =>
                  updateOneField(index, "value", newValue)
                }
                placeHolder={field.placeHolder}
                error={field.error}
              ></TextField>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {/* <div>
        {renderInputs()}
        <Button
          title="Login"
          isLoading={isLoading}
          onClick={(event: MouseEvent) => submit(event)}
        />
      </div> */}
      <div class="col px-5 py-5">
        <div class="ms-5 mt-4">
          <div class="fs-4 mb-3 fw-semibold">Login</div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>
          <div class="mt-5">
            <div class="mb-3">
              <label
                for="formGroupExampleInput"
                class="fs-5 form-label input-label-fonts"
              >
                Email id
              </label>

              <EmailField
                placeHolder="Please enter the email id"
                id="loginEmailId"
                className="form-control input-field"
              />
            </div>
            <div class="mb-2">
              <label
                for="formGroupExampleInput2"
                class="fs-5 form-label input-label-fonts"
              >
                Password
              </label>
              <div class="d-flex">
                <input
                  type="password"
                  class="form-control input-field"
                  id="formGroupExampleInput2"
                  placeholder="********"
                />
                {/* <PasswordField
                  type="password"
                  placeHolder="********"
                  id="loginPassword"
                  className="form-control input-field"
                /> */}
                <button
                  type="button"
                  class="toggle-password"
                  style={{
                    border: "none",
                    backgroundColor: "#ECEFF4",
                    marginLeft: "-34px",
                  }}
                >
                  <img src="/images/passwordEye.png" />
                </button>
              </div>
            </div>
            <div
              class="fs-6 b1 text-decoration-underline "
              style={{ textAlign: "right" }}
            >
              <NavLink to="/forgot-password" style={{ cursor: "pointer" }}>
                Forgot Password?
              </NavLink>
            </div>
            <div class="text-center mt-5">
              <Button
                title="Login"
                isLoading={isLoading}
                className="button-prop"
                onClick={(event: MouseEvent) => submit(event)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
