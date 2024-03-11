function ResetPassword() {
  return (
    <>
      <div className="container auth__container">
        <h1 className="main__title">Reset Password</h1>

        <form className="auth__form">
          <input type="text" placeholder="Email" name="email" required />
          <button className="btn btn-primary" type="submit">
            Reset Password
          </button>
        </form>
      </div>
    </>
  );
}
export default ResetPassword;
