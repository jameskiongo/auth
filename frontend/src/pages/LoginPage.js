import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/spinner";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo, login, reset } from "../features/auth/authSlice";
import { toast } from "react-hot-toast";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

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
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/dashboard");
    }
    dispatch(reset());
    dispatch(getUserInfo());
  }, [isError, isSuccess, user, navigate, dispatch]);

  return (
    <>
      <div className="container auth__container">
        <h1 className="main__title">Login</h1>
        {isLoading && <Spinner />}

        <form className="auth__form">
          <input
            type="text"
            placeholder="email"
            onChange={handleChange}
            value={email}
            name="email"
            required
          />
          <input
            type="password"
            placeholder="password"
            onChange={handleChange}
            value={password}
            name="password"
            required
          />
          {/* <Link to="/reset-password">Forget Password ?</Link> */}

          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
export default LoginPage;
