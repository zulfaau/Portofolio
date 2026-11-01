import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Mail, MapPin, ChevronRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/zulfaau', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Mail, href: 'mailto:zulfaaulia246@gmail.com', label: 'Email' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#faf7ff] dark:bg-card/40 border-t border-[#ede5fd] dark:border-border/60 overflow-hidden pt-14 pb-8">
      {/* Background Organic Purple Curved Waves — matching user design reference */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10">
        {/* Top-left soft wave */}
        <svg
          className="absolute -top-16 -left-20 w-[420px] h-[220px] opacity-70"
          viewBox="0 0 500 250"
          fill="none"
        >
          <path
            d="M0,0 C150,60 280,10 390,90 C460,140 480,210 500,250 L0,250 Z"
            fill="#ede5fd"
            fillOpacity="0.6"
          />
        </svg>

        {/* Bottom-right large curved wave */}
        <svg
          className="absolute -bottom-10 -right-16 w-[560px] h-[280px] opacity-75"
          viewBox="0 0 600 300"
          fill="none"
        >
          <path
            d="M80,300 C180,180 320,240 460,130 C530,70 570,30 600,0 L600,300 Z"
            fill="#e7dbfc"
            fillOpacity="0.7"
          />
        </svg>

        {/* Dot grid decoration bottom-left */}
        <div className="absolute bottom-16 left-6 grid grid-cols-4 gap-1.5 opacity-40">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]" />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Main Content Grid with Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-12 items-start">
          {/* Kolom 1: Brand, Title, Bio, Socials & Doodle (Span 5) */}
          <div className="md:col-span-5 space-y-4">
            {/* Brand Logo & Subtitle — exactly matching user reference */}
            <div>
              <div
                onClick={() => scrollToSection('#hero')}
                className="cursor-pointer font-black text-4xl text-[#2a134a] dark:text-foreground font-sans leading-none tracking-tight flex items-baseline mb-2 select-none"
              >
                Z<span className="text-[#8b5cf6] text-3xl">.</span>
              </div>
              <p className="text-sm font-bold text-[#4c1d95] dark:text-[#c084fc] tracking-tight">
                Web Developer &amp; Programmer
              </p>
            </div>

            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-sm">
              Passionate about building modern, responsive, and user-friendly web applications. Let's create something amazing together!
            </p>

            {/* Social Icons matching rounded card style */}
            <div className="flex items-center gap-2.5 pt-1">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.08 }}
                  className="w-10 h-10 rounded-2xl bg-white/90 dark:bg-card border border-[#ded2f9] dark:border-primary/20 shadow-xs flex items-center justify-center text-[#582b8c] dark:text-foreground hover:text-primary hover:border-primary transition-all duration-300 cursor-pointer"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Divider 1 */}
          <div className="hidden md:block md:col-span-1 border-r border-[#ded2f9]/70 dark:border-border/40 h-full min-h-[180px] my-auto mx-auto w-0" />

          {/* Kolom 2: Quick Links (Span 2) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-extrabold text-sm sm:text-base text-foreground tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-all duration-200 cursor-pointer flex items-center gap-1.5 group font-medium"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#8b5cf6] transform group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Get In Touch + 3D Laptop Illustration (Span 4) */}
          <div className="md:col-span-4 flex flex-col sm:flex-row items-start justify-between gap-4">
            {/* Contact Items */}
            <div className="space-y-3 flex-1 min-w-[200px]">
              <h4 className="font-extrabold text-sm sm:text-base text-foreground tracking-tight mb-3">
                Get In Touch
              </h4>

              {/* Email */}
              <a
                href="mailto:zulfaauliahanafi@gmail.com"
                className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-xl bg-white dark:bg-card border border-[#ded2f9] dark:border-primary/20 flex items-center justify-center shrink-0 text-[#8b5cf6] group-hover:bg-[#8b5cf6] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] text-muted-foreground/75 font-semibold">Email</p>
                  <p className="font-medium truncate text-foreground text-xs">zulfaauliahanafi@gmail.com</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                <div className="w-8 h-8 rounded-xl bg-white dark:bg-card border border-[#ded2f9] dark:border-primary/20 flex items-center justify-center shrink-0 text-[#8b5cf6]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground/75 font-semibold">Location</p>
                  <p className="font-medium text-foreground text-xs">Indonesia</p>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-xl bg-white dark:bg-card border border-[#ded2f9] dark:border-primary/20 flex items-center justify-center shrink-0 text-[#8b5cf6] group-hover:bg-[#8b5cf6] group-hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] text-muted-foreground/75 font-semibold">LinkedIn</p>
                  <p className="font-medium truncate text-foreground text-xs">linkedin.com/in/zulfa-aulia-hanafi</p>
                </div>
              </a>
            </div>

            {/* 3D Laptop Coding Illustration — transparent PNG */}
            <div className="relative shrink-0 w-24 sm:w-32 hidden sm:flex items-center justify-center self-center">
              <img
                src="/footer-laptop.png"
                alt="Developer Laptop Illustration"
                className="w-full h-auto object-contain select-none pointer-events-none hover:scale-105 transition-transform duration-300 drop-shadow-xs"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Centered Copyright */}
        <div className="pt-6 border-t border-[#ded2f9]/80 dark:border-border/60 text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Zulfa Aulia Hanafi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
