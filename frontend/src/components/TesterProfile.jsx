import {
  User,
  MapPin,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";

export const TesterProfile = () => {
  const profile = {
    name: "John Doe",
    title: "Senior Crocheter",
    location: "Mumbai",
    email: "john.d@example.com",
    phone: "999999999",
    about:
      "Passionate crocheter with 5+ years of experience in design and crafting. Specialized in Amigurumi.",
    experience: [
      {
        company: "Design Maters",
        role: "Senior Crocheter",
        period: "2020 - Present",
      },
      {
        company: "ABC",
        role: "Craft Instructor",
        period: "2018 - 2020",
      },
    ],
    education: [
      {
        degree: "Professional Certificate in Amigurumi",
        year: "2018",
      },
      {
        degree: "Certification in Home Decor",
        year: "2016",
      },
    ],
    skills: [
      "Amigurumi",
      "Home Decor",
      "Garments",
      "Accessories",
      "Kitchen and Dining",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-16 h-16 text-gray-500" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
              <h2 className="text-xl text-gray-600 mb-4">{profile.title}</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4" /> {profile.location}
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-4 h-4" /> {profile.email}
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4" /> {profile.phone}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">About</h2>
          <p className="text-gray-600">{profile.about}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5" /> Experience
          </h2>
          <div className="space-y-6">
            {profile.experience.map((exp, index) => (
              <div
                key={index}
                className="border-b last:border-b-0 pb-4 last:pb-0"
              >
                <h3 className="font-bold text-lg">{exp.role}</h3>
                <div className="text-gray-600">{exp.company}</div>
                <div className="text-sm text-gray-500 mb-2">{exp.period}</div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5" /> Education
          </h2>
          <div className="space-y-4">
            {profile.education.map((edu, index) => (
              <div
                key={index}
                className="border-b last:border-b-0 pb-4 last:pb-0"
              >
                <h3 className="font-bold">{edu.degree}</h3>
                <div className="text-gray-600">{edu.school}</div>
                <div className="text-sm text-gray-500">{edu.year}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award className="w-5 h-5" /> Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
