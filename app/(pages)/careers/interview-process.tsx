import { ReactNode } from "react";
import { FaChalkboardTeacher, FaPhoneAlt, FaTasks, FaUserAlt } from "react-icons/fa";

// StepCard component
const StepCard = ({ icon, title, description }:{icon:ReactNode,title:string,description:string}) => (
  <div className="flex flex-col items-center bg-zinc-50  border border-1 rounded-xl p-6 w-64 hover:scale-105 transition-all duration-300">
    <div className="text-gray-300 text-2xl">{icon}</div>
    <div className="mt-4 text-xl font-semibold text-gray-800">{title}</div>
    <div className="mt-4 text-gray-600">{description}</div>
  </div>
);

const InterviewProcess = () => {
  // Data array for the interview steps
  const steps = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone Screening",
      description: "Our team will screen your CV and give you a call if you're shortlisted for the next stage."
    },
    {
      icon: <FaUserAlt />,
      title: "First Interview",
      description: "Here we aim to get to know you better and help understand your expertise."
    },
    {
      icon: <FaTasks />,
      title: "Assessment",
      description: "Candidates will receive an assignment curated by our team leads."
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Final Interview",
      description: "One-on-one with senior management to assess you in-depth."
    }
  ];

  return (
    <div className="py-16 mt-16">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <div className="text-3xl font-semibold text-sky-900">
          Our Interview Process
        </div>
        <div className="mt-4 text-lg text-gray-600">
          We have built a simple and consistent 4-step process to evaluate whether we are the right fit for each other.
        </div>
        <div className="mt-12 flex flex-col items-center justify-center space-y-12 lg:space-y-0 lg:space-x-8 lg:flex-row">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

    
      </div>
    </div>
  );
};

export default InterviewProcess;
