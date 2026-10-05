/* ─── Project grid ─────────────────────────────────────────────
   Image paths are relative to /public; wrap them with asset() when rendering.
   `caseStudy` links a card to /projects/<slug>. */
export const projectsData = [
  {
    id: 14, title: "Tareeqk Website", description: "Booking website for Tareeqk, a Dubai-based car recovery and roadside assistance platform, with 24/7 dispatch, service pages and fleet login.",
    image: "/images/projects/tareeqk-web.png", hoverImage: "/images/projects/tareeqk-web-2.png",
    tag: ["All", "Web"], previewUrl: "https://tareeqk.ae/en", caseStudy: "tareeqk",
  },
  {
    id: 15, title: "Tessera Beauty", description: "Full-stack skincare & beauty commerce platform: Next.js storefront with cart, loyalty program and reviews, backed by a FastAPI system handling M-Pesa payments, invoicing, stock and commissions.",
    image: "/images/projects/tessera.png", tag: ["All", "Web"], previewUrl: "https://www.tesserakoreanbeauty.co.ke/", caseStudy: "tessera",
  },
  {
    id: 19, title: "Forex Trading Assistant", description: "AI-driven trading signal platform combining technical analysis with machine learning and reinforcement learning models, with a FastAPI backend and Next.js dashboard.",
    tag: ["All", "AI & Automation"],
    visual: { label: "Machine Learning", stack: ["FastAPI", "Machine Learning", "Reinforcement Learning", "Next.js"] },
  },
  {
    id: 20, title: "WhatsApp Automation Chatbots", description: "Multilingual WhatsApp chatbots in English, Arabic and Urdu, built on the Meta WhatsApp Cloud API for Tareeqk to automate customer conversations and cut response times.",
    tag: ["All", "AI & Automation"], caseStudy: "tareeqk",
    visual: { label: "Automation", stack: ["Meta WhatsApp Cloud API", "English · Arabic · Urdu", "Customer support"] },
  },
  {
    id: 21, title: "Excel AI Assistant", description: "LLM-powered tool that answers plain-English questions about spreadsheets, automating filtering, extraction and clean-up of business data.",
    tag: ["All", "AI & Automation"],
    visual: { label: "LLM", stack: ["Python", "Large Language Models", "pandas"] },
  },
  {
    id: 22, title: "Notification Service", description: "Event-driven notification microservice that automates email, SMS and push delivery through an asynchronous message queue, built with FastAPI.",
    tag: ["All", "AI & Automation"],
    visual: { label: "Automation", stack: ["FastAPI", "Message queues", "Async workers"] },
  },
  {
    id: 8, title: "Prevail Shipping", description: "Full shipping & logistics company website with service listings, tracking info and contact flows.",
    image: "/images/projects/prevailshipping.png", tag: ["All", "Web"], previewUrl: "https://prevailshipping.com",
  },
  {
    id: 9, title: "Talk & Pay", description: "Fintech payment platform: clean marketing site for a modern payment solution.",
    image: "/images/projects/tap.png", tag: ["All", "Web"], previewUrl: "https://talkandpay.com",
  },
  {
    id: 12, title: "Haleefa Elite Homes", description: "Luxury real estate React profile site showcasing premium properties.",
    image: "/images/projects/haleefa.png", tag: ["All", "Web"], previewUrl: "https://www.haleefaelitehomes.com/",
  },
  {
    id: 10, title: "Capital Stay UAE", description: "Real estate listings and property discovery platform for UAE market.",
    image: "/images/projects/capitalstay.png", tag: ["All", "Web"], previewUrl: "https://capitalstayuae.com",
  },
  {
    id: 13, title: "Dilex Freight", description: "International freight forwarding and logistics services site.",
    image: "/images/projects/dilex.png", tag: ["All", "Web"], previewUrl: "https://dilexfreight.com/",
  },
  {
    id: 11, title: "Breathtakingkeeps", description: "Vacation and travel experiences booking site with immersive design.",
    image: "/images/projects/breathtakingkeeps.png", tag: ["All", "Web"], previewUrl: "https://breathtakingkeeps.site/",
  },
  {
    id: 5, title: "Kiosk App", description: "Self-service kiosk web application for Talk & Pay.",
    image: "/images/projects/kiosk.png", tag: ["All", "Web"], previewUrl: "https://kiosk.talkandpay.com/",
  },
  {
    id: 16, title: "My Design Studio", description: "Agency-style site for a design studio, with an animated hero, services, portfolio showcase and journal, built with Next.js, GSAP and Framer Motion.",
    image: "/images/projects/design-studio.png", hoverImage: "/images/projects/design-studio-2.png",
    tag: ["All", "Web"], previewUrl: "https://my-design-studio-ivory.vercel.app/", caseStudy: "design-studio",
  },
  {
    id: 4, title: "Hymn Book App", description: "Cross-platform Flutter mobile application for browsing and reading hymns.",
    image: "/images/projects/mobile1.jpg", tag: ["All", "Mobile"], gitUrl: "https://github.com/Ashwin2926/hymn-book",
  },
  {
    id: 17, title: "Tareeqk Roadside Assistance", description: "Customer mobile app for Tareeqk: request instant car recovery, track provider ETA in real time, and pay securely in-app.",
    screens: ["/images/projects/tareeqk-customer.jpeg", "/images/projects/tareeqk-customer-2.jpeg"],
    tag: ["All", "Mobile"], appStoreUrl: "https://apps.apple.com/in/app/tareeqk-roadside-assistances/id6480442854",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.tareeqk.order", caseStudy: "tareeqk",
  },
  {
    id: 18, title: "Tareeqk Driver", description: "Provider-side mobile app for Tareeqk's recovery network: job dispatch, acceptance and real-time navigation for drivers.",
    screens: ["/images/projects/tareeqk-driver.jpeg", "/images/projects/tareeqk-driver-2.jpeg"],
    tag: ["All", "Mobile"], appStoreUrl: "https://apps.apple.com/pk/app/tareeqk-driver/id6497716306",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.tareeqk.dispatcher&hl=en", caseStudy: "tareeqk",
  },
  {
    id: 1, title: "Management System", description: "Laravel-powered enterprise management system with full CRUD and auth.",
    image: "/images/projects/1.png", tag: ["All", "Web"],
  },
  {
    id: 2, title: "Lodge Website", description: "Hospitality website built with React frontend and Laravel backend.",
    image: "/images/projects/2.png", tag: ["All", "Web"],
  },
  {
    id: 3, title: "Church Website", description: "Community church platform built with React.",
    image: "/images/projects/3.png", tag: ["All", "Web"],
  },
  {
    id: 6, title: "Management System II", description: "Second-generation Laravel enterprise management portal.",
    image: "/images/projects/6.png", tag: ["All", "Web"],
  },
  {
    id: 7, title: "Shoe Shop E-Commerce", description: "E-commerce store with authentication and product browsing (PHP, HTML, CSS).",
    image: "/images/projects/7.png", tag: ["All", "Web"],
  },
];

/* ─── Selected clients strip ─────────────────────────────────── */
export const clients = [
  "Tareeqk", "Tessera Korean Beauty", "Talk & Pay", "Prevail Shipping",
  "Haleefa Elite Homes", "Capital Stay UAE", "Dilex Freight", "Breathtakingkeeps",
];

/* ─── Case studies ───────────────────────────────────────────── */
export const caseStudies = [
  {
    slug: "tareeqk",
    name: "Tareeqk",
    category: "Web & Mobile Platform",
    location: "Dubai, UAE",
    tagline: "A complete roadside assistance platform, from the first tap to the tow truck.",
    cover: "/images/projects/tareeqk-web.png",
    overview:
      "Tareeqk provides 24/7 car recovery, towing, battery jump starts and tyre repair across Dubai. The platform connects stranded drivers with nearby recovery providers through a booking website, a customer app and a dedicated driver app, all working off one dispatch system.",
    challenge:
      "Roadside emergencies are stressful and time-critical. Customers need to request help in seconds and see exactly when it will arrive, while providers need a reliable way to receive, accept and complete jobs on the move.",
    scope: [
      "Booking website with service pages, pricing and fleet login",
      "Customer app for iOS and Android",
      "Driver app for iOS and Android",
      "Dispatch and job management",
      "Multilingual WhatsApp automation chatbots",
    ],
    stack: ["React Native", "Laravel", "Next.js", "Meta WhatsApp Cloud API"],
    highlights: [
      { title: "Request in seconds", text: "Route preview on a live map, vehicle type with upfront pricing, and UAE plate entry with emirate selection." },
      { title: "Flexible payments", text: "Cash, wallet or card at checkout, with promo codes built into the request flow." },
      { title: "Built for drivers", text: "Provider wallet with top-up and withdraw, service and fleet categories from 3-ton to desert recovery, and refer-and-earn." },
      { title: "WhatsApp automation", text: "Chatbots in English, Arabic and Urdu on the Meta WhatsApp Cloud API answer customers instantly and cut response times." },
      { title: "Live on both stores", text: "Customer and driver apps are published on the App Store and Google Play." },
    ],
    gallery: [
      { src: "/images/projects/tareeqk-web.png", alt: "Tareeqk website hero", type: "web" },
      { src: "/images/projects/tareeqk-web-2.png", alt: "Tareeqk join-as-driver section", type: "web" },
      { src: "/images/projects/tareeqk-customer.jpeg", alt: "Customer app request screen", type: "phone" },
      { src: "/images/projects/tareeqk-customer-2.jpeg", alt: "Customer app screen", type: "phone" },
      { src: "/images/projects/tareeqk-driver.jpeg", alt: "Driver app profile and wallet", type: "phone" },
      { src: "/images/projects/tareeqk-driver-2.jpeg", alt: "Driver app screen", type: "phone" },
    ],
    links: [
      { label: "Visit website", href: "https://tareeqk.ae/en" },
      { label: "Customer app · App Store", href: "https://apps.apple.com/in/app/tareeqk-roadside-assistances/id6480442854" },
      { label: "Customer app · Google Play", href: "https://play.google.com/store/apps/details?id=com.tareeqk.order" },
      { label: "Driver app · App Store", href: "https://apps.apple.com/pk/app/tareeqk-driver/id6497716306" },
      { label: "Driver app · Google Play", href: "https://play.google.com/store/apps/details?id=com.tareeqk.dispatcher&hl=en" },
    ],
  },
  {
    slug: "tessera",
    name: "Tessera Korean Beauty",
    category: "E-Commerce Platform",
    location: "Nairobi, Kenya",
    tagline: "Authentic Korean skincare, sold with the calm of a boutique.",
    cover: "/images/projects/tessera.png",
    overview:
      "Tessera sources 100% authentic Korean skincare directly from original manufacturers and delivers across Nairobi. The platform pairs an editorial Next.js storefront with a FastAPI back office that runs payments, stock and the business behind it.",
    challenge:
      "Counterfeit beauty products are common, so the brand needed a store that feels premium and earns trust at every step, while giving the team one system for sales, inventory and commissions.",
    scope: [
      "Next.js storefront with cart, wishlist and reviews",
      "Care Circle loyalty program",
      "FastAPI back office: M-Pesa and card payments, invoicing, stock and commissions",
      "Point of sale and automated SMS/email notifications",
      "Consultation, journal and product verification pages",
    ],
    stack: ["Next.js", "FastAPI", "MongoDB", "M-Pesa"],
    highlights: [
      { title: "Boutique storefront", text: "Editorial typography, curated brand marquee and a quiet, premium layout that lets the products lead." },
      { title: "Trust built in", text: "Dedicated verify page and authenticity messaging throughout the shopping journey." },
      { title: "Local payments", text: "M-Pesa checkout with automated invoicing, matched to how customers in Kenya actually pay." },
      { title: "One back office", text: "Stock, orders and commissions managed in a single FastAPI system." },
    ],
    gallery: [
      { src: "/images/projects/tessera.png", alt: "Tessera storefront hero", type: "web" },
    ],
    links: [
      { label: "Visit website", href: "https://www.tesserakoreanbeauty.co.ke/" },
    ],
  },
  {
    slug: "design-studio",
    name: "My Design Studio",
    category: "Agency Website",
    location: "Architecture & Interiors",
    tagline: "From façade to finish: a studio site with the restraint of good architecture.",
    cover: "/images/projects/design-studio.png",
    overview:
      "An agency-style website for an architecture and interior design studio, presenting services, a portfolio showcase and a journal behind a cinematic, full-bleed hero.",
    challenge:
      "Design studios sell taste. The site needed to feel as considered as the spaces it showcases: generous whitespace, refined serif type and motion that guides rather than distracts.",
    scope: [
      "Animated full-screen hero",
      "About, services and portfolio sections",
      "Journal for studio news and insights",
      "Responsive layout from phone to widescreen",
    ],
    stack: ["Next.js", "GSAP", "Framer Motion"],
    highlights: [
      { title: "Cinematic hero", text: "Full-bleed interior photography with layered serif headline and a quiet scroll cue." },
      { title: "Editorial layout", text: "Asymmetric image compositions and italic serif accents for a magazine feel." },
      { title: "Considered motion", text: "GSAP and Framer Motion reveals that pace the story section by section." },
    ],
    gallery: [
      { src: "/images/projects/design-studio.png", alt: "Design studio hero", type: "web" },
      { src: "/images/projects/design-studio-2.png", alt: "Design studio about section", type: "web" },
    ],
    links: [
      { label: "Visit website", href: "https://my-design-studio-ivory.vercel.app/" },
    ],
  },
];

/* ─── Testimonials ───────────────────────────────────────────────
   Add real client quotes here; the section stays hidden while this is empty.
   { quote: "...", name: "Full Name", role: "Title, Company" } */
export const testimonials = [];
