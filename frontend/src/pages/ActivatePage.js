import { FiUserCheck } from "react-icons/fi";

function ActivatePage() {
  return (
    <div>
      <div className="container auth__container">
        <h1 className="main__title">
          Activate Account
          <FiUserCheck />
        </h1>

        <button className="btn btn-accent btn-activate-account" type="submit">
          Activate Account
        </button>
      </div>
    </div>
  );
}
export default ActivatePage;
