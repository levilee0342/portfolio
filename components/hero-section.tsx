import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <Avatar className="h-32 w-32 mx-auto border-4 border-primary/20">
          <AvatarImage src="/images/avatar.jpg" alt="Tuan Le Van" />
          <AvatarFallback className="text-3xl font-semibold bg-primary text-primary-foreground">
            Levi
          </AvatarFallback>
        </Avatar>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Tuan Le Van
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance text-primary">
            Levi
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Backend Developer | Java & Spring Boot | Cloud & AI Integration
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button size="lg" asChild>
            <Link href="#contact">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link
              href="https://github.com/levilee0342"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link
              href="https://www.linkedin.com/in/tuan-le-van-459747311/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
