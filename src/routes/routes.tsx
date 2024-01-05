import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/loginFriends";
import { AuthProvider } from "../context/authContext";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
