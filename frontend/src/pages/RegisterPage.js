import { useEffect, useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import Spinner from "../components/spinner";

function RegisterPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });
  const { first_name, last_name, email, password, re_password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== re_password) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        first_name,
        last_name,
        email,
        password,
        re_password,
      };
      dispatch(register(userData));
    }
  };
  useEffect(() => {
    if (isSuccess || user) {
      navigate("/");
      toast.success(
        "An activation email has been sent to your email. Please check your email",
      );
    }
    if (isError) {
      toast.error(message);
    }
  }, [isError, isSuccess, user, navigate, dispatch]);

  return (
    <>
      <div className="container auth__container">
        <h1 className="main__title">
          Register
          <CiUser />
        </h1>

        {isLoading && <Spinner />}
        <form className="auth__form">
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            onChange={handleChange}
            value={first_name}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            value={last_name}
            name="last_name"
            required
          />
          <input
            type="email"
            onChange={handleChange}
            value={email}
            placeholder="Email"
            name="email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
            name="password"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={re_password}
            name="re_password"
            required
          />

          <Link to="/reset-password">Forget Password ?</Link>

          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
export default RegisterPage;
