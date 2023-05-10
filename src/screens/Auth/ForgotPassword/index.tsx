import { VNode } from "preact";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "src/components/Button";
import TextField from "src/components/TextField";
import { sendResetPasswordEmail } from "src/services/AuthService";
import { checkErrors, convertFieldsForValidation, Validation } from "src/utils";

function ForgotPassword() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    if (
      checkErrors(
        Validation.validate(convertFieldsForValidation(fields)),
        (index: number, value: any) => updateOneField(index, "error", value)
      )
    )
      return;
    setIsLoading(true);

    const reset: AsyncResposeType = await sendResetPasswordEmail(
      fields[0].value
    );
    setIsLoading(false);
    console.log(reset, "reset", isLoading);
    if (reset?.success) {
      toast.success(reset?.message);
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
                className={field.className}
              ></TextField>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <h1>Forgot Password</h1>
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

export default ForgotPassword;
