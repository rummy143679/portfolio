import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    name: "Home",
    href: "#",
  },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuClosed, setIsMobileMenuClosed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleCloseMenu = () => {
    setIsMobileMenuClosed(true);
    console.log("closed")

    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsMobileMenuClosed(false);
    }, 300); // match animation duration
  };  

  const handleContactMe = () => {
    window.location.href = "#contact";
  }


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
      <nav className="conatiner mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-light hover:text-primary"
        >
          Matteda Ramesh<span className="text-primary">.</span>
        </a>
        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button size="sm" onClick={() => handleContactMe()}>Contact me</Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <X size={24} onClick={() => handleCloseMenu()} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile menu */}
      {(isMobileMenuOpen || isMobileMenuClosed) && (
        <div className={`md:hidden glass-strong ${isMobileMenuClosed ? "animation-slide-up" : "animation-fade-in"}`}>
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => handleCloseMenu()}
                className="text-lg textmuted-foreground hover:text-foreground py-2"
              >
                {link.name}
              </a>
            ))}
            <Button size="sm" handleCloseMenu = {handleCloseMenu}>
              Contact me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
