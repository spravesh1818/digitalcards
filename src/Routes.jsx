import { Routes, Route, Navigate } from "react-router-dom";
import UserCard from "./components/UserCard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import { getToken } from "./helpers/auth.helper";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserCard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/profile"
          element={getToken() ? <Profile /> : <Navigate to="/signin" />}
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
