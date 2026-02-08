import { motion } from 'framer-motion';
import { Palette, MapPin, Smartphone, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const steps = [
  {
    key: 'step1',
    icon: Palette,
    number: '01',
  },
  {
    key: 'step2',
    icon: MapPin,
    number: '02',
  },
  {
    key: 'step3',
    icon: Smartphone,
    number: '03',
  },
];

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[rgba(45,212,191,0.1)] border border-[rgba(45,212,191,0.2)] text-sm font-medium text-[#2dd4bf] mb-4"
          >
            Process
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('howItWorks.title') as string}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {t('howItWorks.subtitle') as string}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-[#2dd4bf]/0 via-[#2dd4bf]/50 to-[#2dd4bf]/0 origin-left"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="glass-card rounded-2xl p-8 h-full text-center group hover:border-[rgba(45,212,191,0.3)] transition-colors">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.2, type: 'spring' }}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2dd4bf] to-[#06b6d4] flex items-center justify-center"
                    >
                      <span className="text-xs font-bold text-[#0f172a]">{step.number}</span>
                    </motion.div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 pt-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#2dd4bf]/20 to-[#06b6d4]/20 flex items-center justify-center"
                    >
                      <step.icon className="w-10 h-10 text-[#2dd4bf]" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {t(`howItWorks.${step.key}.title`) as string}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {t(`howItWorks.${step.key}.desc`) as string}
                  </p>

                  {/* Check indicator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="mt-6 flex justify-center"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#2dd4bf]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#2dd4bf]" />
                    </div>
                  </motion.div>
                </div>

                {/* Arrow - mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center md:hidden mt-4">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center"
                    >
                      <div className="w-2 h-2 border-r-2 border-b-2 border-[#2dd4bf] rotate-45" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20"
        >
          <div className="glass-card rounded-3xl p-8 lg:p-12 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Demo */}
              <div className="relative flex justify-center">
                <div className="relative">
                  {/* NFC Card */}
                  <motion.div
                    className="w-48 h-72 rounded-2xl glass-card border-2 border-[rgba(45,212,191,0.3)] flex flex-col items-center justify-center p-6"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(45, 212, 191, 0.2)',
                        '0 0 40px rgba(45, 212, 191, 0.4)',
                        '0 0 20px rgba(45, 212, 191, 0.2)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2dd4bf] to-[#06b6d4] flex items-center justify-center mb-4">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#0f172a]" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 8.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
                        <path d="M6 15.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
                        <path d="M13 8.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
                        <path d="M13 15.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
                        <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold text-center">NFC GO Card</p>
                    <p className="text-white/50 text-xs text-center mt-1">Tap with your phone</p>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    className="absolute -right-16 top-1/2 -translate-y-1/2"
                    animate={{
                      x: [0, -10, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="w-24 h-44 rounded-xl bg-[#1a1a2e] border-2 border-[#2a2a3e] p-1">
                      <div className="w-full h-full rounded-lg bg-gradient-to-br from-[#0f172a] to-[#1e293b] relative overflow-hidden">
                        {/* Signal */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          animate={{
                            opacity: [0, 1, 0],
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <div className="w-12 h-12 rounded-full border-2 border-[#2dd4bf]" />
                        </motion.div>
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          animate={{
                            opacity: [0, 1, 0],
                          }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                        >
                          <div className="w-8 h-8 rounded-full border-2 border-[#06b6d4]" />
                        </motion.div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-[#2dd4bf]" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right - Benefits */}
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                  Why businesses love NFC GO
                </h3>
                <div className="space-y-4">
                  {[
                    'Setup in under 5 minutes',
                    'Update content instantly',
                    'Track customer engagement',
                    'No app downloads required',
                    'Works with all modern smartphones',
                  ].map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#2dd4bf]/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#2dd4bf]" />
                      </div>
                      <span className="text-white/80">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
