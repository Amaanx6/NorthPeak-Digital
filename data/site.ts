import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Code2,
  Palette,
  TrendingUp,
  Cloud,
  Boxes,
  ShieldCheck,
} from "lucide-react";
import type {
  ContactDetail,
  NavLink,
  SocialLink,
  Metric,
  Service,
  Project,
  Testimonial,
  PricingPlan,
} from "@/types";

export const SITE_NAME = "NorthPeak Digital";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
];

export const FOOTER_TRAINING_LINK = {
  label: "Engineering notes",
  href: "#work",
};

export const CONTACT_DETAILS: ContactDetail[] = [
  { label: "Email", value: "hello@northpeak.digital", icon: Mail },
  { label: "Phone", value: "+1 (415) 555-0148", icon: Phone },
  { label: "Studio", value: "San Francisco, CA", icon: MapPin },
];

export const RESPONSE_TIME = "Under 24 hours";
export const AVAILABILITY_STATUS = "Booking Q4 now";

export const METRICS: Metric[] = [
  { label: "Products shipped", value: 128, suffix: "+" },
  { label: "Average uptime", value: 99.98, suffix: "%", decimals: 2 },
  { label: "Client retention", value: 94, suffix: "%" },
  { label: "Years in practice", value: 9 },
];

export const SERVICES: Service[] = [
  {
    title: "Web Development",
    description:
      "Fast, accessible interfaces built on modern frameworks and typed from the ground up.",
    category: "Build",
    icon: Code2,
  },
  {
    title: "Product Design",
    description:
      "Interface and interaction design grounded in real usage data, not just aesthetics.",
    category: "Design",
    icon: Palette,
  },
  {
    title: "Growth Strategy",
    description:
      "Positioning, funnels, and lifecycle work that compounds instead of one-off campaigns.",
    category: "Strategy",
    icon: TrendingUp,
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Provisioned, monitored, and cost-optimized environments that hold up under real load.",
    category: "Engineer",
    icon: Cloud,
  },
  {
    title: "Design Systems",
    description:
      "Component libraries and documentation so every future release stays consistent.",
    category: "Design",
    icon: Boxes,
  },
  {
    title: "Security & Compliance",
    description:
      "Audits, hardening, and SOC 2 readiness handled alongside your existing roadmap.",
    category: "Engineer",
    icon: ShieldCheck,
  },
];

export const FEATURED_PROJECT: Project = {
  description: "Fieldstack came to us with a five-step onboarding flow that lost a third of new accounts before activation. We rebuilt the setup experience around progressive disclosure and shipped a redesigned dashboard alongside it — cutting time-to-first-value from eleven minutes to under three.",
  tech: ["Next.js", "PostgreSQL", "Temporal", "AWS"],
  metricValue: "+68%",
  metricLabel: "activation rate",
  title: ""
};

export const SUPPORTING_PROJECTS: Project[] = [
  {
    title: "Ledgerly",
    description: "Rebuilt the billing core to support usage-based pricing across four tiers.",
    tech: ["Rails", "Stripe"],
    metricValue: "3.1×",
    metricLabel: "faster billing runs",
  },
  {
    title: "Harborview",
    description: "Migrated a legacy monolith to a modular architecture with zero downtime.",
    tech: ["Go", "Kubernetes"],
    metricValue: "0",
    metricLabel: "minutes of downtime",
  },
  {
    title: "Cairn",
    description: "Designed and built a component library adopted across six product teams.",
    tech: ["React", "Storybook"],
    metricValue: "42",
    metricLabel: "shared components",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Nandakumar",
    role: "VP of Product, Fieldstack",
    company: "Fieldstack",
    review:
      "NorthPeak treated our onboarding funnel like an engineering problem, not a design favor. They shipped in six weeks what our last agency quoted at four months — and the numbers held up.",
    rating: 5,
    initials: "PN",
    featured: true,
    projectType: "Product redesign",
  },
  {
    name: "Marcus Ito",
    role: "CTO, Ledgerly",
    company: "Ledgerly",
    review: "Senior engineers end to end. No handoffs, no juniors learning on our codebase.",
    rating: 5,
    initials: "MI",
  },
  {
    name: "Sasha Brandt",
    role: "Founder, Harborview",
    company: "Harborview",
    review: "They found the migration risks we hadn't thought of, then quietly solved them.",
    rating: 5,
    initials: "SB",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Foundation",
    description: "A single workstream for teams validating a new product surface.",
    price: "$14K",
    period: "/mo",
    features: [
      "One dedicated engineer + designer",
      "Weekly release cadence",
      "Async Slack collaboration",
      "Monthly strategy review",
    ],
    ctaLabel: "Start with Foundation",
  },
  {
    name: "Ascent",
    description: "Two workstreams running in parallel for teams past initial traction.",
    price: "$26K",
    period: "/mo",
    features: [
      "Two dedicated workstreams",
      "Senior engineering + design pod",
      "Dedicated infrastructure support",
      "Bi-weekly roadmap planning",
      "Priority response, under 4 hours",
    ],
    ctaLabel: "Start with Ascent",
    highlighted: true,
  },
  {
    name: "Summit",
    description: "Embedded, multi-team engagement for scaling platforms.",
    price: "Custom",
    features: [
      "Three or more workstreams",
      "Dedicated engagement lead",
      "Custom SLAs & compliance support",
      "Quarterly architecture review",
    ],
    ctaLabel: "Talk to us",
  },
];
