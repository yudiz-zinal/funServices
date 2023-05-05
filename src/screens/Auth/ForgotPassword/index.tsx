// import TextField from "components/TextField";
// import Button from "components/Button";
// import { useState } from "preact/hooks";
// import { VNode } from "preact";
// import { Validation, checkErrors, convertFieldsForValidation } from "utils";
// import { forgotPassword } from "services/AuthService";
// import { useNavigate, useSearchParams } from "react-router-dom";

function ForgotPassword() {
  //   const navigate = useNavigate();
  //   const [searchParams] = useSearchParams();
  //   const code: string | null = searchParams.get("code");

  //   const [isLoading, setIsLoading] = useState<boolean>(false);
  //   const [fields, updateFields] = useState<Array<InputFieldType>>([
  //     {
  //       type: "password",
  //       value: "",
  //       key: "password",
  //       name: "New Password",
  //       placeHolder: "Enter your new password",
  //       error: "",
  //       maxLength: 256,
  //       rules: "required|no_space|min:6|max:256",
  //     },
  //     {
  //       type: "password",
  //       value: "",
  //       key: "confirm_password",
  //       name: "Confirm Password",
  //       placeHolder: "Enter your password once again",
  //       error: "",
  //       maxLength: 256,
  //       rules: "required|no_space|match_index:0|min:6|max:256",
  //     },
  //   ]);

  //   const updateOneField = (
  //     index: number,
  //     fieldName: string,
  //     value: any
  //   ): void => {
  //     updateFields((prevState): Array<InputFieldType> => {
  //       prevState[index] = { ...prevState[index], [fieldName]: value };
  //       return [...prevState];
  //     });
  //   };

  //   const submit = async (event: MouseEvent) => {
  //     event.preventDefault();

  //     if (!code) return;

  //     if (
  //       checkErrors(
  //         Validation.validate(convertFieldsForValidation(fields)),
  //         (index: number, value: any) => updateOneField(index, "error", value)
  //       )
  //     )
  //       return;

  //     setIsLoading(true);
  //     const reset: AsyncResposeType = await forgotPassword(code, fields[0].value);
  //     setIsLoading(false);

  //     alert(reset.message);

  //     if (reset.success) {
  //       navigate("/login");
  //     }
  //   };

  //   const renderInputs = (): VNode => {
  //     return (
  //       <div>
  //         {fields.map((field: InputFieldType, index: number) => {
  //           return (
  //             <div>
  //               <TextField
  //                 type={field.type}
  //                 value={field.value}
  //                 onChange={(newValue: string) =>
  //                   updateOneField(index, "value", newValue)
  //                 }
  //                 placeHolder={field.placeHolder}
  //                 error={field.error}
  //               ></TextField>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     );
  //   };

  return (
    <>
      Forgot Password
      {/* <div>
                {renderInputs()}
                <Button
                    title="Forgot Password"
                    isLoading={isLoading}
                    onClick={(event: MouseEvent) => submit(event)}
                />
            </div> */}
    </>
  );
}

export default ForgotPassword;
