"use client"
import TeamImage from "@/assets/software-programer-pointing-pencil-source-code-computer-screen-explaining-algorithm-coworker-standing-desk-programmers-discussing-online-cloud-computing-with-team.jpg";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import InterviewProcess from "./interview-process";

// Reusable Section Header Component
const SectionHeader = ({ title, subtitle }:{title:string,subtitle:string}) => (
  <div className="text-center my-16">
    <div className="text-3xl lg:text-5xl font-extrabold text-sky-900">{title}</div>
    <div className="mt-4 text-lg text-gray-600">{subtitle}</div>
  </div>
);

interface JobListingProps {
    title: string;
    description: string;
    location: string;
    experience: string;
    category: string;
    requirements: string[];
    benefits: string[];
    fullDescription: string;
  }
// Reusable Job Listing Component
const JobListing: React.FC<JobListingProps> = ({
    title,
    description,
    location,
    experience,
    category,
    requirements,
    benefits,
    fullDescription
  }) => (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between h-[40vh] transition-transform transform hover:scale-105 border border-1">
      <div>
        <div className="text-xl font-semibold text-gray-800">{title}</div>
        <div className="mt-4 text-gray-600">{description}</div>
        <div className="mt-4 text-gray-500">{category}</div>
        <div className="mt-2 text-gray-500">Location: {location}</div>
        <div className="mt-2 text-gray-500">Experience: {experience}</div>
      </div>
  
      {/* See Job Button (opens dialog) */}
      <Dialog >
        <DialogTrigger asChild>
          <Button className="mt-auto w-full bg-sky-950 text-white hover:bg-sky-700 rounded-md">
            See Job Details
          </Button>
        </DialogTrigger>
  
        <DialogContent className="p-8  bg-gray-50 rounded-lg overflow-y-scroll max-h-[70vh]" >

          <DialogHeader className=" text-sky-900 px-6">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
          {category} | {location} | {experience}
          </DialogDescription>
        </DialogHeader>
  
          <div className="px-6">
            {/* Full Job Description */}
            <div className="text-lg font-semibold text-gray-800 mt-4">Job Description</div>
            <div className="mt-2 text-gray-700">{fullDescription}</div>
  
            {/* Key Responsibilities */}
            <div className="text-lg font-semibold text-gray-800 mt-6">Key Responsibilities</div>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
  
            {/* Requirements */}
            <div className="text-lg font-semibold text-gray-800 mt-6">Requirements</div>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
  
            {/* Benefits */}
            <div className="text-lg font-semibold text-gray-800 mt-6">Benefits</div>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
  
         
     
        </DialogContent>
      </Dialog>
    </div>
  );
const CareersPage = () => {

  // Job listings array with more detailed information
  const jobListings = [
    {
      title: "Software Engineer",
      description: "Full-time position in our development team. Work on exciting projects with cutting-edge technology.",
      location: "Remote",
      experience: "2+ years",
      category: "Software Engineer",
      requirements: [
        "Proficiency in JavaScript, TypeScript, or Python.",
        "Experience with modern web frameworks (React, Vue, Angular).",
        "Solid understanding of algorithms and data structures.",
        "Experience with REST APIs and cloud technologies."
      ],
      benefits: [
        "Competitive salary",
        "Health and dental insurance",
        "Flexible work hours",
        "Remote work opportunities"
      ],
      fullDescription: "As a Software Engineer, you will work on innovative projects, develop scalable solutions, and collaborate with cross-functional teams to create high-quality software products. We are looking for someone passionate about coding, problem-solving, and contributing to the growth of our technology stack."
    },
    {
      title: "Product Manager",
      description: "Join our team to help shape the future of our products. Lead projects and drive innovation.",
      location: "New York, NY",
      experience: "3+ years",
      category: "Product Manager",
      requirements: [
        "Experience managing product life cycles from concept to launch.",
        "Strong understanding of market research and user testing.",
        "Ability to collaborate with developers, designers, and stakeholders.",
        "Excellent communication and leadership skills."
      ],
      benefits: [
        "Attractive salary",
        "Stock options",
        "Generous PTO",
        "Professional development opportunities"
      ],
      fullDescription: "The Product Manager will be responsible for overseeing product development, managing the product roadmap, and aligning product strategies with business objectives. You will work closely with engineering, marketing, and design teams to ensure product success."
    },
    {
      title: "UX/UI Designer",
      description: "Design intuitive user experiences and help create visually stunning interfaces for our web and mobile applications.",
      location: "San Francisco, CA",
      experience: "2+ years",
      category: "Design",
      requirements: [
        "Proficiency in design tools like Sketch, Figma, or Adobe XD.",
        "Strong portfolio showcasing design work for mobile/web applications.",
        "Understanding of user-centered design principles.",
        "Experience in conducting user research and usability testing."
      ],
      benefits: [
        "Creative and collaborative work environment",
        "Health benefits",
        "Generous paid time off",
        "Opportunities for growth and advancement"
      ],
      fullDescription: "We are seeking a talented UX/UI Designer to join our design team. You will work on designing and improving user interfaces for our applications. Your role will involve creating wireframes, mockups, prototypes, and conducting user research to inform your designs."
    },
    {
      title: "AI Data Scientist",
      description: "Work with AI technologies and contribute to innovative solutions in data science.",
      location: "Remote",
      experience: "3+ years",
      category: "AI/Data Science",
      requirements: [
        "Strong experience with Python and machine learning frameworks (TensorFlow, PyTorch, etc.).",
        "Solid understanding of statistical analysis and data modeling.",
        "Experience with natural language processing (NLP) and deep learning.",
        "Experience in deploying machine learning models in production environments."
      ],
      benefits: [
        "Flexible work environment",
        "Collaborative team",
        "Health and wellness programs",
        "Access to cutting-edge AI projects"
      ],
      fullDescription: "As an AI Data Scientist, you will work on advanced AI and machine learning models. You will analyze complex data sets, create predictive models, and help shape the future of AI technology within the company."
    },
    {
      title: "QA Engineer",
      description: "Ensure the quality of our software products and improve testing processes.",
      location: "Chicago, IL",
      experience: "2+ years",
      category: "QA",
      requirements: [
        "Experience in manual and automated testing.",
        "Familiarity with testing frameworks and CI/CD pipelines.",
        "Strong attention to detail and problem-solving skills.",
        "Experience with bug tracking and reporting tools."
      ],
      benefits: [
        "Competitive compensation package",
        "Comprehensive benefits",
        "Work-life balance",
        "Career advancement opportunities"
      ],
      fullDescription: "As a QA Engineer, you will be responsible for testing and ensuring the quality of our software products. You will work closely with the development team to identify and resolve bugs, optimize testing processes, and ensure the final product meets the highest quality standards."
    },
  ];

  // Filter job listings based on search term and category
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtering the jobs based on searchTerm and selectedCategory
  const filteredJobs = jobListings.filter((job) => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "All" || job.category === selectedCategory)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-20 py-16 overflow-hidden">
      <div className="text-center mb-12">
        <div className="text-3xl lg:text-5xl font-extrabold text-sky-900">
          Join Our Team
        </div>
        <div className="mt-4 text-lg text-gray-600">
          We&apos;re looking for passionate individuals to join our innovative team.
        </div>
      </div>

      {/* Company Culture Section */}
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row gap-16 items-center justify-between">
        <div className="flex flex-col text-center lg:text-left max-w-xl">
          <div className="text-2xl font-semibold text-gray-800">
            Why Work With Us?
          </div>
          <div className="mt-4 text-lg text-gray-600">
            We believe in fostering a creative and inclusive work environment. Join us and be part of a team that values growth, collaboration, and innovation.
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] bg-gray-300 relative rounded-xl overflow-hidden">
          <Image
            src={TeamImage} // Example image path
            alt="Our Team"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>
      <SectionHeader 
    title="Current Openings"
    subtitle="Take the opportunity to join a team shaping the future of technology."
  />
<div className="flex flex-col lg:flex-row gap-4 items-center ">
 
  <Input 
    className="w-full lg:w-1/2 py-6"
    placeholder="Search job titles"
    value={searchTerm}
    
    onChange={(e) => setSearchTerm(e.target.value)}  // Update searchTerm on input change
  />
  <Select value={selectedCategory} onValueChange={setSelectedCategory}>  {/* Update selectedCategory */}
    <SelectTrigger className="w-full lg:w-1/3 rounded-full py-6">
      <SelectValue placeholder="Select Category" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem value="All">All</SelectItem>
        <SelectItem value="Software Engineer">Software Engineer</SelectItem>
        <SelectItem value="Product Manager">Product Manager</SelectItem>
        <SelectItem value="Design">Design</SelectItem>
        <SelectItem value="AI/Data Science">AI/Data Science</SelectItem>
        <SelectItem value="QA">QA</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</div>

{/* Job Listings Carousel */}
<div className="container mx-auto px-6 lg:px-20 mt-16">
  

  {/* Carousel Container */}
  <Carousel
    opts={{
      align: "start",
    }}
    className="w-full "
  >
    <CarouselContent>
      {filteredJobs.map((job, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 py-10 ">
          <JobListing title={job.title} description={job.description} location={job.location} 
          experience={job.experience} category={job.category} requirements={job.requirements} benefits={job.benefits} fullDescription={job.fullDescription}/>
        </CarouselItem>
      ))}
    </CarouselContent>

    {/* Carousel Controls */}
    <CarouselPrevious>
      <IoIosArrowBack />
    </CarouselPrevious>
    <CarouselNext>
      <IoIosArrowForward />
    </CarouselNext>
  </Carousel>
</div>
 {/* How to Apply Section */}
 <div className="bg-gray-100 py-16 mt-16">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-semibold text-sky-900">
            How to Apply
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ready to take the next step? Apply now by sending your resume and portfolio to <span className="font-semibold">careers@company.com</span>.
          </p>
        </div>
      </div>
  
      
      <InterviewProcess />
    </div>
  );
  
};

export default CareersPage;
