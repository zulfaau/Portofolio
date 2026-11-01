import { motion } from 'motion/react';
import { Code2, Award, Briefcase, Sparkles } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '5+' },
    { icon: Briefcase, label: 'Years Experience', value: '4+' },
    { icon: Sparkles, label: 'Technologies Mastered', value: '10+' },
    { icon: Award, label: 'Certifications Earned', value: '10+' },
  ];

  return (
    <section id="about" className="pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold rounded-full mb-3">
            About Me
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground">
            Get to Know More About{' '}
            <span className="text-[#a78bfa] dark:text-[#c084fc]">Me</span>
          </h2>
        </motion.div>

        {/* Compact container for this section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12">
            {/* Photo — 300x400px fixed */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <div className="relative" style={{ width: '300px', height: '400px' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-20" />
                <div
                  className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl"
                  style={{ width: '300px', height: '400px' }}
                >
                  <img
                    src="/profile.png"
                    alt="Zulfa Aulia Hanafi"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>

            {/* Text — flex-1, precise typography */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <p
                className="text-muted-foreground text-justify"
                style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}
              >
                Informatics graduate from Universitas Gunadarma with a strong focus on web development. Proficient in building responsive, interactive, and user-friendly web interfaces using React.js and JavaScript. Experienced in implementing authentication flows and collaborating with back-end technologies such as PHP, Laravel, and Node.js.
              </p>
              <p
                className="text-muted-foreground text-justify"
                style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}
              >
                Also experienced in developing full-stack applications, including admin dashboards and an AI-powered chatbot using Retrieval-Augmented Generation (RAG). My journey in software development has spanned across building real-world projects such as waste management applications, coffee inventory tracking, and municipal government portals. I focus on writing clean, scalable code and delivering seamless user interfaces.
              </p>

              <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Education</h4>
                  <p
                    className="text-muted-foreground font-medium"
                    style={{ fontSize: '16px', lineHeight: '1.8' }}
                  >
                    Bachelor of Informatics (GPA: 3.79 / 4.00)
                  </p>
                  <p
                    className="text-muted-foreground"
                    style={{ fontSize: '16px', lineHeight: '1.8' }}
                  >
                    Universitas Gunadarma • 2022 – 2026
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-1">Career Goals</h4>
                  <p
                    className="text-muted-foreground"
                    style={{ fontSize: '16px', lineHeight: '1.8' }}
                  >
                    Aspiring to build a career in web development and programming, while continuously expanding my technical expertise and contributing to innovative digital solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
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
