import { Route, Routes } from "react-router";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import { useSelector } from "react-redux";

const App = () => {
  const isLoggedIn = useSelector((state: any)=> state.authenticatedUserSliceReducer?.isLoggedIn)

  return (
    <Routes>
      {isLoggedIn && <Route path="dashboard" element={ <Dashboard/> } />}
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
