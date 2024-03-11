import { FiUserCheck } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { activate } from "../features/auth/authSlice";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import Spinner from "../components/spinner";
import { Oval } from "react-loader-spinner";

function ActivatePage() {
  const { uid, token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      uid,
      token,
    };
    dispatch(activate(userData));
    toast.success("Your account has been activated. You can login");
  };
  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
    if (isError) {
      toast.error(message);
      // dispatch(reset());
    }
  }, [isError, isSuccess, navigate, dispatch]);
  return (
    <div>
      <div className="container auth__container">
        <h1 className="main__title">
          Activate Account
          <FiUserCheck />
        </h1>

        {isLoading && <Spinner />}

        <button
          className="btn btn-accent btn-activate-account"
          type="submit"
          onClick={handleSubmit}
        >
          Activate Account
        </button>
      </div>
    </div>
  );
}
export default ActivatePage;
