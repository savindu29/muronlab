"use client";

import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-white overflow-hidden  ">
      <div className="container mx-auto m-0 py-12 space-y-8 px-4">
        {/* Footer Top Section */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-0 relative">
          {/* CTA Section */}
          <div className="flex-1 text-center lg:text-left space-y-4 bg-red-400 px-12 py-16 text-white rounded-3xl">
            <div className="text-3xl lg:text-4xl font-semibold ">
              Contact Us for Legal Assistance
            </div>
            <div className=" text-lg">
              Experienced lawyers ready to fight for your rights
            </div>
            <div className="flex justify-center lg:justify-start gap-4">
              <Button variant="default" className="bg-sky-950 text-white rounded-full">
                Our areas of Law
              </Button>
              <Button variant="outline" className="text-zinc-800 rounded-full">
                New successes →
              </Button>
            </div>
          </div>
          {/* Image Section */}
         
{/*       
             <Image
        src={ManImage}
        alt="Picture of the author"
        
        height={400}
        className="rounded-lg absolute right-0 bottom-0 "
      /> */}
          </div>
     

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-zinc-600 text-sm pt-10 text-center lg:text-left px-10">
  <div>
    <div className="text-zinc-800 font-semibold mb-4">Useful Links</div>
    <ul className="space-y-2">
      <li>About Us</li>
      <li>Contact Us</li>
      <li>FAQs</li>
      <li>Terms of Service</li>
      <li>Privacy Policy</li>
    </ul>
  </div>
  <div>
    <div className="text-zinc-800 font-semibold mb-4">Careers</div>
    <ul className="space-y-2">
      <li>Blog</li>
      <li>Press</li>
      <li>Partnerships</li>
      <li>Support</li>
      <li>Help Center</li>
    </ul>
  </div>

</div>


        {/* Footer Bottom Section */}
        <div className="flex flex-col lg:flex-row  items-center justify-between text-center lg:text-left text-zinc-600 space-y-4 lg:space-y-0 border-t border-gray-300 pt-8">
          <div>© 2024 Mingers. All rights reserved.</div>
          <div className="flex space-x-4 ">
            <a href="#" className="hover:text-zinc-800">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-800">
              Terms of Service
            </a>
            <a href="#" className="hover:text-zinc-800">
              Cookie Policy
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
