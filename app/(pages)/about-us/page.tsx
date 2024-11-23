import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Girl1 from "@/assets/young-woman-white-shirt-pointing-up.jpg";
import Girl2 from "@/assets/business-finance-employment-female-successful-entrepreneurs-concept-friendly-smiling-office-manager-greeting-new-coworker-businesswoman-welcome-clients-with-hand-wave-hold-laptop.jpg";
import Men1 from "@/assets/smiling-asian-man-using-tablet-computer.jpg";

import Image from "next/image";
import { Navbar } from "@/app/_global/navigation";
import ContactUs from "../contact-us/page";
import { AnimatedTestimonialsDemo } from "./slider";
import { Button } from "@/components/ui/button";

export default function Aboutus() {
  return (
    <div className="w-full flex items-center justify-center overflow-hidden">
      <div className="max-w-[100rem]  px-10 lg:px-16 mt-56 lg:mt-24 w-full ">
        <div className="flex flex-col lg:flex-row min-h-[70vh]">
          <div className="flex items-center w-full lg:w-1/3">
            <div className="w-full">
              <div className="text-5xl font-bold mb-6 ">
                Welcome to Muronlab's zone
              </div>
              <div className=" text-red-400 font-semibold text-lg">
                This is Our Story
              </div>
            </div>
          </div>
          <div className=" relative min-h-[50vh] w-full mt-10 lg:mt-0">
  {/* Girl1 Image */}
  <Image
    src={Girl1}
    alt="Picture of the author"
    width={200}
    height={200}
    className="absolute rounded-full top-0 right-1/2 sm:right-1/2 sm:top-10 sm:w-40 sm:h-40 md:right-1/4 md:top-10 lg:right-1/4 lg:top-10 lg:w-48 lg:h-48 xl:right-1/4 xl:top-10"
  />

  {/* Girl2 Image */}
  <Image
    src={Girl2}
    alt="Picture of the author"
    width={300}
    height={300}
    className="absolute rounded-full bottom-2/5 left-1/2 sm:left-1/4 sm:bottom-1/3 sm:w-48 sm:h-48 md:left-1/4 md:bottom-1/3 lg:left-20 lg:bottom-2/5 lg:w-64 lg:h-64 xl:left-20 xl:bottom-2/5 xl:w-72 xl:h-72"
  />

  {/* Men1 Image */}
  <Image
    src={Men1}
    alt="Picture of the author"
    width={200}
    height={200}
    className="absolute rounded-full bottom-0 lg:left-1/2"
  />
</div>

        </div>

        <div className="  text-center lg:text-left pb-40 pt-20">
          <div className=" mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className=" ">
              <div>
              <AnimatedTestimonialsDemo/>
              </div>
            </div>
            <div>
              <div className="">
                <div>
                  <div className="text-red-400 mb-4 font-medium"> About us </div>
                  <div className="text-4xl font-semibold mb-20 lg:mb-4 ">
                    Our strength is Collaboration{" "}
                  </div>
                  <div
                    className={"h-1 w-40 bg-red-400 my-4 hidden lg:block"}
                  ></div>
                  <div className="my-12 leading-loose  text-center lg:text-left   text-zinc-600">
                    Welcome to Musronlab, your partner in pioneering software
                    solutions. As a leading tech company, we are driven by a
                    passion for pushing boundaries and embracing the
                    extraordinary. Our focus is on crafting software that not
                    only meets needs but sparks joy.
                    <br /> <br />
                    At Muronlab, we're committed to rewriting the rules of the
                    software landscape. Our products showcase a fusion of
                    innovation and practicality, creating seamless experiences
                    that resonate. Our designs are a testament to the art of
                    possibility, where imagination meets expertise to inspire.
                    <br />
                    <br />
                    Dedication to excellence is our hallmark. Muronlab is
                    devoted to delivering solutions that set new standards,
                    always going above and beyond. Join us as we embark on a
                    journey to redefine what software can achieve.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-20">
            <div className="text-4xl font-bold text-zinc-800 py-12 ">
              Partner With Us
            </div>
            <div className="leading-loose text-zinc-700 lg:px-12 ">
              Discover the power of innovative solutions at MuronLab. Our team
              of experts is dedicated to solving your problems and helping your
              business thrive. From cutting-edge technology to strategic
              partnerships, we are committed to delivering exceptional results.
              Explore the possibilities with us and take your business to new
              heights.{" "}
            </div>
          </div>
          <div className="w-full flex justify-center pt-20">
          <Button size={"lg"} className="rounded-full bg-sky-950">Contact us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
