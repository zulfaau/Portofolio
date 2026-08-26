import { motion } from 'motion/react';
import { Briefcase, Award, GraduationCap } from 'lucide-react';

export default function Experience() {
  const timeline = [
    {
      type: 'work',
      icon: Briefcase,
      color: 'from-purple-500 to-pink-500',
      title: 'Senior Frontend Developer',
      organization: 'Tech Solutions Inc.',
      period: '2024 - Present',
      description:
        'Leading development of enterprise web applications using React and Laravel. Managing a team of developers and implementing best practices.',
      achievements: [
        'Reduced page load time by 60% through optimization',
        'Implemented CI/CD pipeline reducing deployment time by 80%',
        'Mentored junior developers',
      ],
    },
    {
      type: 'work',
      icon: Briefcase,
      color: 'from-pink-500 to-rose-500',
      title: 'Frontend Developer',
      organization: 'Digital Agency Co.',
      period: '2022 - 2024',
      description:
        'Developed custom web applications for various clients. Worked with modern JavaScript frameworks and PHP backend systems.',
      achievements: [
        'Successfully delivered 15+ client projects',
        'Improved code quality with automated testing',
        'Integrated payment gateways and third-party APIs',
      ],
    },
    {
      type: 'work',
      icon: Briefcase,
      color: 'from-teal-500 to-cyan-500',
      title: 'Junior Web Developer (Internship)',
      organization: 'StartUp Ventures',
      period: '2021 - 2022',
      description:
        'Assisted in building responsive web interfaces and maintaining existing codebase. Learned industry best practices and agile methodologies.',
      achievements: [
        'Contributed to 10+ production releases',
        'Fixed 50+ bugs and implemented new features',
        'Participated in code reviews and team standups',
      ],
    },
    {
      type: 'education',
      icon: GraduationCap,
      color: 'from-violet-500 to-purple-500',
      title: 'Bachelor of Science in Computer Science',
      organization: 'University of Technology',
      period: '2018 - 2022',
      description:
        'Comprehensive computer science program with focus on software engineering, algorithms, and web technologies.',
      achievements: [
        'Graduated with Honors (GPA: 3.8/4.0)',
        'Dean\'s List all semesters',
        'Led university coding club',
      ],
    },
    {
      type: 'award',
      icon: Award,
      color: 'from-amber-500 to-orange-500',
      title: 'Best Developer Award',
      organization: 'Tech Solutions Inc.',
      period: '2025',
      description:
        'Recognized for outstanding contribution to company projects and innovative solutions.',
      achievements: [],
    },
    {
      type: 'award',
      icon: Award,
      color: 'from-fuchsia-500 to-pink-500',
      title: 'Hackathon Winner',
      organization: 'National Code Challenge',
      period: '2024',
      description:
        'First place in national hackathon for developing an AI-powered accessibility tool.',
      achievements: [],
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
