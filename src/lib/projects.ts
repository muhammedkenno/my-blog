// src/lib/projects.ts

export type Project = {
  id: number;
  title: string;
  done: boolean;
  tech: string;
  description: string;
  features: string[];
  status: "Planning" | "In Progress" | "Completed";
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Blog Platform",
    done: false,
    tech: "Next.js + Strapi",
    description: "A full-stack blog with a CMS backend and dynamic pages.",
    status: "In Progress",
    features: [
      "Dynamic pages for each post",
      "Strapi CMS to manage content",
      "Responsive design with Tailwind",
    ],
  },
  {
    id: 2,
    title: "E-Commerce Store",
    done: false,
    tech: "Next.js + Stripe",
    description: "Online store with cart, checkout, and payment integration.",
    status: "Planning",
    features: [
      "Product listing and detail pages",
      "Cart and checkout flow",
      "Stripe payment integration",
    ],
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    done: false,
    tech: "Next.js + Charts",
    description: "Analytics dashboard with charts and role-based access.",
    status: "Planning",
    features: [
      "Charts and data visualization",
      "Role-based access control",
      "Dark mode UI",
    ],
  },
  {
    id: 4,
    title: "AI-Powered App",
    done: false,
    tech: "Next.js + OpenAI",
    description: "Smart app with AI features using the OpenAI API.",
    status: "Planning",
    features: [
      "Chat interface with AI",
      "Streaming responses",
      "Prompt engineering",
    ],
  },
];
