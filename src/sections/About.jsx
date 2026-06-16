import React from "react";
import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I write clean, maintainable code that follows best practices and design patterns.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and efficiency to ensure fast load times and smooth interactions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Work Closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "I think outside the box to deliver creative and effective solutions to complex problems.",
  },
];

function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="conatiner mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-2 items-center">
          {/* left column */}
          <div className="space-y-0">
            <div className="animation-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animation-fade-in animation-delay-100 text-secondary-foreground">
              Build the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>
            <div className="space-y-8 text-muted-foreground animation-fade-in animation-delay-200">
              <p>
                I'm a passionate developer with a focus on creating efficient
                and scalable web applications. With a strong foundation in
                computer science and a keen eye for detail, I strive to deliver
                high-quality code that exceeds expectations.
              </p>
              <p>
                I specialize in modern web technologies and have a proven track
                record of delivering successful projects on time and within
                budget.
              </p>
              <p>
                When I`m not coding, you can find me exploring new technologies
                or contributing to the open-source community.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 my-4 glow-border animation-fade-in animated-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My passion is to create digital experience that are not just
                functional, but truly delightfull - product the user love to use
                and developers love to maintain"
              </p>
            </div>
          </div>
          {/* right column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 animation-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
