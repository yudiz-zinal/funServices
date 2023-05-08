import Button from "src/components/Button";

function ForgotPassword() {
  return (
    <>
      <h1>Forgot Password</h1>
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
        <div class="text-center">
          <Button
            title="Submit"
            className="theme-btn"
          // onClick={(event: MouseEvent) => submit(event)}
          />
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
