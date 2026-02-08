import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Zap, Building2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: '2,500+', label: t('hero.stats.customers') },
    { icon: Zap, value: '1M+', label: t('hero.stats.taps') },
    { icon: Building2, value: '15+', label: t('hero.stats.industries') },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        {/* Gradient orb */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(45, 212, 191, 0.12) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Rotating rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-[500px] h-[500px] rounded-full border border-[rgba(45,212,191,0.1)]" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-[400px] h-[400px] rounded-full border border-[rgba(6,182,212,0.08)]" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-[300px] h-[300px] rounded-full border border-[rgba(45,212,191,0.05)]" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(45,212,191,0.1)] border border-[rgba(45,212,191,0.2)] mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#2dd4bf]" />
              <span className="text-sm font-medium text-[#2dd4bf]">
                {t('hero.tagline')}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-white">{t('hero.title') as string}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-lg sm:text-xl text-white/60 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {t('hero.subtitle') as string}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2dd4bf] to-[#06b6d4] text-[#0f172a] font-semibold text-lg hover:shadow-xl hover:shadow-[#2dd4bf]/30 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('hero.cta.primary') as string}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('hero.cta.secondary') as string}
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label as string}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className="text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <stat.icon className="w-4 h-4 text-[#2dd4bf]" />
                    <span className="text-2xl sm:text-3xl font-bold text-white">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm text-white/50">{stat.label as string}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - NFC Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* NFC Card */}
            <motion.div
              className="relative w-64 h-96 sm:w-80 sm:h-[480px]"
              animate={{
                y: [0, -15, 0],
                rotateY: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ perspective: '1000px' }}
            >
              {/* Card glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2dd4bf]/30 to-[#06b6d4]/30 blur-2xl" />
              
              {/* Card body */}
              <div className="relative w-full h-full rounded-3xl glass-card overflow-hidden">
                {/* Card header */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-[#2dd4bf]/20 to-[#06b6d4]/20" />
                
                {/* NFC Symbol */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2dd4bf] to-[#06b6d4] flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(45, 212, 191, 0.3)',
                        '0 0 40px rgba(45, 212, 191, 0.5)',
                        '0 0 20px rgba(45, 212, 191, 0.3)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-10 h-10 text-[#0f172a]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 8.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
                      <path d="M6 15.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
                      <path d="M13 8.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
                      <path d="M13 15.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
                      <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
                    </svg>
                  </motion.div>
                </div>

                {/* Card content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">NFC GO</h3>
                    <p className="text-sm text-white/60 mb-4">Tap to explore</p>
                    
                    {/* Menu preview */}
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          className="h-10 rounded-lg bg-white/5 flex items-center px-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                        >
                          <div className="w-6 h-6 rounded bg-[#2dd4bf]/20 mr-3" />
                          <div className="flex-1 h-2 rounded bg-white/10" />
                          <div className="w-10 h-2 rounded bg-[#2dd4bf]/30" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#2dd4bf]/50" />
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-[#06b6d4]/50" />
              </div>
            </motion.div>

            {/* Phone mockup */}
            <motion.div
              className="absolute -right-4 sm:right-0 bottom-0 w-32 h-56 sm:w-40 sm:h-72"
              animate={{
                y: [0, 10, 0],
                rotateZ: [0, 3, 0, -3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            >
              <div className="relative w-full h-full rounded-2xl bg-[#1a1a2e] border-4 border-[#2a2a3e] overflow-hidden shadow-2xl">
                {/* Phone screen */}
                <div className="absolute inset-1 rounded-xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] overflow-hidden">
                  {/* Signal waves */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    animate={{
                      scale: [1, 1.5, 2],
                      opacity: [0.8, 0.4, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                  >
                    <div className="w-16 h-16 rounded-full border-2 border-[#2dd4bf]" />
                  </motion.div>
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    animate={{
                      scale: [1, 1.5, 2],
                      opacity: [0.8, 0.4, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeOut',
                      delay: 0.5,
                    }}
                  >
                    <div className="w-16 h-16 rounded-full border-2 border-[#06b6d4]" />
                  </motion.div>
                  
                  {/* Center dot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#2dd4bf] to-[#06b6d4]" />
                  
                  {/* Success message */}
                  <motion.div
                    className="absolute bottom-4 left-2 right-2 py-2 px-3 rounded-lg bg-[#2dd4bf]/20 border border-[#2dd4bf]/30"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <p className="text-[10px] text-[#2dd4bf] text-center font-medium">
                      Connected!
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute -left-8 top-1/4 w-12 h-12 rounded-xl glass-card flex items-center justify-center"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Zap className="w-6 h-6 text-[#2dd4bf]" />
            </motion.div>

            <motion.div
              className="absolute right-8 top-1/3 w-10 h-10 rounded-lg glass-card flex items-center justify-center"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -10, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
              <Sparkles className="w-5 h-5 text-[#06b6d4]" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
