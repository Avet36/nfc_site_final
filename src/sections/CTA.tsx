import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(45, 212, 191, 0.15) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2dd4bf]/20 to-[#06b6d4]/20 mb-8"
          >
            <Zap className="w-8 h-8 text-[#2dd4bf]" />
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('cta.title') as string}
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle') as string}
          </p>

          {/* CTA Button */}
          <motion.button
            disabled
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2dd4bf] to-[#06b6d4] text-[#0f172a] font-semibold text-lg hover:shadow-xl hover:shadow-[#2dd4bf]/30 transition-all opacity-50 cursor-not-allowed"
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 1 }}
          >
            {t('cta.button') as string}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
