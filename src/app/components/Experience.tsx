import { motion } from 'motion/react';
import { Briefcase, Award, GraduationCap } from 'lucide-react';

export default function Experience() {
  const timeline = [
    {
      type: 'work',
      icon: Briefcase,
      color: 'from-blue-600 to-indigo-600',
      title: 'Intern - Logistics Department',
      organization: 'Otoritas Jasa Keuangan (OJK)',
      period: 'Jun 2026 – Aug 2026',
      description:
        'Executed User Acceptance Testing (UAT) and interface evaluation for internal procurement systems at Otoritas Jasa Keuangan (Jakarta, Indonesia).',
      achievements: [
        'Executed User Acceptance Testing (UAT) of the SI-PROJEK procurement system and documented findings',
        'Evaluated the SI-PROJEK interface and proposed UI improvements',
        'Designed 9 flyers, posters, and infographics to socialize SIPENA, SI-PROJEK, and LOGIN features',
      ],
    },
    {
      type: 'work',
      icon: Briefcase,
      color: 'from-purple-500 to-pink-500',
      title: 'AI-Powered Web Application Developer',
      organization: 'Scholarship Information Chatbot Website',
      period: 'May 2026 – Aug 2026',
      description:
        'Developed a web-based scholarship chatbot using Laravel 12, Blade, Alpine.js, and Tailwind CSS, implementing Retrieval-Augmented Generation (RAG).',
      achievements: [
        'Integrated Google Gemini API via OpenRouter with semantic search and vector embeddings using Supabase PostgreSQL',
        'Developed Python scripts for scholarship dataset processing, embedding generation, and data validation',
        'Built a complete admin dashboard for managing scholarship data and user inquiries',
      ],
    },
    {
      type: 'award',
      icon: Award,
      color: 'from-amber-500 to-orange-500',
      title: 'Web Programmer',
      organization: 'SapaCoffee (BNSP Junior Web Programmer)',
      period: 'Jun 2026',
      description:
        'Developed an inventory tracking and management system for coffee supplies as part of the BNSP Junior Web Programmer Competency Assessment.',
      achievements: [
        'Built with Laravel 12, Blade, MySQL, and Tailwind CSS (via Vite) with full product and category management',
        'Implemented stock in/out tracking, user authentication, and interactive UI components with vanilla JavaScript',
        'Exported comprehensive inventory reports in PDF and Excel formats',
      ],
    },
    {
      type: 'work',
      icon: Briefcase,
      color: 'from-teal-500 to-cyan-500',
      title: 'System Analyst',
      organization: 'LAMAS KDW - Kelurahan Kelapa Dua Wetan Website',
      period: 'Aug 2025 – Feb 2026',
      description:
        'Analyzed and modeled municipal web application requirements for community reporting using the RAD methodology.',
      achievements: [
        'Authored the Software Requirements Specification (SRS) with user stories and acceptance criteria',
        'Modeled the system using BPMN, class diagrams, and relational MySQL database design',
        'Designed architecture (Next.js, Laravel REST API, MySQL) and interactive Figma UI prototypes',
        'Engineered tiered reporting workflow with automated email notifications and an AI chatbot',
      ],
    },
    {
      type: 'work',
      icon: Briefcase,
      color: 'from-emerald-500 to-teal-500',
      title: 'Web Developer',
      organization: 'TrashTracker Website',
      period: 'Mar 2025 – Jul 2025',
      description:
        'Developed a waste reporting platform featuring interactive maps with Leaflet.js and GPS-based location detection.',
      achievements: [
        'Built responsive frontend using React.js and integrated with Laravel RESTful APIs and MySQL',
        'Implemented photo evidence uploads via Cloudinary and GPS location tagging',
        'Built an admin dashboard for report verification, status updates, comments, and PDF export',
      ],
    },
    {
      type: 'education',
      icon: GraduationCap,
      color: 'from-violet-500 to-purple-500',
      title: 'Bachelor of Informatics',
      organization: 'Universitas Gunadarma',
      period: '2022 – 2026',
      description:
        'Undergraduate studies in Informatics with strong focus on Front-End Web Development, software engineering, and web technologies.',
      achievements: [
        'Cumulative GPA: 3.79 / 4.00',
        'Completed certifications: Basic Web App Development & JS Programming Language Fundamental',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience &{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and milestones
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div
                  className={`absolute left-8 md:left-1/2 w-16 h-16 -ml-8 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center border-4 border-background shadow-lg`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                <div
                  className={`ml-24 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-24' : 'md:ml-24'
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                        <p className="text-primary font-medium">{item.organization}</p>
                      </div>
                      <span className="px-3 py-1 bg-muted/50 rounded-full text-sm whitespace-nowrap ml-2">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4">{item.description}</p>

                    {item.achievements.length > 0 && (
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-accent mt-1">✓</span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
