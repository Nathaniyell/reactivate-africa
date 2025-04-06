
const teamData = {
  boardOfTrustees: [
    { initials: "WK", name: "Williams G. Kennedy" },
    { initials: "WA", name: "Willie W. Akpan" },
    { initials: "EU", name: "Ememobong G. Udoma" },
    { initials: "UU", name: "Unyime A. Utin" },
    { initials: "EN", name: "Esther M. Ndon" },
    { initials: "EA", name: "Ememabasi Akpan" },
    { initials: "EJ", name: "Emmanuel Jones" },
    { initials: "AW", name: "Amah Williams PhD" },
    { initials: "EA", name: "Eno Attah PhD" },
    { initials: "JK", name: "Jenneh Kormoh" }
  ],
  advisoryCommittee: [
    { initials: "EI", name: "Mr. Emmanuel Ikule" },
    { initials: "EI", name: "Barr. Ekemini Ikpe" }
  ],
  managementTeam: [
    { role: "Executive Director" },
    { role: "Head, Administration & Finance" },
    { role: "Head, Programs" },
    { role: "Head, Communications & Partnerships" },
    { role: "Head, Volunteers" },
    { role: "Identity Management & Creative Lead" },
    { role: "Administrative Assistant" }
  ]
};

const TeamMemberCard = ({ initials, name, role, bgColor = "bg-gray-50" }) => (
  <div className={`${bgColor} p-6 rounded-lg text-center hover:shadow-md transition-shadow border border-gray-100`}>
    {initials && (
      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-gray-500 text-2xl font-medium">{initials}</span>
      </div>
    )}
    {name && <h4 className="text-lg font-semibold text-[#2E4700]">{name}</h4>}
    {role && <h4 className="text-lg font-semibold text-[#2E4700]">{role}</h4>}
  </div>
);

const TeamSection = ({ title, members, bgColor = "bg-white", cardBgColor = "bg-gray-50", columns = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" }) => (
  <section className={`py-16 ${bgColor}`}>
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#2E4700] mb-4">{title}</h2>
        <div className="w-20 h-1 bg-[#F08232] mx-auto"></div>
      </div>
      <div className={`grid ${columns} gap-6 max-w-6xl mx-auto`}>
        {members.map((member, index) => (
          <TeamMemberCard 
            key={index}
            initials={member.initials}
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
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="bg-[#2E4700] text-white py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Team</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-100">
            Meet the dedicated individuals behind Reactivate Africa Foundation.
          </p>
        </div>
      </section>

      {/* Board of Trustees Section */}
      <TeamSection 
        title="Board of Trustees" 
        members={teamData.boardOfTrustees} 
      />

      {/* Advisory Committee Section */}
      <TeamSection 
        title="Advisory Committee" 
        members={teamData.advisoryCommittee}
        bgColor="bg-gray-50"
        cardBgColor="bg-white"
        columns="grid-cols-1 sm:grid-cols-2 max-w-3xl"
      />

      {/* Management Team Section */}
      <TeamSection 
        title="Management Team" 
        members={teamData.managementTeam}
        columns="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      />
    </div>
  );
}