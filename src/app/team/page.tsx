import HeroSection from "@/components/component-hero";
import Image from "next/image";

interface TeamMember {
  initials?: string;
  name: string;
  role?: string;
  image?: string;
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
    { name: "Dr Amah Williams", role: "Board Chair", image: "/amah_wills.jpg" },
    { name: "Pst Emmanuel Jones", role: "Board Member", image: "/jones2.jpg" },
    { name: "Dr (Mrs) Eno Attah", role: "Board Member", image: "/blankw.jpg" },
    // { name: "Mrs Jenneh Kormoh", role: "Board Member" },
    { name: "Pharm Eteyen Willie", role: "Board Member", image: "/eteyen_wills.jpg" },
    { name: "Dr Ukoima U", role: "Board Member", image: "/blankm.jpg" },
    { name: "Williams G. Kennedy", role: "Board Member" , image: "/blankm.jpg"},
  ],
  advisoryCommittee: [
    { name: "Mr. Emmanuel Ikule" , image: "/blankm.jpg"},
    { name: "Barr. Ekemini Ikpe" , image: "/blankm.jpg"},
  ],
  managementTeam: [
    { name: "Willie Akpan", role: "Executive Director", image: "/willie.jpg" },
    { name: "Lucky Udoekong", role: "Administrative Lead", image: "/lucky_U.jpg" },
    { name: "Itohowo Ekerete", role: "Programs Lead", image: "/itohowo.jpg" },
    { name: "Emem Julius", role: "Lead, Communications & Partnerships", image: "/emem.jpg" },
    { name: "Mbuotidem Ekarika", role: "Identity Management & Creative Lead", image: "/mb.jpg" },
  ],
};

const TeamMemberCard = ({
  name,
  role,
  image,
  bgColor = "bg-gray-50",
}: TeamMember & { bgColor?: string }) => (
  <div
    className={`${bgColor} p-6 rounded-lg text-center hover:shadow-md transition-shadow border border-gray-100`}
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
  </div>
);

const TeamSection = ({
  title,
  members,
  bgColor = "bg-white",
  cardBgColor = "bg-gray-50",
  columns = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
}: TeamSectionProps) => (
  <section className={`py-8 ${bgColor}`}>
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#892626] mb-4">{title}</h2>
        {title !== "" && <div className="w-20 h-1 bg-[#F08232] mx-auto"></div>}
      </div>
      <div className={`grid ${columns} gap-6 max-w-6xl mx-auto`}>
        {members.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            bgColor={cardBgColor}
          />
        ))}
      </div>
    </div>
  </section>
);

export default function TeamPage() {
  return (
    <>
      <HeroSection
        title="Our"
        title2="Team"
        tagline="Meet the dedicated individuals behind Reactivate Africa Foundation."
      />
      <div className="max-w-6xl mx-auto">
        <TeamSection
          title=""
          members={teamData.managementTeam}
          columns="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        />
        <TeamSection
          title="Board of Trustees"
          members={teamData.boardOfTrustees}
        />
        <TeamSection
          title="Advisory Committee"
          members={teamData.advisoryCommittee}
          bgColor="bg-gray-50"
          cardBgColor="bg-white"
          columns="grid-cols-1 sm:grid-cols-2 max-w-3xl"
        />
      </div>
    </>
  );
}
