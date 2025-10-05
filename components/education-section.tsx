import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Medal } from "lucide-react";
import { Button } from "./ui/button";

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">
          Education & Certifications
        </h2>
        <div className="space-y-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">
                    Bachelor of Information Technology
                  </CardTitle>
                  <CardDescription className="text-base">
                    Posts and Telecommunications Institute of Technology (PTIT)
                  </CardDescription>
                  <Badge variant="secondary" className="mt-2">
                    Expected Graduation: 2026
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Specializing in Software Engineering with focus on backend
                development, cloud computing, and distributed systems.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Medal className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">
                    IELTS Certification
                  </CardTitle>
                  <CardDescription className="text-base">
                    International English Language Testing System
                  </CardDescription>
                  <Badge variant="secondary" className="mt-2">
                    Score: 6.5
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Demonstrates proficiency in English communication for technical
                documentation and international collaboration.
              </p>
              {/* Nút xem chứng chỉ */}
              <Button asChild variant="outline">
                <a
                  href="https://drive.google.com/file/d/1sIrz9AZuOWwx_rv8RpkfizF7xx7GGaA1/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
