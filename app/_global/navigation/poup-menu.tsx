import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import WhiteLogo from "@/assets/whiteLogo.png";
import Image from "next/image";

const SHEET_SIDES = ["top"] as const;
import { RiMenu4Fill } from "react-icons/ri";
import Link from "next/link";
import { X } from "lucide-react";

type SheetSide = (typeof SHEET_SIDES)[number];

interface NavItem {
  label: string;
  path: string;
}
export function SheetSide() {
  const navItems: NavItem[] = [
    { label: "About Us ", path: "/about-us" },
    { label: "Our Process", path: "/our-process" },
    { label: "Careers", path: "/careers" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <div className="">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <RiMenu4Fill size={25} className="cursor-pointer " />
          </SheetTrigger>

          <SheetContent side={side} className="bg-zinc-950 h-screen w-full ">
            <div className="w-full flex justify-center ">
              <div className="max-w-[100rem] w-full relative">
                <SheetHeader className="mt-0 lg:mt-6">
                  <SheetTitle>
                    <Link href="/">
                      <Image
                        src={WhiteLogo}
                        alt="Picture of the author cursor-pointer"
                        width={150}
                        className="ml-10 lg:ml-20"
                      />
                    </Link>
                  </SheetTitle>
                  <SheetDescription className="py-6"></SheetDescription>
                </SheetHeader>
                <Link href="/contact-us">
                  <div className="absolute top-3 py-2 px-4 rounded-full bg-white text-black right-20 lg:right-36 font-semibold hidden lg:block cursor-pointer">
                    Contact Us
                  </div>
                </Link>

                <div className="block lg:hidden  text-white flex-col h-full ">
                  <div className="flex flex-col mx-10">
                    {navItems.map((navItem, index) => (
                      <SheetClose key={index} asChild>
                        <Link href={navItem.path}>
                          <div className="my-4 font-semibold text-4xl cursor-pointer">
                            {navItem.label}
                          </div>
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block w-full  text-white text-5xl ">
                  <div className="grid grid-cols-2 ">
                    {navItems.map((navItem, index) => (
                      <SheetClose key={index} asChild>
                        <Link href={navItem.path}>
                          <div className="flex pl-40 items-center py-16 border border-zinc-700 hover:bg-zinc-900 duration-300 hover:cursor-pointer">
                            {navItem.label}
                          </div>
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>

                <SheetClose className="absolute lg:right-16 top-2 lg:top-5 right-5 rounded-sm ring-0 border-0">
                  <X className="h-6 w-6 text-white" />
                  <span className="sr-only">Close</span>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}