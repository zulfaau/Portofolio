import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Instagram, Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/zulfaau', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Mail, href: 'mailto:zulfaaulia246@gmail.com', label: 'Email' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-background -z-10" />

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full mb-4">
              Frontend Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Hi, I'm{' '}
            <span className="text-foreground">
              Zulfa Aulia Hanafi
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground leading-relaxed text-justify"
          >
            Fresh graduate in Informatics from Universitas Gunadarma with a strong focus on Front-End Web Developer. Experienced in developing responsive web applications using React.js, Next.js, JavaScript, and RESTful APIs, with additional knowledge in backend development using PHP, Node.js, and Laravel. Passionate about building user-friendly interfaces, solving problems through technology, and continuously learning modern web development practices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              View Portfolio
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="CV_Zulfa.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 pt-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="w-12 h-12 bg-card/50 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:border-transparent transition-all duration-300 group"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="relative w-full max-w-[260px] md:max-w-[300px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-3xl opacity-30 animate-pulse" />

            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border-4 border-accent/30 shadow-2xl bg-card">
              <img 
                src="/profile.png" 
                alt="Zulfa Aulia Hanafi" 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-secondary to-accent rounded-full blur-xl opacity-50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
