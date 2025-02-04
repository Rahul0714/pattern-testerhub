import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EmployerDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Employer Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Job Cards */}
          <div className="bg-white p-6 border rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">Software Engineer</h2>
            <p className="text-gray-600 mb-4">Posted on: 2023-10-01</p>
            <p className="text-gray-600 mb-4">Applications: 12</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Applications
            </button>
          </div>
          {/* Add more job cards here */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmployerDashboard;
