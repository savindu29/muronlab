
import Image from "next/image";
import FaceImage from "@/assets/363-3639776_wireframe-face-png-transparent-png-removebg.png";

import BackgroundImage from "@/assets/photo-1491895200222-0fc4a4c35e18.jpg";
import CardIamge1 from "@/assets/modern-equipped-computer-lab.jpg";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Card1 from "@/components/card/card-1";

import { AppleCardsCarouselDemo } from "./projects-slider";
import ServicesPage from "./services";
import SolutionsPage from "./solutions/page";


export default function Home() {
  return (
   
    <div className="w-full h-full "
    >
          <section className="w-full min-h-screen lg:min-h-[80vh] py-36 px-4 flex justify-center bg-cover bg-center bg-no-repeat "
         style={{
  backgroundImage: `linear-gradient(to bottom right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 50%), url(${BackgroundImage.src})`,
  backgroundSize: "cover",
  backgroundPosition: "top left",
}}

          >
            <div className="hidden lg:block max-w-[100rem] ">
              <div className=" flex h-full items-center  ">
               
                <div className="w-3/5 ">
                  <div className="text-7xl font-semibold mb-12 leading-tight text-sky-900">
                    <span className="text-red-400">QuantumFlow:</span> Powering
                    Tech Aspirations with Expert Solutions.
                  </div>
                  <div className="text-lg text-zinc-600 font-medium">
                    Enter Muronlab, where innovation meets functionality. Our
                    award-laden journey reflects a commitment to excellence in
                    design and technology. Explore limitless possibilities with
                    us.
                  </div>
                </div>

                {/* Right section (Image) */}
                <div className="w-2/5  flex justify-center items-center">
                  <Image
                    src={FaceImage}
                    alt="Picture of the author"
                    width={350}
                    height={350}
                    className="ml-10 lg:ml-20 bg-transparent"
                  />
                </div>
              </div>
            </div>
            <div className="block lg:hidden">
              <div className=" flex flex-col text-center h-full items-center  ">
                <Image
                  src={FaceImage}
                  alt="Picture of the author"
                  width={200}
                />
                <div className="">
                  <div className="text-4xl font-semibold mb-12 text-sky-900">
                    <span className="text-red-400">QuantumFlow:</span> Powering
                    Tech Aspirations with Expert Solutions.
                  </div>
                  <div className="text-base text-zinc-600">
                    Enter Muronlab, where innovation meets functionality. Our
                    award-laden journey reflects a commitment to excellence in
                    design and technology. Explore limitless possibilities with
                    us.
                  </div>
                </div>
                <Link href="/contact-us">
                <Button className="mt-10 rounded-full " size={"lg"}>Lest Meet <ArrowLongRightIcon/></Button>
                </Link>
               
              </div>
            </div>
           
          </section>
          <div className=" w-full  flex items-center justify-center">
            
            {/* <div className="max-w-[100rem] grid grid-cols-1 lg:grid-cols-2 gap-20">
              <Card1 title="Innovative Solutions" description="We provide innovative solutions to your tech problems" image={CardIamge1} />
              <Card1 title="Innovative Solutions" description="We provide innovative solutions to your tech problems" image={CardIamge1} />

            </div> */}
               
        </div>
        <section>
          <ServicesPage/>
          </section>
          
         <section>
          <SolutionsPage/>
          </section>
          <section>
          <AppleCardsCarouselDemo/>
          </section> 
     
        
          </div>

  );
}
