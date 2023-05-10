import { VNode } from "preact";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "src/components/Button";
import TextField from "src/components/TextField";
import { resetPassword } from "src/services/AuthService";
import { checkErrors, convertFieldsForValidation, Validation } from "src/utils";

function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code: string | null = searchParams.get("code");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fields, updateFields] = useState<Array<InputFieldType>>([
    {
      type: "password",
      value: "",
      key: "password",
      name: "Create New Password",
      placeHolder: "Enter your new password",
      error: "",
      maxLength: 256,
      rules: "required|no_space|min:6|max:256",
      className: "form-control input-field",
    },
    {
      type: "password",
      value: "",
      key: "confirm_password",
      name: "Confirm New Password",
      placeHolder: "Enter your password once again",
      error: "",
      maxLength: 256,
      rules: "required|no_space|match_index:0|min:6|max:256",
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
    if (!code) return;

    if (
      checkErrors(
        Validation.validate(convertFieldsForValidation(fields)),
        (index: number, value: any) => updateOneField(index, "error", value)
      )
    )
      return;

    setIsLoading(true);
    const reset: AsyncResposeType = await resetPassword(code, fields[0].value);
    setIsLoading(false);
    if (reset?.success) {
      toast.success(reset.message);
      navigate("/login");
    } else {
      toast.error(reset?.message);
    }
  };

  const renderInputs = (): VNode => {
    return (
      <div>
        {fields.map((field: InputFieldType, index: number) => {
          return (
            <div class="from-group">
              <label for="password" class="form-label input-label-fonts">
                {field?.name}
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
                  onClick={() => {
                    let fieldType: inputType = "password";
                    if (field?.type === "password") {
                      fieldType = "text";
                    }
                    updateFields((prevState): Array<InputFieldType> => {
                      prevState[index] = {
                        ...prevState[index],
                        type: fieldType,
                      };
                      return [...prevState];
                    });
                  }}
                >
                  <img src="/images/passwordEye.png" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  console.log(isLoading);
  return (
    <>
      <h1>Set New Password</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <div class="my-3 my-md-4 my-lg-5">
        {renderInputs()}
        <div class="text-center">
          <Button
            title="Submit"
            className="theme-btn"
            onClick={(event: MouseEvent) => submit(event)}
          />
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
