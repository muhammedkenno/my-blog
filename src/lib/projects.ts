// src/lib/projects.ts

export type Project = {
  id: number;
  title: string;
  titleAr: string;
  done: boolean;
  tech: string;
  techAr?: string;
  description: string;
  descriptionAr: string;
  features: string[];
  featuresAr?: string[];
  status: "Planning" | "In Progress" | "Completed";
  statusAr: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Blog Platform",
    titleAr: "منصة المدونة",
    done: false,
    tech: "Next.js + Strapi",
    techAr: "Next.js + Strapi",
    description: "A full-stack blog with a CMS backend and dynamic pages.",
    descriptionAr: "مدونة متكاملة مع خلفية CMS وصفحات ديناميكية.",
    status: "In Progress",
    statusAr: "جارٍ التنفيذ",
    features: [
      "Dynamic pages for each post",
      "Strapi CMS to manage content",
      "Responsive design with Tailwind",
    ],
    featuresAr: [
      "صفحات ديناميكية لكل منشور",
      "إدارة المحتوى بواسطة Strapi CMS",
      "تصميم متجاوب بـ Tailwind",
    ],
  },
  {
    id: 2,
    title: "E-Commerce Store",
    titleAr: "متجر إلكتروني",
    done: false,
    tech: "Next.js + Stripe",
    techAr: "Next.js + Stripe",
    description: "Online store with cart, checkout, and payment integration.",
    descriptionAr: "متجر إلكتروني مع سلة شراء ونظام دفع متكامل.",
    status: "Planning",
    statusAr: "قيد التخطيط",
    features: [
      "Product listing and detail pages",
      "Cart and checkout flow",
      "Stripe payment integration",
    ],
    featuresAr: [
      "صفحات عرض المنتجات وتفاصيلها",
      "سلسلة سلة شراء وخروج سهلة",
      "تكامل دفع عبر Stripe",
    ],
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    titleAr: "لوحة تحكم SaaS",
    done: false,
    tech: "Next.js + Charts",
    techAr: "Next.js + Charts",
    description: "Analytics dashboard with charts and role-based access.",
    descriptionAr: "لوحة بيانات مع رسوم بيانية ووصول حسب الأدوار.",
    status: "Planning",
    statusAr: "قيد التخطيط",
    features: [
      "Charts and data visualization",
      "Role-based access control",
      "Dark mode UI",
    ],
    featuresAr: [
      "رسوم بيانية وعرض بيانات مرئي",
      "تحكم وصول حسب الأدوار",
      "واجهة داكنة جذابة",
    ],
  },
  {
    id: 4,
    title: "AI-Powered App",
    titleAr: "تطبيق مدعوم بالذكاء الاصطناعي",
    done: false,
    tech: "Next.js + OpenAI",
    techAr: "Next.js + OpenAI",
    description: "Smart app with AI features using the OpenAI API.",
    descriptionAr: "تطبيق ذكي مع ميزات ذكاء اصطناعي باستخدام OpenAI.",
    status: "Planning",
    statusAr: "قيد التخطيط",
    features: [
      "Chat interface with AI",
      "Streaming responses",
      "Prompt engineering",
    ],
    featuresAr: [
      "واجهة دردشة مع الذكاء الاصطناعي",
      "ردود متدفقة فورية",
      "تصميم المطالبات الذكية",
    ],
  },
];
