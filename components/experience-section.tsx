import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Backend Developer Intern",
    company: "LIKELION Vietnam",
    period: "July 2025 - September 2025",
    description:
      "Developed RESTful APIs using Spring Boot, implemented database optimization strategies, and collaborated with cross-functional teams to deliver scalable backend solutions.",
    technologies: ["Spring Boot", "MySQL", "Docker", "Git"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Experience</h2>
        <div className="relative border-l-2 border-primary/30 pl-8 space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[2.6rem] top-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-primary-foreground" />
              </div>
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <Badge variant="secondary">{exp.period}</Badge>
                  </div>
                  <CardDescription className="text-base font-semibold text-foreground">{exp.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
