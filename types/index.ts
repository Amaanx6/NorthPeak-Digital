import type { LucideIcon } from "lucide-react";

export interface ContactFormValues {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export interface ContactDetail {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface Metric {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
}

export interface Service {
  icon: LucideIcon;
  category: string;
  title: string;
  description: string;
  details: {
    overview: string;
    deliverables: string[];
    technologies: string[];
  };
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  metricValue: string;
  metricLabel: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
  initials: string;
  featured?: boolean;
  projectType?: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
}
