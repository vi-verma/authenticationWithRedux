import { Route, Routes } from "react-router";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={ <Dashboard/> } />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
