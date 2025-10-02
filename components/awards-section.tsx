import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

export function AwardsSection() {
  return (
    <section id="awards" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Awards & Achievements</h2>
        <Card className="hover:shadow-xl transition-shadow border-primary/20">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">🥈 2nd Place - Hack The Limit 2025</CardTitle>
                <CardDescription className="text-base">National Hackathon Competition</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Awarded second place for developing <strong>Nextune</strong>, an innovative music streaming application
              with AI-powered recommendations. The project demonstrated excellence in backend architecture, scalability,
              and integration of modern technologies including microservices, cloud deployment, and machine learning
              capabilities.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
