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
    demo: "https://nextune.ddnsgeek.com/",
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
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
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
    </section>
  );
}
