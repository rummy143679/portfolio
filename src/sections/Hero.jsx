import React from "react";
import Button from "@/components/Button";
import AnimatedBorderButton from "@/components/AnimatedBorderButton";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const skills = [
  "JavaScript",
  "jQuery",
  "React.js",
  "Bootstrap",
  "Tailwind CSS",
  "Redux",
  "Rest API",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Firebase",
  "Jwt",
  "TypeScript",
  "Docker",
  "git",
  "Postman",
  "Nelify",
];

function Hero() {
  const [isCvDownloading, setIsCvDownloading] = React.useState(false);

  const handleDownloadCV = () => {
    console.log("Download CV clicked");
    const link = document.createElement("a");
    link.href = "/Matteda_Ramesh_Resume.pdf";
    link.download = "Matteda_Ramesh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsCvDownloading(true);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/*Bg Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/*green dots*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-50"
            style={{
              backgroundColor: `#20B2A6`, // Light Sea Green
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/*Content*/}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column -Text Content */}
          <div className="space-y-8">
            <div className="animation-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                JavaScript Developer * MERN Specialist
              </span>
            </div>

            {/* HeadLine */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animation-fade-in animation-delay-100">
                Crafting
                <span className="text-primary glow-text"> Digital</span>
                <br />
                Experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  Code and Creativity
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animation-fade-in animation-delay-300">
                Hi, I'm Matteda Ramesh -- a software engineer specializing in
                React, Node.js, MongoDB, and MySql. I built Scalable, Performant
                web applications that users love.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animation-fade-in animation-delay-300">
              <Button
                size="lg"
                onClick={() => (window.location.href = "#contact")}
              >
                Contact me <ArrowRight className="w-5 h-5" />
              </Button>
              {isCvDownloading ? (
                <AnimatedBorderButton>Downloaded</AnimatedBorderButton>
              ) : (
                <AnimatedBorderButton onClick={() => handleDownloadCV()}>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 animation-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: FaGithub, href: "https://github.com/rummy143679" },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/mattedaramesh/",
                },
                {
                  icon: SiLeetcode,
                  href: "https://leetcode.com/u/1gAvRrUHZ1/",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transituon-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {/* right column - Image */}
          <div className="relative animation-fade-in animation-delay-300">
            {/*profile image*/}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animatate-pluse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-img.png"
                  alt="Matteda Ramesh"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                {/* floting badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">
                      {" "}
                      Available for work
                    </span>
                  </div>
                </div>
                {/* States badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">2</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div className="mt-20 animation-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marque">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x1/2 animattion-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
