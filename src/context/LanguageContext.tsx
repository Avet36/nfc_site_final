import React, { createContext, useContext, useState, useCallback } from 'react';

export type Language = 'en' | 'ru' | 'hy';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.industries': 'Industries',
    'nav.howItWorks': 'How It Works',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.tagline': 'Beyond the QR',
    'hero.title': 'Tap. Connect. Experience.',
    'hero.subtitle': 'Revolutionary NFC technology that replaces QR codes. Instant access to menus, information, and services with just a tap.',
    'hero.cta.primary': 'Get Started',
    'hero.cta.secondary': 'Learn More',
    'hero.stats.customers': 'Happy Customers',
    'hero.stats.taps': 'Monthly Taps',
    'hero.stats.industries': 'Industries',
    
    // Features
    'features.title': 'Why NFC Beats QR Codes',
    'features.subtitle': 'Discover the advantages of NFC technology over traditional QR codes',
    'features.instant.title': 'Instant Connection',
    'features.instant.desc': 'No camera needed, no apps to open. Just tap and go.',
    'features.hygienic.title': 'Hygienic & Clean',
    'features.hygienic.desc': 'Contactless technology perfect for post-pandemic world.',
    'features.stylish.title': 'Stylish Design',
    'features.stylish.desc': 'Elegant cards and stands that enhance your brand image.',
    'features.analytics.title': 'Real-time Analytics',
    'features.analytics.desc': 'Track engagement, popular items, and customer behavior.',
    'features.eco.title': 'Eco-Friendly',
    'features.eco.desc': 'Reusable solution that reduces paper waste.',
    'features.secure.title': 'Secure & Reliable',
    'features.secure.desc': 'Advanced encryption protects your data and customers.',
    
    // Industries
    'industries.title': 'Perfect For Your Business',
    'industries.subtitle': 'NFC GO serves various industries with tailored solutions',
    'industries.restaurants.title': 'Restaurants & Cafes',
    'industries.restaurants.desc': 'Digital menus, ordering, and payment in one tap. Update items instantly without reprinting.',
    'industries.hotels.title': 'Hotels & Hospitality',
    'industries.hotels.desc': 'Room service, amenities info, and local recommendations at guests fingertips.',
    'industries.bars.title': 'Bars & Nightclubs',
    'industries.bars.desc': 'Drink menus, specials, and loyalty programs that keep customers coming back.',
    'industries.salons.title': 'Salons & Spas',
    'industries.salons.desc': 'Service menus, booking, and product recommendations for enhanced experience.',
    'industries.features': ['Digital Menus', 'Instant Updates', 'Analytics', 'Contactless'],
    
    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle': 'Three simple steps to transform your customer experience',
    'howItWorks.step1.title': 'We Create',
    'howItWorks.step1.desc': 'We design and produce custom NFC cards, stands, or stickers with your branding.',
    'howItWorks.step2.title': 'You Place',
    'howItWorks.step2.desc': 'Place them on tables, reception desks, or anywhere customers need information.',
    'howItWorks.step3.title': 'They Tap',
    'howItWorks.step3.desc': 'Customers tap with their phone and instantly access your digital content.',
    
    // Pricing
    'pricing.title': 'Simple Pricing',
    'pricing.subtitle': 'Choose the plan that fits your business needs',
    'pricing.starter.name': 'Starter',
    'pricing.starter.price': '49',
    'pricing.starter.period': '/month',
    'pricing.starter.desc': 'Perfect for small businesses',
    'pricing.starter.features': ['5 NFC Cards', 'Basic Analytics', 'Menu Editor', 'Email Support'],
    'pricing.pro.name': 'Professional',
    'pricing.pro.price': '149',
    'pricing.pro.period': '/month',
    'pricing.pro.desc': 'For growing businesses',
    'pricing.pro.features': ['25 NFC Cards', 'Advanced Analytics', 'Custom Branding', 'Priority Support', 'Multi-language'],
    'pricing.enterprise.name': 'Enterprise',
    'pricing.enterprise.price': 'Custom',
    'pricing.enterprise.period': '',
    'pricing.enterprise.desc': 'For large organizations',
    'pricing.enterprise.features': ['Unlimited Cards', 'Full Analytics Suite', 'API Access', 'Dedicated Manager', 'Custom Integration'],
    'pricing.cta': 'Get Started',
    'pricing.popular': 'Most Popular',
    
    // CTA
    'cta.title': 'Ready to Go Beyond QR?',
    'cta.subtitle': 'Join thousands of businesses already using NFC GO to enhance their customer experience.',
    'cta.button': 'Contact Us',
    'cta.note': 'No credit card required. 14-day free trial.',
    
    // Footer
    'footer.tagline': 'Beyond the QR',
    'footer.description': 'Revolutionary NFC technology for modern businesses.',
    'footer.links.product': 'Product',
    'footer.links.features': 'Features',
    'footer.links.pricing': 'Pricing',
    'footer.links.api': 'API',
    'footer.links.company': 'Company',
    'footer.links.about': 'About',
    'footer.links.blog': 'Blog',
    'footer.links.careers': 'Careers',
    'footer.links.contact': 'Contact',
    'footer.links.legal': 'Legal',
    'footer.links.privacy': 'Privacy',
    'footer.links.terms': 'Terms',
    'footer.links.cookies': 'Cookies',
    'footer.copyright': '© 2025 NFC GO. All rights reserved.',
  },
  
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.features': 'Возможности',
    'nav.industries': 'Отрасли',
    'nav.howItWorks': 'Как это работает',
    'nav.pricing': 'Цены',
    'nav.contact': 'Контакты',
    
    // Hero
    'hero.tagline': 'Beyond the QR',
    'hero.title': 'Коснись. Подключись. Узнай.',
    'hero.subtitle': 'Революционная NFC-технология, заменяющая QR-коды. Мгновенный доступ к меню, информации и услугам одним касанием.',
    'hero.cta.primary': 'Начать',
    'hero.cta.secondary': 'Узнать больше',
    'hero.stats.customers': 'Довольных клиентов',
    'hero.stats.taps': 'Касаний в месяц',
    'hero.stats.industries': 'Отраслей',
    
    // Features
    'features.title': 'Почему NFC лучше QR-кодов',
    'features.subtitle': 'Откройте преимущества NFC-технологии над традиционными QR-кодами',
    'features.instant.title': 'Мгновенное подключение',
    'features.instant.desc': 'Камера не нужна, приложения открывать не надо. Просто коснитесь и готово.',
    'features.hygienic.title': 'Гигиенично и чисто',
    'features.hygienic.desc': 'Бесконтактная технология, идеальная для постпандемийного мира.',
    'features.stylish.title': 'Стильный дизайн',
    'features.stylish.desc': 'Элегантные карты и подставки, подчеркивающие имидж вашего бренда.',
    'features.analytics.title': 'Аналитика в реальном времени',
    'features.analytics.desc': 'Отслеживайте вовлеченность, популярные позиции и поведение клиентов.',
    'features.eco.title': 'Экологично',
    'features.eco.desc': 'Многоразовое решение, сокращающее бумажные отходы.',
    'features.secure.title': 'Безопасно и надежно',
    'features.secure.desc': 'Продвинутое шифрование защищает ваши данные и клиентов.',
    
    // Industries
    'industries.title': 'Идеально для вашего бизнеса',
    'industries.subtitle': 'NFC GO обслуживает различные отрасли с индивидуальными решениями',
    'industries.restaurants.title': 'Рестораны и кафе',
    'industries.restaurants.desc': 'Цифровые меню, заказ и оплата одним касанием. Обновляйте позиции мгновенно без перепечатки.',
    'industries.hotels.title': 'Отели и гостиницы',
    'industries.hotels.desc': 'Обслуживание номеров, информация об удобствах и местные рекомендации под рукой у гостей.',
    'industries.bars.title': 'Бары и ночные клубы',
    'industries.bars.desc': 'Меню напитков, специальные предложения и программы лояльности, возвращающих клиентов.',
    'industries.salons.title': 'Салоны и спа',
    'industries.salons.desc': 'Меню услуг, бронирование и рекомендации по продуктам для улучшенного опыта.',
    'industries.features': ['Цифровые меню', 'Мгновенные обновления', 'Аналитика', 'Бесконтактно'],
    
    // How It Works
    'howItWorks.title': 'Как это работает',
    'howItWorks.subtitle': 'Три простых шага для трансформации опыта ваших клиентов',
    'howItWorks.step1.title': 'Мы создаем',
    'howItWorks.step1.desc': 'Мы разрабатываем и производим индивидуальные NFC-карты, подставки или стикеры с вашим брендом.',
    'howItWorks.step2.title': 'Вы размещаете',
    'howItWorks.step2.desc': 'Разместите их на столах, стойках ресепшена или где угодно, где клиентам нужна информация.',
    'howItWorks.step3.title': 'Они касаются',
    'howItWorks.step3.desc': 'Клиенты касаются телефоном и мгновенно получают доступ к вашему цифровому контенту.',
    
    // Pricing
    'pricing.title': 'Простые цены',
    'pricing.subtitle': 'Выберите тариф, подходящий вашему бизнесу',
    'pricing.starter.name': 'Стартовый',
    'pricing.starter.price': '49',
    'pricing.starter.period': '/месяц',
    'pricing.starter.desc': 'Идеально для малого бизнеса',
    'pricing.starter.features': ['5 NFC-карт', 'Базовая аналитика', 'Редактор меню', 'Поддержка по email'],
    'pricing.pro.name': 'Профессиональный',
    'pricing.pro.price': '149',
    'pricing.pro.period': '/месяц',
    'pricing.pro.desc': 'Для растущего бизнеса',
    'pricing.pro.features': ['25 NFC-карт', 'Расширенная аналитика', 'Индивидуальный брендинг', 'Приоритетная поддержка', 'Мультиязычность'],
    'pricing.enterprise.name': 'Корпоративный',
    'pricing.enterprise.price': 'Индивид',
    'pricing.enterprise.period': '',
    'pricing.enterprise.desc': 'Для крупных организаций',
    'pricing.enterprise.features': ['Безлимитные карты', 'Полный пакет аналитики', 'API доступ', 'Выделенный менеджер', 'Интеграция под ключ'],
    'pricing.cta': 'Начать',
    'pricing.popular': 'Популярный',
    
    // CTA
    'cta.title': 'Готовы выйти за рамки QR?',
    'cta.subtitle': 'Присоединяйтесь к тысячам компаний, уже использующих NFC GO для улучшения опыта клиентов.',
    'cta.button': 'Свяжитесь с нами',
    'cta.note': 'Карта не требуется. 14-дневный пробный период.',
    
    // Footer
    'footer.tagline': 'Beyond the QR',
    'footer.description': 'Революционная NFC-технология для современного бизнеса.',
    'footer.links.product': 'Продукт',
    'footer.links.features': 'Возможности',
    'footer.links.pricing': 'Цены',
    'footer.links.api': 'API',
    'footer.links.company': 'Компания',
    'footer.links.about': 'О нас',
    'footer.links.blog': 'Блог',
    'footer.links.careers': 'Карьера',
    'footer.links.contact': 'Контакты',
    'footer.links.legal': 'Правовая информация',
    'footer.links.privacy': 'Конфиденциальность',
    'footer.links.terms': 'Условия',
    'footer.links.cookies': 'Cookies',
    'footer.copyright': '© 2025 NFC GO. Все права защищены.',
  },
  
  hy: {
    // Navigation
    'nav.home': 'Գլխավոր',
    'nav.features': 'Հնարավորություններ',
    'nav.industries': 'Ոլորտներ',
    'nav.howItWorks': 'Ինչպես է աշխատում',
    'nav.pricing': 'Գներ',
    'nav.contact': 'Կապ',
    
    // Hero
    'hero.tagline': 'Beyond the QR',
    'hero.title': 'Հպեք. Միացեք. Զգացեք.',
    'hero.subtitle': 'Հեղափոխական NFC տեխնոլոգիա, որը փոխարինում է QR կոդերին: Մենյուներին, տեղեկատվությանը և ծառայություններին մուտք գործեք միայն մեկ հպումով:',
    'hero.cta.primary': 'Սկսել',
    'hero.cta.secondary': 'Իմանալ ավելին',
    'hero.stats.customers': 'Գոհ հաճախորդներ',
    'hero.stats.taps': 'Ամսական հպումներ',
    'hero.stats.industries': 'Ոլորտներ',
    
    // Features
    'features.title': 'Ինչու NFC-ն ավելի լավն է QR-ից',
    'features.subtitle': 'Բացահայտեք NFC տեխնոլոգիայի առավելությունները ավանդական QR կոդերի նկատմամբ',
    'features.instant.title': 'Անմիջական միացում',
    'features.instant.desc': 'Տեսախցիկ պետք չէ, հավելվածներ բացել պետք չէ: Պարզապես հպեք և պատրաստ է:',
    'features.hygienic.title': 'Հիգիենիկ և մաքուր',
    'features.hygienic.desc': 'Առանց շփման տեխնոլոգիա, որը կատարյալ է համաճարակից հետո աշխարհի համար:',
    'features.stylish.title': 'Նորաոճ դիզայն',
    'features.stylish.desc': 'Էլեգանտ քարտեր և կանգնակներ, որոնք բարձրացնում են ձեր բրենդի իմիջը:',
    'features.analytics.title': 'Անվտանգ և հուսալի',
    'features.analytics.desc': 'Հետևեք ներգրավվածությանը, հանրաճանաչ ապրանքներին և հաճախորդների վարքագծին:',
    'features.eco.title': 'Էկոլոգիական',
    'features.eco.desc': 'Բազմակի օգտագործման լուծում, որը նվազեցնում է թղթի թափոնները:',
    'features.secure.title': 'Անվտանգ և հուսալի',
    'features.secure.desc': 'Առաջադեմ գաղտնագրումը պաշտպանում է ձեր տվյալներն ու հաճախորդներին:',
    
    // Industries
    'industries.title': 'Կատարյալ ձեր բիզնեսի համար',
    'industries.subtitle': 'NFC GO-ն սպասարկում է տարբեր ոլորտներ անհատական լուծումներով',
    'industries.restaurants.title': 'Ռեստորաններ և սրճարաններ',
    'industries.restaurants.desc': 'Թվային մենյու, պատվիրում և վճարում մեկ հպումով: Արդիացրեք ապրանքները անմիջապես առանց վերաթղթահարման:',
    'industries.hotels.title': 'Հյուրանոցներ և հոսթելներ',
    'industries.hotels.desc': 'Սենյակային սպասարկում, հարմարությունների տեղեկատվություն և տեղական առաջարկություններ հյուրերի ձեռքի տակ:',
    'industries.bars.title': 'Բարեր և գիշերային ակումբներ',
    'industries.bars.desc': 'Խմիչքների մենյու, հատուկ առաջարկներ և հավատարմության ծրագրեր, որոնք պահում են հաճախորդներին:',
    'industries.salons.title': 'Սրահներ և սպա',
    'industries.salons.desc': 'Ծառայությունների մենյու, ամրագրում և ապրանքների առաջարկություններ՝ լավագույն փորձի համար:',
    'industries.features': ['Թվային մենյու', 'Անմիջական արդիացում', 'Անալիտիկա', 'Առանց շփման'],
    
    // How It Works
    'howItWorks.title': 'Ինչպես է աշխատում',
    'howItWorks.subtitle': 'Երեք պարզ քայլ ձեր հաճախորդների փորձը փոխակերպելու համար',
    'howItWorks.step1.title': 'Մենք ստեղծում ենք',
    'howItWorks.step1.desc': 'Մենք դիզայն ենք անում և արտադրում անհատական NFC քարտեր, կանգնակներ կամ պիտակներ ձեր բրենդով:',
    'howItWorks.step2.title': 'Դուք տեղադրում եք',
    'howItWorks.step2.desc': 'Տեղադրեք դրանք սեղանների վրա, ընդունելության սեղաններին կամ որտեղ որ հաճախորդներին տեղեկատվություն է պետք:',
    'howItWorks.step3.title': 'Նրանք հպում են',
    'howItWorks.step3.desc': 'Հաճախորդները հպում են իրենց հեռախոսով և անմիջապես մուտք են գործում ձեր թվային բովանդակությունը:',
    
    // Pricing
    'pricing.title': 'Պարզ գներ',
    'pricing.subtitle': 'Ընտրեք ձեր բիզնեսի կարիքներին համապատասխան պլանը',
    'pricing.starter.name': 'Սկսնակ',
    'pricing.starter.price': '49',
    'pricing.starter.period': '/ամիս',
    'pricing.starter.desc': 'Կատարյալ փոքր բիզնեսի համար',
    'pricing.starter.features': ['5 NFC քարտ', 'Հիմնական անալիտիկա', 'Մենյու խմբագրիչ', 'Email աջակցություն'],
    'pricing.pro.name': 'Պրոֆեսիոնալ',
    'pricing.pro.price': '149',
    'pricing.pro.period': '/ամիս',
    'pricing.pro.desc': 'Աճող բիզնեսի համար',
    'pricing.pro.features': ['25 NFC քարտ', 'Ընդլայնված անալիտիկա', 'Անհատական բրենդինգ', 'Առաջնահերթ աջակցություն', 'Բազմալեզու'],
    'pricing.enterprise.name': 'Ձեռնարկություն',
    'pricing.enterprise.price': 'Անհատ',
    'pricing.enterprise.period': '',
    'pricing.enterprise.desc': 'Մեծ կազմակերպությունների համար',
    'pricing.enterprise.features': ['Անսահմանափակ քարտեր', 'Անալիտիկայի լրիզ փաթեթ', 'API մուտք', 'Նվիրված մենեջեր', 'Անհատական ինտեգրում'],
    'pricing.cta': 'Սկսել',
    'pricing.popular': 'Ամենահայտնի',
    
    // CTA
    'cta.title': 'Պատրաստ եք անցնել QR-ից այն կողմ?',
    'cta.subtitle': 'Միացեք հազարավոր ընկերությունների, որոնք արդեն օգտագործում են NFC GO-ն իրենց հաճախորդների փորձը բարելավելու համար:',
    'cta.button': 'Մեզ հետ կապ',
    'cta.note': 'Վարկային քարտ պետք չէ: 14-օրյա անվճար փորձաշրջան:',
    
    // Footer
    'footer.tagline': 'Beyond the QR',
    'footer.description': 'Հեղափոխական NFC տեխնոլոգիա ժամանակակից բիզնեսի համար:',
    'footer.links.product': 'Արտադրանք',
    'footer.links.features': 'Հնարավորություններ',
    'footer.links.pricing': 'Գներ',
    'footer.links.api': 'API',
    'footer.links.company': 'Ընկերություն',
    'footer.links.about': 'Մեր մասին',
    'footer.links.blog': 'Բլոգ',
    'footer.links.careers': 'Կարիերա',
    'footer.links.contact': 'Կապ',
    'footer.links.legal': 'Իրավական',
    'footer.links.privacy': 'Գաղտնիություն',
    'footer.links.terms': 'Պայմաններ',
    'footer.links.cookies': 'Cookies',
    'footer.copyright': '© 2025 NFC GO. Բոլոր իրավունքները պաշտպանված են:',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
  }, []);

  const t = useCallback((key: string): string | string[] => {
    const translation = translations[language][key as keyof typeof translations.en];
    return translation || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
