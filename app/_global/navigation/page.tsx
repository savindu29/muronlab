import BloackLogo from "@/assets/blackLong.png";
import Image from "next/image";
import Link from "next/link";
import { SheetSide } from "./poup-menu";

export function Navbar() {
  return (
    <div className="fixed w-full z-50  ">
      <div className="w-full flex  justify-center items-center h-28 p-4  ">
      <div className="rounded-full w-full h-20 flex relative bg-white z-50 pt-5 max-w-[100rem] scroll-px-10">
       
       <div className="ml-10 lg:ml-20 ">
         <Link href="/" >
           <Image
             src={BloackLogo}
             alt="Picture of the author"
             width={150}
             className="cursor-pointer"
           />
         </Link>
       </div>

       {/* Contact Us Button */}
       <Link href="/contact-us">
         <div className="absolute top-5 py-2 px-4 rounded-full bg-black text-white right-20 lg:right-36 font-semibold hidden lg:block cursor-pointer">
           Contact Us
         </div>
       </Link>

       {/* Popup Menu */}
       <div className="absolute right-4 top-6 lg:right-16 lg:top-6 rounded-sm">
         <SheetSide />
       </div>
     </div>

      </div>
    </div>
  );
}
