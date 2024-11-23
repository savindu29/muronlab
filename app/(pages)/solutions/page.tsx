import {
  CloudIcon,
  CommandLineIcon,
  ShieldCheckIcon,
  BriefcaseIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import { ArrowBigDown } from "lucide-react";

const features = [
  {
    icon: CloudIcon,
    title: "Flexible Cloud Solutions",
    name: "Cloud-based solutions that offer flexibility and cost-savings",
    description:
      "Benefit from cloud-based solutions that provide flexibility and cost-saving advantages.",
  },
  {
    icon: CommandLineIcon,
    title: "Custom Software Development",
    name: "Custom software development that meets your specific needs",
    description:
      "Get tailored software solutions designed to meet the unique requirements of your business.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Robust Cybersecurity",
    name: "Cybersecurity solutions that protect your business from threats",
    description:
      "Ensure the security of your business with robust cybersecurity solutions.",
  },
  {
    icon: BriefcaseIcon,
    title: "Strategic IT Consulting",
    name: "IT consulting and support that helps you stay ahead of the curve",
    description:
      "Receive strategic IT consulting and support to stay ahead in the ever-evolving digital landscape.",
  },
];

export default function SolutionsPage() {
  return (
    <div className=" flex justify-center ">
      <div className=" text-center lg:text-left py-20 max-w-[100rem] w-full px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12 ">
          <div className="text-red-400  font-semibold text-xl lg:text-2xl">What we will solve</div>
          <div>
            <div className="text-3xl font-semibold leading-tight mb-4 lg:mb-0 lg:w-2/3 text-sky-900">
              Bringing Innovative IT Solutions and Ideas to Your Business
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          <div className="w-full lg:w-[100rem] h-1 bg-stone-200"></div>
          <div className="mt-6 leading-loose text-center lg:text-left text-zinc-600">
            At µron labs, we offer cost-effective and scalable IT solutions that
            are tailored to your specific business needs. Our team of experts
            understands the importance of being agile and innovative, especially
            for startups, and we are committed to bringing the latest IT
            solutions and ideas to your business. We work closely with you to
            understand your unique challenges and develop innovative solutions
            that help you achieve your goals.
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${
                index === 1 ? "bg-red-400 text-white" : "bg-zinc-100 text-gray-700"
              } border rounded-xl py-6 px-4 mx-4 mb-6 transition-transform transform hover:scale-105 z-30`}
              data-aos="fade-up"
            >
              <div className="flex justify-center mb-6">
                <div className="rounded-full p-3">
                  <feature.icon
                    className={`h-10 w-10 ${
                      index === 1 ? "text-white" : "text-red-400"
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div
                className={`text-lg text-center mb-6 font-medium ${
                  index === 1 ? "text-white" : "text-gray-700"
                }`}
              >
                {feature.title}
              </div>
              <div
                className={`text-center ${
                  index === 1 ? "text-white" : "text-gray-700"
                }`}
              >
                {feature.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
