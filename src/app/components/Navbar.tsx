import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Code2, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return 'light'; // Default to light mode (original colors)
    }
    return 'light';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    } else {
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 flex justify-center ${
          isScrolled
            ? 'top-4 px-4 md:px-8'
            : 'top-0 px-6 md:px-12 pt-4 pb-2 bg-transparent'
        }`}
      >
        <div
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? 'max-w-5xl bg-card/85 backdrop-blur-md shadow-2xl border border-border/60 rounded-2xl md:rounded-full px-6 py-3'
              : 'max-w-7xl mx-auto px-2 py-1 bg-transparent border-transparent'
          }`}
        >
          <div className="relative flex items-center justify-between md:justify-center">
            {/* Mobile: Typographic Z Logo on left */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex md:hidden items-center cursor-pointer"
              onClick={() => scrollToSection('#hero')}
            >
              <div className="flex items-center">
                <span className="font-extrabold text-2xl tracking-tighter text-foreground font-sans">
                  Z<span className="text-primary text-xl">.</span>
                </span>
              </div>
            </motion.div>

            {/* Desktop: Navigation with Logo Z in the Center */}
            <div className="hidden md:flex items-center gap-8">
              {/* Left links: Home & About */}
              <button
                onClick={() => scrollToSection('#hero')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group cursor-pointer"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </button>
              <button
                onClick={() => scrollToSection('#about')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group cursor-pointer"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </button>

              {/* Center: Minimalist Typographic Monogram (Option 2) */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer mx-4 group flex items-center justify-center select-none"
                onClick={() => scrollToSection('#hero')}
                title="Back to top"
              >
                <div className="relative flex items-center justify-center">
                  <span className="text-2xl font-black tracking-tight font-sans text-foreground transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">
                    Z
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary ml-0.5 self-end mb-1 animate-pulse" />
                </div>
              </motion.div>

              {/* Right links: Portfolio & Contact */}
              <button
                onClick={() => scrollToSection('#portfolio')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group cursor-pointer"
              >
                Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group cursor-pointer"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </button>
            </div>

            {/* Right: Theme Toggle (positioned absolute right on desktop) */}
            <div className="hidden md:flex items-center absolute right-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="px-3.5 py-1.5 rounded-full bg-slate-900 text-white dark:bg-card dark:text-foreground dark:border dark:border-border/60 hover:opacity-90 shadow-sm transition-all duration-300 flex items-center gap-2 cursor-pointer"
                title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="w-3.5 h-3.5 text-slate-200" />
                    <span className="text-xs font-semibold">Dark</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                    <span className="text-xs font-semibold">Light</span>
                  </>
                )}
              </motion.button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-muted/40 text-foreground cursor-pointer flex items-center justify-center"
                title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-muted-foreground transition-all duration-300" />
                ) : (
                  <Sun className="w-5 h-5 text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)] transition-all duration-300" />
                )}
              </motion.button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-card/95 backdrop-blur-lg z-40 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6 p-8 pt-24">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
