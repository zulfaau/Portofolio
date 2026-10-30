import { motion } from 'motion/react';
import { Code2, Database, Layout, Server, Smartphone, GitBranch } from 'lucide-react';

export default function TechStack() {
  const technologies = {
    frontend: {
      title: 'Front-End',
      icon: Layout,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'JavaScript', level: 92 },
        { name: 'React.js', level: 95 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'HTML & CSS', level: 95 },
        { name: 'Figma', level: 85 },
      ],
    },
    backend: {
      title: 'Back-End',
      icon: Server,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'PHP & Laravel', level: 90 },
        { name: 'Node.js & Express.js', level: 85 },
        { name: 'Python', level: 82 },
        { name: 'RESTful API', level: 92 },
      ],
    },
    database: {
      title: 'Database',
      icon: Database,
      color: 'from-teal-500 to-cyan-500',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'Supabase', level: 85 },
      ],
    },
    tools: {
      title: 'Tools & AI / Libraries',
      icon: GitBranch,
      color: 'from-violet-500 to-purple-500',
      skills: [
        { name: 'Git & GitHub', level: 92 },
        { name: 'Leaflet.js', level: 88 },
        { name: 'Cloudinary', level: 86 },
        { name: 'Gemini API (RAG)', level: 90 },
      ],
    },
  };

  return (
    <section id="tech" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full mb-4">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(technologies).map(([key, category], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}
                >
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
