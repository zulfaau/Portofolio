import { motion } from 'motion/react';
import { Code2, Award, Briefcase, Sparkles } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '6+' },
    { icon: Briefcase, label: 'Years Experience', value: '4+' },
    { icon: Sparkles, label: 'Technologies Mastered', value: '10+' },
    { icon: Award, label: 'Certifications Earned', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get to Know More About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and exceptional user experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-[260px] md:max-w-[300px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-20" />
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border bg-card shadow-2xl">
                <img 
                  src="/profile.png" 
                  alt="Zulfa Aulia Hanafi" 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Professional Biography</h3>
            <p className="text-muted-foreground leading-relaxed text-justify">
              Fresh graduate in Informatics from Universitas Gunadarma with a strong focus on Front-End Web Developer. Experienced in developing responsive web applications using React.js, Next.js, JavaScript, and RESTful APIs, with additional knowledge in backend development using PHP, Node.js, and Laravel. Passionate about building user-friendly interfaces, solving problems through technology, and continuously learning modern web development practices.
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify">
              My journey in software development started during my studies, and since then, I have worked on various projects ranging from waste reporting systems and warehouse management applications to responsive web-based platforms. I believe in writing clean, maintainable code while continuously learning new technologies and staying updated with modern development trends.
            </p>

            <div className="space-y-4 pt-4">
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Education</h4>
                <p className="text-muted-foreground font-medium">
                  Bachelor of Informatics
                </p>
                <p className="text-sm text-muted-foreground">Universitas Gunadarma • 2022–2026 (Expected)</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-foreground">Career Goals</h4>
                <p className="text-muted-foreground">
                  Aspiring to grow as a Frontend Web Developer while contributing to innovative projects, improving user experiences, and building impactful digital solutions through technology.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
