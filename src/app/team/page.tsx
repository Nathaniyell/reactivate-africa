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
}

const teamData = {
  boardOfTrustees: [
    { 
      name: "Dr Amah Williams", 
      role: "Board Chair", 
      image: "/amah_wills.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      linkedin: "#"
    },
    { 
      name: "Pst Emmanuel Jones", 
      role: "Board Member", 
      image: "/jones2.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      linkedin: "#"
    },
    { 
      name: "Pharm Eteyen Willie", 
      role: "Board Member", 
      image: "/eteyen_wills.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      linkedin: "#"
    },
    { 
      name: "Dr Ukoima U", 
      role: "Board Member", 
      image: "/blannk.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      linkedin: "#"
    },
    { 
      name: "Williams G. Kennedy", 
      role: "Board Member", 
      image: "/blannk.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      linkedin: "#"
    },
  ],
  advisoryCommittee: [
    { 
      name: "Mr. Emmanuel Ikule", 
      image: "/blannk.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      linkedin: "#"
    },
    { 
      name: "Barr. Ekemini Ikpe", 
      image: "/blannk.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      linkedin: "#"
    },
  ],
  managementTeam: [
    { 
      name: "Willie Akpan", 
      role: "Founder & Executive Director", 
      image: "/willie.jpg",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, blanditiis nisi? Id veniam velit similique necessitatibus itaque. Modi quae corporis voluptatem reprehenderit repellendus neque obcaecati repellat, odit enim sed ipsum, molestias beatae harum temporibus quibusdam sapiente ex saepe laudantium dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, blanditiis nisi? Id veniam velit similique necessitatibus itaque. Modi quae corporis voluptatem reprehenderit repellendus neque obcaecati repellat, odit enim sed ipsum, molestias beatae harum temporibus quibusdam sapiente ex saepe laudantium dicta?",
      linkedin: "#"
    },
    { 
      name: "Lucky Udoekong", 
      role: "Administrative Lead", 
      image: "/lucky_U.jpg",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, blanditiis nisi? Id veniam velit similique necessitatibus itaque. Modi quae corporis voluptatem reprehenderit repellendus neque obcaecati repellat, odit enim sed ipsum, molestias beatae harum temporibus quibusdam sapiente ex saepe laudantium dicta?",
      linkedin: "#"
    },
    { 
      name: "Itohowo Ekerete", 
      role: "Programs Lead", 
      image: "/itohowo.jpg",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, blanditiis nisi? Id veniam velit similique necessitatibus itaque. Modi quae corporis voluptatem reprehenderit repellendus neque obcaecati repellat, odit enim sed ipsum, molestias beatae harum temporibus quibusdam sapiente ex saepe laudantium dicta?",
      linkedin: "#"
    },
    { 
      name: "Emem Julius", 
      role: "Lead, Communications & Partnerships", 
      image: "/emem.jpg",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, blanditiis nisi? Id veniam velit similique necessitatibus itaque. Modi quae corporis voluptatem reprehenderit repellendus neque obcaecati repellat, odit enim sed ipsum, molestias beatae harum temporibus quibusdam sapiente ex saepe laudantium dicta?",
      linkedin: "#"
    },
    { 
      name: "Mbuotidem Ekarika", 
      role: "Identity Management & Creative Lead", 
      image: "/mb.jpg",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, blanditiis nisi? Id veniam velit similique necessitatibus itaque. Modi quae corporis voluptatem reprehenderit repellendus neque obcaecati repellat, odit enim sed ipsum, molestias beatae harum temporibus quibusdam sapiente ex saepe laudantium dicta?",
      linkedin: "#"
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
}: TeamMember & { bgColor?: string }) => {
  const [showBio, setShowBio] = useState(false);

  return (
    <div
      className={`${bgColor} p-6 rounded-lg text-center hover:shadow-md transition-shadow border border-gray-100 relative`}
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
            className="text-[#892626] text-sm font-medium hover:underline"
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
          <div className="prose prose-sm max-w-none">
            {showBio ? (
              <p className="text-gray-700">{bio}</p>
            ) : (
              <p className="text-gray-700 line-clamp-3">{bio}</p>
            )}
          </div>
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
            <button 
              onClick={() => setShowBio(!showBio)}
              className="text-[#892626] font-medium hover:underline"
            >
              {showBio ? 'Read Less' : 'Read More'}
            </button>
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
          columns="grid-cols-1 sm:grid-cols-2 max-w-3xl"
        />
      </div>
    </>
  );
}