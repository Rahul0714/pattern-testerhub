import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EmployeeProfile = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Employee Profile</h1>
        <form className="max-w-md mx-auto bg-white p-8 border rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter location"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default EmployeeProfile;
