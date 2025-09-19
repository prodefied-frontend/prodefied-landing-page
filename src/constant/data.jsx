import {
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
} from "../assets/icons/index";
import { Group1, Group2, Group3, Group4 } from "../assets/icons";

export const countryCodes = [
  { name: "Nigeria", code: "NG", dial_code: "+234", flag: "🇳🇬" },
  { name: "United States", code: "US", dial_code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "GB", dial_code: "+44", flag: "🇬🇧" },
  { name: "Ghana", code: "GH", dial_code: "+233", flag: "🇬🇭" },
  { name: "Kenya", code: "KE", dial_code: "+254", flag: "🇰🇪" },
];

export const whyPartnerCard = [
  {
    id: 1,
    title: "Structured Training",
    text: "We offer immersive,real-world product training tailored to your team or audienc. Our learners don't just learn, they build.",
    img1: icon1,
    Timg1: "Run sponsored training cohorts or mini bootcamps",
    img2: icon2,
    Timg2: "Run sponsored training cohorts or mini bootcamps",
    img3: icon3,
    Timg3: "Run sponsored training cohorts or mini bootcamps",
  },
  {
    id: 2,
    title: "Personalised Mentorship",
    text: "Our 1-on-1 mentorship program pairs aspiring Product Managers with experienced professionals who've been where they are.",
    img1: icon4,
    Timg1: "Mentor or sponsor a PM seeking clarity and growth",
    img2: icon5,
    Timg2: "offer advisory roles to your team through our mentorship pipeline",
    img3: icon6,
    Timg3:
      "Support career switchers or early-career talents in building confidence",
  },
  {
    id: 3,
    title: "Stratgic Consultation",
    text: "We consult with companies and talent pipeline to close gaps and recommend aligned candidates.",
    img1: icon7,
    Timg1: "Access vetted Product Manager Talent trained through simulations",
    img2: icon8,
    Timg2: "Tap into product advisory, training, or evaluation support",
    img3: icon9,
    Timg3:
      "Build stronger teams,faster with Product Managers who've already done the work",
  },
];

export const contactItems = [
  {
    id: 1,
    img: Group4,
    title: "Address",
    text: "No.53 bla bla bla",
  },
  {
    id: 2,
    img: Group1,
    title: "Email",
    text: "Prodefied@gmail.com",
  },
  {
    id: 3,
    img: Group2,
    title: "Call Us",
    text: "+23408134094272",
  },
  {
    id: 4,
    img: Group3,
    title: "Working Hours",
    text: "Mon - Fri: 8am - 5pm",
  },
];

// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------

// CURRICULUM DATA
export const curriculum = [
  {
    weekNumber: "01",
    weekColor: "bg-[#FF9D00]", // Tailwind class for background color
    title: "PM Foundations & Product Development Lifecycle",
    sections: [
      {
        title: "Theory",
        items: [
          "What is a Product?",
          "What is Product Management?",
          "Role of a Product Manager vs Project/Program Manager",
          "The goal of Product Management",
          "Product Development Lifecycle",
        ],
      },
      {
        title: "Practical",
        items: ["Case Study tear down across the PLDC"],
      },
    ],
  },
  {
    weekNumber: "02",
    weekColor: "bg-[#FF9D00]",
    title: "Problem Discovery & Customer Research",
    sections: [
      {
        title: "Theory",
        items: [
          "Identifying problems as a PM",
          "Problem vs Solution perspective",
          "Who is a user vs a customer?",
          "What is a user need?",
          "Customer feedback & JTBD (Jobs to be Done) framework",
        ],
      },
      {
        title: "Practical",
        items: [
          "Conduct basic user research (surveys/interviews)",
          "Draft personas & problem statements.",
        ],
      },
    ],
  },
  {
    weekNumber: "03",
    weekColor: "bg-[#FF9D00]",
    title: "Product Documentation Basics (Early PRD)",
    sections: [
      {
        title: "Theory",
        items: [
          "PRD (Product Requirements Document) introduction",
          "Writing user stories & acceptance criteria",
          "Role of PRD in early alignment",
        ],
      },
      {
        title: "Practical",
        items: ["Draft a PRD"],
      },
    ],
  },
  {
    weekNumber: "04",
    weekColor: "bg-[#FF9D00]",
    title: "Market & Business Case",
    sections: [
      {
        title: "Theory",
        items: [
          "What is competitive analysis?",
          "SWOT framework",
          "Market sizing basics",
          "Intro to ROI, unit economics, customer acquisition cost   (CAC), customer lifetime value (CLV)",
        ],
      },
      {
        title: "Practical",
        items: [
          "Conduct competitive analysis for capstone.",
          "Draft mini business case (SWOT snapshot).",
        ],
      },
    ],
  },
  {
    weekNumber: "05",
    weekColor: "bg-[#FF9D00]",
    title: "Roadmaps & Stakeholder Alignment",
    sections: [
      {
        title: "Theory",
        items: [
          "What is a product roadmap?",
          "Roadmap formats & tools",
          "Prioritization frameworks: RICE, MoSCoW, Value vs Complexity",
        ],
      },
      {
        title: "Practical",
        items: [
          "Build roadmap for capstone project.",
          "Stakeholder Simulation: defend roadmap to peers acting as execs.",
        ],
      },
    ],
  },
  {
    weekNumber: "06",
    weekColor: "bg-[#FF9D00]",
    title: "Design Collaboration & Iterative PRD",
    sections: [
      {
        title: "Theory",
        items: [
          "Design thinking process",
          "UX & PM relationship",
          "Wireframes & userflows (Figma, FigJam basics)",
        ],
      },
      {
        title: "Practical",
        items: [
          "Create wireframes + userflows in Figma/FigJam.",
          "Update PRD with design inputs → PRD v2.",
        ],
      },
    ],
  },
  {
    weekNumber: "07",
    weekColor: "bg-[#FF9D00]",
    title: "MVP Strategy & Validation",
    sections: [
      {
        title: "Theory",
        items: [
          "What is an MVP?",
          "MVP types & examples",
          "Common pitfalls in MVP building",
          "Hypothesis testing & validation loops",
        ],
      },
      {
        title: "Practical",
        items: [
          "Define MVP scope for capstone project.",
          "Stakeholder Simulation: MVP pitch + defend scope.",
        ],
      },
    ],
  },
  {
    weekNumber: "08",
    weekColor: "bg-[#FF9D00]",
    title: "Agile Delivery & Team Collaboration",
    sections: [
      {
        title: "Theory",
        items: [
          "Agile principles",
          "Sprint rituals: backlog grooming, sprint planning, retrospectives",
          "Tools: Jira, ClickUp, Trello",
        ],
      },
      {
        title: "Practical",
        items: ["Simulate sprint planning for capstone MVP."],
      },
    ],
  },
  {
    weekNumber: "09",
    weekColor: "bg-[#FF9D00]",
    title: "Metrics, Analytics & Iteration",
    sections: [
      {
        title: "Theory",
        items: [
          "What are product metrics?",
          "North Star Metric & AARRR funnel (Acquisition, Activation, Retention, Referral, Revenue)",
          "Key KPIs: churn, CAC, CLV, MRR, NPS, CSAT",
        ],
      },
      {
        title: "Practical",
        items: ["Simulate sprint planning for capstone MVP."],
      },
    ],
  },
  {
    weekNumber: "10",
    weekColor: "bg-[#FF9D00]",
    title: "Launch, Post-Launch & Capstone Demo",
    sections: [
      {
        title: "Theory",
        items: [
          "Product launch planning (pre-launch, launch, post-launch)",
          "Stakeholder management in launch phases",
          "GTM (Go-to-Market) strategy & working with marketing teams",
          "Post-launch iteration & release notes",
        ],
      },
      {
        title: "Practical",
        items: [
          "Final presentation: PRD v3 + roadmap + MVP + metrics pitched as if to investors/executives.",
        ],
      },
      {
        title: "(Capstone Demo Day)",
        items: [
          "Final presentation: PRD v3 + roadmap + MVP + metrics pitched as if to investors/executives.",
          "Full Capstone Portfolio.",
        ],
      },
    ],
  },
];
