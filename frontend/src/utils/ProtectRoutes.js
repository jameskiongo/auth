import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const ProtectRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  if (!user) {
    return <Navigate to={"/login"} />;
  } else {
    return children;
  }
};
export default ProtectRoutes;
