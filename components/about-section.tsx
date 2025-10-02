export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">About Me</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a final-year IT student at Posts and Telecommunications Institute of Technology (PTIT), specializing in
            backend development with a strong focus on building scalable, efficient systems. My expertise lies in Java
            and Spring Boot, complemented by hands-on experience in cloud deployment on AWS EC2, containerization with
            Docker, and implementing CI/CD pipelines.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mt-4">
            I'm passionate about integrating cutting-edge AI technologies into backend systems and continuously
            exploring new ways to optimize performance and user experience. With strong problem-solving skills and a
            collaborative mindset, I thrive in team environments where I can contribute to innovative solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
