
import { ResumeData } from './types';

export const resumeData: ResumeData = {
  name: "Abdul Rahim",
  title: "Senior Flutter Developer & Team Lead",
  location: "Dhaka, Bangladesh",
  email: "rahimsr983@gmail.com",
  phone: "01718663032",
  linkedin: "linkedin.com/in/abdul-rahim-6b09292a0",
  github: "github.com/developer-rahim",
  summary: "Senior Flutter developer and team lead with 5+ years of experience shipping production products across mobile and web. Delivered 40+ Android, 15+ iOS and 10+ macOS apps on the Play Store, App Store and Mac App Store, plus 6+ live web platforms built with Next.js, React and Tailwind CSS. Backend expertise in Node.js, NestJS and MongoDB, with strong ownership of offline-first architecture, custom UI/UX and high-performance systems.",
  coreSkills: [
    {
      title: "Mobile (Flutter/Dart)",
      skills: ["Cross-platform (iOS/Android)", "State Management (GetX, Bloc, Riverpod)", "Offline-First Architectures", "Custom Animations", "Payment Gateways", "Push Notifications"]
    },
    {
      title: "Backend & Systems",
      skills: ["Node.js", "NestJS", "Express.js", "REST & GraphQL", "MongoDB", "PostgreSQL", "Firebase Cloud Functions", "JWT Auth"]
    },
    {
      title: "Web Development",
      skills: ["Next.js", "React & TypeScript", "Tailwind CSS", "Responsive UI", "SEO & Performance", "Vercel & Netlify"]
    },
    {
      title: "Optimization",
      skills: ["Advanced Caching (Hive)", "Memory Management", "Image Compression", "Lazy Loading", "CI/CD Pipelines", "App Store/Play Store DevOps"]
    }
  ],
  experience: [
    {
      company: "Nextive Solution, Kawran Bazar, Dhaka",
      location: "Dhaka, Bangladesh",
      role: "Team Lead – Flutter, Backend & Web",
      period: "2023 – Present",
      bullets: [
        "Led a team of Flutter, backend & web developers, managing development lifecycle end-to-end",
        "Designed and implemented scalable mobile architectures using Flutter + Node.js/NestJS",
        "Built 6+ live web platforms with Next.js, React and Tailwind CSS",
        "Conducted code review sessions and enforced clean coding practices",
        "Built high-performing apps using offline-first architecture and advanced caching",
        "Integrated complex APIs, including payment systems and background services",
        "Managed Play Store & App Store submission processes",
        "Implemented CI/CD deployment pipelines for smoother updates"
      ]
    },
    {
      company: "Excel IT, Moghbazar, Dhaka",
      location: "Dhaka, Bangladesh",
      role: "Mid-Level Flutter Developer",
      period: "2021 – 2022",
      bullets: [
        "Developed production-level Flutter apps for both Android and iOS",
        "Integrated REST APIs, Firebase, WebSockets, and local storage solutions",
        "Implemented offline syncing, background fetching, and advanced caching layers",
        "Optimized app load times, improving performance by 40–60% across major features",
        "Created reusable components, custom widgets, and animation-based user interfaces"
      ]
    },
    {
      company: "Large IT, Mohammadpur, Dhaka",
      location: "Dhaka, Bangladesh",
      role: "Junior Flutter Developer",
      period: "2020 – 2021",
      bullets: [
        "Worked on UI screen development and pixel-perfect designs",
        "Wrote efficient Dart code and contributed to core features",
        "Implemented Firebase Auth, Cloud Messaging, and Firestore logic",
        "Improved app performance by reducing unnecessary rebuilds",
        "Assisted in version control & deployment tasks"
      ]
    }
  ],
  education: {
    degree: "B.Sc in Computer Science & Engineering",
    institution: "Model Institution of Science and Technology (MIST)",
    completed: "2021",
    major: "Computer Science"
  },
  majorProjects: [
    {
      name: "BCS Doctor",
      link: "https://play.google.com/store/apps/details?id=com.nextive.bcsdoctor&hl=en",
      description: "Comprehensive exam prep tool with massive offline caching capabilities.",
      features: ["Offline Mode", "Auto-Sync", "Caching Architecture"]
    },
    {
      name: "Physics Study BD",
      link: "https://play.google.com/store/apps/details?id=com.nextive.physicsstudy.bd&hl=en",
      description: "Premium education platform with advanced UI animations and exam modules.",
      features: ["Lottie Animations", "Real-time Exams", "Custom Rendering"]
    },
    {
      name: "SMS to Mail",
      description: "Enterprise utility app forwarding device SMS to SMTP email in background.",
      features: ["Battery Optimized", "Background Worker", "Secure Auth"]
    },
    {
      name: "Bongo Baba",
      link: "https://bongobaba.en.softonic.com/android",
      description: "Full-scale E-commerce application with diverse payment gateway integrations.",
      features: ["Payment Logic", "Order Tracking", "Dynamic Catalog"]
    }
  ],
  appLinks: [
    { name: "BCS Doctor", platform: "Play Store", url: "https://play.google.com/store/apps/details?id=com.nextive.bcsdoctor" },
    { name: "Physics Study BD", platform: "Play Store", url: "https://play.google.com/store/apps/details?id=com.nextive.physicsstudy.bd" },
    { name: "Science Platform", platform: "App Store", url: "https://apps.apple.com/us/app/science-platform/id6748245666" },
    { name: "Karigori Pathsala", platform: "App Store", url: "https://apps.apple.com/us/app/karigori-pathsala/id6754215048" },
    { name: "Shikkha Squared", platform: "App Store", url: "https://apps.apple.com/us/app/shikkha-squared/id6751794182" },
    { name: "eTestPaper", platform: "App Store", url: "https://apps.apple.com/us/app/etestpaper/id6749287735" },
    { name: "Master Class", platform: "App Store", url: "https://apps.apple.com/us/app/master-class-bank-job/id6753141252" },
    { name: "Nayeem's English Care", platform: "App Store", url: "https://apps.apple.com/us/app/nayeems-english-care/id6748595972" },
    { name: "Board Books", platform: "App Store", url: "https://apps.apple.com/us/app/board-books/id6751452947" },
    { name: "Admission Assistant", platform: "App Store", url: "https://apps.apple.com/us/app/admission-assistant/id6749927738" },
    { name: "Bongo Baba", platform: "Softonic", url: "https://bongobaba.en.softonic.com/android" }
  ],
  strengths: [
    "Expert Team Leadership",
    "Clean Architecture Focused",
    "Performance Optimization Obsessed",
    "Scalable Backend Design",
    "Rapid Problem Solving"
  ],
  iosApps: [
    { name: "MCQ Boss", icon: "", url: "https://apps.apple.com/us/app/id6820439520", store: "App Store", note: "In Review" },
    { name: "Jony Law School", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/00/d6/ad/00d6adca-2902-2a2b-f13d-4458a4ca9132/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg", url: "https://apps.apple.com/us/app/jony-law-school/id6757974185", store: "App Store" },
    { name: "BCS Delta Force", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/f0/a0/f0/f0a0f0d0-bbbf-9fad-187e-567af1cd84dc/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg", url: "https://apps.apple.com/us/app/bcs-delta-force/id6807405949", store: "App Store", website: "https://delta-force-web-gamma.vercel.app/" },
    { name: "Karigori Pathsala", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/96/61/40/96614026-cfbe-39cf-b838-0619e8e1ed11/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg", url: "https://apps.apple.com/us/app/karigori-pathsala/id6754215048", store: "App Store", website: "https://www.karigoripathsala.com/" },
    { name: "eTestPaper", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f8/f0/a1/f8f0a14c-47e7-dc0a-7c57-ebc9b991db19/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg", url: "https://apps.apple.com/us/app/etestpaper/id6749287735", store: "App Store", website: "https://www.etestpaper.net/" },
    { name: "Sahittyapara", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d6/f1/ca/d6f1ca65-a9e2-7cea-43e5-a2ce802d6391/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg", url: "https://apps.apple.com/us/app/sahittyapara/id6757381951", store: "App Store" },
    { name: "Nayeem's English Care", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/33/fd/28/33fd2880-8f1a-6f6d-1f6b-8ecbd3b64eab/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg", url: "https://apps.apple.com/us/app/nayeems-english-care/id6748595972", store: "App Store" },
    { name: "Science Platform", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b2/2a/a7/b22aa7bf-4d2c-f3e1-ce18-d7094e6e4749/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg", url: "https://apps.apple.com/us/app/science-platform/id6748245666", store: "App Store" },
    { name: "Board Books", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d8/e8/64/d8e86479-c2b4-9b0e-4b2d-83ef9da68880/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg", url: "https://apps.apple.com/us/app/board-books/id6751452947", store: "App Store" },
    { name: "Admission Assistant", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c2/ab/49/c2ab49a2-c377-7f49-64e4-6c645735caec/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg", url: "https://apps.apple.com/us/app/admission-assistant/id6749927738", store: "App Store", website: "https://www.admissionassistant.com.bd/" },
    { name: "Physics Study BD", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/06/02/ca/0602ca9b-fa10-db00-e2d4-bc3360a49d27/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg", url: "https://apps.apple.com/us/app/physics-study-bd/id6781135942", store: "App Store" },
    { name: "Master Class-Bank Job", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ee/d7/ac/eed7ace3-570f-2529-cc55-dc9faebaeadc/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg", url: "https://apps.apple.com/us/app/master-class-bank-job/id6753141252", store: "App Store", website: "https://www.masterclass.com.bd/" },
    { name: "Shikkha Squared", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7f/3a/12/7f3a12e7-f34a-25a3-a5e8-170683ecf2ea/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg", url: "https://apps.apple.com/us/app/shikkha-squared/id6751794182", store: "App Store", website: "https://www.shikkhasquared.com/" },
    { name: "English Fantasy", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/dc/7a/6f/dc7a6f27-0688-86f1-7052-c2abc893ee02/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg", url: "https://apps.apple.com/us/app/english-fantasy/id6761452552", store: "App Store" }
  ],
  webProjects: [
    { name: "BCS Delta Force", url: "https://delta-force-web-gamma.vercel.app/", description: "Web platform for BCS preparation, built to run alongside the mobile app.", tags: ["Next.js", "Web App", "EdTech"] },
    { name: "Karigori Pathsala", url: "https://www.karigoripathsala.com/", description: "Full learning platform with courses, video classes and online exams.", tags: ["LMS", "Web App", "EdTech"] },
    { name: "eTestPaper", url: "https://www.etestpaper.net/", description: "Online exam and practice platform for competitive exam candidates.", tags: ["Exam Platform", "Web App", "EdTech"] },
    { name: "Admission Assistant", url: "https://www.admissionassistant.com.bd/", description: "University admission portal with programs, notices and an online bookstore.", tags: ["Admission Portal", "E-commerce", "EdTech"] },
    { name: "Shikkha Squared", url: "https://www.shikkhasquared.com/", description: "Squared learning platform with study materials and exam preparation.", tags: ["LMS", "Web App", "EdTech"] },
    { name: "Master Class — Bank Job", url: "https://www.masterclass.com.bd/", description: "Bank job, BCS and MBA preparation courses with video classes.", tags: ["Course Platform", "Web App", "EdTech"] }
  ]
};
