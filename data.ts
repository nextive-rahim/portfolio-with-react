
import { ResumeData } from './types';

export const resumeData: ResumeData = {
  name: "Abdul Rahim",
  title: "Senior Flutter Developer & Team Lead",
  location: "Dhaka, Bangladesh",
  email: "rahimsr983@gmail.com",
  phone: "01718663032",
  linkedin: "linkedin.com/in/abdul-rahim-6b09292a0",
  github: "github.com/developer-rahim",
  summary: "Senior Flutter developer and team lead with 5+ years of experience shipping production products across mobile and web. Shipped 32 live products to Google Play, 13 of them also on the App Store, most with a companion web platform built with Next.js, React and Tailwind CSS. Backend expertise in Node.js, NestJS and MongoDB, with strong ownership of offline-first architecture, custom UI/UX and high-performance systems.",
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
  products: [
    { name: "BCS Doctor", description: "Comprehensive BCS preparation app with massive offline caching and automatic sync.", tags: ["Flutter", "Offline-First", "EdTech"], icon: "/app-icons/bcs-doctor.png", play: "https://play.google.com/store/apps/details?id=com.nextive.bcsdoctor", web: "https://www.bcsdoctor.com" },
    { name: "DMCan Academy", description: "Full academy management platform for coaching centres with batches, exams and attendance.", tags: ["Flutter", "EdTech", "LMS"], icon: "/app-icons/dmcan-academy.png", play: "https://play.google.com/store/apps/details?id=com.nextive.DMCan", web: "https://www.dmcanacademy.com" },
    { name: "Jony Law School", description: "Law school companion app with lectures, notes and case studies for students.", tags: ["Flutter", "EdTech", "Video"], icon: "/app-icons/jony-law-school.jpg", play: "https://play.google.com/store/apps/details?id=com.nextive.jonylawschool", appStore: "https://apps.apple.com/us/app/id6757974185", web: "https://www.jonylawschool.com", appStoreId: 6757974185 },
    { name: "Physics Study BD", description: "Premium education platform with advanced UI animations and exam modules.", tags: ["Flutter", "Animations", "EdTech"], icon: "/app-icons/physics-study-bd.jpg", play: "https://play.google.com/store/apps/details?id=com.nextive.physicsstudy.bd", appStore: "https://apps.apple.com/us/app/id6781135942", web: "https://physics-study-bd-web.vercel.app", appStoreId: 6781135942 },
    { name: "Nayeem's English Care", description: "Spoken English coaching app with pronunciation practice and graded lessons.", tags: ["Flutter", "EdTech", "Audio"], icon: "/app-icons/nayeem-s-english-care.jpg", play: "https://play.google.com/store/apps/details?id=com.nextive.nec", appStore: "https://apps.apple.com/us/app/id6748595972", web: "https://necofficial.com", appStoreId: 6748595972 },
    { name: "Merito", description: "Learning and evaluation platform for competitive exam preparation.", tags: ["Flutter", "EdTech", "Exam"], icon: "/app-icons/merito.png", play: "https://play.google.com/store/apps/details?id=com.nextive.merito", web: "https://www.meritobd.com" },
    { name: "MCQ Pedia", description: "Large question bank app with topic-wise MCQ practice and mock tests.", tags: ["Flutter", "MCQ", "Exam"], icon: "/app-icons/mcq-pedia.png", play: "https://play.google.com/store/apps/details?id=com.nextive.mcqpedia", web: "https://www.mcqpediabd.com" },
    { name: "Karigori Pathsala", description: "Diploma students' academic partner with courses, video classes and online exams.", tags: ["Next.js", "LMS", "EdTech"], icon: "/app-icons/karigori-pathsala.jpg", play: "https://play.google.com/store/apps/details?id=com.nextive.karigoripathsala", appStore: "https://apps.apple.com/us/app/id6754215048", web: "https://www.karigoripathsala.com", appStoreId: 6754215048 },
    { name: "Safollo Academy", description: "Academy app with class routines, exam results and student progress tracking.", tags: ["Flutter", "EdTech", "LMS"], icon: "/app-icons/safollo-academy.png", play: "https://play.google.com/store/apps/details?id=com.nextive_safollo.ac", web: "https://www.safollo.ac" },
    { name: "Legend Care", description: "Healthcare services app for appointments and patient care management.", tags: ["Flutter", "HealthTech", "Booking"], icon: "/app-icons/legend-care.png", play: "https://play.google.com/store/apps/details?id=com.nextive.legendcare", web: "https://www.legendcarebd.com" },
    { name: "Modulus Academic Care", description: "Academic coaching companion with quizzes, tests and result analysis.", tags: ["Flutter", "EdTech", "Exam"], icon: "/app-icons/modulus-academic-care.png", play: "https://play.google.com/store/apps/details?id=com.nextive.modulus", web: "https://modulas-web.vercel.app" },
    { name: "Jamal Sir", description: "Coaching app with topic-wise classes, quizzes and digital notes.", tags: ["Flutter", "EdTech", "Video"], icon: "/app-icons/jamal-sir.png", play: "https://play.google.com/store/apps/details?id=com.nextive.jamalsir", web: "https://jamalsir.com" },
    { name: "Science Platform", description: "Science learning platform with lessons, practice sets and mock exams.", tags: ["Flutter", "EdTech", "Exam"], icon: "/app-icons/science-platform.jpg", play: "https://play.google.com/store/apps/details?id=com.nextive.science_platform", appStore: "https://apps.apple.com/us/app/id6748245666", web: "https://scienceplatform-web.vercel.app", appStoreId: 6748245666 },
    { name: "MCQ Mentor", description: "Mentor-style MCQ practice with performance stats and daily challenges.", tags: ["Flutter", "MCQ", "Exam"], icon: "/app-icons/mcq-mentor.png", play: "https://play.google.com/store/apps/details?id=com.nextive.mcqmentor", web: "https://mcqmentor-web.vercel.app" },
    { name: "Fahad Academy", description: "Academy companion app for students with notes, classes and exams.", tags: ["Flutter", "EdTech", "LMS"], icon: "/app-icons/fahad-academy.png", play: "https://play.google.com/store/apps/details?id=com.nextive.fahad.academy", web: "https://www.fahadacademybd.com" },
    { name: "Global Trader & Digital Center", description: "Digital top-up and trading services app with order and balance management.", tags: ["Flutter", "FinTech", "E-commerce"], icon: "/app-icons/global-trader-digital-center.png", play: "https://play.google.com/store/apps/details?id=com.nextive.anytopup", web: "https://anytopup.com" },
    { name: "Borno Admission Care", description: "Admission care platform with university updates and application guidance.", tags: ["Flutter", "Admission", "EdTech"], icon: "/app-icons/borno-admission-care.png", play: "https://play.google.com/store/apps/details?id=com.nextive.borno", web: "https://www.bornoadmissioncare.com" },
    { name: "Unmilan Shikkhaloy", description: "Learning management app with courses, video classes and online assessments.", tags: ["Flutter", "LMS", "EdTech"], icon: "/app-icons/unmilan-shikkhaloy.png", play: "https://play.google.com/store/apps/details?id=com.nextive.unmilon", web: "https://unmilan.com" },
    { name: "Sahittyapara", description: "Bengali literature learning app with stories, poems and author biographies.", tags: ["Flutter", "EdTech", "Content"], icon: "/app-icons/sahittyapara.jpg", play: "https://play.google.com/store/apps/details?id=com.nextive.sahittyapara", appStore: "https://apps.apple.com/us/app/id6757381951", web: "https://sahittyapara.com", appStoreId: 6757381951 },
    { name: "Guardian Nursing", description: "Nursing education and job-preparation app with study material and mock tests.", tags: ["Flutter", "EdTech", "Career"], icon: "/app-icons/guardian-nursing.png", play: "https://play.google.com/store/apps/details?id=com.nextive.guardiannursing", web: "https://www.guardiannursing.net" },
    { name: "Shikkhangon", description: "Chattogram learning platform with study materials and exam preparation.", tags: ["Flutter", "EdTech", "Exam"], icon: "/app-icons/shikkhangon.png", play: "https://play.google.com/store/apps/details?id=com.nextive.shikkhangon", web: "https://shikkhangonctg.com" },
    { name: "Tangail Cadet Academy", description: "Cadet academy companion app with classes, routines and exam results.", tags: ["Flutter", "EdTech", "LMS"], icon: "/app-icons/tangail-cadet-academy.png", play: "https://play.google.com/store/apps/details?id=com.nextive.tangailcadetacademy", web: "https://tangail-cadet-academy-web.vercel.app" },
    { name: "English Fantasy", description: "Gamified English learning with stories, vocabulary and daily challenges.", tags: ["Flutter", "EdTech", "Gamification"], icon: "/app-icons/english-fantasy.jpg", play: "https://play.google.com/store/apps/details?id=com.nextive.englishfantasy", appStore: "https://apps.apple.com/us/app/id6761452552", web: "https://englishfantasybd.com", appStoreId: 6761452552 },
    { name: "BeBrainer", description: "Brain-training app with puzzles, quizzes and cognitive exercises.", tags: ["Flutter", "Education", "Gamification"], icon: "/app-icons/bebrainer.png", play: "https://play.google.com/store/apps/details?id=com.nextive.bebrainer", web: "https://www.bebrainer.app" },
    { name: "Master Class — Bank Job", description: "Bank job, BCS and MBA preparation courses with video classes.", tags: ["Course Platform", "Web App", "EdTech"], icon: "/app-icons/master-class-bank-job.jpg", play: "https://play.google.com/store/apps/details?id=com.nextive.masterclass", appStore: "https://apps.apple.com/us/app/id6753141252", web: "https://masterclass.com.bd", appStoreId: 6753141252 },
    { name: "Board Books", description: "Board book video-solve app with chapter-wise lessons and practice.", tags: ["Flutter", "EdTech", "Video"], icon: "/app-icons/board-books.jpg", play: "https://play.google.com/store/apps/details?id=com.nextive.boardbooks", appStore: "https://apps.apple.com/us/app/id6751452947", web: "https://www.nctbbooks.net", appStoreId: 6751452947 },
    { name: "Coaching Manager", description: "Coaching management app for batches, exams and student records.", tags: ["Flutter", "Management", "EdTech"], icon: "/app-icons/coaching-manager.png", play: "https://play.google.com/store/apps/details?id=com.nextive.coachingmanager", web: "https://coachingmanage.com" },
    { name: "eTestPaper", description: "Online exam and practice platform for competitive exam candidates.", tags: ["Exam Platform", "Web App", "EdTech"], icon: "/app-icons/etestpaper.jpg", play: "https://play.google.com/store/apps/details?id=com.nextive.etestpaper", appStore: "https://apps.apple.com/us/app/id6749287735", web: "https://www.etestpaper.net", appStoreId: 6749287735 },
    { name: "Admission Assistant", description: "University admission portal with programs, notices and an online bookstore.", tags: ["Admission Portal", "E-commerce", "EdTech"], icon: "/app-icons/admission-assistant.jpg", play: "https://play.google.com/store/apps/details?id=com.esp.cattronics.vaa", appStore: "https://apps.apple.com/us/app/id6749927738", web: "https://admissionassistant.com.bd", appStoreId: 6749927738 },
    { name: "MCQ Boss", description: "MCQ practice app with topic-wise banks, mock exams and leaderboards.", tags: ["Flutter", "MCQ", "Exam"], icon: "/app-icons/mcq-boss.png", play: "https://play.google.com/store/apps/details?id=com.redox.mcqboss", web: "https://www.mcqboss.com" },
    { name: "BCS Delta Force", description: "Web platform for BCS preparation, built to run alongside the mobile app.", tags: ["Next.js", "Web App", "EdTech"], icon: "/app-icons/bcs-delta-force.jpg", play: "https://play.google.com/store/apps/details?id=com.nextive.deltaforce", appStore: "https://apps.apple.com/us/app/id6807405949", web: "https://delta-force-web-gamma.vercel.app", appStoreId: 6807405949 },
    { name: "Shikkha Squared", description: "Squared learning platform with study materials and exam preparation.", tags: ["LMS", "Web App", "EdTech"], icon: "/app-icons/shikkha-squared.jpg", play: "https://play.google.com/store/apps/details?id=com.nextive.shikkha.squared", appStore: "https://apps.apple.com/us/app/id6751794182", web: "https://www.shikkhasquared.com", appStoreId: 6751794182 },
    { name: "Bongo Baba", description: "Full-scale e-commerce app with product catalog, cart, checkout flow, payment gateway integration and order tracking.", tags: ["Flutter", "E-commerce", "Payments"], icon: "/app-icons/bongo-baba.png", play: "https://bongobaba.en.softonic.com/android", playLabel: "Softonic" }
  ]
};
