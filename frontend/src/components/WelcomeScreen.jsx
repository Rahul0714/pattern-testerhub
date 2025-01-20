import { UserCircle, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export const WelcomeScreen = () => {
  const handleRoleSelect = (role) => {
    console.log(`Selected role: ${role}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Welcome to Pattern TesterHub
            </h1>
            <p className="text-gray-600 text-lg md:text-xl">
              Where Pattern Creators meet Reliable Testers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 px-4">
            <button
              onClick={() => handleRoleSelect("tester")}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <UserCircle size={32} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  I am a Tester
                </h3>
                <p className="text-gray-600 mb-6">
                  Explore creative opportunities and elevate your crochet
                  journey. Apply now to access exclusive crochet patterns
                  tailored for testing and showcase your skills!
                </p>
                <Link to="/signup">
                  <div className="flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                    Get Started
                    <ArrowRight
                      size={20}
                      className="ml-2 invisible group-hover:visible transition-all"
                    />
                  </div>
                </Link>
              </div>
            </button>

            <button
              onClick={() => handleRoleSelect("creator")}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Building2 size={32} className="text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  I am a Creator
                </h3>
                <p className="text-gray-600 mb-6">
                  Unleash your creativity and share your unique designs with the
                  world. Apply now to connect with skilled testers and bring
                  your crochet patterns to life!
                </p>
                <Link to="/signup">
                  <div className="flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                    Get Started
                    <ArrowRight
                      size={20}
                      className="ml-2 invisible group-hover:visible transition-all"
                    />
                  </div>
                </Link>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
