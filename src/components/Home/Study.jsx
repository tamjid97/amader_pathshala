import React from "react";
import { BookOpenIcon, CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";

const Study = () => {
  const cards = [
    {
      title: "মুখস্ত নয়, বুঝে পড়া",
      description:
        "এখানে পড়াশোনা মানে শুধু বই পড়া নয়—বুঝে শেখা। প্রতিটি টপিক ধাপে ধাপে ব্যাখ্যা করা হয়, যাতে শিক্ষার্থীরা আত্মবিশ্বাসের সাথে নিজে নিজে চিন্তা করতে পারে।",
      color: "from-green-400 via-green-500 to-green-600",
      icon: <BookOpenIcon className="h-10 w-10 text-white" />,
      iconBg: "bg-green-500"
    },
    {
      title: "সাপ্তাহিক পরীক্ষা",
      description:
        "প্রতিটি সপ্তাহে পড়ানো বিষয়ের উপর সাপ্তাহিক পরীক্ষা নেওয়া হয়, যাতে শিক্ষার্থীরা নিজের অগ্রগতি নিজেই বুঝতে পারে এবং ভুলগুলো ঠিক করার সুযোগ পায়।",
      color: "from-blue-400 via-blue-500 to-blue-600",
      icon: <CheckCircleIcon className="h-10 w-10 text-white" />,
      iconBg: "bg-blue-500"
    },
    {
      title: "ব্যাকআপ ক্লাস",
      description:
        "ক্লাস মিস মানেই পিছিয়ে পড়া নয়। সপ্তাহে তিন দিন ব্যাকআপ ক্লাসের মাধ্যমে প্রতিটি টপিক আবার বুঝিয়ে দেওয়া হয়।",
      color: "from-purple-400 via-purple-500 to-purple-600",
      icon: <ClockIcon className="h-10 w-10 text-white" />,
      iconBg: "bg-purple-500"
    },
  ];

  return (
    <div className=" bg-green-50 py-16 px-6 flex flex-col items-center">
      <h1 className="text-4xl lg:text-5xl font-extrabold text-center text-green-900 mb-12">
        আমাদের অধ্যয়ন পদ্ধতি
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Icon */}
            <div className={`p-4 rounded-full mb-6 ${card.iconBg} shadow-lg`}>
              {card.icon}
            </div>

            {/* Title */}
            <h2
              className={`text-xl lg:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${card.color}`}
            >
              {card.title}
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-base lg:text-lg">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Study;
