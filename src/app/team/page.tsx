import HeroSection from "@/components/component-hero";

interface TeamMember {
  initials?: string;
  name?: string;
  role?: string;
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
    { name: "Dr Amah Williams", role: "Board Chair" },
    { name: "Pst Emmanuel Jones", role: "Board Member" },
    { name: "Dr (Mrs) Eno Attah", role: "Board Member" },
    { name: "Mrs Jenneh Kormoh", role: "Board Member" },
    { name: "Pharm Eteyen Willie", role: "Board Member" },
    { name: "Dr Ukoima U", role: "Board Member" },
    { name: "Williams G. Kennedy", role: "Board Member" },
  ],
  advisoryCommittee: [
    { name: "Mr. Emmanuel Ikule" },
    { name: "Barr. Ekemini Ikpe" },
  ],
  managementTeam: [
    { name: "Willie Akpan", role: "Executive Director" },
    { name: "Lucky Udoekong", role: "Head, Administration & Finance" },
    { name: "Itohowo Ekerete", role: "Head, Programs" },
    { role: "Head, Communications & Partnerships" },
    { role: "Head, Volunteers" },
    { name: "Mbuotidem Ekarika", role: "Identity Management & Creative Lead" },
    { role: "Administrative Assistant" },
  ],
};

const TeamMemberCard = ({
  name,
  role,
  bgColor = "bg-gray-50",
}: TeamMember & { bgColor?: string }) => (
  <div
    className={`${bgColor} p-6 rounded-lg text-center hover:shadow-md transition-shadow border border-gray-100`}
  >
    <div className="w-20 h-20 bg-[#F5F5F5] rounded-full mx-auto mb-4 flex items-center justify-center">
      <span className="text-[#892626] text-xl font-semibold">
        {name?.split(" ").map((n) => n[0]).join("")}
      </span>
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
  <section className={`py-16 ${bgColor}`}>
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
        <TeamSection title="Board of Trustees" members={teamData.boardOfTrustees} />

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
