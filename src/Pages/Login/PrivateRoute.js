import { useAuth } from "../../firebase.init";
import ServicesDetail from "../ServiceDetail";
import Login from "./Login";

const PrivateRoute = () => {
  const currentUser = useAuth();
  return currentUser ? <ServicesDetail /> : <Login />;
};

export default PrivateRoute;
