import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'Tech Startup Inc.',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Working with Sarah was an absolute pleasure. The attention to detail and technical expertise resulted in a product that exceeded our expectations. Highly recommended!',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'Digital Solutions',
      avatar: '👨‍💻',
      rating: 5,
      text: 'Exceptional work! Sarah delivered our e-commerce platform on time and within budget. The code quality and performance optimizations were outstanding.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Creative Agency',
      avatar: '👩‍🎨',
      rating: 5,
      text: 'The portfolio website Sarah built for our agency has received numerous compliments from our clients. Professional, responsive, and visually stunning!',
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Founder',
      company: 'SaaS Ventures',
      avatar: '👨‍🚀',
      rating: 5,
      text: 'Sarah transformed our complex requirements into an elegant, scalable solution. Great communication throughout the project and delivered exceptional results.',
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'CTO',
      company: 'FinTech Solutions',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Impressive technical skills combined with strong problem-solving abilities. Sarah tackled challenging integration issues with ease and professionalism.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from satisfied clients and collaborators
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 relative">
                  <Quote className="w-16 h-16 text-primary/20 absolute top-8 left-8" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl">
                        {testimonials[currentIndex].avatar}
                      </div>

                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-1">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-primary font-medium">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>

                      <div className="flex gap-1">
                        {Array.from({ length: testimonials[currentIndex].rating }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-500 text-yellow-500"
                            />
                          )
                        )}
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed italic">
                      "{testimonials[currentIndex].text}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-primary to-secondary'
                    : 'w-2 bg-muted hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
