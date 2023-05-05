// import TextField from "components/TextField";
// import Button from "components/Button";
// import { useState } from "preact/hooks";
// import { VNode } from "preact";
// import { Validation, checkErrors, convertFieldsForValidation } from "utils";
// import { loginUser } from "services/AuthService";

function Login() {
  //   const [isLoading, setIsLoading] = useState<boolean>(false);
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
      <div className="container-fluid d-flex flex-column min-vh-100 background-container ">
        <div className="px-5 pt-4">
          <div className="row  border-bottom border-dark pb-4">
            <div className="col fs-2 header-section ">Fun Services</div>
          </div>
          <div>
            <div className="col ">
              <img src="/images/Vector.png" className="content-image" />
              <img src="/images/PolesCombined.png" className="content-image " />
            </div>
          </div>
        </div>
        <div className="flex-grow-1 row">
          <div className="col"></div>
          <div className="col px-5 py-5">
            <div className="ms-5 mt-4">
              <div className="fs-4 mb-3 fw-semibold">Login</div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </div>
              <div className="mt-5">
                <div class="mb-3">
                  <label
                    for="formGroupExampleInput"
                    className="fs-5 form-label input-label-fonts"
                  >
                    Email id
                  </label>
                  <input
                    type="text"
                    className="form-control input-field"
                    id="formGroupExampleInput"
                    placeholder="Please enter the email id"
                  />
                </div>
                <div class="mb-2">
                  <label
                    for="formGroupExampleInput2"
                    className="fs-5 form-label input-label-fonts"
                  >
                    Password
                  </label>
                  <div className="d-flex">
                    <input
                      type="password"
                      className="form-control input-field"
                      id="formGroupExampleInput2"
                      placeholder="********"
                    />
                    <button
                      type="button"
                      className="toggle-password"
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
                  className="fs-6 b1 text-decoration-underline "
                  style={{ textAlign: "right" }}
                >
                  <span style={{ cursor: "pointer" }}>Forgot Password?</span>
                </div>
                <div className="text-center mt-5">
                  <button className="button-prop">Log In</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
