import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PostJob = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Post a Job</h1>
        <form className="max-w-md mx-auto bg-white p-8 border rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Job Title</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter job title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Company Name
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter company name"
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
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Job Description
            </label>
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="Enter job description"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Post Job
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default PostJob;
