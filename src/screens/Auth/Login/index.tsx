// import TextField from "components/TextField";
import Button from "src/components/Button";
import { useState } from "preact/hooks";
// import { VNode } from "preact";
// import { Validation, checkErrors, convertFieldsForValidation } from "utils";
// import { loginUser } from "services/AuthService";

import { NavLink } from "react-router-dom";

function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //   const [fields, updateFields] = useState<Array<InputFieldType>>([
  //     {
  //       type: "text",
  //       value: "",
  //       key: "email",
  //       name: "Email address",
  //       placeHolder: "Enter your email address",
  //       error: "",
  //       maxLength: 50,
  //       rules: "required|email|max:50",
  //     },
  //     {
  //       type: "password",
  //       value: "",
  //       key: "password",
  //       name: "Password",
  //       placeHolder: "Enter your password",
  //       error: "",
  //       maxLength: 256,
  //       rules: "required|no_space|min:6|max:256",
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

  //     if (
  //       checkErrors(
  //         Validation.validate(convertFieldsForValidation(fields)),
  //         (index: number, value: any) => updateOneField(index, "error", value)
  //       )
  //     )
  //       return;

  //     setIsLoading(true);
  //     const login: AsyncResposeType = await loginUser(
  //       fields[0].value,
  //       fields[1].value
  //     );
  //     setIsLoading(false);

  //     if (!login.success) {
  //       return alert(login.message);
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
      {/* <div>
        {renderInputs()}
        <Button
          title="Login"
          isLoading={isLoading}
          onClick={(event: MouseEvent) => submit(event)}
        />
      </div> */}
      <h1>Login</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s.
      </p>
      <div class="my-3 my-md-4 my-lg-5">
        <div class="from-group">
          <label
            for="formGroupExampleInput"
            class="form-label input-label-fonts"
          >
            Email id
          </label>
          <input
            type="text"
            class="form-control input-field"
            id="formGroupExampleInput"
            placeholder="Please enter the email id"
          />
        </div>
        <div class="from-group">
          <label
            for="formGroupExampleInput2"
            class="form-label input-label-fonts"
          >
            Password
          </label>
          <div class="position-relative">
            <input
              type="password"
              class="form-control input-field"
              id="formGroupExampleInput2"
              placeholder="********"
            />
            <button
              type="button"
              class="toggle-password"
            >
              <img src="/images/passwordEye.png" />
            </button>
          </div>
        </div>
        <div class="text-end">
          <NavLink to="/forgot-password" className={"theme-text text-decoration-underline"}>
            Forgot Password?
          </NavLink>
        </div>
      </div>
      <div class="text-center">
        <Button
          title="Login"
          isLoading={isLoading}
          className="theme-btn"
        // onClick={(event: MouseEvent) => submit(event)}
        />
      </div>
    </>
  );
}

export default Login;
