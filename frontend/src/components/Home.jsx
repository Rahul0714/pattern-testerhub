import { useState } from "react";
import {
  Search,
  MapPin,
  Clock,
  ChevronRight,
  ChevronLeft,
  TrendingUp,
  Building,
  Users,
  Star,
  Bell,
  User,
  LogOut,
  MessageSquare,
  Bookmark,
} from "lucide-react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const jobCategories = [
    { name: "Amigurumi", count: "1.2k", icon: "🧸" },
    { name: "Blankets", count: "856", icon: "🛏️" },
    { name: "Home Decor", count: "943", icon: "🖼️" },
    { name: "Garments", count: "677", icon: "👕" },
    { name: "Jewelry", count: "445", icon: "💍" },
    { name: "Accessories", count: "323", icon: "🎀" },
    { name: "Kitchen and Dining", count: "589", icon: "🍽️" },
    { name: "Seasonal Designs", count: "766", icon: "🎁" },
  ];

  const trendingJobs = [
    {
      title: "Crocheter",
      company: "XYZ",
      location: "Mumbai",
      salary: "₹12k - ₹15k",
      postedTime: "2 hours ago",
      applicants: 43,
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=TC",
    },
    {
      title: "Pattern Writer",
      company: "ABC",
      location: "Pune",
      salary: "₹13k - ₹16k",
      postedTime: "5 hours ago",
      applicants: 27,
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=IL",
    },
    {
      title: "Craft Instructor",
      company: "DesignMasters",
      location: "Remote",
      salary: "₹8k - ₹10k",
      postedTime: "1 day ago",
      applicants: 65,
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=DM",
    },
    {
      title: "Amigurumi Artist",
      company: "StitchCraft ",
      location: "Delhi",
      salary: "₹14k - ₹18k",
      postedTime: "3 days ago",
      applicants: 89,
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=DA",
    },
    {
      title: "Fasion Designer",
      company: "CloudScale",
      location: "Mumbai",
      salary: "₹12k - ₹15k",
      postedTime: "4 days ago",
      applicants: 34,
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=CS",
    },
  ];

  const featuredCompanies = [
    {
      name: "ABC",
      jobs: 156,
      rating: 4.8,
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=G",
    },
    {
      name: "XYZ",
      jobs: 132,
      rating: 4.7,
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=M",
    },
    {
      name: "CloudScale",
      jobs: 98,
      rating: 4.9,
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=A",
    },
    {
      name: "DesignMasters",
      jobs: 245,
      rating: 4.6,
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=AZ",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <a href="#" className="text-xl font-bold text-blue-600">
                Workboard
              </a>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-gray-900 hover:text-blue-600">
                  Find Work
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  Resources
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  Career Advice
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg"
                >
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                    alt="Profile"
                    className="w-8 h-8 rounded-full bg-gray-100"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    John Doe
                  </span>
                  <ChevronRight size={16} className="text-gray-400" />
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border">
                    <div className="px-4 py-2 border-b">
                      <p className="text-sm font-medium text-gray-900">
                        John Doe
                      </p>
                      <p className="text-sm text-gray-500">
                        john.doe@example.com
                      </p>
                    </div>
                    <div className="py-1">
                      <Link
                        to="/testerProfile"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <User size={16} />
                        View Profile
                      </Link>
                      <a
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <MessageSquare size={16} />
                        Messages
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <Bookmark size={16} />
                        Saved Jobs
                      </a>
                    </div>
                    <div className="border-t py-1">
                      <button className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
                        <LogOut size={16} />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Dream Work Today
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Explore over 100,000+ Works from top Creators
            </p>
            <div className="bg-white rounded-lg p-2 flex flex-wrap md:flex-nowrap gap-2 shadow-lg">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Pattern title or keyword"
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none"
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Location or Online Availability"
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none"
                />
                <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Popular Categories
            </h2>
            <div className="flex gap-2">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <ChevronLeft size={20} />
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {jobCategories.map((category) => (
              <div
                key={category.name}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} jobs</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <TrendingUp className="text-blue-600" />
              Trending Works
            </h2>
            <a
              href="#"
              className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
            >
              View all <ChevronRight size={16} />
            </a>
          </div>
          <div className="grid gap-4">
            {trendingJobs.map((job) => (
              <div
                key={job.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-12 h-12 rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Building size={16} />
                        {job.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </span>
                      {/* <span className="flex items-center gap-1">
                        <Briefcase size={16} />
                        {job.type}
                      </span> */}
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {job.postedTime}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-semibold">
                        {job.salary}
                      </span>
                      <span className="text-sm text-gray-500">
                        {job.applicants} applicants
                      </span>
                    </div>
                  </div>
                  <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Creator
            </h2>
            <a
              href="#"
              className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
            >
              View all <ChevronRight size={16} />
            </a>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {featuredCompanies.map((company) => (
              <div
                key={company.name}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-16 h-16 rounded-lg mb-4"
                />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {company.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span>{company.rating}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users size={16} />
                  <span>{company.jobs} positions available</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
