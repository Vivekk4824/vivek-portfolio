const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const portfolioData = {
  hero: {
    name: "Vivek Patil",
    title: "Information Technology Undergraduate",
    tagline: "DSA Problem Solver · Full Stack Developer · AI Enthusiast",
    leetcode: "https://leetcode.com/u/Vivek_1276/",
    github: "https://github.com/Vivekk4824",
    linkedin: "https://linkedin.com/in/vivek-patil-it/",
    email: "vivekk.codes1@gmail.com",
    phone: "+91 7620834769",
    location: "Nashik, Maharashtra",
    stats: {
      leetcodeSolved: "340+",
      maxRating: "1522",
      codechef: "2-Star",
      cgpa: "8.39"
    }
  },
  about: {
    summary: "Dedicated Information Technology undergraduate with strong Computer Science fundamentals, algorithmic problem-solving skills, and a passion for web development. Adaptable team player with keen interest in emerging technologies, DSA, system design, and real-world performance optimization."
  },
  skills: [
    { category: "Languages", items: ["C", "C++", "Java", "Python", "JavaScript"] },
    { category: "Web Development", items: ["ReactJS", "NodeJS", "Express", "TailwindCSS", "HTML/CSS"] },
    { category: "AI / ML", items: ["Scikit-learn", "NLTK", "Pandas", "Matplotlib", "Seaborn"] },
    { category: "Tools & Databases", items: ["Git", "GitHub", "MySQL", "MongoDB", "Power BI", "Postman", "CI/CD"] }
  ],
  experience: [
    {
      id: 1,
      role: "Student Contributor",
      org: "GirlScript Summer of Code '25",
      type: "Open Source",
      period: "Sep 2025 – Oct 2025",
      points: [
        "Contributed to multiple open-source repositories by fixing bugs, improving UI components, and adding new features.",
        "Collaborated with project maintainers through GitHub PRs, issue discussions, and community channels.",
        "Achieved Hacktoberfest 2025 Super Contributor status."
      ]
    },
    {
      id: 2,
      role: "Trainee Intern",
      org: "Edunet-Shell Skills4Future (AICTE)",
      type: "Internship",
      period: "Dec 2024 – Jan 2025",
      points: [
        "Built a project-based course on Email Marketing trends using unsupervised learning and NLP.",
        "Collected, cleaned, and pre-processed email marketing data for trend analysis.",
        "Built an interactive Power BI dashboard with custom DAX measures to uncover open rates, CTR, and campaign trends."
      ]
    },
    {
      id: 3,
      role: "Media & Content Coordinator",
      org: "Star 24 Fast News",
      type: "Extracurricular",
      period: "2023 – 2024",
      points: [
        "Managed Instagram and Facebook content for a live news channel.",
        "Handled news posting, video editing, interview coverage, and on-ground journalism."
      ]
    }
  ],
  projects: [
    {
      id: 1,
      name: "Deepfake Detection App",
      subtitle: "AI Image Verification System",
      stack: ["Streamlit", "Deep Learning", "Gemini API", "CNN"],
      period: "Jan 2026",
      description: "AI-powered application to detect deepfake images using Deep Learning and LLM-based analysis. Processed 1000+ images with augmentation, pixel-level analysis, and metadata-based validation.",
      highlights: [
        "CNN architecture for image classification",
        "LLM-based reasoning via Gemini API",
        "Optimized inference on 1000+ images",
        "Metadata & pixel-level validation"
      ],
      color: "#7C3AED"
    },
    {
      id: 2,
      name: "VruddhSeva",
      subtitle: "Senior Citizen Assistance Mobile App",
      stack: ["React Native", "Firebase", "Maps", "FCM"],
      period: "Oct 2025",
      description: "Cross-platform mobile app for senior citizens featuring healthcare support, medicine reminders, emergency SOS alerts, real-time notifications, and community assistance modules.",
      highlights: [
        "Cross-platform React Native build",
        "Emergency SOS with real-time alerts",
        "Medicine reminders & scheduling",
        "Firebase backend & FCM notifications"
      ],
      color: "#0EA5E9"
    },
    {
      id: 3,
      name: "ReadMyPDF",
      subtitle: "PDF Query Web App",
      stack: ["Streamlit", "OpenAI", "FAISS", "RAG"],
      period: "2025",
      description: "Streamlit application allowing users to upload PDFs and query them using natural language, powered by FAISS vector embeddings and LLM-based retrieval QA.",
      highlights: [
        "RAG system with FAISS vector search",
        "Chunking strategy for large documents",
        "Semantic search with embedding indexing",
        "Reduced query latency via optimized retrieval"
      ],
      color: "#10B981"
    }
  ],
  achievements: [
    { icon: "🏆", title: "340+ LeetCode Problems", desc: "Max rating of 1522 on LeetCode" },
    { icon: "⭐", title: "CodeChef 2-Star", desc: "Consistent competitive programmer" },
    { icon: "🚀", title: "4th Rank – CodeMaze", desc: "TELEKINESIS 2026 at KKWIEER (Jan 2026)" },
    { icon: "🌍", title: "NASA Space Apps 2025", desc: "Built weather forecasting solution (Team Etoile)" },
    { icon: "💡", title: "Smart India Hackathon 2024", desc: "Team Lead – Team StationMaster" },
    { icon: "🌐", title: "Hacktoberfest Super Contributor", desc: "Quality PRs merged in 2025" }
  ],
  certificates: [
    { name: "Postman API Fundamentals Student Expert", org: "Postman", date: "Oct 2025" },
    { name: "Python Spoken Tutorial Certificate", org: "IIT Bombay – Spoken Tutorial Project", date: "Nov 2025" },
    { name: "CPP Spoken Tutorial Certificate", org: "IIT Bombay – Spoken Tutorial Project", date: "May 2024" }
  ],
  education: [
    {
      degree: "B.Tech – Information Technology",
      institution: "K.K. Wagh Institute of Engineering Education and Research",
      location: "Nashik, India",
      period: "Jul 2023 – Jun 2027",
      score: "CGPA: 8.39",
      courses: ["Data Structures", "Algorithms", "OS", "Machine Learning", "Computer Organisation", "Databases"]
    },
    {
      degree: "Higher Secondary Certificate (Class XII)",
      institution: "Amro Junior College, Vilholi",
      location: "Nashik, India",
      period: "Jul 2022 – Mar 2023",
      score: "72.83%",
      courses: []
    },
    {
      degree: "Secondary School Certificate (Class X)",
      institution: "St. Lawrence High School & Jr. College",
      location: "Nashik, India",
      period: "Jun 2020 – May 2021",
      score: "80%",
      courses: []
    }
  ]
};

app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.get('/api/portfolio/hero', (req, res) => res.json(portfolioData.hero));
app.get('/api/portfolio/skills', (req, res) => res.json(portfolioData.skills));
app.get('/api/portfolio/projects', (req, res) => res.json(portfolioData.projects));
app.get('/api/portfolio/experience', (req, res) => res.json(portfolioData.experience));
app.get('/api/portfolio/achievements', (req, res) => res.json(portfolioData.achievements));
app.get('/api/portfolio/education', (req, res) => res.json(portfolioData.education));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
