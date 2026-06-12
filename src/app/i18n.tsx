"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const dictionary = {
  ar: {
    hero: {
      name: "زيد مروان نجاح",
      title: "مهندس نظم ومطور",
      subtitle: "سد الفجوة بين الأجهزة المادية والبنية التحتية الآمنة للبرمجيات. متخصص في بنية الذكاء الاصطناعي المحلي اللامركزي، والأنظمة المدمجة (SCADA)، وخطوط أنابيب البيانات المؤتمتة.",
      viewWork: "عرض الأعمال",
      contactMe: "تواصل معي"
    },
    nav: {
      projects: "المشاريع",
      featuredProjects: "أبرز المشاريع",
      projectsSubtitle: "مجموعة مختارة من الأعمال الهندسية والبنية التقنية الحديثة.",
      corePillars: "الركائز الأساسية",
      career: "الخبرات",
      careerTitle: "الخبرة المهنية",
      contact: "تواصل معي",
      getInTouch: "لنبقَ على تواصل",
      contactSubtitle: "هل لديك مشروع في ذهنك أو ترغب في مناقشة بنية النظم؟ لنتحدث.",
      socialMedia: "وسائل التواصل الاجتماعي"
    },
    contact: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      sending: "جاري الإرسال...",
      sendMessage: "إرسال الرسالة",
      sent: "تم الإرسال",
      sentDesc: "شكراً لتواصلك. سأرد عليك قريباً.",
      sendAnother: "إرسال رسالة أخرى"
    },
    projects: {
      techStack: "التقنيات المستخدمة",
      repository: "مستودع الكود",
      liveDemo: "عرض حي",
      viewRepository: "VIEW REPOSITORY ↗",
      data: {
        "1": {
          title: "مساعد ذكاء اصطناعي محلي لامركزي للبرمجة",
          description: <>هندسة بنية ذكاء اصطناعي موزعة وآمنة من خلال تقسيم التوجيه والمعالجة عبر جهازين فعليين عبر نفق <span dir="ltr" className="inline-block mx-1">Tailscale VPN</span>. تم تكوين <span dir="ltr" className="inline-block mx-1">Ollama</span> مع <span dir="ltr" className="inline-block mx-1">Qwen2.5-coder:14b</span> على العقدة المكتبية، وتوجيه استدعاءات الـ <span dir="ltr" className="inline-block mx-1">API</span> عبر <span dir="ltr" className="inline-block mx-1">OpenClaw</span> و <span dir="ltr" className="inline-block mx-1">Tavily</span> على بوابة الكمبيوتر المحمول، وفصل واجهة المستخدم عن طريق ربط النظام بروبوت <span dir="ltr" className="inline-block mx-1">Discord</span> خاص للوصول الآمن من الأجهزة المحمولة.</>,
          role: "مهندس نظم وشبكات",
          category: "أتمتة البرمجيات والذكاء الاصطناعي المحلي"
        },
        "2": {
          title: <>نظام إشارات مرور ذكي <span dir="ltr" className="inline-block mx-1">SCADA</span> وتوأم رقمي</>,
          description: <>تصميم نظام تحكم فعلي في حركة المرور باستخدام المنطق الرقمي النقي <span dir="ltr" className="inline-block mx-1">74-series TTL</span> على لوحات التجارب، متجاوزاً المتحكمات الدقيقة التقليدية للمنطق الأساسي. تم استخدام <span dir="ltr" className="inline-block mx-1">Arduino Mega</span> كجهاز تنصت سلبي لقراءة الحالات الثنائية ونقلها عبر واجهة <span dir="ltr" className="inline-block mx-1">Web Serial API</span> إلى لوحة تحكم <span dir="ltr" className="inline-block mx-1">HTML/CSS/JS</span> حية تتميز بمحاكاة فيزيائية ثنائية الأبعاد بدون تأخير.</>,
          role: "مكامل أجهزة/برمجيات",
          category: "الأجهزة والأنظمة المدمجة"
        },
        "3": {
          title: "خط أنابيب معالجة بيانات الموارد البشرية المؤتمت",
          description: <>هندسة خط أنابيب أتمتة البيانات باستخدام <span dir="ltr" className="inline-block mx-1">Python/Pandas</span>، مما قلل دورة الإدخال اليدوي التي تستغرق 3 أيام إلى برنامج نصي مؤتمت يستغرق 5 ثوانٍ، محققًا إدخال قاعدة بيانات خالي من الأخطاء.</>,
          role: "مهندس خطوط أنابيب البيانات",
          category: "أتمتة البرمجيات والذكاء الاصطناعي المحلي"
        },
        "4": {
          title: "مراقبة الأجهزة والشبكات والقياس عن بعد",
          description: <>تكوين بنية تحتية لمراقبة الأجهزة والشبكات في الوقت الفعلي ضمن بيئة إقلاع مزدوج <span dir="ltr" className="inline-block mx-1">Ubuntu/Windows</span>. التكامل مع الأنظمة المدمجة لقراءة القياس الفعلي عن بعد ومراقبة اختناقات النظام.</>,
          role: "مهندس شبكات و IoT",
          category: "الأجهزة والأنظمة المدمجة"
        }
      }
    },
    pillars: {
      data: [
        {
          title: 'البرمجيات والذكاء الاصطناعي',
          description: <>بناء تطبيقات شاملة قوية وتنسيقات ذكاء اصطناعي محلية باستخدام أدوات مثل <span dir="ltr" className="inline-block mx-1">Next.js</span> و <span dir="ltr" className="inline-block mx-1">Node.js</span> و <span dir="ltr" className="inline-block mx-1">Ollama</span>.</>
        },
        {
          title: 'الأجهزة و IoT',
          description: <>تصميم حلول أجهزة منخفضة المستوى ومراقبة الشبكات باستخدام <span dir="ltr" className="inline-block mx-1">Arduino</span> و <span dir="ltr" className="inline-block mx-1">ESP8266</span> و <span dir="ltr" className="inline-block mx-1">Zabbix</span>.</>
        },
        {
          title: 'القيادة',
          description: <>توجيه الفرق، وتدريب الزملاء كسفير لـ <span dir="ltr" className="inline-block mx-1">UniTech</span>، وتبسيط العمليات التشغيلية.</>
        }
      ]
    },
    experience: {
      technologies: "التقنيات والمهارات",
      data: {
        "1": {
          role: "مطور واجهة أمامية، مهندس نظم",
          organization: "مشاريع مستقلة",
          timeline: "2023 - الحاضر",
          achievements: [
            <>تم بناء تطبيقات <span dir="ltr" className="inline-block mx-1">Jamstack</span> باستخدام <span dir="ltr" className="inline-block mx-1">React/Next.js</span> مع مسارات واجهة برمجة تطبيقات بدون خوادم للتسليم الأمثل.</>,
            <>إعداد أتمتة نصوص <span dir="ltr" className="inline-block mx-1">Python</span> للتفاعل المباشر مع واجهات برمجة التطبيقات.</>
          ],
          tags: []
        },
        "2": {
          role: "طالب هندسة نظم",
          organization: "الجامعة الوطنية",
          timeline: "2021 - الحاضر",
          achievements: [
            "التركيز على هندسة الشبكات وتصميم المعالجات الدقيقة.",
            "مشاركة قيادية في هاكاثون الروبوتات والأنظمة المدمجة."
          ],
          tags: []
        },
        "3": {
          role: "متدرب في بيانات الموارد البشرية والعمليات",
          organization: "Makers HR",
          timeline: "آذار 2026 - أيار 2026",
          achievements: [
            "سد الفجوة بين الموارد البشرية والهندسة من خلال تطبيق أتمتة تقنية لتخفيف اختناقات العمليات.",
            <>أتمتة جمع البيانات، التحقق منها، ومعالجة أكثر من 2000 سجل أعمال من خلال هندسة ونشر خط أنابيب <span dir="ltr" className="inline-block mx-1">Python/Pandas</span>.</>,
            "تحميل البيانات المؤتمتة مباشرة إلى قاعدة بيانات الشركة، مما أدى إلى القضاء على أخطاء الإدخال اليدوي وتقليل وقت المعالجة بشكل كبير.",
            "العمل كقائد للتوثيق، وتسجيل وتنظيم الجلسات التشغيلية لبناء مستودع داخلي عالي الموثوقية."
          ],
          tags: []
        },
        "4": {
          role: "طالب، بكالوريوس هندسة المعلومات والاتصالات",
          organization: "جامعة بغداد",
          timeline: "تشرين الثاني 2025 - كانون الأول 2029",
          achievements: [
            <>الدورات الأساسية: بنية الشبكات، تصميم دوائر المنطق الرقمي، الأنظمة المدمجة (<span dir="ltr" className="inline-block mx-1">Arduino/Microcontrollers</span>)، وأتمتة البرمجيات.</>,
            <>التركيز التقني: بروتوكولات التوجيه والتبديل المتقدمة، دمج أجهزة <span dir="ltr" className="inline-block mx-1">TTL</span>، وتطوير خطوط أنابيب البيانات باستخدام <span dir="ltr" className="inline-block mx-1">Python</span> و <span dir="ltr" className="inline-block mx-1">C++</span>.</>
          ],
          tags: []
        }
      }
    }
  },
  en: {
    hero: {
      name: "Zaid Marwan Najah",
      title: "System Engineer & Developer",
      subtitle: "Bridging the gap between physical hardware and secure software infrastructure. Specializing in decentralized local AI architecture, SCADA embedded systems, and automated data pipelines.",
      viewWork: "View Work",
      contactMe: "Contact Me"
    },
    nav: {
      projects: "Projects",
      featuredProjects: "Featured Projects",
      projectsSubtitle: "A selection of recent engineering work and technical architecture.",
      corePillars: "Core Pillars",
      career: "Career",
      careerTitle: "Career & Experience",
      contact: "Contact",
      getInTouch: "Get in Touch",
      contactSubtitle: "Have a project in mind or want to discuss system architecture? Let's talk.",
      socialMedia: "Social Media"
    },
    contact: {
      name: "Name",
      email: "Email",
      message: "Message",
      sending: "SENDING...",
      sendMessage: "SEND MESSAGE",
      sent: "Message Sent",
      sentDesc: "Thank you for reaching out. I'll get back to you shortly.",
      sendAnother: "Send another message"
    },
    projects: {
      techStack: "Tech Stack",
      repository: "Repository",
      liveDemo: "Live Demo",
      viewRepository: "VIEW REPOSITORY ↗"
    },
    experience: {
      technologies: "Technologies & Skills"
    }
  }
};

type Lang = 'ar' | 'en';

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof dictionary.en;
  getProject: (project: any) => any;
  getPillar: (pillar: any, idx: number) => any;
  getExperience: (exp: any) => any;
}

const I18nContext = createContext<I18nContextType>({} as I18nContextType);

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>('ar');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = lang === 'ar' ? dictionary.ar : dictionary.en;

  const getProject = (project: any) => {
    if (lang === 'en') return project;
    const translated = (dictionary.ar.projects.data as any)[project.id];
    if (!translated) return project;
    return { ...project, ...translated };
  };

  const getPillar = (pillar: any, idx: number) => {
    if (lang === 'en') return pillar;
    const translated = dictionary.ar.pillars.data[idx];
    if (!translated) return pillar;
    return { ...pillar, ...translated };
  };

  const getExperience = (exp: any) => {
    if (lang === 'en') return exp;
    const translated = (dictionary.ar.experience.data as any)[exp.id];
    if (!translated) return exp;
    return { ...exp, ...translated };
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t, getProject, getPillar, getExperience }}>
      <div className="fixed top-0 z-50 p-6 end-0">
        <button 
          onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
          className="bg-black text-white dark:bg-white dark:text-black font-bold border-2 border-black dark:border-white px-4 py-2 uppercase tracking-widest hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors"
        >
          [ {lang === 'ar' ? 'EN' : 'AR'} ]
        </button>
      </div>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
