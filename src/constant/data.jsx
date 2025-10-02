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

// =======================================================================================

  // ✅ Final Phases Data (with highlightColor)
  export const phases = [
    {
      phaseTitle: "Phase 1 Learning",
      highlightColor: "#F5FBB8", // ✅ background for "Learning"
      intro: "Welcome to your Learning",
      introDetails:
        "This is where your journey begins. In this stage, you'll build a strong foundation in Product Management concepts, tools, and practical skills. You'll also complete weekly assessments that help us track your progress",
      schedule: ["Tuesday at 7pm", "Thursday at 7pm"],
      howToJoin:
        "Click the 'Start Learning' button on the Portal at the scheduled time to access your live session",
      instructions: [
        "You must complete your Learning Phase assessment and required tasks during this stage",
        "Successful completion earns you a Learning Certificate",
        "Your certificate unlocks the next phase - Internship Phase",
      ],
      encouragement:
        "Stay consistent, participate actively, and enjoy the process, this is the first step towards your new career path",
      assessmentLink: "https://forms.gle/NtoKwGLD9tLHpFvy7",
    },
    {
      phaseTitle: "Phase 2 Internship",
      highlightColor: "#CCF6FF", // ✅ background for "Internship"
      intro: "Welcome to your Internship Phase",
      introDetails:
        "Now it's time to put everything you've learned into action. During this stage, you'll be assigned to real projects, collaborating with peers and gaining valuable hands-on experience. Details about your internship placement and group assignment will be shared with you directly via email. Check your inbox regularly to stay updated.",
      instructions: [
        "You must complete your Internship Assessment and submit all required deliverables",
        "Successful completion earns you an Internship Certificate",
        "Your certificate unlocks the Career Acceleration Phase",
      ],
      encouragement:
        "This is your opportunity to shine and show what you've learned, treat it like your first real step into the industry.",
      assessmentLink: "https://forms.gle/ugvsT6oUgx4UoCyx9",
    },
    {
      phaseTitle: "Phase 3 Career",
      highlightColor: "#EECCFF", // ✅ background for "Career"
      intro: "Welcome to your Career Acceleration Phase",
      introDetails:
        "Congratulations on reaching the final stage of your journey. This phase is all about preparing you for job opportunities and helping you stand out in the market.",
      moreDetails: [
        "CV/Portfolio Revamp",
        "LinkedIn Optimization",
        "Mock Interview Practice",
      ],
      schedule: ["Tuesday at 7pm", "Thursday at 7pm"],
      howToJoin:
        "Click the 'Start Learning' button on the Portal at the scheduled time to access your live session",
      instructions: [
        "You must complete your Career Acceleration Assessment and submit all required deliverables",
        "Successful completion earns you Product Management Certificate",
        "This is your final certificate and proof that you are now job ready",
      ],
      encouragement:
        "This is your opportunity to shine and show what you've learned, treat it like your first real step into the industry.",
      assessmentLink: "https://forms.gle/3am5B7qjiwBviVHY6",
    },
  ];

  // ======================================================================================================

export const policies = [
  {
    title: "Privacy Policy",
    description:
      "We collect personal information such as email, CV, and LinkedIn profiles to facilitate the application process and program participation. This information is stored securely and used solely for program-related purposes. We comply with all relevant data protection laws and do not share your information with third parties without your consent."
  },
  {
    title: "Terms and Conditions",
    items: [
      "Program Participation: By enrolling in Prodefied, you agree to actively participate in all program activities and complete assigned tasks.",
      "Payment: All payments are non-refundable unless otherwise stated.",
      "Code of Conduct: Participants are expected to maintain professionalism and respect towards mentors and peers.",
      "Intellectual Property: All materials provided during the program are the property of Prodefied and are for personal use only."
    ]
  },
  {
    title: "Cookie Policy",
    description:
      "Our website uses cookies to enhance user experience and analyze site traffic. By using our site, you consent to our use of cookies in accordance with our Cookie Policy. You can manage your cookie preferences through your browser settings."
  },
  {
    title: "Payment Policy",
    items: [
      "Payment Completion: All fees must be fully paid before the program starts, unless you’re on an approved payment plan.",
      "Seat Reservation: An initial deposit of ₦100,000 is required to secure your spot.",
      "Refunds and Deferrals: All payments are non-refundable. Deferrals are allowed only within the first week if the program and require team approval.",
      "Late Payments: Payments made more than 7 days after the due date may result in suspension until settled.",
      "Currency: All fees are in Naira and include program materials unless otherwise stated. For international participants, payments can be made in USD, GBP, or EUR. Exchange rates will be based on the prevailing market rate at the time of payment."
    ]
  }
];