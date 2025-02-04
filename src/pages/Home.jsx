import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mt-8">
          Welcome to JobSite
        </h1>
        <p className="text-center mt-4">
          Find your dream job or post a job opening.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
