import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage, type Language } from '@/context/LanguageContext';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'hy', label: 'Հայերեն', flag: '🇦🇲' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.features', href: '#features' },
    { key: 'nav.industries', href: '#industries' },
    { key: 'nav.howItWorks', href: '#how-it-works' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass border-b border-[rgba(45,212,191,0.1)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src="/logo.jpg"
                alt="NFC GO"
                className="h-10 w-auto rounded-lg"
              />
              <span className="hidden sm:inline text-white font-bold text-lg">NFC GO</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {t(item.key) as string}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2dd4bf] to-[#06b6d4] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Language Selector & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Dropdown */}
              <div className="relative">
                <motion.button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Globe className="w-4 h-4 text-[#2dd4bf]" />
                  <span className="text-white/70 text-sm">{languages.find((l) => l.code === language)?.label}</span>
                </motion.button>

                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 py-2 rounded-xl glass-card min-w-[140px]"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsLangMenuOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2 hover:bg-white/5 transition-colors ${
                            language === lang.code
                              ? 'text-[#2dd4bf]'
                              : 'text-white/70'
                          }`}
                        >
                          <span>{lang.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#2dd4bf] to-[#06b6d4] text-[#0f172a] font-semibold text-sm hover:shadow-lg hover:shadow-[#2dd4bf]/25 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('hero.cta.primary') as string}
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 text-white"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-[280px] glass-card border-l border-[rgba(45,212,191,0.1)]"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
            >
              <div className="p-6 pt-20">
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.key}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className="text-lg font-medium text-white/70 hover:text-white transition-colors py-2"
                    >
                      {t(item.key) as string}
                    </a>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-sm text-white/50 mb-4">Language / Язык / Լեզու</p>
                  <div className="flex flex-col gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          language === lang.code
                            ? 'bg-[#2dd4bf]/20 text-[#2dd4bf]'
                            : 'bg-white/5 text-white/70 hover:bg-white/10'
                        }`}
                      >
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="mt-8 block w-full px-5 py-3 rounded-lg bg-gradient-to-r from-[#2dd4bf] to-[#06b6d4] text-[#0f172a] font-semibold text-center"
                  whileTap={{ scale: 0.98 }}
                >
                  {t('hero.cta.primary') as string}
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
