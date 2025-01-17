import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  ChevronRight,
  ChevronLeft,
  TrendingUp,
  Building2,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";

export const Home = () => {
  const jobCategories = [
    { name: "Technology", count: "1.2k", icon: "💻" },
    { name: "Healthcare", count: "856", icon: "🏥" },
    { name: "Finance", count: "943", icon: "💰" },
    { name: "Education", count: "677", icon: "📚" },
    { name: "Marketing", count: "445", icon: "📢" },
    { name: "Design", count: "323", icon: "🎨" },
    { name: "Sales", count: "589", icon: "📊" },
    { name: "Engineering", count: "766", icon: "⚙️" },
  ];

  const trendingJobs = [
    {
      title: "Senior React Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $150k",
      postedTime: "2 hours ago",
      applicants: 43,
      logo: "/api/placeholder/50/50",
    },
    {
      title: "Product Manager",
      company: "InnovateLabs",
      location: "New York, NY",
      type: "Full-time",
      salary: "$130k - $160k",
      postedTime: "5 hours ago",
      applicants: 27,
      logo: "/api/placeholder/50/50",
    },
    {
      title: "UI/UX Designer",
      company: "DesignMasters",
      location: "Remote",
      type: "Contract",
      salary: "$80k - $100k",
      postedTime: "1 day ago",
      applicants: 65,
      logo: "/api/placeholder/50/50",
    },
    {
      title: "Data Scientist",
      company: "DataFlow Analytics",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$140k - $180k",
      postedTime: "3 days ago",
      applicants: 89,
      logo: "/api/placeholder/50/50",
    },
    {
      title: "DevOps Engineer",
      company: "CloudScale",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$125k - $155k",
      postedTime: "4 days ago",
      applicants: 34,
      logo: "/api/placeholder/50/50",
    },
  ];

  const featuredCompanies = [
    { name: "Google", jobs: 156, rating: 4.8, logo: "/api/placeholder/60/60" },
    {
      name: "Microsoft",
      jobs: 132,
      rating: 4.7,
      logo: "/api/placeholder/60/60",
    },
    { name: "Apple", jobs: 98, rating: 4.9, logo: "/api/placeholder/60/60" },
    { name: "Amazon", jobs: 245, rating: 4.6, logo: "/api/placeholder/60/60" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Dream Job Today
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Explore over 100,000+ jobs from top companies
            </p>

            <div className="bg-white rounded-lg p-2 flex flex-wrap md:flex-nowrap gap-2 shadow-lg">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none"
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Location"
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
              Trending Jobs
            </h2>
            <a
              href="#"
              className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
            >
              View all <ArrowRight size={16} />
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
                        <Building2 size={16} />
                        {job.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase size={16} />
                        {job.type}
                      </span>
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
              Featured Companies
            </h2>
            <a
              href="#"
              className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
            >
              View all <ArrowRight size={16} />
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
                  <span>{company.jobs} jobs opening</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
