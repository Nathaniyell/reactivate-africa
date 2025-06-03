"use client"
import HeroSection from "@/components/component-hero";
import { tagline } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

interface TeamMember {
  initials?: string;
  name: string;
  role?: string;
  image?: string;
  bio?: string;
  linkedin?: string;
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
  bgColor?: string;
  cardBgColor?: string;
  columns?: string;
  borderColor?: string;
}

const teamData = {
  boardOfTrustees: [
    { 
      name: "Dr Amah Williams", 
      role: "Board Chair", 
      image: "/amah_wills.jpg",
      bio: "",
      linkedin: "#"
    },
    { 
      name: "Pst Emmanuel Jones", 
      role: "Board Member", 
      image: "/jones2.jpg",
      bio: "",
      linkedin: "#"
    },
    { 
      name: "Pharm Eteyen Willie", 
      role: "Board Member", 
      image: "/eteyen_wills.jpg",
      bio: "",
      linkedin: "#"
    },
    { 
      name: "Dr Ukoima U", 
      role: "Board Member", 
      image: "/blannk.jpg",
      bio: "",
      linkedin: "#"
    },
    { 
      name: "Williams G. Kennedy", 
      role: "Board Member", 
      image: "/blannk.jpg",
      bio: "",
      linkedin: "#"
    },
    { 
      name: "Jenneh Kormoh", 
      role: "Board Member", 
      image: "/jenneh2.jpg",
      bio: "",
      linkedin: "#"
    },
  ],
  advisoryCommittee: [
    { 
      name: "Mr. Emmanuel Ikule", 
      image: "/blannk.jpg",
      bio: "",
      linkedin: "#"
    },
    { 
      name: "Barr. Ekemini Ikpe", 
      image: "/blannk.jpg",
      bio: "",
      linkedin: "#"
    },
  ],
  managementTeam: [
    { 
      name: "Willie Akpan", 
      role: "Founder & Executive Director", 
      image: "/willie.jpg",
      bio: "Willie Akpan is the visionary founder of Reactivate Africa and a dedicated leader in the fields of project management, entrepreneurship, brand consulting, and administrative coordination. With extensive experience in driving sustainable development initiatives across diverse sectors, Willie is deeply committed to creating a society where opportunities for growth are accessible to all, particularly the youth. \nHe holds certifications in Leadership and Sustainable Development, equipping him with the expertise to lead and contribute meaningfully to development-driven projects. Willie is recognized as an SDG Advocate by the UN Sustainable Development Solutions Network (UN-SDSN) Nigeria and has served as an Honorary SDG Ambassador with the Unity of Nations Action for Climate Change Council (UNAccc). \nIn addition to his role at Reactivate Africa, Willie serves as the Programmes Coordinator, Nigeria for the Jones Foundation, a UK-based NGO dedicated to empowering leaders and entrepreneurs globally. Passionate about social innovation and sustainable development, Willie actively collaborates with individuals and organizations to amplify his impact. \nA strong advocate for Africa's transformation, he inspires others with the mantra #InspireTheZeal and #ForTheAfricaWeWant, reflecting his deep belief that Africa can fully realize its potential when the right aspirations and energies are ignited.",
      linkedin: "https://www.linkedin.com/in/willie-akpan-17b720218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    { 
      name: "Lucky Udoekong", 
      role: "Administrative Lead", 
      image: "/lucky_U.jpg",
      bio: "Lucky Udoekong is a proficient ICT specialist with a strong focus on Microsoft technologies and online scriptwriting, Lucky combines technical expertise with a solid background in finance and administration. \nHe holds a Higher National Diploma (HND) in Accounting and is an ICAN-certified Technician. As a practicing accountant, he brings analytical rigor and financial management skills to his professional pursuits. \nLucky's career is marked by a commitment to excellence and a passion for technology. He has honed his skills in various roles, including as a Microsoft Certified Trainer (MCT) and a Microsoft Certified Professional (MCP). His dedication to continuous learning and professional development is evident in his certifications and training in diverse areas, including project management, digital marketing, and business analysis. \nAs an advocate for youth empowerment, Lucky actively engages in initiatives that promote education and skill development. He is a member of the National Association of Computer Science Students (NACOSS) and the Institute of Chartered Accountants of Nigeria (ICAN). \nLucky is the Founder and Chief Executive Officer of Luckzo Digital Technologies, a dynamic enterprise specializing in digital solutions and technology services. His leadership extends beyond business; he also serves as the Dean of the Elite Brothers Family (EBF), a social group committed to excellence and the promotion of brotherhood. \nLucky Udoekong is passionate about leveraging his skills in technology, finance, and leadership to drive innovation, empower others, and contribute positively to society.",
      linkedin: " https://www.linkedin.com/in/lucky-udoekong-b7a35530b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    { 
      name: "Itohowo Ekerete", 
      role: "Programs Lead", 
      image: "/itohowo.jpg",
      bio: "Itohowo Ekerete is a Project and Programs Manager who specializes in delivering projects on time, within budget, and tailored to meet unique client needs. With a keen eye for detail and a passion for impactful communication, she brings both precision and creativity to every project she leads. Known for her commitment to excellence and impact, Itohowo consistently leaves a strong trail of successful initiatives. \nIn 2024 she joined The Socialstar Initiative as her Programs Associate and The Content Academy in 2025 as a Programs Associate.\n She currently serves as the Head of Programs at Reactivate Africa, where she has over three years of experience designing and managing impact-driven programs. Her portfolio includes leading digital skills training, youth engagement initiatives, conferences, and community events. Her strengths lie in results-oriented execution, stakeholder coordination, and team-driven leadership, ensuring the smooth delivery of project outcomes.",
      linkedin: "linkedin.com/in/itohowo-ekerete-7b3780200"
    },
    { 
      name: "Emem Julius", 
      role: "Lead, Communications & Partnerships", 
      image: "/emem.jpg",
      bio: "",
      linkedin: "#"
    },
    { 
      name: "Mbuotidem Ekarika", 
      role: "Identity Management & Creative Lead", 
      image: "/mb.jpg",
      bio: "Mboutidem Gibson is a seasoned graphic designer, brand strategist, and design educator. He is the founder of Kedy Grafix and Oltrix Digispace, and currently serves as the Brand Identity Manager for Reactivate Africa Foundation. With a passion for bold creativity, innovation, and empowerment, Mbuotidem combines artistic excellence with strategic insight to build impactful brand identity that inspires and showcases true brand interpretations.",
      linkedin: "https://www.linkedin.com/in/mboutidem-gibson-157868253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
  ],
};

const TeamMemberCard = ({
  name,
  role,
  image,
  bio,
  linkedin,
  bgColor = "bg-gray-50",
  borderColor = "border-gray-100",
}: TeamMember & { bgColor?: string, borderColor?: string }) => {
  const [showBio, setShowBio] = useState(false);

  return (
    <div
      className={`${bgColor} p-6 rounded-lg text-center hover:shadow-md transition-shadow !border-2 ${borderColor} relative`}
    >
      <div className="w-64 h-64 rounded-full mx-auto mb-4 overflow-hidden border border-gray-200 relative">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#F5F5F5] flex items-center justify-center">
            <span className="text-[#892626] text-xl font-semibold">
              {name?.split(" ").map((n) => n[0]).join("")}
            </span>
          </div>
        )}
      </div>
      {name && <h4 className="text-lg font-semibold text-black">{name}</h4>}
      {role && <p className="text-sm text-[#F08232] mt-1">{role}</p>}
      
      <div className="mt-4 flex justify-center space-x-4">
        {linkedin && (
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#0077B5] hover:text-[#005582]"
          >
            <FaLinkedin size={20} />
          </a>
        )}
        {bio && (
          <button 
            onClick={() => setShowBio(!showBio)}
            className="text-[#892626] text-sm font-medium hover:underline cursor-pointer"
          >
            {showBio ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
      
      {showBio && bio && (
        <div className="mt-4 text-sm text-gray-600 text-left">
          {bio}
        </div>
      )}
    </div>
  );
};

const ExecutiveDirectorCard = ({
  name,
  role,
  image,
  bio,
  linkedin,
}: TeamMember) => {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="bg-white p-8 rounded-lg shadow max-w-4xl mx-auto mb-12 border border-gray-200">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#892626] relative flex-shrink-0">
          <Image
            src={image || "/blannk.jpg"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="text-left">
          <h3 className="text-2xl font-bold text-[#892626]">{name}</h3>
          <p className="text-lg text-[#F08232] mb-4">{role}</p>
          {bio && (
            <div className="prose prose-sm max-w-none">
              {showBio ? (
                <p className="text-gray-700">{bio}</p>
              ) : (
                <p className="text-gray-700 line-clamp-3">{bio}</p>
              )}
            </div>
          )}
          <div className="mt-4 flex items-center space-x-4">
            {linkedin && (
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0077B5] hover:text-[#005582]"
              >
                <FaLinkedin size={24} />
              </a>
            )}
            {bio && (
              <button 
                onClick={() => setShowBio(!showBio)}
                className="text-[#892626] font-medium hover:underline"
              >
                {showBio ? 'Read Less' : 'Read More'}
              </button>
            )}
          
            {/* <button 
              onClick={() => setShowBio(!showBio)}
              className="text-[#892626] font-medium hover:underline"
            >
              {showBio ? 'Read Less' : 'Read More'}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamSection = ({
  title,
  members,
  bgColor = "bg-white",
  cardBgColor = "bg-gray-50",
  columns = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
}: TeamSectionProps) => (
  <section className={`py-8 ${bgColor}`}>
    <div className="container mx-auto px-4">
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#892626] mb-4">{title}</h2>
          <div className="w-20 h-1 bg-[#F08232] mx-auto"></div>
        </div>
      )}
      <div className={`grid ${columns} gap-6 max-w-6xl mx-auto`}>
        {members.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            bio={member.bio}
            linkedin={member.linkedin}
            bgColor={cardBgColor}
          />
        ))}
      </div>
    </div>
  </section>
);

export default function TeamPage() {
  const [executiveDirector, ...otherManagement] = teamData.managementTeam;

  return (
    <>
      <HeroSection
        title="Our"
        title2="Team"
        backgroundImage="/raf1.jpg"
        tagline={tagline}
        tagline2="Meet the dedicated individuals behind Reactivate Africa Foundation."
      />
      <div className="max-w-6xl mx-auto">
        {/* Executive Director Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#892626] mb-4">Management Team</h2>
              <div className="w-20 h-1 bg-[#F08232] mx-auto"></div>
            </div>
            <ExecutiveDirectorCard {...executiveDirector} />
          </div>
        </section>

        {/* Management Team */}
        <TeamSection
          title=""
          members={otherManagement}
          bgColor="bg-white"
        />

        {/* Board of Trustees */}
        <TeamSection
          title="Board of Trustees"
          members={teamData.boardOfTrustees}
          bgColor="bg-gray-50"
        />

        {/* Advisory Committee */}
        <TeamSection
          title="Advisory Committee"
          members={teamData.advisoryCommittee}
          bgColor="bg-white"
          // borderColor="border-red-300"
          columns="grid-cols-1 sm:grid-cols-2 max-w-3xl"
        />
      </div>
    </>
  );
}