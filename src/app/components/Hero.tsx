import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Instagram, Download, ArrowRight, Rocket, ChevronDown } from 'lucide-react';

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/zulfaau', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Mail, href: 'mailto:zulfaaulia246@gmail.com', label: 'Email' },
  ];

  return (
    <section id="hero" className="relative min-h-screen lg:h-screen flex flex-col justify-center overflow-hidden pt-16 pb-14">
      {/* Background Organic Purple Curved Shapes — matching reference exactly */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden select-none">

        {/* TOP-RIGHT large organic blob — the bold purple shape on top-right from reference */}
        <svg
          className="absolute -top-16 -right-20 w-[520px] lg:w-[680px] h-[520px] lg:h-[680px]"
          viewBox="0 0 700 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M520,30 C640,80 710,220 700,390 C690,560 580,660 440,690 C300,720 200,640 160,520 C120,400 180,300 280,240 C380,180 400,100 440,60 C480,20 490,10 520,30 Z"
            fill="#D8C5FA"
            fillOpacity="0.85"
          />
        </svg>

        {/* TOP-RIGHT secondary lighter layer — softer shape slightly inside */}
        <svg
          className="absolute top-0 -right-10 w-[420px] lg:w-[560px] h-[420px] lg:h-[560px]"
          viewBox="0 0 600 600"
          fill="none"
        >
          <path
            d="M430,10 C540,55 610,180 600,340 C590,500 490,590 370,600 C250,610 160,540 140,420 C120,300 180,220 270,170 C360,120 380,60 415,25 Z"
            fill="#E8D9FD"
            fillOpacity="0.75"
          />
        </svg>

        {/* TOP-LEFT organic shape behind </>  watermark — visible curved lavender mass */}
        <svg
          className="absolute -top-28 -left-28 w-[420px] lg:w-[520px] h-[420px] lg:h-[520px]"
          viewBox="0 0 550 550"
          fill="none"
        >
          <path
            d="M220,30 C340,10 460,100 490,230 C520,360 450,470 340,500 C230,530 110,460 60,350 C10,240 40,110 140,55 C170,40 195,35 220,30 Z"
            fill="#DDD0FA"
            fillOpacity="0.70"
          />
        </svg>

        {/* BOTTOM-RIGHT large curved wave sitting under/behind the photo card */}
        <svg
          className="absolute -bottom-24 -right-16 w-[520px] lg:w-[650px] h-[380px] lg:h-[460px]"
          viewBox="0 0 650 460"
          fill="none"
        >
          <path
            d="M50,350 C140,280 260,310 400,250 C540,190 600,100 650,40 L650,460 L0,460 Z"
            fill="#D8C5FA"
            fillOpacity="0.75"
          />
        </svg>

        {/* Watermark code icon on top-left */}
        <div className="absolute top-20 left-6 md:left-14 text-[#7c3aed]/30 dark:text-primary/30 select-none font-mono text-7xl md:text-8xl font-black tracking-tighter">
          &lt;/&gt;
        </div>

        {/* Playful dot grid pattern bottom-left */}
        <div className="absolute bottom-6 left-8 md:left-16 grid grid-cols-4 gap-2 opacity-60">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="w-2.5 h-2.5 rounded-full bg-[#8b5cf6]/70 dark:bg-primary/60" />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-14">
        {/* Left Column: Text & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:max-w-xl space-y-2.5 sm:space-y-3"
        >
          {/* Capsule Badge with Waving Hand & Name + Soft Shadow Glow */}
          <div className="relative inline-block">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/95 dark:bg-card/90 border border-[#c4b5fd]/80 shadow-md shadow-[#8b5cf6]/15 rounded-full backdrop-blur-md">
              <span className="text-sm animate-bounce">👋</span>
              <span className="text-xs sm:text-sm font-semibold text-foreground">
                Hello, I'm <span className="text-[#8b5cf6] dark:text-[#c084fc] font-bold">Zulfa Aulia Hanafi</span>
              </span>
            </div>

            {/* Sparkle Doodle rays above badge exactly like reference */}
            <div className="absolute -top-2.5 -right-2 flex gap-1 rotate-12 pointer-events-none opacity-90">
              <span className="w-1 h-3.5 bg-[#8b5cf6] rounded-full transform -rotate-12" />
              <span className="w-1 h-4 bg-[#a78bfa] rounded-full" />
              <span className="w-1 h-3.5 bg-[#8b5cf6] rounded-full transform rotate-12" />
            </div>
          </div>

          {/* Large Bold Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-foreground"
          >
            Web Developer &{' '}
            <span className="text-[#a78bfa] dark:text-[#c084fc]">
              Programmer.
            </span>
          </motion.h1>

          {/* Bio text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-justify max-w-xl"
          >
            Passionate about building modern, responsive, and user-friendly web applications. Skilled in React.js, JavaScript, and full-stack development, with experience in API integration and backend technologies.
          </motion.p>

          {/* Role Pill Badges matching user reference */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap items-center gap-2 pt-0.5"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card/90 dark:bg-card/70 border border-primary/20 shadow-xs backdrop-blur-sm text-xs font-medium text-foreground hover:border-[#a78bfa]/50 transition-colors">
              <span className="text-xs">💻</span>
              <span>Web Developer</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card/90 dark:bg-card/70 border border-primary/20 shadow-xs backdrop-blur-sm text-xs font-medium text-foreground hover:border-[#a78bfa]/50 transition-colors">
              <span className="font-mono text-[#a78bfa] font-bold text-xs">&lt;/&gt;</span>
              <span>Programmer</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card/90 dark:bg-card/70 border border-primary/20 shadow-xs backdrop-blur-sm text-xs font-medium text-foreground hover:border-[#a78bfa]/50 transition-colors">
              <span className="text-xs">🚀</span>
              <span>Full-Stack Developer</span>
            </div>
          </motion.div>

          {/* Action Buttons (View My Projects & Download CV) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <motion.button
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-2.5 bg-[#a78bfa] hover:bg-[#9370db] text-white font-medium rounded-full shadow-md shadow-[#a78bfa]/30 hover:shadow-[#a78bfa]/50 transition-all duration-300 flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
            >
              <Rocket className="w-4 h-4 text-white" />
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4 ml-0.5 text-white" />
            </motion.button>

            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="CV_Zulfa.pdf"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-2.5 bg-white dark:bg-card text-[#8b5cf6] dark:text-[#c084fc] hover:bg-purple-50/60 dark:hover:bg-purple-950/40 border-2 border-[#a78bfa] dark:border-[#a78bfa]/70 font-medium rounded-full shadow-xs hover:shadow-sm transition-all duration-300 flex items-center gap-2 cursor-pointer text-xs sm:text-sm"
            >
              <Download className="w-4 h-4 text-[#8b5cf6] dark:text-[#c084fc]" />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          {/* Tech Stack Bar matching user reference */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-2.5 pt-1 select-none"
          >
            <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground/80">
              <span className="w-3 h-[2px] bg-primary/60 rounded-full" />
              <span>Tech Stack:</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* HTML5 */}
              <div
                title="HTML5"
                className="w-9 h-9 rounded-xl bg-card border border-border/80 p-1.5 flex items-center justify-center shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-orange-500/50 transition-all duration-300 group cursor-pointer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML5"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>

              {/* CSS3 */}
              <div
                title="CSS3"
                className="w-9 h-9 rounded-xl bg-card border border-border/80 p-1.5 flex items-center justify-center shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS3"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>

              {/* JavaScript */}
              <div
                title="JavaScript"
                className="w-9 h-9 rounded-xl bg-card border border-border/80 p-1.5 flex items-center justify-center shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-yellow-400/60 transition-all duration-300 group cursor-pointer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>

              {/* React.js */}
              <div
                title="React.js"
                className="w-9 h-9 rounded-xl bg-card border border-border/80 p-1.5 flex items-center justify-center shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-cyan-400/60 transition-all duration-300 group cursor-pointer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React.js"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>

              {/* PHP */}
              <div
                title="PHP"
                className="w-9 h-9 rounded-xl bg-card border border-border/80 p-1.5 flex items-center justify-center shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-indigo-400/60 transition-all duration-300 group cursor-pointer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                  alt="PHP"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>

              {/* Laravel */}
              <div
                title="Laravel"
                className="w-9 h-9 rounded-xl bg-card border border-border/80 p-1.5 flex items-center justify-center shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-red-500/60 transition-all duration-300 group cursor-pointer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
                  alt="Laravel"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>

              {/* MySQL */}
              <div
                title="MySQL"
                className="w-9 h-9 rounded-xl bg-card border border-border/80 p-1.5 flex items-center justify-center shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-blue-600/60 transition-all duration-300 group cursor-pointer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  alt="MySQL"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Exact Hero Portrait Card from Reference */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="shrink-0 relative flex items-center justify-center py-0"
        >
          <div className="relative w-[230px] sm:w-[250px] lg:w-[270px] aspect-[4/5] flex items-center justify-center">
            {/* Background Layer 1: Soft lavender organic squircle (tilted right) */}
            <div className="absolute inset-0 bg-[#e0d4fc]/60 dark:bg-primary/20 rounded-[2.4rem] transform rotate-6 scale-105 pointer-events-none" />

            {/* Background Layer 2: Pastel purple card with soft border (tilted slightly left) */}
            <div className="absolute inset-0 bg-[#ede5fd]/80 dark:bg-card/90 rounded-[2.2rem] border-2 border-primary/25 shadow-xl transform -rotate-3 pointer-events-none" />

            {/* Doodle rays / Sunburst at top-right exactly like the image */}
            <div className="absolute -top-2.5 -right-1.5 flex gap-1.5 rotate-12 pointer-events-none z-30">
              <span className="w-1 h-4 bg-[#8b5cf6] rounded-full transform -rotate-25 shadow-xs" />
              <span className="w-1 h-5 bg-[#8b5cf6] rounded-full transform -rotate-6 shadow-xs" />
              <span className="w-1 h-3.5 bg-[#8b5cf6] rounded-full transform rotate-18 shadow-xs" />
            </div>

            {/* Main Photo Card: Rounded card fitting the full portrait */}
            <div className="relative z-10 w-[92%] h-[92%] rounded-[2rem] overflow-hidden border-[5px] border-white dark:border-slate-800 shadow-xl bg-white dark:bg-card">
              <img
                src="/profile.png"
                alt="Zulfa Aulia Hanafi"
                className="w-full h-full object-cover object-[center_70%] transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll to explore indicator matching reference */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer group select-none z-20"
      >
        {/* Animated Mouse Icon */}
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/60 group-hover:border-[#a78bfa] flex justify-center pt-1.5 transition-colors duration-300">
          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1 h-2 rounded-full bg-muted-foreground/80 group-hover:bg-[#a78bfa] transition-colors duration-300"
          />
        </div>

        {/* Text */}
        <span className="text-[11px] sm:text-xs font-medium tracking-wide text-muted-foreground/75 group-hover:text-[#a78bfa] transition-colors duration-300">
          Scroll to explore
        </span>

        {/* Bouncing Arrow */}
        <motion.div
          animate={{
            y: [0, 3, 0],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown className="w-3.5 h-3.5 text-muted-foreground/70 group-hover:text-[#a78bfa] transition-colors duration-300 -mt-0.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
