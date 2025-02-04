import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EmployerDashboard from "./pages/EmployerDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import JobListings from "./pages/JobListings";
import PostJob from "./pages/PostJob";
import EmployerProfile from "./pages/EmployerProfile";
import EmployeeProfile from "./pages/EmployeeProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        <Route path="/job-listings" element={<JobListings />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/employer-profile" element={<EmployerProfile />} />
        <Route path="/employee-profile" element={<EmployeeProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
