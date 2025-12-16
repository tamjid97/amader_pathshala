import React from "react";
import sir from "../../assets/462133254_1046311946972314_2939793844339582756_n.jpg";

const SirDEtals = () => {
  const profile = {
    img: sir,
    name: "সরফরাজ ইসলাম",
    title: "বায়োলজি শিক্ষক / আমাদের পাঠশালা",
    email: "awlad@example.com",
    phone: "+880123456789",
    address: "খুলনা, বাংলাদেশ",
    personalInfo: [
      { label: "বয়স", value: "৩৫ বছর" },
      { label: "লিঙ্গ", value: "পুরুষ" },
      { label: "অভিজ্ঞতা", value: "১০ বছর" },
    ],
    education: [
      {
        degree: "M.Sc. in Biology",
        major: "Biological Science",
        institute: "ঢাকা বিশ্ববিদ্যালয়",
        year: 2015,
        gpa: "4.0/4.0",
      },
      {
        degree: "B.Sc. in Biology",
        major: "Biological Science",
        institute: "ঢাকা বিশ্ববিদ্যালয়",
        year: 2012,
        gpa: "3.85/4.0",
      },
    ],
    workExperience: [
      {
        institution: "এবিসি বিশ্ববিদ্যালয়",
        role: "Senior Lecturer",
        duration: "2018-বর্তমান",
        achievements:
          "স্নাতক পর্যায়ের Biology ক্লাস নিয়ন্ত্রণ, শিক্ষার্থীদের মেন্টরিং, ওয়ার্কশপ পরিচালনা।",
      },
      {
        institution: "এক্সওয়াইজেড কলেজ",
        role: "Lecturer",
        duration: "2015-2018",
        achievements:
          "প্রকল্প ভিত্তিক ক্লাস পরিচালনা এবং শিক্ষার্থীদের গাইড।",
      },
    ],
    studentMessage:
      "প্রিয় শিক্ষার্থী, নিয়মিত অধ্যয়ন করো, প্রশ্ন করতে ভয় পেও না। ধৈর্য্য ধরলে সব সম্ভব।",
  };

  const Section = ({ title, children }) => (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-3 border-b-2 border-green-500 w-fit pb-1">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );

  return (
    <div className=" flex justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full p-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <img
            src={profile.img}
            alt="Teacher"
            className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-green-500 shadow-xl"
          />
          <h1 className="text-4xl font-bold">{profile.name}</h1>
          <p className="text-xl text-gray-600">{profile.title}</p>
          <p className="text-gray-600">{profile.email} | {profile.phone}</p>
          <p className="text-gray-600">{profile.address}</p>
        </div>

        {/* Personal Info */}
        <Section title="ব্যক্তিগত তথ্য">
          <ul className="list-disc list-inside text-gray-700">
            {profile.personalInfo.map((info, idx) => (
              <li key={idx}>
                <strong>{info.label}:</strong> {info.value}
              </li>
            ))}
          </ul>
        </Section>

        {/* Education */}
        <Section title="শিক্ষাগত যোগ্যতা">
          <ul className="list-disc list-inside text-gray-700">
            {profile.education.map((edu, idx) => (
              <li key={idx}>
                <strong>{edu.degree}</strong> - {edu.major}, {edu.institute} ({edu.year}) | GPA: {edu.gpa}
              </li>
            ))}
          </ul>
        </Section>

        {/* Work Experience */}
        <Section title="কর্মসংস্থান">
          <ul className="list-disc list-inside text-gray-700">
            {profile.workExperience.map((work, idx) => (
              <li key={idx}>
                <strong>{work.institution}</strong> - {work.role} ({work.duration})<br />
                <span className="text-gray-600 ml-2">{work.achievements}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Student Message */}
        <Section title="শিক্ষার্থীদের জন্য বার্তা">
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <p className="text-gray-700 italic">{profile.studentMessage}</p>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default SirDEtals;
