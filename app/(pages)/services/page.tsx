
import PersonImg from "@/assets/IMG_5642_3850d99d3d.jpg";
import { InfoCard } from "@/components/ui/service-card";
import Image from "next/image";
export default function ServicesPage() {
  return (
   
     <div className=" flex justify-center ">
     <div className="py-20 text-center lg:text-left pt-20 max-w-[100rem] w-full px-4 ">
       <div className="flex flex-col lg:flex-row items-center gap-8 mb-12 ">
         <div className="text-red-400  font-semibold text-xl lg:text-2xl">What we will Give you</div>
         <div>
           <div className="text-3xl font-semibold leading-tight mb-4 lg:mb-0 lg:w-2/3 text-sky-900">
           We help you identify, explore and respond to new opportunities.
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

       <div className="flex flex-col lg:flex-row items-center lg:items-stretch space-y-10 lg:space-y-0 py-20 ">
  {/* Image Section */}
  <div className="w-full lg:w-1/2 flex justify-center items-center">
    <div className="flex justify-center items-center h-full">
      <Image
        src={PersonImg}
        alt="Picture of the author"
        width={500}
        height={500}
        className="rounded-3xl shadow-lg object-cover lg:h-full lg:w-3/4"
      />
    </div>
  </div>

  {/* Content Section */}
  <div className="w-full lg:w-1/2 flex flex-col justify-center ">
    <div className="space-y-8 lg:space-y-12 ">
      {[
        {
          index: "01",
          title: "Web Applications Development",
          description:
            "Crafting dynamic and user-friendly web applications tailored to meet your business objectives.",
        },
        {
          index: "02",
          title: "Mobile Application Development",
          description:
            "Building cutting-edge mobile applications that enhance user experiences and meet industry standards.",
        },
        {
          index: "03",
          title: "Deployment and Maintenance",
          description:
            "Ensuring smooth deployment of applications and providing ongoing maintenance to keep your software up-to-date and secure.",
        },
        {
          index: "04",
          title: "Artificial Intelligence and Data Sciences",
          description:
            "Harnessing the power of AI to unlock new possibilities, automate processes, and make data-driven decisions. Deriving insights from data to drive informed business strategies and outcomes.",
        },
      ].map((item, index) => (
        <InfoCard title={item.title} description={item.description} index={item.index}/>
      ))}
    </div>
  </div>
</div>


     </div>
   </div>
  );
}
