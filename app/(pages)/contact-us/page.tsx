"use client"
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import FB from "@/assets/facebook.png";
import In from "@/assets/linkedin.png";
import Yt from "@/assets/youtube.png";
import Tw from "@/assets/twitter.png";
import Md from "@/assets/medium.png";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().optional(),
  message: z.string().optional(),
});


export default function ContactUs() {

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    // Handle form submission
  };
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });
  return (
   
    <div className="w-full flex items-center justify-center">
     <div className="max-w-[100rem] px-4 lg:px-0 w-full">
     <div className="text-center lg:text-left py-40 ">
        <div className="px-6  lg:px-8  mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <div className="lg:max-w-lg">
              <div>
                <div className="text-red-400 mb-4 font-medium"> Contact us </div>
                <div className="text-4xl font-semibold mb-20 lg:mb-4 ">
                  Let’s work together{" "}
                </div>
                <div
                  className={"h-1 w-40 bg-red-400 my-4 hidden lg:block"}
                ></div>
                <div className="my-12 leading-loose  text-center lg:text-left   text-zinc-600">
                  We would love to hear from you! Whether you have a question
                  about our services or want to learn more about how we can help
                  you with your project, we are here to assist you. Our team is
                  committed to providing you with the best possible service, and
                  we are always happy to help.
                </div>
              </div>
              
              <div className="relative pl-9 mt-10 z-0">
                <dt className=" font-medium text-gray-900 mt-6">
                  <PhoneIcon className="absolute left-1 top-0 h-5 w-5 text-red-400" />
                  Phone: [insert phone number]
                </dt>{" "}
                <dt className=" font-medium text-gray-900 mt-6">
                  <EnvelopeIcon className="absolute left-1 top-12 h-5 w-5 text-red-400" />
                  Email: [insert email address]
                </dt>{" "}
                <dt className=" font-medium text-gray-900 mt-6">
                  <MapPinIcon className="absolute left-1 top-24 h-5 w-5 text-red-400" />
                  Address: [insert your company's address]
                </dt>{" "}
              </div>
              
              <ul className={"mt-2 flex "}>
                <li>
                  <Image
                    src={FB}
                    alt="Picture of the author"
                    width={30}
                    className="mx-1 "
                  />
                </li>
                <li>
                  <Image
                    src={In}
                    alt="Picture of the author"
                    width={30}
                    className="mx-1 "
                  />
                </li>
                <li>
                  <Image
                    src={Tw}
                    alt="Picture of the author"
                    width={30}
                    className="mx-1 "
                  />
                </li>
                <li>
                  <Image
                    src={Yt}
                    alt="Picture of the author"
                    width={30}
                    className="mx-1 "
                  />
                </li>
                <li>
                  <Image
                    src={Md}
                    alt="Picture of the author"
                    width={30}
                    className="mx-auto "
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:pr-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto max-w-xl text-left mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <FormField
              name="firstName"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="lastName"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="company"
              control={form.control}
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Your company (optional)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="phoneNumber"
              control={form.control}
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Your phone number (optional)" type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="message"
              control={form.control}
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message (optional)"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-10">
            <Button type="submit" className="w-full bg-sky-950 rounded-full">
              Let's talk
            </Button>
          </div>
        </form>
      </Form>
    </div>
        </div>
      </div>

     </div>
    </div>
   
  
  );
}
