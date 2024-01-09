import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/homeFriends";
import { AuthProvider } from "../context/authContext";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
