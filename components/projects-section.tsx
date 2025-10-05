"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "Nextune Music App",
    description:
      "A modern music streaming application with AI-powered recommendations, real-time playback, and social features. Built with microservices architecture for scalability.",
    stack: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Docker",
      "AWS EC2",
      "AI Integration",
    ],
    github: "https://github.com/levilee0342/nextune-backend",
    demo: "https://youtu.be/9So3mvQZVe0",
    award: "2nd Place - Hack The Limit 2025",
  },
  {
    title: "Social Network Microservices",
    description:
      "Distributed social networking platform with user authentication, post management, real-time messaging, and notification services. Implements event-driven architecture.",
    stack: [
      "Spring Boot",
      "MongoDB",
      "Redis",
      "Docker",
      "GitHub Actions",
      "CI/CD",
    ],
    github: "https://github.com/levilee0342/social-network-microservices",
    demo: null,
  },
  {
    title: "Stationery Management",
    description:
      "Web & Android-based stationery management system with AI-powered features and real-time inventory tracking. Supports Google OAuth login, AI modules for image recognition & chatbot, and optimized MySQL schema for instant updates.",
    stack: [
      "Java (Android, Spring Boot)",
      "Python",
      "TensorFlow",
      "Keras",
      "MySQL",
      "Gemini API",
    ],
    github: "https://github.com/levilee0342/Stationery-Management",
    demo: null,
    award: null,
  },
  {
    title: "AI-Powered Virtual Medical Assistant",
    description:
      "IoT healthcare assistant with on-device AI for real-time biometric analysis and personalized health recommendations. Built with ESP32, MAX30102 sensor, TensorFlow inference, and Flask dashboard.",
    stack: ["Python", "C++", "ESP32", "TensorFlow", "Flask", "Gemini API"],
    github:
      "https://github.com/levilee0342/AI-powered-virtual-medical-assistant",
    demo: null,
    award: null,
  },
  {
    title: "Multiple-choice Exam Management",
    description:
      "Lightweight Java desktop application to manage students, subjects, classes, and exam scores. Supports automated grading, result summaries, and secure SQL Server storage—ideal for small education centers.",
    stack: ["Java", "Java Swing / JavaFX", "SQL Server"],
    github: "https://github.com/levilee0342/Multiple-choice-exam-management",
    demo: null,
    award: null,
  },
  {
    title: "AI-Powered Movie Ticket Booking Website & Chatbot",
    description:
      "Online movie ticket booking platform with AI chatbot for schedules, film details, and offers. Includes seat selection, payments, admin movie/schedule management, and a Python chatbot backed by ChromaDB.",
    stack: [
      "Java (Backend)",
      "HTML/CSS/JavaScript",
      "Python",
      "Flask",
      "TensorFlow",
      "Keras",
      "ChromaDB",
      "SQL Server",
      "Apache Tomcat",
      "NLTK",
      "NumPy",
    ],
    github:
      "https://github.com/levilee0342/AI-Powered-Movie-Ticket-Booking-Website",
    demo: "https://github.com/levilee0342/AI-Powered-Movie-Ticket-Booking-Website/blob/main/Demo.md",
    award: null,
  },
  {
    title: "Banking Management Application",
    description:
      "Comprehensive banking system for distributed branches with customer, employee, and transaction management. Supports role-based access, inter-branch transfers, and rich reporting/analytics.",
    stack: ["C#", "DevExpress", "SQL Server", "Windows (Desktop)"],
    github: "https://github.com/levilee0342/Bank-Management-System",
    demo: "https://github.com/levilee0342/Bank-Management-System/blob/main/Demo.md",
    award: null,
  },
];

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const projectsToRender = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsToRender.map((project) => (
            <Card
              key={project.title}
              className="flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-balance">
                  {project.title}
                </CardTitle>
                {project.award && (
                  <Badge className="w-fit mt-2" variant="default">
                    🏆 {project.award}
                  </Badge>
                )}
                <CardDescription className="text-base leading-relaxed mt-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-3">
                <Button variant="default" asChild>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                {project.demo && (
                  <Button variant="outline" asChild>
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      {projects.length > 4 && (
        <div className="flex justify-center mt-10">
          <Button variant="outline" onClick={() => setShowAll((v) => !v)}>
            {showAll ? "Collapse" : "Show more"}
          </Button>
        </div>
      )}
    </section>
  );
}
