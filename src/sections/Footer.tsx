import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, MessageCircle, Facebook, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const productLinks = [
    { key: 'footer.links.features', href: '#features' },
    { key: 'footer.links.api', href: '#' },
  ];

  const companyLinks = [
    { key: 'footer.links.about', href: '#' },
    { key: 'footer.links.blog', href: '#' },
    { key: 'footer.links.careers', href: '#' },
    { key: 'footer.links.contact', href: '#' },
  ];

  const legalLinks = [
    { key: 'footer.links.privacy', href: '#' },
    { key: 'footer.links.terms', href: '#' },
    { key: 'footer.links.cookies', href: '#' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
    { icon: Send, href: '#', label: 'Telegram' },
  ];

  return (
    <footer id="contact" className="relative pt-24 pb-8 overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(45,212,191,0.3)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpg"
                alt="NFC GO"
                className="h-12 w-auto rounded-lg"
              />
            </div>
            <p className="text-white/60 mb-6 max-w-sm">
              {t('footer.description') as string}
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="mailto:avax403@gmail.com"
                className="flex items-center gap-3 text-white/60 hover:text-[#2dd4bf] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">avax403@gmail.com</span>
              </a>
              <a
                href="tel:+37441690699"
                className="flex items-center gap-3 text-white/60 hover:text-[#2dd4bf] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+374 41 690 699</span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Yerevan, Armenia</span>
              </div>
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">
              {t('footer.links.product') as string}
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#2dd4bf] transition-colors"
                  >
                    {t(link.key) as string}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">
              {t('footer.links.company') as string}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#2dd4bf] transition-colors"
                  >
                    {t(link.key) as string}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">
              {t('footer.links.legal') as string}
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#2dd4bf] transition-colors"
                  >
                    {t(link.key) as string}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-white/40">
              {t('footer.copyright') as string}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#2dd4bf]/20 hover:text-[#2dd4bf] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
