import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div className="container auth__container">
        <h1 className="main__title">Login</h1>

        <form className="auth__form">
          <input type="text" placeholder="email" name="email" required />
          <input
            type="password"
            placeholder="password"
            name="password"
            required
          />

          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
export default LoginPage;
