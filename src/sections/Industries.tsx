import { motion } from 'framer-motion';
import { UtensilsCrossed, Hotel, Wine, Sparkles, Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const industries = [
  {
    key: 'restaurants',
    icon: UtensilsCrossed,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    color: 'from-orange-500 to-red-500',
  },
  {
    key: 'hotels',
    icon: Hotel,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    key: 'bars',
    icon: Wine,
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80',
    color: 'from-purple-500 to-pink-500',
  },
  {
    key: 'salons',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    color: 'from-rose-400 to-pink-500',
  },
];

export function Industries() {
  const { t } = useLanguage();

  return (
    <section id="industries" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[rgba(45,212,191,0.03)] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[rgba(6,182,212,0.03)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Industries
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('industries.title') as string}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {t('industries.subtitle') as string}
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl glass-card h-full">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={industry.image}
                    alt={t(`industries.${industry.key}.title`) as string}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-6 lg:p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} p-0.5 mb-4`}>
                    <div className="w-full h-full rounded-xl bg-[#0f172a]/90 flex items-center justify-center">
                      <industry.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                    {t(`industries.${industry.key}.title`) as string}
                  </h3>
                  <p className="text-white/70 mb-6 flex-grow">
                    {t(`industries.${industry.key}.desc`) as string}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(t('industries.features') as string[]).map((feature, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70"
                      >
                        <Check className="w-3 h-3 text-[#2dd4bf]" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="#pricing"
                    className="inline-flex items-center gap-2 text-[#2dd4bf] font-medium group/link"
                    whileHover={{ x: 5 }}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </motion.a>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-5`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 mb-4">
            Not sure if NFC GO fits your business?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact us for a free consultation
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
