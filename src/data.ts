import { Project, Experience, Skill, Software, Testimonial } from './types';

export const projectsData: Project[] = [
  {
    id: 'duratech-branding',
    title: 'Duratech Branding',
    category: 'Branding',
    year: '2025',
    imageUrl: '/Branding/Branding_1/Duratech_1.png',
    description: "Duratech is a tile adhesive and construction chemicals brand built on the belief that strong bonds create lasting strength. Beyond its products, the brand stands for trust, reliability, and long-lasting connections. The branding aims to translate these values into a strong, modern, and cohesive visual identity that reflects Duratech's technical expertise while establishing a sense of confidence and trust.",
    brief: "Create a modern, energetic identity for Duratech that reflects trust and quality. Build a bold, versatile brand that fits seamlessly into modern architecture, evolving infrastructure and every construction space.",
    challenges: [
      "Building a modern and distinctive identity for a construction chemicals brand while retaining its core values of trust, strength and durability.",
      "Creating a consistent visual language that works across diverse products, packaging, digital platforms and marketing materials.",
      "Making technical product communication more engaging and approachable without compromising clarity or credibility."
    ],
    solutions: [
      "Developed a bold visual identity using a distinctive logo, strong typography and a navy, orange and beige colour palette to establish brand recognition.",
      "Created a flexible design system with consistent colours, typography, graphic elements and layouts across packaging, stationery, uniforms and digital communication.",
      "Introduced a friendly brand mascot, product-focused visuals and relatable campaign concepts to simplify technical messaging and give Duratech a more approachable personality."
    ],
    client: 'Duratech Industries',
    role: 'Design Head & Brand Identity Designer',
    industry: 'Building & Construction',
    duration: '1 month',
    colors: ['#0A2241', '#EBE9DD', '#969899'],
    typography: [],
    beforeImg: '/Branding/Branding_1/draft.png',
    afterImg: '/Branding/Branding_1/mockup.png',
    applications: [
      { title: 'Building Signage', imageUrl: '/Branding/Branding_1/ad_1.png' },
      { title: 'Business Cards', imageUrl: '/Branding/Branding_1/ad_2.png' },
      { title: 'Staff Uniform', imageUrl: '/Branding/Branding_1/ad_3.png' },
      { title: 'Presentation Folder', imageUrl: '/Branding/Branding_1/ad_4.png' },
      { title: 'Notebook & Letterhead', imageUrl: '/Branding/Branding_1/ad_5.png' },
      { title: 'Delivery Vehicle', imageUrl: '/Branding/Branding_1/ad_6.png' }
    ],
    mockups: [
      { imageUrl: '/Branding/Branding_1/draft.png', alt: 'Duratech mascot design and character sheet' },
      { imageUrl: '/Branding/Branding_1/mockup.png', alt: 'Duratech logo construction grid' }
    ]
  },
  {
    id: 'logoipsum-mobile',
    title: 'Logoipsum Mobile App',
    category: 'Case Study',
    year: '2024',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANRh_1JhYDNnNh5pPdKGiDK-1AyqbCwYBn2WSP6IQf8NQ3CoXcYgb6CTXTHkGg7hotzeBDxk9fhrnDox6jXzQVIlgaBpHYERm0KMl9bUYBGIXsztUjEdHOFSHJGHuYDbAQurHhlj0v-k2HkHQREOMuVce_NSXf3F8QtGmYKD9FMFEEH2g5TAJ9INE7rXY5gtV1QwmxNcQQfpsLSEUjQN6Qyag2NET334jG1EbjXKSEyO4SINNlqp57jhZ3ITAn-onaUandTaPvsJBM',
    description: 'A sleek, high-contrast digital mockup of a mobile banking app interface displayed on a premium smartphone. The UI is minimalist, using a deep black background with white typography and a vibrant blue brand accent color.',
    challenges: [
      'Establishing high readability on dark, light-restricted screens while maintaining a minimalist design language.',
      'Structuring complex financial data into digestible, clean components without cluttering the mobile workspace.',
      'Achieving architectural precision in typography sizing and vertical spacing grid alignments.'
    ],
    solutions: [
      'Implemented a modular 8px spatial grid to achieve pixel-perfect consistency across all dashboard view screens.',
      'Designed a vibrant custom blue accent hue paired with pure white typography to guarantee over 4.5:1 contrast ratios on deep black.',
      'Engineered an intuitive, nested transaction ledger visualization that reduces screen fatigue.'
    ],
    client: 'Logoipsum Finance Ltd.',
    role: 'Lead UX/UI & Brand Identity Designer',
    colors: ['#131313', '#FFFFFF', '#2563EB', '#3B82F6'],
    typography: ['Inter', 'Space Grotesk'],
    beforeImg: 'https://picsum.photos/seed/mobile-sketch/800/600?blur=1',
    afterImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANRh_1JhYDNnNh5pPdKGiDK-1AyqbCwYBn2WSP6IQf8NQ3CoXcYgb6CTXTHkGg7hotzeBDxk9fhrnDox6jXzQVIlgaBpHYERm0KMl9bUYBGIXsztUjEdHOFSHJGHuYDbAQurHhlj0v-k2HkHQREOMuVce_NSXf3F8QtGmYKD9FMFEEH2g5TAJ9INE7rXY5gtV1QwmxNcQQfpsLSEUjQN6Qyag2NET334jG1EbjXKSEyO4SINNlqp57jhZ3ITAn-onaUandTaPvsJBM'
  },
  {
    id: 'logo-landing-page',
    title: 'Logo Landing Page',
    category: 'Case Study',
    year: '2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjCB-dOTiwWIxwO9JS1ILe88jVwmDAvu0EcLBeZlAU7KWA3n0Ubwu6PzkEcEj4EhKShTMGoASQ4CmUY9lJEEAohF8Bvn2OqA_SGVJ3f2FVoq61gBMCYOo-CaG03Om4h7R2oKDGJVTWhFJ4CJQUmOJ-S9axARRuq6QT4QO4UOBgNjHRa-jyunfhDXtJiHc7sFesHpEMH5y_62G8BHRKGNDdWRjA4AFBcBnoqMItLIP8tOmgpga1T7kVZ_HmhLKSgDn7qE6iBs5EnDr0',
    description: 'A professional showcase of a corporate landing page design on a high-end laptop. The website features bold, geometric typography and a sophisticated grid layout with monochromatic contrast.',
    challenges: [
      'Creating a lasting brand impression purely through black & white visual elements without relying on colorful branding tricks.',
      'Translating corporate values into a striking geometric layout that signals premium executive craftsmanship.',
      'Aligning website sections dynamically to respect standard desktop viewing boundaries.'
    ],
    solutions: [
      'Utilized high-weight geometric letterforms from Epilogue to form striking visual anchors on the homepage.',
      'Divided core sections with razor-thin, elegant lines reminiscent of architectural blue-prints.',
      'Constructed a rigid 12-column layout to naturally guide visitors from abstract core concepts down to detailed product grids.'
    ],
    client: 'Logoipsum Architectural Systems',
    role: 'Art Director & Lead Web Designer',
    colors: ['#000000', '#FFFFFF', '#1F1F1F', '#8E9192'],
    typography: ['Epilogue', 'Inter'],
    beforeImg: 'https://picsum.photos/seed/web-wireframe/800/600?blur=1',
    afterImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjCB-dOTiwWIxwO9JS1ILe88jVwmDAvu0EcLBeZlAU7KWA3n0Ubwu6PzkEcEj4EhKShTMGoASQ4CmUY9lJEEAohF8Bvn2OqA_SGVJ3f2FVoq61gBMCYOo-CaG03Om4h7R2oKDGJVTWhFJ4CJQUmOJ-S9axARRuq6QT4QO4UOBgNjHRa-jyunfhDXtJiHc7sFesHpEMH5y_62G8BHRKGNDdWRjA4AFBcBnoqMItLIP8tOmgpga1T7kVZ_HmhLKSgDn7qE6iBs5EnDr0'
  },
  {
    id: 'logo-ipsum-website',
    title: 'Logo Ipsum Website',
    category: 'Case Study',
    year: '2024',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0vn2zDAEMvbTKyOhm8r-lSfINHsByv5P23zGb5o27uWOH9UWVwJmX_MDTZHzmbURp74rjjVaoQrztmQkuOTUMKZsHRv-7nFPvRDz_dyzBgEBsqbuWt85vtavegcal5ir1Ti4YUsZliChD0ofp3oxVv9AY_xwZ0dnRg-Oxp8fDEQTZcKQEYvfeJWNh70jU-GwGFVnotMc6mmludtOmgXGQyrXZNd0RHRrdLW3DgyEZDtU3_fQJXr3n8UqxS79P7ckb4S22MeHY3oXg',
    description: 'A minimalist web design presentation showing a clean, modern homepage layout. The design utilizes extensive white space and a rigorous vertical rhythm targeting high-luxury lifestyle brands.',
    challenges: [
      'Presenting brand identity mockups as fine art gallery displays within a functional, fast-loading digital web portal.',
      'Achieving organic user flow on highly conceptual, sparse visual stages.',
      'Balancing heavy typography headers with extremely delicate body descriptions.'
    ],
    solutions: [
      'Crafted a gallery-inspired dark mode canvas with wide 160px padding blocks to give the visuals generous breathing room.',
      'Engineered smooth, elegant page transition states using spring-physics loops.',
      'Paired heavy font-weight displays with mono-spaced utility markers to capture the modern corporate mood.'
    ],
    client: 'Logoipsum Creative Lab',
    role: 'Interaction & Interactive Web Architect',
    colors: ['#0E0E0E', '#FFFFFF', '#1F1F1F', '#C4C7C8'],
    typography: ['Epilogue', 'JetBrains Mono'],
    beforeImg: 'https://picsum.photos/seed/gallery-sketch/800/600?blur=1',
    afterImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0vn2zDAEMvbTKyOhm8r-lSfINHsByv5P23zGb5o27uWOH9UWVwJmX_MDTZHzmbURp74rjjVaoQrztmQkuOTUMKZsHRv-7nFPvRDz_dyzBgEBsqbuWt85vtavegcal5ir1Ti4YUsZliChD0ofp3oxVv9AY_xwZ0dnRg-Oxp8fDEQTZcKQEYvfeJWNh70jU-GwGFVnotMc6mmludtOmgXGQyrXZNd0RHRrdLW3DgyEZDtU3_fQJXr3n8UqxS79P7ckb4S22MeHY3oXg'
  },
  {
    id: 'logoipsum-watch',
    title: 'Logoipsum Watch App',
    category: 'Case Study',
    year: '2024',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeNAa55Hg5yK8q8xNpI2r0OqX6Zf6ygQj0-eiVUw48Ynlx91jzWvqXId11iRzpJsPQJ0Grs9F2YTBoh2GwXKUlu_5LDkOs_tWF1sTMf-EFEnCnuMrmy9VhDhf3ZfCEnBZkcujd44R_ZWtVwGd50WOB-Rs-t-MDU7fJuf-gubG0nm8Z1E3igM3OCg0aWqOZPPz0pTla6-LVBxpzkBHQ3McgY_LfFuLLBrnIxuIe3nqngULkto96F-AQE5JcOyI2fh0co5epAKI8IdSI',
    description: 'A premium watch app interface design displayed on a digital wearable device. The UI is focused on high-precision data visualization with sharp, thin lines and clear typography.',
    challenges: [
      'Rendering deep technical charts, telemetry vectors, and high-frequency indices on a constrained wrist-worn container.',
      'Sustaining legible layouts with high tactile response under rapidly moving outdoor conditions.',
      'Harmonizing physical smartwatch geometry with fluid interface modules.'
    ],
    solutions: [
      'Crafted a radial dial tracking interface optimized around high-contrast vectors and neon status gauges.',
      'Engineered clean micro-grids of 4px to align sub-second timestamps and heart-rate intervals.',
      'Paired custom high-energy digital markers with dark, energy-efficient battery-saving panels.'
    ],
    client: 'Logoipsum Precision Instruments',
    role: 'Lead Wearable UI Architect',
    colors: ['#0A0A0A', '#FFFFFF', '#00FFCC', '#222222'],
    typography: ['Fira Code', 'Inter'],
    beforeImg: 'https://picsum.photos/seed/watch-sketch/800/600?blur=1',
    afterImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeNAa55Hg5yK8q8xNpI2r0OqX6Zf6ygQj0-eiVUw48Ynlx91jzWvqXId11iRzpJsPQJ0Grs9F2YTBoh2GwXKUlu_5LDkOs_tWF1sTMf-EFEnCnuMrmy9VhDhf3ZfCEnBZkcujd44R_ZWtVwGd50WOB-Rs-t-MDU7fJuf-gubG0nm8Z1E3igM3OCg0aWqOZPPz0pTla6-LVBxpzkBHQ3McgY_LfFuLLBrnIxuIe3nqngULkto96F-AQE5JcOyI2fh0co5epAKI8IdSI'
  },
  {
    id: 'ritva-branding',
    title: 'Ritva Co. Fine Jewelry',
    category: 'Branding',
    year: '2024',
    imageUrl: 'https://picsum.photos/seed/jewelry/800/600',
    description: 'An elegant, high-end visual identity and monogram brand system designed for Ritva Co., a bespoke fine jewelry company.',
    challenges: [
      'Capturing the delicate, reflective qualities of precious gemstones and metals within a minimalist digital vector mark.',
      'Creating a modular monogram that works beautifully as a miniature jewelry engraving, leather stamp, and massive display logo.',
      'Synthesizing luxury heritage motifs with a sleek modern digital atmosphere.'
    ],
    solutions: [
      'Hand-crafted a geometric serif ligature monogram with tight mathematical curves for perfect balance.',
      'Established a warm, refined color system consisting of ivory, champagne gold, and charcoal slate.',
      'Designed luxury brand guidelines specifying spacious margins, sophisticated grid offsets, and blind-embossing guidelines.'
    ],
    client: 'Ritva Co. Jewelers',
    role: 'Brand Identity Designer',
    colors: ['#FAF9F6', '#D4AF37', '#1E1E1E', '#3E3E3E'],
    typography: ['Playfair Display', 'Inter'],
    beforeImg: 'https://picsum.photos/seed/jewelry-sketch/800/600?blur=1',
    afterImg: 'https://picsum.photos/seed/jewelry/800/600'
  },
  {
    id: 'aroha-packaging',
    title: 'Aroha Cosmetic Packaging',
    category: 'Advertisement',
    year: '2024',
    imageUrl: 'https://picsum.photos/seed/cosmetics/800/600',
    description: 'A luxurious and sustainable box and bottle packaging design series for Aroha Cosmetics, focusing on organic skincare products.',
    challenges: [
      'Balancing premium cosmetic luxury codes with biodegradable, raw material packaging substrates.',
      'Structuring multi-lingual regulatory ingredients and user directions legibly on extremely small curves.',
      'Creating physical-to-digital cohesion with eye-safe botanical pigments.'
    ],
    solutions: [
      'Styled earthy green tones combined with delicate gold-leaf hot stamps for a premium, organic look.',
      'Implemented clean, micro-layout columns utilizing high-legibility Inter typeface guidelines.',
      'Devised flat-lay structural die cuts and customized cardboard textures to eliminate adhesive plastic layers completely.'
    ],
    client: 'Aroha Cosmetics Co.',
    role: 'Structural & Packaging Designer',
    colors: ['#E6EADF', '#4A5D4E', '#DFD3C3', '#1C281F'],
    typography: ['Outfit', 'Inter'],
    beforeImg: 'https://picsum.photos/seed/cosmetics-sketch/800/600?blur=1',
    afterImg: 'https://picsum.photos/seed/cosmetics/800/600'
  }
];

export const experienceData: Experience[] = [
  {
    id: 'exp-1',
    duration: "Dec '24 — Present",
    company: 'Duratech Industries',
    role: 'Design Head & Social Media Manager',
    description: 'Steering the visual identity, brand communications, and digital product assets while engineering social media outreach channels.',
    bullets: [
      'Orchestrated complete brand overhauls for core industrial products, elevating professional digital visibility.',
      'Produced engaging visual stories, product packaging die-cuts, and responsive marketing banners.',
      'Collaborated with engineering teams to ensure design specifications matched real-world production materials.',
      'Scaled active digital engagement metrics by 140% via high-fidelity, interactive motion graphics content.'
    ],
    category: 'experience'
  },
  {
    id: 'exp-2',
    duration: "Dec '24 — Present",
    company: 'Freelance Design Studio',
    role: 'Lead Graphic Designer',
    description: 'Partnering with premium niche brands to sculpt identity monographs, luxury product packaging boxes, and digital interfaces.',
    bullets: [
      'Articulated the flagship brand monogram and identity blueprint for Ritva Co. Bespoke Jewelers.',
      'Created custom cosmetics packaging assets and logo layouts for Aroha Skincare Organics.',
      'Configured high-conversion marketing layouts, catalog booklets, and brand guidelines sheets.',
      'Synthesized complex creative briefs into elegant, minimalist visual assets.'
    ],
    category: 'experience'
  },
  {
    id: 'exp-3',
    duration: "Dec '24 — May '26",
    company: 'Mandala Art Gallery',
    role: 'Social Media Strategist & Creator',
    description: 'Crafted multi-channel creative directions, photographic narratives, and visual stories for contemporary and traditional art exhibits.',
    bullets: [
      'Curated visually refined grid designs, artist spotlight profiles, and promotional media books.',
      'Employed strategic storytelling to build an immersive digital experience connecting physical gallery spaces to collectors worldwide.',
      'Increased catalog inquiry rates by 80% through tailored design pamphlets and aesthetic video promotions.'
    ],
    category: 'experience'
  },
  {
    id: 'edu-1',
    duration: '2023 — 2027',
    company: 'JECRC University, Jaipur',
    role: 'Bachelor of Visual Arts (BVA)',
    description: 'Deep diving into design theory, advanced spatial geometry, typography architectures, print packaging methodologies, and fine arts principles.',
    bullets: [
      'Specialized focus on corporate brand layouting, industrial packaging die-cuts, and visual communication.',
      'Recognized with academic and designer honors for experimental graphic applications.',
      'Active student body designer leader representing the premier School of Design.'
    ],
    category: 'education'
  },
  {
    id: 'edu-2',
    duration: '2025',
    company: 'WS Cube Tech, Jodhpur',
    role: 'Digital Marketing & Ads Management Certification',
    description: 'A comprehensive operational program focusing on consumer behavior dynamics, search engine visibility, paid conversion funnels, and data analytics.',
    bullets: [
      'Mastered target audience indexing, conversion optimization loops, and dynamic Meta Ads structures.',
      'Applied analytic structures to design systems, linking aesthetic visual choices with high-performing click conversions.',
      'Studied user-centered brand narratives in high-competition modern retail industries.'
    ],
    category: 'education'
  }
];

export const skillsData: Skill[] = [
  { name: 'Brand Identity & Storytelling', description: "Creating unique brand identities through logos, typography, colours and visual elements. Building a consistent story that reflects the brand's personality." },
  { name: 'Creative Strategy & Ideation', description: 'Developing fresh ideas through research, brainstorming and creative exploration. Turning concepts into meaningful and effective design solutions.' },
  { name: 'Visual Design & Art Direction', description: 'Using typography, imagery, colours and layouts to create engaging visuals. Maintaining a clear and consistent visual language.' },
  { name: 'Advertising & Campaign Design', description: 'Creating impactful campaigns and advertisements that communicate brand messages. Combining creative concepts with visuals to capture audience attention.' },
  { name: 'Brand Research & Communication', description: 'Understanding brands, audiences and market trends through research and case studies. Using insights to develop relevant design concepts and communication strategies.' }
];

export const softwareData: Software[] = [
  { name: 'Photoshop', category: 'design' },
  { name: 'Illustrator', category: 'design' },
  { name: 'After Effects', category: 'design' },
  { name: 'Premiere Pro', category: 'design' },
  { name: 'Procreate', category: 'design' },
  { name: 'Corel Draw', category: 'design' }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Shivani Kaushik",
    role: "Dean",
    company: "Jaipur School Of Design",
    text: "Vanshika has been a sincere, hardworking, and wonderful intern at the Jaipur School of Design. She was responsible, attentive to detail, and prompt, and she took initiative whenever support was needed. Her commitment, willingness to learn, and warm presence made her a valued part of our team.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Riti Agarwal",
    role: "Founder",
    company: "Ritva",
    text: "I really love how the logo has turned out! I wanted Ritva to feel elegant and connected to its Kashmiri roots, without looking too traditional, and you've captured that beautifully. It's simple yet distinctive, with the premium feel I wanted, and feels very much like Ritva. Loved working with you!",
    rating: 5
  },
  {
    id: "test-3",
    name: "Divyansh",
    role: "Founder",
    company: "Duratech",
    text: "I'm really happy with how you've transformed Duratech's identity. We wanted a more modern, professional look while keeping the trust and reliability our customers associate with us. You brought consistency across the logo, colours, packaging, website and social media, and you understood our industry. Really appreciate your effort and creativity!",
    rating: 5
  },
  {
    id: "test-4",
    name: "Vasudha Sharma",
    role: "Founder",
    company: "Mandala Art, Gallery, Studio, Academy & Trust",
    text: "Working with Vanshika was a lovely experience. She took the time to understand our work before coming up with ideas, and her thoughtful approach made our social media feel more active, organised and engaging. She understood that Mandala is about people, learning, creativity and community. Thank you, Vanshika!",
    rating: 5
  }
];

export const achievementsData = [
  {
    title: 'Best Designer Award | Innov8 2024',
    description: 'Awarded for exceptional creative thinking, architectural layout accuracy, and impactful visual communication solutions in a high-intensity design summit.'
  },
  {
    title: 'JECRC Admission Campaign 2025',
    description: 'Selected as the primary creative face and designer represent of the university\'s admissions rollout campaign, representing the School of Design.'
  }
];
