import {
  BookOpen,
  Users,
  Lightbulb,
  Leaf,
  Sparkles,
  Handshake,
  Hand,
  Equal,
  Group
} from "lucide-react";
const impactPathways = [
  {
    title: "Educational Support",
    description: "We implement educational initiatives in collaboration with foundations, government agencies, institutions, and individuals to provide aid and support to underserved teenagers, enabling access to quality education and skill development for national growth.",
    icon: BookOpen
  },
  {
    title: "Supportive Social/Gender Ecosystem",
    description: "We create an inclusive ecosystem that supports the aspirations of young Africans, providing access to resources and networks to address prevalent academic and social challenges.",
    icon: Users
  },
  {
    title: "Social Innovation & Leadership Development",
    description: "We establish mentorship programs and social innovation initiatives that equip young people with essential skills, knowledge, and experiences to become successful entrepreneurs and change-driven leaders.",
    icon: Lightbulb
  },
  {
    title: "Sustainable Development",
    description: "We design and implement programs that contribute to achieving the United Nations' Sustainable Development Goals (SDGs).",
    icon: Leaf
  }
];
const coreValues = [
  {
    title: "Innovation",
    description: "We employ creative and forward-thinking approaches to achieve impactful results.",
    icon: Sparkles
  },
  {
    title: "Partnership",
    description: "We collaborate with individuals, organizations, and governments to maximize success in all our projects.",
    icon: Handshake
  },
  {
    title: "Respect",
    description: "We uphold professionalism and mutual respect in our engagements with partners, donors, and stakeholders.",
    icon: Hand
  },
  {
    title: "Inclusivity",
    description: "We promote equal opportunities, ensuring a level playing field for all.",
    icon: Equal
  },
  {
    title: "Teamwork",
    description: "We foster collaboration and synergy across all levels of our organization.",
    icon: Group
  }
];



const focusAreas = [
  "Education",
  "Gender & Social Support",
  "Entrepreneurship & Leadership",
  "Sustainable Development",
  "Youth Development"
];

const strategies = [
  "Campaigns & Advocacy",
  "Strategic Partnerships & Collaborations",
  "Training & Mentorship",
  "Community Engagement"
];
const programs = [
  {
    id: "sdg-talkfest",
    title: "INTERNATIONAL YOUTH SDGs TALKFEST",
    description:
      "Launched in 2023, the International Youth SDGs Talkfest is an annual gathering in commemoration of International Youth Day. The event brings together youth leaders, policymakers, and young scholars to explore strategies for advancing the United Nations Sustainable Development Goals through youth-led initiatives. The Talkfest also celebrates the outstanding contributions of young Africans in driving positive change within their communities.",
    objectivesTitle: "Key Objectives:",
    objectives: [
      "Recognize and harness youth potential for sustainable development.",
      "Increase awareness and action toward the SDGs.",
      "Foster collaboration and innovation among young change-makers.",
      "Empower youth with skills and resources to drive community transformation."
    ],
    images: [
      "/tf/tf.jpg",
      "/tf/tf1.jpg",
      "/tf/tf2.jpg",
      "/tf/tf3.jpg",
      "/tf/tf4.jpg",
      "/tf/tf5.jpg",
      "/tf/tf6.jpg",
      "/tf/tf7.jpg",
      "/tf/tf8.jpg",
      "/tf/tf9.jpg",
      "/tf/tf11.jpg",
      "/tf/tf12.jpg",
      "/tf/tf13.jpg",
      "/tf/tf14.jpg",
    ]
  },
  {
    id: "green-teens",
    title: "GREEN TEENS INITIATIVE",
    description:
      "A comprehensive social impact program addressing academic challenges, gender-based issues, and skill gaps among teenagers in vulnerable communities. The initiative provides a structured support system, fostering awareness of social issues, offering skill acquisition opportunities, scholarships, and mentorship, and facilitating learning aid to reduce school dropout rates.",
    objectivesTitle: "Program Objectives:",
    objectives: [
      "Promote academic inclusion through scholarships and welfare support.",
      "Educate teenagers on conscious living and avoiding social vices.",
      "Provide skill acquisition opportunities for self-reliance and career growth.",
      "Support teachers in public schools with professional development opportunities."
    ],
    images: [
      "/raf_talk.jpg",
      "/raf2.jpg"
    ]
  },
  {
    id: "sdg-connect",
    title: "SDG CONNECT",
    description:
      "SDG Connect is a flagship initiative committed to driving the United Nations Sustainable Development Goals (SDGs) in African communities over a five-year period ending in December 2029. The program leverages:",
    features: [
      "Monthly webinar series to educate individuals on the SDGs.",
      "Quarterly SDG Impact Challenges to encourage youth-led initiatives that support SDG implementation."
    ],
    objectivesTitle: "Impact Goals by 2029:",
    objectives: [
      "Mobilize at least 6,800 SDG action agents.",
      "Implement 210 tangible sustainability initiatives.",
      "Expand participation across multiple African countries."
    ],
    images: [
      "/raf2.jpg",
      "/raf1.jpg"
    ]
  },
  {
    id: "yealx-africa",
    title: "YOUTH ENTREPRENEURSHIP, ACADEMIC & LEADERSHIP EXCELLENCE (YEALX-AFRICA)",
    description:
      "YEALX-Africa is a platform fostering social innovation and entrepreneurship among young people, equipping them with the knowledge and skills to drive sustainable development. The program aims to:",
    objectives: [
      "Engage 1,000 young people annually in leadership, entrepreneurship, and education.",
      "Support youth-led ventures and economic growth.",
      "Recognize and award outstanding young entrepreneurs and leaders making a difference in their communities."
    ],
    images: [
      "/raf1.jpg",
      "/raf2.jpg"
    ]
  },
  {
    id: "changemakers",
    title: "RAF CHANGEMAKERS FELLOWSHIP",
    description:
      "The RAF Changemakers Fellowship is dedicated to promoting sustainable development by equipping young Africans with in-demand entrepreneurship and tech skills. Since 2019, we have partnered with reputable tech firms like Wedigraf Technologies to offer fully-funded programs that foster self-reliance and economic empowerment.",
    images: [
      "/raf1.jpg",
      "/raf2.jpg"
    ]
  }
];
const address = "10 Ebong Street, Off Wellington Bassey Way, Uyo - Nigeria "
const tagline = "Inspiring Youth-led Change Across Africa";
export {
  impactPathways,
  focusAreas,
  strategies,
  coreValues,
  programs,
  address,
  tagline
}