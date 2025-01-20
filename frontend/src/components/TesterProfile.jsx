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
    name: "Sarah Johnson",
    title: "Senior Software Developer",
    location: "San Francisco, CA",
    email: "sarah.j@example.com",
    phone: "(555) 123-4567",
    about:
      "Passionate software developer with 5+ years of experience in full-stack development. Specialized in React, Node.js, and cloud technologies.",
    experience: [
      {
        company: "Tech Solutions Inc.",
        role: "Senior Software Developer",
        period: "2020 - Present",
        description:
          "Lead developer for enterprise web applications, managing team of 5 developers",
      },
      {
        company: "StartupCo",
        role: "Software Developer",
        period: "2018 - 2020",
        description: "Full-stack development using React and Node.js",
      },
    ],
    education: [
      {
        school: "University of Technology",
        degree: "Master's in Computer Science",
        year: "2018",
      },
      {
        school: "State University",
        degree: "Bachelor's in Software Engineering",
        year: "2016",
      },
    ],
    skills: [
      "React",
      "Node.js",
      "Python",
      "AWS",
      "Docker",
      "GraphQL",
      "TypeScript",
      "Agile",
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
