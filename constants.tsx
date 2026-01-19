
import { ContentStrings, Project, Testimonial, Language } from './types';

export const CONTENT: Record<Language, ContentStrings> = {
  EN: {
    heroTitle: "CINEMATIC STORYTELLING",
    heroSub: "Transforming raw footage into viral-ready masterpieces. Expert video editing for global creators.",
    viewProjects: "View My Work",
    skillsTitle: "Core Expertise",
    toolsTitle: "Tech Stack",
    howIWork: "Workflow Timeline",
    contactTitle: "Start a Project",
    disclaimer: "Demo edits for portfolio purposes.",
    allRights: "All rights reserved to original owners.",
    formName: "Full Name",
    formEmail: "Email Address",
    formMessage: "Tell me about your project...",
    formSubmit: "Send Message",
    processGoal: "Goal",
    processChallenges: "Challenges",
    processTools: "Tools Used",
    processResults: "Results",
  },
  HI: {
    heroTitle: "ASLI CINEMATIC STORYTELLING",
    heroSub: "Raw footage ko viral-ready masterpiece mein badalna. Global creators ke liye expert video editing.",
    viewProjects: "Mera Kaam Dekhein",
    skillsTitle: "Expertise",
    toolsTitle: "Tech Stack",
    howIWork: "Kaam Karne Ka Tarika",
    contactTitle: "Project Shuru Karein",
    disclaimer: "Portfolio ke liye demo edits.",
    allRights: "Saare rights original owners ke hain.",
    formName: "Pura Naam",
    formEmail: "Email Address",
    formMessage: "Apne project ke baare mein batayein...",
    formSubmit: "Message Bhejein",
    processGoal: "Goal",
    processChallenges: "Challenges",
    processTools: "Tools",
    processResults: "Results",
  },
  BN: {
    heroTitle: "সিনেমাটিক স্টোরিটেলিং",
    heroSub: "কাঁচা ফুটেজকে ভাইরাল-রেডি মাস্টারপিসে রূপান্তর করা। গ্লোবাল ক্রিয়েটরদের জন্য বিশেষজ্ঞ ভিডিও এডিটিং।",
    viewProjects: "আমার কাজ দেখুন",
    skillsTitle: "মূল দক্ষতা",
    toolsTitle: "টেক স্ট্যাক",
    howIWork: "কাজের ধারা",
    contactTitle: "প্রজেক্ট শুরু করুন",
    disclaimer: "পোর্টফোলিও প্রদর্শনের জন্য ডেমো এডিট।",
    allRights: "সমস্ত অধিকার মূল মালিকদের কাছে সংরক্ষিত।",
    formName: "পুরো নাম",
    formEmail: "ইমেল ঠিকানা",
    formMessage: "আপনার প্রজেক্ট সম্পর্কে বলুন...",
    formSubmit: "বার্তা পাঠান",
    processGoal: "লক্ষ্য",
    processChallenges: "চ্যালেঞ্জ",
    processTools: "ব্যবহৃত সরঞ্জাম",
    processResults: "ফলাফল",
  }
};

export const PROJECTS: Record<Language, Project[]> = {
  EN: [
    {
      id: '1',
      title: 'YouTube Ad Campaign',
      shortDesc: 'High-energy commercial for tech startup.',
      type: 'Ad Edit',
      duration: '30s',
      engagement: '+20% Engagement',
      thumbnail: 'https://picsum.photos/seed/edit1/800/450',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      beforeImg: 'https://picsum.photos/seed/before1/800/450?grayscale',
      afterImg: 'https://picsum.photos/seed/after1/800/450',
      tools: ['Premiere Pro', 'After Effects', 'Photoshop'],
      process: {
        goal: 'Increase click-through rate for the new app launch.',
        challenges: 'Condensing 2 hours of footage into a tight 30s punchy ad.',
        results: 'The ad saw a 20% increase in user retention compared to the previous version.',
      },
      metrics: [
        { label: 'Retention', value: '85%' },
        { label: 'CTR', value: '4.2%' }
      ]
    },
    {
      id: '2',
      title: 'Travel Vlog Cinematic',
      shortDesc: 'Color grading and sound design for influencer.',
      type: 'Vlog',
      duration: '12m',
      engagement: '500k+ Views',
      thumbnail: 'https://picsum.photos/seed/edit2/800/450',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      beforeImg: 'https://picsum.photos/seed/before2/800/450?grayscale',
      afterImg: 'https://picsum.photos/seed/after2/800/450',
      tools: ['Premiere Pro', 'DaVinci Resolve'],
      process: {
        goal: 'Create an immersive travel experience.',
        challenges: 'Inconsistent lighting across multiple shoot locations.',
        results: 'Gained over 500,000 views within the first week of release.',
      },
      metrics: [
        { label: 'Views', value: '520k' },
        { label: 'Shares', value: '12k' }
      ]
    },
    {
      id: '3',
      title: 'Tech Review Reveal',
      shortDesc: 'Complex 3D motion graphics and overlays.',
      type: 'Tech Edit',
      duration: '45s',
      engagement: '+15% Subs',
      thumbnail: 'https://picsum.photos/seed/edit3/800/450',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      beforeImg: 'https://picsum.photos/seed/before3/800/450?grayscale',
      afterImg: 'https://picsum.photos/seed/after3/800/450',
      tools: ['After Effects', 'Cinema 4D'],
      process: {
        goal: 'Showcase product features through dynamic visuals.',
        challenges: 'Synthesizing technical specs into visual metaphors.',
        results: 'Boosted subscriber growth by 15% during the campaign.',
      },
      metrics: [
        { label: 'Sub Growth', value: '15%' },
        { label: 'Likes', value: '45k' }
      ]
    }
  ],
  HI: [
    {
      id: '1',
      title: 'YouTube Ad Campaign',
      shortDesc: 'Tech startup ke liye high-energy commercial.',
      type: 'Ad Edit',
      duration: '30s',
      engagement: '+20% Engagement',
      thumbnail: 'https://picsum.photos/seed/edit1/800/450',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      beforeImg: 'https://picsum.photos/seed/before1/800/450?grayscale',
      afterImg: 'https://picsum.photos/seed/after1/800/450',
      tools: ['Premiere Pro', 'After Effects', 'Photoshop'],
      process: {
        goal: 'App launch ke liye click-through rate badhana.',
        challenges: '2 ghante ke footage ko 30 second ke solid ad mein fit karna.',
        results: 'Pichli version ke mukable retention mein 20% badhotari hui.',
      },
      metrics: [
        { label: 'Retention', value: '85%' },
        { label: 'CTR', value: '4.2%' }
      ]
    },
    {
      id: '2',
      title: 'Travel Vlog Cinematic',
      shortDesc: 'Influencer ke liye color grading aur sound design.',
      type: 'Vlog',
      duration: '12m',
      engagement: '500k+ Views',
      thumbnail: 'https://picsum.photos/seed/edit2/800/450',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      beforeImg: 'https://picsum.photos/seed/before2/800/450?grayscale',
      afterImg: 'https://picsum.photos/seed/after2/800/450',
      tools: ['Premiere Pro', 'DaVinci Resolve'],
      process: {
        goal: 'Ek immersive travel experience create karna.',
        challenges: 'Alag-alag locations par lighting ki dikkat solve karna.',
        results: 'Pehle hafte mein hi 5 lakh se zyada views mile.',
      },
      metrics: [
        { label: 'Views', value: '520k' },
        { label: 'Shares', value: '12k' }
      ]
    },
    {
      id: '3',
      title: 'Tech Review Reveal',
      shortDesc: 'Complex 3D motion graphics aur overlays.',
      type: 'Tech Edit',
      duration: '45s',
      engagement: '+15% Subs',
      thumbnail: 'https://picsum.photos/seed/edit3/800/450',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      beforeImg: 'https://picsum.photos/seed/before3/800/450?grayscale',
      afterImg: 'https://picsum.photos/seed/after3/800/450',
      tools: ['After Effects', 'Cinema 4D'],
      process: {
        goal: 'Product features ko visuals ke through dikhana.',
        challenges: 'Technical specs ko visual metaphors mein convert karna.',
        results: 'Campaign ke dauran subscribers 15% badh gaye.',
      },
      metrics: [
        { label: 'Sub Growth', value: '15%' },
        { label: 'Likes', value: '45k' }
      ]
    }
  ],
  BN: [
    {
      id: '1',
      title: 'ইউটিউব অ্যাড ক্যাম্পেইন',
      shortDesc: 'টেক স্টার্টআপের জন্য হাই-এনার্জি কমার্শিয়াল।',
      type: 'অ্যাড এডিট',
      duration: '৩০ সেকেন্ড',
      engagement: '+২০% এনগেজমেন্ট',
      thumbnail: 'https://picsum.photos/seed/edit1/800/450',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      beforeImg: 'https://picsum.photos/seed/before1/800/450?grayscale',
      afterImg: 'https://picsum.photos/seed/after1/800/450',
      tools: ['Premiere Pro', 'After Effects', 'Photoshop'],
      process: {
        goal: 'অ্যাপ লঞ্চের জন্য ক্লিক-থ্রু রেট বাড়ানো।',
        challenges: '২ ঘণ্টার ফুটেজকে ৩০ সেকেন্ডের একটি আকর্ষনীয় বিজ্ঞাপনে আনা।',
        results: 'আগের ভার্সনের তুলনায় রিটেনশন ২০% বৃদ্ধি পেয়েছে।',
      },
      metrics: [
        { label: 'রিটেনশন', value: '৮৫%' },
        { label: 'CTR', value: '৪.২%' }
      ]
    },
    {
      id: '2',
      title: 'সিনেমাটিক ট্র্যাভেল ভ্লগ',
      shortDesc: 'ইনফ্লুয়েন্সারের জন্য কালার গ্রেডিং এবং সাউন্ড ডিজাইন।',
      type: 'ভ্লগ',
      duration: '১২ মিনিট',
      engagement: '৫০০k+ ভিউস',
      thumbnail: 'https://picsum.photos/seed/edit2/800/450',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      beforeImg: 'https://picsum.photos/seed/before2/800/450?grayscale',
      afterImg: 'https://picsum.photos/seed/after2/800/450',
      tools: ['Premiere Pro', 'DaVinci Resolve'],
      process: {
        goal: 'একটি ইমারসিভ ট্র্যাভেল অভিজ্ঞতা তৈরি করা।',
        challenges: 'বিভিন্ন জায়গায় শ্যুটিংয়ের সময় আলোর তারতম্য ঠিক করা।',
        results: 'প্রথম সপ্তাহেই ৫ লাখেরও বেশি ভিউস পাওয়া গেছে।',
      },
      metrics: [
        { label: 'ভিউস', value: '৫২০k' },
        { label: 'শেয়ার', value: '১২k' }
      ]
    },
    {
      id: '3',
      title: 'টেক রিভিউ রিভীল',
      shortDesc: 'জটিল 3D মোশন গ্রাফিক্স এবং ওভারলে।',
      type: 'টেক এডিট',
      duration: '৪৫ সেকেন্ড',
      engagement: '+১৫% সাবস্ক্রাইবার',
      thumbnail: 'https://picsum.photos/seed/edit3/800/450',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      beforeImg: 'https://picsum.photos/seed/before3/800/450?grayscale',
      afterImg: 'https://picsum.photos/seed/after3/800/450',
      tools: ['After Effects', 'Cinema 4D'],
      process: {
        goal: 'ভিজ্যুয়ালের মাধ্যমে পণ্যের বৈশিষ্ট্যগুলো ফুটিয়ে তোলা।',
        challenges: 'প্রযুক্তিগত বৈশিষ্ট্যগুলোকে ভিজ্যুয়াল মেটাফোরে রূপান্তর করা।',
        results: 'ক্যাম্পেইন চলাকালীন ১৫% সাবস্ক্রাইবার বৃদ্ধি পেয়েছে।',
      },
      metrics: [
        { label: 'সাব গ্রোথ', value: '১৫%' },
        { label: 'লাইক', value: '৪৫k' }
      ]
    }
  ]
};

export const TESTIMONIALS: Record<Language, Testimonial[]> = {
  EN: [
    { id: '1', name: 'Alex Rivera', role: 'YouTube Creator (2M Subs)', text: "The editing quality completely transformed my channel's growth. Fast, professional, and creative.", logo: 'https://picsum.photos/seed/logo1/100/100' },
    { id: '2', name: 'Sarah Chen', role: 'Marketing Director', text: "Best ad performance we've had in years. The motion graphics are top-tier.", logo: 'https://picsum.photos/seed/logo2/100/100' },
    { id: '3', name: 'Marco Silva', role: 'Music Producer', text: "Captured the vibe of the music perfectly. Highly recommend for any music video project.", logo: 'https://picsum.photos/seed/logo3/100/100' }
  ],
  HI: [
    { id: '1', name: 'Alex Rivera', role: 'YouTube Creator (2M Subs)', text: "Editing quality ne mere channel ki growth hi badal di. Fast, professional aur creative.", logo: 'https://picsum.photos/seed/logo1/100/100' },
    { id: '2', name: 'Sarah Chen', role: 'Marketing Director', text: "Saalo mein sabse acchi ad performance. Motion graphics ekdum top class hain.", logo: 'https://picsum.photos/seed/logo2/100/100' },
    { id: '3', name: 'Marco Silva', role: 'Music Producer', text: "Music ki vibe ko perfect capture kiya. Music videos ke liye best editor.", logo: 'https://picsum.photos/seed/logo3/100/100' }
  ],
  BN: [
    { id: '1', name: 'অ্যালেক্স রিভেরা', role: 'ইউটিউব ক্রিয়েটর (২M সাবস্ক্রাইবার)', text: "এডিটিংয়ের মান আমার চ্যানেলের গ্রোথ পুরোপুরি বদলে দিয়েছে। দ্রুত, পেশাদার এবং সৃজনশীল।", logo: 'https://picsum.photos/seed/logo1/100/100' },
    { id: '2', name: 'সারা চেন', role: 'মার্কেটিং ডিরেক্টর', text: "গত কয়েক বছরের মধ্যে আমাদের সেরা অ্যাড পারফরম্যান্স। মোশন গ্রাফিক্স একদম প্রথম সারির।", logo: 'https://picsum.photos/seed/logo2/100/100' },
    { id: '3', name: 'মার্কো সিলভা', role: 'মিউজিক প্রোডিউসার', text: "গানের ভাইব চমৎকারভাবে ফুটে উঠেছে। যেকোনো মিউজিক ভিডিও প্রজেক্টের জন্য আমি রেকমেন্ড করছি।", logo: 'https://picsum.photos/seed/logo3/100/100' }
  ]
};
