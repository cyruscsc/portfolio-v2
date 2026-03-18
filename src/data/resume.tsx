import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Fastapi } from "@/components/ui/svgs/fastapi";
import { Scikitlearn } from "@/components/ui/svgs/scikitlearn";
import { Langchain } from "@/components/ui/svgs/langchain";

export const DATA = {
  name: "Cyrus Chan",
  initials: "CC",
  url: "https://cyruscsc.com",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "AI Engineer with Language Education background. I enjoy building things and playing with languages.",
  summary:
    "In late 2022, I made two big moves: relocating to Canada and transitioning from teaching into software engineering. Since then, I've purseued [a Master's in computer science alongside my double degree in language and education](/#education), picking up [valuable knowledge along the way](/#courses). Now, I have the opportunity to apply this mix of experience and [skills](/#skills) at the intersection of AI and education.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "Python", icon: Python },
    { name: "FastAPI", icon: Fastapi },
    { name: "LangChain", icon: Langchain },
    { name: "scikit-learn", icon: Scikitlearn },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "#",
    tel: "#",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/cyruscsc",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cyruscsc",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Vretta",
      href: "https://www.vretta.com/",
      badges: [],
      location: "Remote",
      title: "AI & Data Engineer",
      logoUrl: "/vretta.jpeg",
      start: "May 2025",
      end: "Present",
      description:
        "Implemented a hybrid automated scoring system for multiple provincial assessments using a combination of Large Language Models and Machine Learning models. Developed a pipeline to process, validate, and analyze scoring data to provide insights to educators. Built TypeScript modules for repetition detection, adversarial input detection, and prompt optimization.",
    },
  ],
  education: [
    {
      school: "University of York",
      href: "https://york.ac.uk",
      degree: "Master of Science in Computer Science (MSc)",
      logoUrl: "/york.jpeg",
      start: "2023",
      end: "2025",
    },
    {
      school: "The University of Hong Kong",
      href: "https://hku.hk",
      degree: "Bachelor of Arts and Bachelor of Education (BA, BEd)",
      logoUrl: "/hku.png",
      start: "2017",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "SightLine",
      href: "https://sightline.hatchside.io/",
      dates: "March 2025 - April 2025",
      active: true,
      description: "An LLM-powered research assistant designed to extract insights from arXiv papers with Retrieval Augmented Generation (RAG).",
      technologies: [
        "Python",
        "TypeScript",
        "FastAPI",
        "Svelte",
        "LangChain",
      ],
      links: [
        {
          type: "Website",
          href: "https://sightline.hatchside.io/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/cyruscsc/sightline",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sightline.png",
      video: "",
    },
    {
      title: "Referalah",
      href: "https://www.referalah.com/en-ca",
      dates: "November 2023 - April 2024",
      active: true,
      description: "An open-source platform for Hong Kong expatriates, connects users for networking and job referrals, with 4600+ members.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Supabase",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.referalah.com/en-ca",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Pjaijai/Referalah",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/referalah.png",
      video: "",
    },
  ],
  courses: [
    {
      title: "Agents Course",
      dates: "May 2025",
      location: "Hugging Face",
      description: "",
      image: "/huggingface.jpeg",
      links: [],
    },
    {
      title: "Introduction to Artificial Intelligence with Python",
      dates: "Feb 2025",
      location: "Harvard CS50",
      description: "",
      image: "/harvard.jpeg",
      links: [],
    },
    {
      title: "Machine Learning",
      dates: "Apr 2024",
      location: "DeepLearning.AI",
      description: "",
      image: "/deeplearningai.jpeg",
      links: [],
    },
    {
      title: "Meta React Native",
      dates: "Apr 2024",
      location: "Meta",
      description: "",
      image: "/meta.jpeg",
      links: [],
    },
    {
      title: "Meta Back-End Developer",
      dates: "Aug 2023",
      location: "Meta",
      description: "",
      image: "/meta.jpeg",
      links: [],
    },
    {
      title: "Meta Front-End Developer",
      dates: "Aug 2023",
      location: "Meta",
      description: "",
      image: "/meta.jpeg",
      links: [],
    },
  ],
} as const;
