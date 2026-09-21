export const profile = {
  name: "พีรพัฒน์ แสวงรัมย์",
  englishName: "PEERAPAT SAWANGRAM",
  role: "นักศึกษาวิศวกรรมซอฟต์แวร์ ชั้นปีที่ 3",
  roleEn: "3rd-year Software Engineering Student",
  university: "มหาวิทยาลัยพะเยา • คณะเทคโนโลยีสารสนเทศและการสื่อสาร",
  location: "พะเยา, ประเทศไทย",
  email: "peerapatpt292@gmail.com",
  phone: "082-181-9636",
  github: "https://github.com/kirin58",
  linkedin: "https://linkedin.com/in/pee-peerapat",
  bio: "นักศึกษาวิศวกรรมซอฟต์แวร์ชั้นปีที่ 3 มีพื้นฐานครบวงจร software development lifecycle (SDLC) ตั้งแต่ system analysis, database design ไปจนถึงการแปลง requirement ที่ซับซ้อนให้เป็นระบบที่ใช้งานได้จริง ชอบแก้ปัญหาและเขียนโค้ด พร้อมปรับตัวและร่วมงานในทุกบทบาทของสาย software engineering",
  avatarInitials: "PT",
  photo: "/profile.jpg",
  stats: [
    { value: "21", label: "repo บน GitHub" },
    { value: "266", label: "contributions ใน 1 ปี" },
    { value: "6", label: "โปรเจกต์ปักหมุด" },
    { value: "3.51", label: "GPA ม.พะเยา" },
  ],
};

export const skills = [
  {
    category: "Technical & Tools",
    subtitle: "ทักษะทางเทคนิคและเครื่องมือ",
    color: "bg-emerald-100 text-emerald-800",
    groups: [
      { label: "Frontend", items: ["Next.js", "React", "TypeScript"] },
      { label: "Backend & Database", items: ["Hono", "SQLite", "SQL (Basic)"] },
      {
        label: "DevOps & Tools",
        items: ["Git", "Docker", "Cloudflare", "Vercel", "n8n"],
      },
      { label: "Testing", items: ["Robot Framework"] },
      {
        label: "Collaboration",
        items: ["Trello", "Microsoft Teams", "Google Workspace"],
      },
    ],
  },
  {
    category: "Management & Soft Skills",
    subtitle: "การจัดการงานและทักษะด้านคน",
    color: "bg-lime-100 text-lime-800",
    groups: [
      {
        label: "Project Management",
        items: [
          "Scrum Tracking",
          "Gantt Chart (ClickUp)",
          "Requirement Gathering",
          "Use Case & User Story Mapping",
        ],
      },
      {
        label: "UX/UI & Design",
        items: [
          "Persona & Journey Mapping",
          "Wireframing",
          "User Flow",
          "Figma",
          "Canva",
        ],
      },
      {
        label: "Soft Skills",
        items: [
          "Communication",
          "Presentation",
          "Teamwork",
          "Problem Solving",
          "Adaptability",
        ],
      },
    ],
  },
];

export const projects = [
  {
    title: "frontend-nexus",
    desc: "เว็บไซต์บริหารจัดการหอพัก จัดการข้อมูลผู้เช่า ห้องพัก และคำนวณค่าใช้จ่ายรายเดือน — โปรเจครายวิชา Back-End และ DevOps กลุ่ม The Nexus",
    tags: ["TypeScript", "Backend", "Vercel"],
    emoji: "🏠",
    link: "https://thenexus-chi.vercel.app",
    github: "https://github.com/Arachaphon/frontend-nexus",
    highlight: true,
  },
  {
    title: "kinyark-ingredients",
    desc: "เว็บค้นหาสูตรอาหารจากวัตถุดิบในตู้เย็น แนะนำเมนูด้วย AI (Gemini & DeepSeek) พร้อมคอมมูนิตี้และร้านค้า — กลุ่ม KINYARK",
    tags: ["TypeScript", "AI", "Vercel"],
    emoji: "🍳",
    link: "https://kinyark-ingredients.vercel.app",
    github: "https://github.com/Arachaphon/kinyark-ingredients",
    highlight: true,
  },
  {
    title: "Classroom-meeting-room-booking-system",
    desc: "ระบบจองห้องเรียน / ห้องประชุม พัฒนาด้วย Python + Streamlit โดยเน้นหลักการ Object-Oriented Programming (OOP)",
    tags: ["Python", "Streamlit", "OOP"],
    emoji: "📅",
    link: "https://classroom-meeting-room-booking-system.streamlit.app/",
    github: "https://github.com/kirin58/Classroom-meeting-room-booking-system",
    highlight: true,
  },
  {
    title: "TO_DO_LIST",
    desc: "โปรเจควิชา Fundamental of Database System และ Software Process กลุ่ม Zero Gravity สาขาวิศวกรรมซอฟต์แวร์ ม.พะเยา ปี 2568",
    tags: ["Vue", "Database", "Vercel"],
    emoji: "✅",
    link: "https://gravityplan.vercel.app/",
    github: "https://github.com/kirin58/TO_DO_LIST",
    highlight: false,
  },
  {
    title: "UNDER_THE_SEA",
    desc: "เว็บไซต์จองคิวทำเล็บ กลุ่ม Under the Sea — โปรเจควิชา Frontend Software Development และ Software Requirement ปี 2567",
    tags: ["HTML", "CSS", "JavaScript"],
    emoji: "💅",
    link: "https://under-the-sea.onrender.com",
    github: "https://github.com/kirin58/UNDER_THE_SEA",
    highlight: false,
  },
  {
    title: "Travel",
    desc: "โปรเจควิชา Frontend Software Development — เว็บแนะนำสถานที่ท่องเที่ยว",
    tags: ["HTML", "CSS", "JavaScript"],
    emoji: "✈️",
    link: "https://travel-avvr.onrender.com",
    github: "https://github.com/kirin58/Travel",
    highlight: false,
  },
];

export const experience = [
  {
    period: "2020 – ปัจจุบัน",
    title: "Freelance Academic & Document Assistant",
    org: "ฟรีแลนซ์",
    bullets: [
      "รับทำเอกสาร จัดรูปแบบเอกสาร และค้นหาข้อมูลให้ลูกค้าหลากหลายกลุ่ม",
      "บริหารหลายออเดอร์พร้อมกัน จัดลำดับความสำคัญ ส่งงานตรงเวลา 100% แม้เดดไลน์กระชั้นชิด",
      "เก็บ requirement จากลูกค้าโดยตรง เพื่อให้งานตรงตามเกณฑ์และความคาดหวัง",
      "พัฒนาทักษะการสื่อสารและบริหารเวลา จากการทำฟรีแลนซ์ควบคู่กับการเรียนเต็มเวลา",
    ],
  },
];

export const projectExperience = [
  {
    period: "ปี 2 เทอม 1",
    title: "To-Do List Web Application",
    role: "Product Owner, Scrum Master & Frontend Developer",
    bullets: [
      "ทำหน้าที่ Product Owner และ Scrum Master ใช้บอร์ดติดตามงานบริหาร Agile workflow และประสานงานในทีม",
      "เก็บและวิเคราะห์ requirement เพื่อกำหนดขอบเขต โปรเจกต์ backlog และฟังก์ชันหลัก",
      "ออกแบบ ER diagram และ database schema ให้รองรับการขยายตัว",
      "พัฒนา frontend ให้ตรง requirement และใช้งานลื่นไหล",
    ],
  },
  {
    period: "ปี 1 เทอม 2",
    title: "MAGIC Nails",
    role: "Frontend Developer & Requirement Analyst",
    bullets: [
      "เก็บและจัดทำเอกสาร software requirement ให้ตรงกับความคาดหวังผู้ใช้",
      "พัฒนา frontend แบบ interactive เน้น responsive design และประสบการณ์ใช้งานที่ลื่นไหล",
    ],
  },
  {
    period: "ปี 1 เทอม 1",
    title: "Kinyark (Recipe Search System)",
    role: "UX/UI Designer & System Analyst",
    bullets: [
      "เขียนข้อเสนอโปรเจกต์ กำหนดขอบเขต requirement และวัตถุประสงค์ของแพลตฟอร์มค้นหาสูตรอาหาร",
      "ทำ user research ทั้ง Persona, Empathy Map และ User Journey Map",
      "ออกแบบ User Flow และ Use Case Diagram วางโครงสร้างและความสัมพันธ์ของระบบ",
      "ออกแบบ UX/UI ของเว็บแอปให้ใช้งานง่ายและเป็นมิตรกับผู้ใช้",
    ],
  },
];

export const education = [
  {
    period: "2024 – ปัจจุบัน (จบ 2028)",
    school: "ปริญญาตรี วิศวกรรมซอฟต์แวร์ | GPA 3.51",
    place: "มหาวิทยาลัยพะเยา",
    desc: "Bachelor of Engineering in Software Engineering, School of Information and Communication Technology",
  },
  {
    period: "มัธยมศึกษาตอนปลาย",
    school: "ศิลป์-คำนวณ (อังกฤษ-คณิต) | GPA 3.90",
    place: "โรงเรียนกาญจนาภิเษกวิทยาลัย กระบี่",
    desc: "แผนการเรียนศิลป์-คำนวณ เน้นภาษาอังกฤษและคณิตศาสตร์",
  },
];

export const navLinks = [
  { href: "#about", label: "เกี่ยวกับ" },
  { href: "#skills", label: "ทักษะ" },
  { href: "#projects", label: "ผลงาน" },
  { href: "#experience", label: "ประสบการณ์" },
  { href: "#minigame", label: "มินิเกม" },
  { href: "#contact", label: "ติดต่อ" },
];
