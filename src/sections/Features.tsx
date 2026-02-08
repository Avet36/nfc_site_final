import { motion } from 'framer-motion';
import { 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  BarChart3, 
  Leaf, 
  Lock,
  QrCode,
  Smartphone,
  X
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const features = [
  {
    icon: Zap,
    key: 'instant',
    color: 'from-[#2dd4bf] to-[#06b6d4]',
  },
  {
    icon: ShieldCheck,
    key: 'hygienic',
    color: 'from-[#06b6d4] to-[#3b82f6]',
  },
  {
    icon: Sparkles,
    key: 'stylish',
    color: 'from-[#8b5cf6] to-[#a855f7]',
  },
  {
    icon: BarChart3,
    key: 'analytics',
    color: 'from-[#f59e0b] to-[#f97316]',
  },
  {
    icon: Leaf,
    key: 'eco',
    color: 'from-[#10b981] to-[#22c55e]',
  },
  {
    icon: Lock,
    key: 'secure',
    color: 'from-[#ef4444] to-[#f97316]',
  },
];

export function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
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
            NFC vs QR
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('features.title') as string}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {t('features.subtitle') as string}
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* QR Code Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-8 opacity-60">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center">
                  <QrCode className="w-7 h-7 text-white/50" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white/70">QR Codes</h3>
                  <p className="text-sm text-white/40">Traditional technology</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {[
                  'Need to open camera app',
                  'Must scan from right angle',
                  'Can be damaged or dirty',
                  'Requires good lighting',
                  'No analytics available',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/50">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Disabled overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-black/20" />
          </motion.div>

          {/* NFC Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-8 border-[rgba(45,212,191,0.3)] glow-teal">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2dd4bf]/20 to-[#06b6d4]/20 flex items-center justify-center">
                  <Smartphone className="w-7 h-7 text-[#2dd4bf]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">NFC Technology</h3>
                  <p className="text-sm text-[#2dd4bf]">Next generation</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {[
                  'Just tap - no app needed',
                  'Works from any angle',
                  'Durable and waterproof',
                  'Works in complete darkness',
                  'Full analytics dashboard',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-[#2dd4bf]/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#2dd4bf]" />
                      </div>
                    </motion.div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-[rgba(45,212,191,0.3)]">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-0.5 mb-4`}>
                  <div className="w-full h-full rounded-xl bg-[#0f172a] flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t(`features.${feature.key}.title`) as string}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {t(`features.${feature.key}.desc`) as string}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
