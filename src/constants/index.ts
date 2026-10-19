export const BRAND = {
  name: "Shimix Tech",
  tagline: "Building Technology For What's Next.",
  slogan: "We Build. We Connect. We Innovate.",
  protocol: "ENGINEERING PROTOCOL // 2025.1",
  version: "v4.2.0",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#", active: true },
  { label: "Products", href: "#products", active: false },
  { label: "Solutions", href: "#solutions", active: false },
  { label: "About", href: "#about", active: false },
  { label: "Contact", href: "#contact-flow", active: false },
] as const;

export const HERO_TELEMETRY = [
  {
    value: "99.99%",
    label: "Core Availability",
    colorClass: "text-on-surface",
  },
  {
    value: "<40ms",
    label: "Global Edge Latency",
    colorClass: "text-tertiary",
  },
  {
    value: "256-bit",
    label: "Cryptographic Core",
    colorClass: "text-secondary",
  },
] as const;

export const SHIMIX_EMBLEM_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB-dqShFkNiuYSQuh6_6vuHGnx3gekcKFkG8-GH8KoGzKVpYvIsfVzZxRvX1La9HRkNoXgJ5pOcv95m8CX340a2p2HVT13-KQW_gJoYc9P7gDPGIgZf2WSN_QkBMJjH7pJ_2T-Zf2eyztQyHBXgQ1EEaLYRrlRPkOFpS0LsDlgs5m4FIs151PH84ygcycFK1k10KHqdHKwcPKclVcd54JKXFHEIKl42r_Gi-sT3M8fdqbjzPd0ySvlKUWFnR0QzlV4HRPQ";

export const CORE_CAPABILITIES = [
  {
    index: "ARCH // 01",
    title: "Digital Products",
    description:
      "Architecting next-generation SaaS ecosystems, user-centric interfaces, and scalable consumer platforms built for frictionless engagement.",
    icon: "devices",
    actionLabel: "Learn Architecture",
    href: "#products",
    accentColor: "text-tertiary",
    iconBgColor: "bg-primary-container/15",
    glowColor: "bg-primary-container/10 group-hover:bg-primary-container/20",
    hoverLinkColor: "group-hover:text-primary",
  },
  {
    index: "ARCH // 02",
    title: "Smart Experiences",
    description:
      "Transforming analog friction into fluid digital interactions powered by real-time intelligence, cryptographic tokens, and instant sync.",
    icon: "hub",
    actionLabel: "Explore Interfaces",
    href: "#solutions",
    accentColor: "text-secondary",
    iconBgColor: "bg-secondary/15",
    glowColor: "bg-[#4030f0]/10 group-hover:bg-[#4030f0]/25",
    hoverLinkColor: "group-hover:text-secondary",
  },
  {
    index: "ARCH // 03",
    title: "Scalable Solutions",
    description:
      "Cloud-native microservices, fault-tolerant distributed backbones, and real-time event-driven pipelines scaling to millions of transactions.",
    icon: "cloud_sync",
    actionLabel: "Examine Topology",
    href: "#solutions",
    accentColor: "text-tertiary",
    iconBgColor: "bg-tertiary-container/15",
    glowColor: "bg-secondary-container/15 group-hover:bg-secondary-container/30",
    hoverLinkColor: "group-hover:text-primary",
  },
] as const;

export const ENTRIVA_MODULES = [
  {
    title: "Digital Invitations",
    description: "Dynamic RSVP engine, personalized guest tokens, bespoke aesthetics",
    icon: "drafts",
    iconBgClass: "bg-primary-container/20 text-tertiary",
  },
  {
    title: "Guest Management",
    description: "Tiered VIP ticketing, real-time arrival sync, dynamic seating matrix",
    icon: "groups",
    iconBgClass: "bg-secondary-container/20 text-secondary",
  },
  {
    title: "QR Verification",
    description: "Sub-second offline & online scanner with cryptographic anti-counterfeit",
    icon: "qr_code_scanner",
    iconBgClass: "bg-tertiary-container/20 text-tertiary",
  },
  {
    title: "Omnichannel Messaging",
    description: "Instant SMS, WhatsApp & automated email concierge delivery pipelines",
    icon: "chat",
    iconBgClass: "bg-primary-container/20 text-primary",
  },
  {
    title: "Live Analytics",
    description: "Attendance heatmaps, conversion metrics, drop-off rate intelligence",
    icon: "monitoring",
    iconBgClass: "bg-[#4030f0]/20 text-secondary",
  },
] as const;

export const ENTRIVA_FEED_ITEMS = [
  {
    ticket: "TICKET #TK-9804 (VIP Keypass)",
    guest: "Alexander Drake",
    status: "Access Granted",
    time: "0.24s ago",
  },
  {
    ticket: "TICKET #TK-9805 (Keynote Hall)",
    guest: "Dr. Maya Lin",
    status: "Access Granted",
    time: "1.10s ago",
  },
] as const;

export const TECHNICAL_TAXONOMY_LAYERS = [
  {
    layer: "LAYER_01",
    title: "Web Applications",
    description:
      "Modern responsive SPAs, progressive web apps, and ultra-low latency frontend architectures engineered for scale.",
    icon: "web",
    techTags: ["TypeScript", "Edge SSR", "WASM"],
    accentColor: "text-tertiary",
    hoverIconColor: "group-hover:text-tertiary",
    spanClass: "",
  },
  {
    layer: "LAYER_02",
    title: "SaaS Platforms",
    description:
      "Multi-tenant isolation, automated provisioning, flexible metering, and enterprise security out of the box.",
    icon: "dns",
    techTags: ["Multi-Tenant", "RBAC", "Billing API"],
    accentColor: "text-secondary",
    hoverIconColor: "group-hover:text-secondary",
    spanClass: "",
  },
  {
    layer: "LAYER_03",
    title: "Intelligent Automation",
    description:
      "Workflow event orchestration, programmatic machine triggers, worker queues, and heuristic task routing.",
    icon: "smart_toy",
    techTags: ["Event Brokers", "Workers", "Zero-Loss Queues"],
    accentColor: "text-tertiary",
    hoverIconColor: "group-hover:text-tertiary",
    spanClass: "",
  },
  {
    layer: "LAYER_04",
    title: "APIs & Integrations",
    description:
      "GraphQL federation, high-volume REST endpoints, WebSockets, and cryptographic webhook signing pipelines.",
    icon: "cable",
    techTags: ["GraphQL", "Webhooks", "gRPC"],
    accentColor: "text-primary",
    hoverIconColor: "group-hover:text-primary",
    spanClass: "",
  },
  {
    layer: "LAYER_05",
    title: "Data Telemetry & Analytics",
    description:
      "Telemetry ingestion pipelines, continuous stream aggregation, sub-second live insight dashboards, and predictive trend modeling.",
    icon: "insights",
    techTags: [
      "Stream Pipeline",
      "Timeseries",
      "OLAP",
      "Sub-Second Aggregation",
    ],
    accentColor: "text-secondary",
    hoverIconColor: "group-hover:text-secondary",
    spanClass: "lg:col-span-2",
  },
] as const;

export const EXECUTION_STAGES = [
  {
    number: "01",
    title: "Discover",
    description:
      "Requirements distillation, system boundary definitions, security modeling, and domain mapping.",
    numberColor: "text-tertiary",
  },
  {
    number: "02",
    title: "Design",
    description:
      "High-fidelity design systems, interaction mechanics, cryptographic tokens, and ergonomic interfaces.",
    numberColor: "text-primary",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Modern stack implementation, test coverage, resilient micro-architectures, and high-speed CI pipelines.",
    numberColor: "text-secondary",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Zero-downtime deployment, distributed telemetry monitoring, and global edge distribution.",
    numberColor: "text-tertiary",
  },
  {
    number: "05",
    title: "Evolve",
    description:
      "Continuous optimization, telemetry performance tuning, and iterative feature scaling.",
    numberColor: "text-secondary",
  },
] as const;

export const CONVICTION_METRICS = [
  {
    value: "50M+",
    label: "Requests Processed",
    colorClass: "text-on-surface",
  },
  {
    value: "99.99%",
    label: "Guaranteed Availability",
    colorClass: "text-tertiary",
  },
  {
    value: "<100ms",
    label: "Global Edge Latency",
    colorClass: "text-secondary",
  },
] as const;

export const CONVICTION_MANIFESTO =
  "At Shimix Tech, we believe the best technology is invisible — seamlessly powering the foundational moments where people, businesses, and digital possibilities intersect.";

export const COLLABORATION_CTA = {
  badge: "COLLABORATION INITIATION",
  headlinePrefix: "HAVE AN IDEA?",
  headlineGradient: "LET'S BUILD IT.",
  description:
    "Partner with Shimix Tech to engineer your next digital platform, enterprise solution, or breakthrough consumer product.",
  primaryAction: "Start a Conversation",
  secondaryAction: "Review Specifications",
  specificationsHref: "#flagship",
} as const;
