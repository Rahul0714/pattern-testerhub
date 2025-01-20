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
    companyName: "StitchCraft Designs",
    size: "500-1000 patterns",
    founded: "2010",
    location: "Mumbai",
    website: "www.stitchcraft.com",
    email: "careers@stitchcraft.com",
    phone: "9999999999",
    about:
      "StitchCraft Designs is a boutique design company specializing in the creation of innovative, stylish, and high-quality crochet patterns and products. Our mission is to blend creativity with craftsmanship, offering a wide range of crochet designs that appeal to crafters, fashion enthusiasts, and home decorators alike.",
    openPositions: [
      {
        title: "Crocheter",
        department: "Design",
        location: "Mumbai",
        posted: "2 days ago",
      },
      {
        title: "Craft Instructor",
        department: "Design",
        location: "Remote",
        posted: "1 week ago",
      },
      {
        title: "Amigurumi Artist",
        department: "Design",
        location: "Pune",
        posted: "3 days ago",
      },
    ],
    benefits: [
      "Competitive Pay",
      // "Health, dental, and vision insurance",
      // "401(k) matching",
      "Unlimited PTO",
      "Remote work options",
      "Professional development budget",
    ],
    companyStats: [
      { label: "Started", value: "2023" },
      { label: "Employees", value: "750+" },
      { label: "Offices", value: "5" },
      { label: "Countries", value: "3" },
    ],
    awards: ["Innovation Award 2023"],
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
                  <Briefcase className="w-4 h-4" /> {profile.size}
                </div>
              </div>
            </div>
          </div>
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
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5" /> Achievements
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
