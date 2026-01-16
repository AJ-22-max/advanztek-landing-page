interface Slide {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  bgImage: string;
  color: string;
}

export const slides: Slide[] = [
    {
      id: 1,
      category: "Web & SaaS Development",
      title: "We Build Scalable Web & SaaS Products",
      subtitle: "From company websites to multi-tenant SaaS platforms, we design and develop modern, secure, and high-performance software solutions.",
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
      color: "#3B82F6"
    },
    {
      id: 2,
      category: "Blockchain Solutions",
      title: "Powering Innovation with Blockchain Technology",
      subtitle: "We create smart contracts, Web3 applications, and blockchain integrations that enable secure, transparent, and decentralized systems.",
      bgImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80",
      color: "#8B5CF6"
    },
    {
      id: 3,
      category: "AI & Automation",
      title: "Intelligent Software Driven by AI",
      subtitle: "We integrate AI and automation to optimize workflows, enhance decision-making, and build smarter digital products.",
      bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80",
      color: "#10B981"
    },
    {
      id: 4,
      category: "Enterprise & API Systems",
      title: "Robust Backend & API Infrastructure",
      subtitle: "We architect scalable backend systems, APIs, and integrations that power reliable enterprise-grade applications.",
      bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80",
      color: "#F59E0B"
    }
  ];