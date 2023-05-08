import Button from "src/components/Button";

function ResetPassword() {
  return (
    <>
      <h1>Set New Password</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s.
      </p>
      <div class="my-3 my-md-4 my-lg-5">
        <div class="from-group">
          <label
            for="password"
            class="form-label input-label-fonts"
          >
            Create New Password
          </label>
          <input
            type="password"
            class="form-control input-field"
            id="password"
            placeholder="Please enter the Password"
          />
        </div>
        <div class="from-group">
          <label
            for="confirmPassword"
            class="form-label input-label-fonts"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            class="form-control input-field"
            id="confirmPassword"
            placeholder="Please enter the Password"
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

export default ResetPassword;
