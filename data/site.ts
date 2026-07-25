import {
  Code2,
  Palette,
  Cloud,
  TrendingUp,
  Workflow,
  BarChart3,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import type {
  NavLink,
  Service,
  Testimonial,
  PricingPlan,
  SocialLink,
  Metric,
  Project,
  ContactDetail,
} from "@/types";

export const SITE_NAME = "NorthPeak Digital";

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    icon: Code2,
    category: "Engineering",
    title: "Web Development",
    description:
      "Fast, resilient product builds on modern frameworks engineered for scale from the first commit.",

    details: {
      overview:
        "We build fast, secure and scalable web applications using modern frameworks. Every project is optimized for performance, accessibility and long-term maintainability.",

      deliverables: [
        "Responsive website development",
        "Full-stack web applications",
        "REST & GraphQL APIs",
        "Authentication & authorization",
        "Performance optimization",
        "Deployment & CI/CD",
      ],

      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Tailwind CSS",
      ],
    },
  },

  {
    icon: Palette,
    category: "Design",
    title: "UI/UX Design",
    description:
      "Interfaces designed around real users before a single line of code ships.",

    details: {
      overview:
        "We design interfaces that are simple, accessible and validated with users before development begins.",

      deliverables: [
        "User Research",
        "Wireframes",
        "High Fidelity UI",
        "Design Systems",
        "Interactive Prototypes",
      ],

      technologies: [
        "Figma",
        "FigJam",
        "Adobe XD",
      ],
    },
  },

  {
    icon: Cloud,
    category: "Infrastructure",
    title: "Cloud Solutions",
    description:
      "Reliable cloud infrastructure built for scalability and cost efficiency.",

    details: {
      overview:
        "We architect cloud infrastructure that is secure, observable and easy to scale.",

      deliverables: [
        "Cloud Migration",
        "Infrastructure as Code",
        "Monitoring",
        "CI/CD",
        "Auto Scaling",
      ],

      technologies: [
        "AWS",
        "Docker",
        "Terraform",
        "Kubernetes",
      ],
    },
  },

  {
    icon: TrendingUp,
    category: "Growth",
    title: "SEO",
    description:
      "Technical SEO focused on modern search ranking factors.",

    details: {
      overview:
        "We improve technical SEO, page performance and content structure to increase organic visibility.",

      deliverables: [
        "Technical Audit",
        "Keyword Research",
        "Schema Markup",
        "Content Strategy",
        "Core Web Vitals",
      ],

      technologies: [
        "Google Search Console",
        "GA4",
        "Ahrefs",
        "Semrush",
      ],
    },
  },

  {
    icon: Workflow,
    category: "Operations",
    title: "Automation",
    description:
      "Remove repetitive work with intelligent workflow automation.",

    details: {
      overview:
        "We connect your tools and automate repetitive business processes.",

      deliverables: [
        "Workflow Design",
        "CRM Automation",
        "Email Automation",
        "API Integrations",
        "Custom Scripts",
      ],

      technologies: [
        "Zapier",
        "Make",
        "Node.js",
        "Python",
      ],
    },
  },

  {
    icon: BarChart3,
    category: "Insight",
    title: "Analytics",
    description:
      "Actionable dashboards that answer business questions.",

    details: {
      overview:
        "We build dashboards that track the KPIs your team actually cares about.",

      deliverables: [
        "GA4 Setup",
        "Business Dashboards",
        "Custom Reports",
        "Conversion Tracking",
      ],

      technologies: [
        "GA4",
        "Looker Studio",
        "Power BI",
        "BigQuery",
      ],
    },
  },
];

export const METRICS: Metric[] = [
  { value: 120, suffix: "+", decimals: 0, label: "Projects delivered" },
  { value: 99.98, suffix: "%", decimals: 2, label: "Infrastructure uptime" },
  { value: 31, suffix: " yrs", decimals: 0, label: "Combined team experience" },
  { value: 96, suffix: "%", decimals: 0, label: "Client retention" },
];

export const FEATURED_PROJECT: Project = {
  title: "Fieldstack — onboarding rebuild",
  description:
    "Fieldstack's activation dropped off hard between signup and first project created. We rebuilt the onboarding path around a single guided setup flow, cut the steps to first value in half, and shipped it in six weeks alongside their team.",
  tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  metricValue: "+34%",
  metricLabel: "activation within 30 days",
};

export const SUPPORTING_PROJECTS: Project[] = [
  {
    title: "Ledgerly — cloud cost rework",
    description:
      "Re-architected autoscaling and storage tiers so spend tracks usage instead of peak provisioning.",
    tech: ["AWS", "Terraform"],
    metricValue: "−41%",
    metricLabel: "monthly infra cost",
  },
  {
    title: "Marrow Health — design system",
    description:
      "Built a shared component library so design and engineering ship from the same source of truth.",
    tech: ["Figma", "React", "Storybook"],
    metricValue: "3.2×",
    metricLabel: "faster feature turnaround",
  },
  {
    title: "Ridgeline — search visibility",
    description:
      "Technical SEO overhaul and content restructuring across 400+ product pages.",
    tech: ["Next.js", "Schema.org"],
    metricValue: "+180%",
    metricLabel: "organic sessions, 6 months",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Menon",
    role: "VP of Product",
    company: "Fieldstack",
    initials: "PM",
    rating: 5,
    projectType: "Onboarding rebuild",
    featured: true,
    review:
      "NorthPeak rebuilt our onboarding flow in six weeks and activation went up by a third the month it shipped. They think like an in-house team, not a vendor — the handoff notes alone were more thorough than what our last two agencies delivered as final documentation.",
  },
  {
    name: "Daniel Ortiz",
    role: "Head of Engineering",
    company: "Ledgerly",
    initials: "DO",
    rating: 5,
    projectType: "Cloud infrastructure",
    review:
      "Our infrastructure costs were unpredictable every quarter. NorthPeak's cloud rework gave us a system we can actually forecast against, and it hasn't paged us since.",
  },
  {
    name: "Sarah Whitfield",
    role: "Founder",
    company: "Marrow Health",
    initials: "SW",
    rating: 5,
    projectType: "Design system",
    review:
      "We came in for a redesign and left with a design system our whole team still uses today. Clear communication at every stage, no surprises at handoff.",
  },
];

export const CONTACT_DETAILS: ContactDetail[] = [
  { icon: Mail, label: "Email", value: "studio@northpeak.digital" },
  { icon: Phone, label: "Phone", value: "+1 (415) 555-0148" },
  { icon: MapPin, label: "Office", value: "San Francisco, CA" },
];

export const RESPONSE_TIME = "Under one business day";
export const AVAILABILITY_STATUS = "Booking projects for Q4";

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$2,400",
    period: "/mo",
    description: "For small teams shipping a focused product surface.",
    features: [
      "One active workstream",
      "Web development or design",
      "Async updates, weekly check-in",
      "Standard support hours",
    ],
    highlighted: false,
    ctaLabel: "Get started",
  },
  {
    name: "Growth",
    price: "$6,800",
    period: "/mo",
    description: "For teams that need design, build, and infra moving together.",
    features: [
      "Two concurrent workstreams",
      "Full-stack build and design",
      "Cloud architecture included",
      "Dedicated engagement lead",
      "Priority support hours",
    ],
    highlighted: true,
    ctaLabel: "Start with Growth",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with complex, multi-team roadmaps.",
    features: [
      "Unlimited workstreams",
      "Dedicated senior pod",
      "Security and compliance review",
      "SLA-backed response times",
      "Quarterly strategy reviews",
    ],
    highlighted: false,
    ctaLabel: "Talk to sales",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
];

export const FOOTER_TRAINING_LINK = {
  label: "Built for Digital Heroes Training Task",
  href: "https://digitalheroesco.com",
};
