import React from "react";
import {
  Building2,
  MapPin,
  Mail,
  Phone,
  Globe,
  Users,
  Briefcase,
  Trophy,
} from "lucide-react";

export const CreatorProfile = () => {
  const profile = {
    companyName: "TechCorp Solutions",
    industry: "Information Technology",
    size: "500-1000 employees",
    founded: "2010",
    location: "San Francisco, CA",
    website: "www.techcorpsolutions.com",
    email: "careers@techcorpsolutions.com",
    phone: "(555) 987-6543",
    about:
      "TechCorp Solutions is a leading technology company specializing in enterprise software solutions. We're committed to innovation and creating a dynamic work environment where talent thrives.",
    openPositions: [
      {
        title: "Senior Full Stack Developer",
        department: "Engineering",
        type: "Full-time",
        location: "San Francisco, CA",
        posted: "2 days ago",
      },
      {
        title: "Product Manager",
        department: "Product",
        type: "Full-time",
        location: "Remote",
        posted: "1 week ago",
      },
      {
        title: "UX Designer",
        department: "Design",
        type: "Contract",
        location: "Hybrid",
        posted: "3 days ago",
      },
    ],
    benefits: [
      "Competitive salary",
      "Health, dental, and vision insurance",
      "401(k) matching",
      "Unlimited PTO",
      "Remote work options",
      "Professional development budget",
    ],
    companyStats: [
      { label: "Founded", value: "2010" },
      { label: "Employees", value: "750+" },
      { label: "Offices", value: "5" },
      { label: "Countries", value: "3" },
    ],
    awards: [
      "Best Places to Work 2024",
      "Innovation Award 2023",
      "Top Tech Employer 2023",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
              <Building2 className="w-16 h-16 text-gray-500" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold mb-2">{profile.companyName}</h1>
              <h2 className="text-xl text-gray-600 mb-4">{profile.industry}</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4" /> {profile.location}
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Globe className="w-4 h-4" /> {profile.website}
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Users className="w-4 h-4" /> {profile.size}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {profile.companyStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 text-center"
            >
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">About Company</h2>
          <p className="text-gray-600">{profile.about}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5" /> Open Positions
          </h2>
          <div className="space-y-4">
            {profile.openPositions.map((position, index) => (
              <div
                key={index}
                className="border-b last:border-b-0 pb-4 last:pb-0"
              >
                <h3 className="font-bold text-lg">{position.title}</h3>
                <div className="text-gray-600">{position.department}</div>
                <div className="flex flex-wrap gap-4 mt-2">
                  <span className="text-sm text-gray-500">{position.type}</span>
                  <span className="text-sm text-gray-500">
                    {position.location}
                  </span>
                  <span className="text-sm text-gray-500">
                    {position.posted}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5" /> Awards & Recognition
          </h2>
          <div className="space-y-2">
            {profile.awards.map((award, index) => (
              <div key={index} className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span>{award}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> {profile.email}
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> {profile.phone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
