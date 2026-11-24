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
      { title: 'Staff Uniform', imageUrl: '/Branding/Branding_1/ad_3.png' },
      { title: 'Delivery Vehicle', imageUrl: '/Branding/Branding_1/ad_6.png' },
      { title: 'Safety Helmet', imageUrl: '/Branding/Branding_1/ad_8.png' }
    ],
    mockups: [
      { imageUrl: '/Branding/Branding_1/draft.png', alt: 'Duratech mascot design and character sheet' },
      { imageUrl: '/Branding/Branding_1/mockup.png', alt: 'Duratech logo construction grid' },
      { imageUrl: '/Branding/Branding_1/ad_2.png', alt: 'Business Cards' },
      { imageUrl: '/Branding/Branding_1/ad_4.png', alt: 'Presentation Folder' },
      { imageUrl: '/Branding/Branding_1/ad_5.png', alt: 'Notebook & Letterhead' },
      { imageUrl: '/Branding/Branding_1/ad_7.png', alt: 'Invoice' }
    ]
  },
  {
    id: 'sajke-branding',
    title: 'Sajke Clothing',
    category: 'Branding',
    year: '2026',
    imageUrl: '/Branding/Branding_2/ad_1.png',
    description: "Sajke is a modern fashion brand that celebrates simplicity, elegance, and femininity. It brings together beautiful designs, soft details, and timeless styles to create outfits that feel both comfortable and classy. Sajke is made for women who love looking effortlessly stylish and believe in keeping fashion simple yet elegant.",
    brief: "To redesign Sajke's visual identity to reflect its elegant and feminine personality, while creating a consistent brand experience across packaging, stationery and social media.",
    challenges: [
      "Balancing traditional aesthetics with a modern look.",
      "Creating a premium yet minimal visual identity.",
      "Reflecting elegance and femininity through design.",
      "Maintaining consistency across all brand applications.",
      "Making the brand stand out in the fashion market."
    ],
    solutions: [
      "Designed a serif wordmark with flowing curves to express elegance and femininity.",
      "Chose maroon, cream and muted pink to reflect warmth and sophistication.",
      "Used fabric textures to establish a connection with traditional clothing.",
      "Combined minimal layouts with elegant typography and natural photography.",
      "Created a consistent visual identity across packaging, stationery and social media."
    ],
    client: 'Sajke Clothing',
    role: 'Brand Identity Designer',
    industry: 'Fashion & Apparel',
    colors: ['#5B0F1A', '#F3E9DC', '#D9A5A8'],
    typography: [],
    beforeImg: '/Branding/Branding_2/ad_2.png',
    afterImg: '/Branding/Branding_2/ad_3.png',
    applications: [
      { title: 'Instagram Stories', imageUrl: '/Branding/Branding_2/ad_4.png' },
      { title: 'Instagram Profile', imageUrl: '/Branding/Branding_2/ad_7.png' }
    ],
    mockups: [
      { imageUrl: '/Branding/Branding_2/ad_5.png', alt: 'Invoice and thank-you cards' },
      { imageUrl: '/Branding/Branding_2/ad_6.png', alt: 'Shopping bag and business cards' }
    ]
  },
  {
    id: 'silence-campaign',
    title: 'SILENCE DOES’NT MEAN “YES”',
    category: 'Advertisement',
    year: '2026',
    imageUrl: '/Branding/Advertisment_1/ad_1.png',
    description: "A minimal yet striking social campaign driven by high contrast and restrained colour. Partially concealed faces create tension, revealing just enough to evoke curiosity. The tone is quiet, subtle and thought-provoking, leaning into discomfort to encourage reflection rather than direct instruction.",
    sections: [
      { heading: 'Style', body: "Minimal yet striking, driven by high contrast and restrained color. Partially concealed faces create tension revealing just enough to evoke curiosity." },
      { heading: 'Tone', body: "Quiet, subtle, and thought-provoking. It leans into discomfort, encouraging reflection rather than direct instruction." },
      { heading: 'Direction', body: "Built around everyday emotional interactions. Highlights what is said versus what is truly meant, bringing the ‘unspoken’ into focus." },
      { heading: 'Art Direction', body: "Close-up portraits with obscured expressions on bold, minimal backgrounds. A dominant red palette paired with clean typography for sharp, clear messaging." }
    ],
    client: 'Vishākhā',
    role: 'Graphic Designer',
    industry: 'Social Awareness Campaign',
    deliverables: ['Poster Design', 'Outdoor & Print Media', 'Social Media'],
    colors: ['#8B1A1F', '#E02027', '#FDFDF1'],
    typography: [],
    beforeImg: '/Branding/Advertisment_1/ad_1.png',
    afterImg: '/Branding/Advertisment_1/ad_2.png',
    applications: [
      { title: 'Bus Shelter Posters', imageUrl: '/Branding/Advertisment_1/ad_6.png' },
      { title: 'Billboard', imageUrl: '/Branding/Advertisment_1/ad_7.png' },
      { title: 'Wall Posters', imageUrl: '/Branding/Advertisment_1/ad_8.png' },
      { title: 'Metro Station Board', imageUrl: '/Branding/Advertisment_1/ad_9.png' },
      { title: 'Newspaper Ad', imageUrl: '/Branding/Advertisment_1/ad_10.png' },
      { title: 'Instagram', imageUrl: '/Branding/Advertisment_1/ad_11.png' }
    ],
    mockups: [
      { imageUrl: '/Branding/Advertisment_1/ad_3.png', alt: 'Ideation and concept development' },
      { imageUrl: '/Branding/Advertisment_1/ad_4.png', alt: 'Campaign strategy' },
      { imageUrl: '/Branding/Advertisment_1/ad_5.png', alt: 'Visual rationale' }
    ]
  },
  {
    id: 'dore-branding',
    title: 'Dore Bakery & Coffee House',
    category: 'Branding',
    year: '2026',
    imageUrl: '/Branding/Branding_3/1.gif',
    description: "Dore is a contemporary neighbourhood bakery inspired by the simple pleasure of freshly baked treats and everyday coffee rituals. From flaky croissants and soft cream rolls to cookies, cupcakes and carefully brewed coffee, Dore brings together comforting flavours and a playful visual identity. Every detail, from the way a pastry is wrapped to the way a coffee is served, is designed to make the everyday feel a little more special.",
    brief: "To create a warm and playful visual identity for Dore that reflects its personality and connects with customers through thoughtful branding, packaging and café experiences.",
    challenges: [
      "Balancing playfulness with simplicity.",
      "Bringing coffee and bakery culture together under one identity.",
      "Creating a familiar yet distinctive brand personality.",
      "Making everyday café experiences visually memorable.",
      "Maintaining consistency across all brand applications."
    ],
    solutions: [
      "Designed a handwritten wordmark to create a warm and personal feel.",
      "Used earthy brown, cream and terracotta shades inspired by coffee and baked goods.",
      "Created playful, hand-drawn illustrations of bakery products.",
      "Paired monospaced and sans-serif fonts for a clean yet distinctive look.",
      "Extended the visual identity across packaging, menus and café essentials."
    ],
    client: 'Dore Bakery & Coffee House',
    role: 'Brand Identity Designer',
    industry: 'Bakery & Café',
    colors: ['#542A20', '#F3EADC', '#C2693F'],
    typography: [],
    beforeImg: '/Branding/Branding_3/2.png',
    afterImg: '/Branding/Branding_3/3.png',
    applications: [
      { title: 'Storefront Signage', imageUrl: '/Branding/Branding_3/11.png' },
      { title: 'Paper Bags & Moodboard', imageUrl: '/Branding/Branding_3/12.png' },
      { title: 'Tote Bag & Bread Tag', imageUrl: '/Branding/Branding_3/13.png' },
      { title: 'Price Tag', imageUrl: '/Branding/Branding_3/15.png' },
      { title: 'Coffee Cup & Gift Wrap', imageUrl: '/Branding/Branding_3/16.png' },
      { title: 'Bread Banner', imageUrl: '/Branding/Branding_3/17.png' }
    ],
    mockups: [
      { imageUrl: '/Branding/Branding_3/4.png', alt: 'Hand-drawn bakery illustrations' },
      { imageUrl: '/Branding/Branding_3/5.png', alt: 'Wordmark, symbol and colour lockups' },
      { imageUrl: '/Branding/Branding_3/6.png', alt: 'Business cards' },
      { imageUrl: '/Branding/Branding_3/7.png', alt: 'Embroidered apron' },
      { imageUrl: '/Branding/Branding_3/8.png', alt: 'Business card with pastries' },
      { imageUrl: '/Branding/Branding_3/9.png', alt: 'Napkin, coffee bag and menu' },
      { imageUrl: '/Branding/Branding_3/10.png', alt: 'Coffee cups' },
      { imageUrl: '/Branding/Branding_3/14.png', alt: 'Wrapping paper' }
    ]
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
