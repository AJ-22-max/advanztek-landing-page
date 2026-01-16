export interface TransformedService {
  title: string;
  desc: string;
  slug: string;
}


export const services = [
  {
    title: "Web & SaaS Development",
    desc: "Modern websites and scalable SaaS platforms",
    slug: "web-saas" // Add this
  },
  {
    title: "Blockchain Solutions",
    desc: "Secure blockchain and Web3 applications",
    slug: "blockchain" // Add this
  },
  {
    title: "AI & Automation",
    desc: "Intelligent systems and automated processes",
    slug: "ai-automation" // Add this
  },
  {
    title: "Enterprise & API Systems",
    desc: "Robust backend and API infrastructure",
    slug: "enterprise-api" // Add this
  }
];


export const about = [
  {
    title: "Company",
    desc: "Who we are and what we stand for",
    features: ["About Advanztek Nig. Ltd.", "Vision & Mission", "Core Values"],
    color: "#3B5BDB",
    slideId: "company"  // Add this
  },
  {
    title: "Leadership",
    desc: "Meet the people driving Advanztek",
    features: ["Managing Director's Message", "Management Team"],
    color: "#7048E8",
    slideId: "leadership"  // Add this
  },
  {
    title: "Our Approach",
    desc: "How we deliver reliable solutions",
    features: ["Our Methodology", "Quality & Compliance", "Client Engagement Process"],
    color: "#1098AD",
    slideId: "approach"  // Add this
  }
];
