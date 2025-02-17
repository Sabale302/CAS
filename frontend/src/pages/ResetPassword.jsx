function ResetPassword() {
  return (
    <div className="container">
      <div className="form-container">
        <h2>Reset Password</h2>
        <form>
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" />
          </div>
          <button type="submit" className="btn">Reset Password</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;