# Shimix Design System

> **Single Source of Truth** for implementing the Shimix Tech Landing Page in this React + TypeScript + Vite project.

---

## Brand

- **Brand Name**: Shimix Tech (Brand Wordmark: `SHIMIX TECH`)
- **Core Conviction & Taglines**:
  - *"Building Technology For What's Next."*
  - *"We Build. We Connect. We Innovate."*
  - *"At Shimix Tech, we believe the best technology is invisible — seamlessly powering the foundational moments where people, businesses, and digital possibilities intersect."*
- **Brand Personality**: High-performance, cinematic visual identity built for advanced software architecture, cloud intelligence, and deep tech solutions. The brand embodies precision engineering, forward-looking computational intelligence, and uncompromising digital craftsmanship.
- **Design Archetype**: **Futuristic Technical Glass** / **Cinematic Glassmorphism**
- **Core Visual Pillars**:
  1. **Atmospheric Depth**: Deep void black foundations (`#03040A`) contrasted with luminescent cyan (`#00C8FF`), electric blue (`#0096FF`), deep indigo (`#4030F0`), and hyper-saturated violet (`#7020FF`).
  2. **Engineered Precision**: Hairline borders (`1px` subtle translucent strokes), micro-grid alignments, monospace telemetry indicators (`ENGINEERING PROTOCOL // 2025.1`), and aerospace HUD instrumentation motifs.
  3. **Controlled Luminescence**: Neon accents deployed strictly as focused functional anchors and radiant telemetry highlights rather than decorative clutter.
  4. **Target Audience**: Technical founders, enterprise architects, software engineers, and digital innovators.

---

## Color Palette

### 1. Canvas & Surface Hierarchy
| Token | Hex / Value | Role / Usage |
| :--- | :--- | :--- |
| `background` / `canvas-base` | `#03040A` | Deep void black root canvas for main pages, fixed header backdrop, and footer |
| `surface` / `surface-dim` | `#10131c` | Base dark theme foundation surface |
| `surface-container-lowest` | `#0b0e17` | Darkest container layer, HUD plate base, Entriva flagship base |
| `surface-container-low` | `#181b25` | Lower card tiers, process step containers, console sub-cards |
| `surface-container` | `#1c1f29` | Default container & panel background |
| `surface-container-high` | `#272a34` | Elevated state surface, badges, tech stack chips |
| `surface-container-highest` | `#32343f` | High-emphasis contrast containers |
| `surface-bright` | `#363943` | Highest surface brightness |
| `surface-variant` | `#32343f` | Progress bar tracks, subtle divider surfaces |

### 2. Primary Tones (Electric Blue & High-Tech Cyan)
| Token | Hex / Value | Role / Usage |
| :--- | :--- | :--- |
| `primary` | `#a1c9ff` | High-visibility primary light blue, active state link highlights |
| `primary-container` | `#0096ff` | Electric brand blue, gradient anchors, active buttons, focal halos |
| `on-primary` | `#00325a` | Deep blue text for light-on-primary contrast |
| `on-primary-container` | `#002d52` | Dark text on blue containers |
| `primary-fixed` | `#d2e4ff` | Fixed tint primary accent |
| `primary-fixed-dim` | `#a1c9ff` | Fixed muted primary |
| `on-primary-fixed` | `#001c37` | Fixed contrast on primary |
| `on-primary-fixed-variant` | `#00487f` | Medium contrast on fixed primary |
| `inverse-primary` | `#0061a7` | Contrast inverted primary |
| `surface-tint` | `#a1c9ff` | Tint overlay color |

### 3. Secondary Tones (Violet & Deep Purple)
| Token | Hex / Value | Role / Usage |
| :--- | :--- | :--- |
| `secondary` | `#cfbdff` | Muted violet accent, ARCH // 02 headers, secondary telemetry |
| `secondary-container` | `#6700f6` | High-saturation purple accent (`#7020FF` used in gradients) |
| `on-secondary` | `#3a0092` | Contrast text on secondary |
| `on-secondary-container` | `#d5c5ff` | Lavender text on purple containers |
| `secondary-fixed` | `#e9ddff` | Fixed high-key secondary lavender |
| `secondary-fixed-dim` | `#cfbdff` | Fixed muted lavender |
| `on-secondary-fixed` | `#22005d` | Deep purple text on fixed secondary |
| `on-secondary-fixed-variant` | `#5400cc` | Mid-depth violet text |

### 4. Tertiary Tones (Photonic Cyan & Edge Blue)
| Token | Hex / Value | Role / Usage |
| :--- | :--- | :--- |
| `tertiary` | `#68d3ff` | Vibrant photonic cyan (`#00C8FF` in gradients), live system indicators |
| `tertiary-container` | `#009fcb` | Deep cyan container accent |
| `on-tertiary` | `#003546` | Deep teal contrast text on cyan |
| `on-tertiary-container` | `#003040` | Contrast text on cyan container |
| `tertiary-fixed` | `#bee9ff` | Light photonic cyan |
| `tertiary-fixed-dim` | `#68d3ff` | Fixed dimmed cyan |
| `on-tertiary-fixed` | `#001f2a` | Deepest slate text on cyan |
| `on-tertiary-fixed-variant` | `#004d64` | Sub-label contrast on fixed cyan |

### 5. Neutral Text & Borders
| Token | Hex / Value | Role / Usage |
| :--- | :--- | :--- |
| `on-surface` | `#e0e2ef` / `#F5F7FA` | Primary high-contrast text across all dark surfaces |
| `on-surface-variant` | `#bfc7d5` / `#8B93A7` | Secondary text, paragraph body, telemetry metadata |
| `outline` | `#89919e` | Standard borders, divider rules, subtle outlines |
| `outline-variant` | `#3f4753` | Hairline footer rules, quiet card borders |
| `border-subtle` | `rgba(255, 255, 255, 0.08)` | Standard card boundary hairline |
| `border-glass-cyan` | `rgba(0, 200, 255, 0.20)` | Header bottom hairline, top edge refraction line |
| `border-focus` | `rgba(0, 200, 255, 0.35)` | Active state borders, focused inputs, active chips |

### 6. Semantic & Status Tones
| Token | Hex / Value | Role / Usage |
| :--- | :--- | :--- |
| `status-live-green` | `#00e676` | Live operational status dots, active ticket pings |
| `error` | `#ffb4ab` | Error states |
| `error-container` | `#93000a` | Console top bar indicator (red window dot) |
| `on-error` | `#690005` | Text on error surfaces |
| `on-error-container` | `#ffdad6` | Light error callout text |

---

## Gradients

### 1. Linear Brand Gradients
- **Primary Linear Gradient** (`shimix-gradient`):
  `linear-gradient(135deg, #00C8FF 0%, #0096FF 50%, #4030F0 100%)`
  *(Tailwind utility: `from-[#00c8ff] via-[#0096ff] to-[#4030f0]`)*
- **Accent / Purple Linear Gradient** (`shimix-gradient-purple`):
  `linear-gradient(135deg, #0096FF 0%, #7020FF 100%)`
  *(Tailwind utility: `from-[#0096ff] to-[#7020ff]`)*
- **Multi-Vector Hero Button Gradient**:
  `linear-gradient(to right, #0096ff 0%, #4030f0 50%, #7020ff 100%)`
  *(Tailwind utility: `bg-gradient-to-r from-primary-container via-[#4030f0] to-[#7020ff]`)*
- **Text Clip Headline Gradient**:
  `bg-gradient-to-r from-tertiary via-primary-container to-secondary text-transparent bg-clip-text`
  *(Linear transition: `#68d3ff` &rarr; `#0096ff` &rarr; `#cfbdff`)*
- **Circuit Connecting Wire Gradient**:
  `bg-gradient-to-r from-primary-container via-[#4030f0] to-[#7020ff] opacity-40`

### 2. Ambient Atmospheric Gradients (Glow Radii)
- **Hero Cyan Halo**:
  `radial-gradient / bg-gradient-to-b from-[#00C8FF]/15 via-[#0096FF]/10 to-transparent blur-[140px] w-[700px] h-[500px]`
- **Hero Violet Halo**:
  `bg-[#7020FF]/15 blur-[130px] w-[420px] h-[420px]`
- **Hero Deep Indigo Halo**:
  `bg-[#4030F0]/15 blur-[120px] w-[380px] h-[380px]`
- **Entriva Flagship Halo**:
  `bg-primary-container/10 blur-[150px] w-[600px] h-[600px]`
- **Vision Statement Ambient Field**:
  `bg-gradient-to-r from-[#0096ff]/10 via-[#4030f0]/10 to-[#7020ff]/10 blur-3xl`
- **Call-To-Action Corner Halos**:
  - Top-left: `bg-primary-container/20 rounded-full blur-3xl w-80 h-80`
  - Bottom-right: `bg-secondary-container/20 rounded-full blur-3xl w-80 h-80`
- **Telemetry Sparkline Fill**:
  `linear-gradient(to bottom, rgba(0, 200, 255, 0.35) 0%, rgba(112, 32, 255, 0.0) 100%)`

---

## Typography

### 1. Font Families
- **Display & Headings**: `'Space Grotesk', system-ui, sans-serif`
  Assertive, geometric, mechanical authority echoing modern software and aerospace consoles.
- **Body & UI**: `'Inter', system-ui, sans-serif`
  Clean, neutral legibility for operational telemetry, descriptions, and lists.
- **Microcopy, Code & Badges**: `'JetBrains Mono', monospace`
  Monospaced numbers, telemetry readouts, status flags, protocol labels, and architecture indices.

### 2. Typographic Scale & Tokens
| Token | Family | Font Size | Line Height | Weight | Letter Spacing | Text Transform |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `display-hero` | Space Grotesk | `56px` (3.5rem) | `64px` | 700 (Bold) | `-0.03em` | UPPERCASE |
| `display-hero-mobile` | Space Grotesk | `36px` (2.25rem) | `44px` | 700 (Bold) | `-0.02em` | UPPERCASE |
| `headline-lg` | Space Grotesk | `36px` (2.25rem) | `44px` | 600 (SemiBold) | `-0.02em` | UPPERCASE |
| `headline-lg-mobile`| Space Grotesk | `28px` (1.75rem) | `36px` | 600 (SemiBold) | `-0.01em` | UPPERCASE |
| `headline-md` | Space Grotesk | `24px` (1.5rem) | `32px` | 600 (SemiBold) | `-0.01em` | Standard / Title |
| `headline-sm` | Space Grotesk | `20px` (1.25rem) | `28px` | 500 (Medium) | `0em` | Standard / Title |
| `body-lg` | Inter | `18px` (1.125rem) | `28px` | 400 (Regular) | `-0.01em` | Standard |
| `body-md` | Inter | `15px` (0.9375rem) | `24px` | 400 (Regular) | `0em` | Standard |
| `body-sm` | Inter | `13px` (0.8125rem) | `20px` | 400 (Regular) | `0em` | Standard |
| `label-md` | Inter | `14px` (0.875rem) | `20px` | 500 (Medium) | `0.01em` | Standard |
| `code-md` | JetBrains Mono | `14px` (0.875rem) | `22px` | 500 (Medium) | `-0.01em` | Monospace |
| `label-caps` | JetBrains Mono | `11px` (0.6875rem) | `16px` | 600 (SemiBold) | `0.12em` | UPPERCASE |

---

## Spacing

### 1. Spacing Scale Tokens
- Baseline Grid: **8pt modular baseline grid**
| Token | Rem | Pixels | Usage |
| :--- | :--- | :--- | :--- |
| `space-xs` | `0.25rem` | 4px | Internal badge padding, paired icon/label gap |
| `space-sm` | `0.5rem` | 8px | Button vertical padding, small gaps |
| `space-md` | `1rem` | 16px | Standard component gap, button horizontal padding |
| `space-lg` | `1.5rem` | 24px | Card padding, column separation |
| `space-xl` | `2.5rem` | 40px | Section title separation, large macro padding |
| `margin` | `3rem` | 48px | Desktop outer canvas container horizontal padding |
| `margin-mobile` | `1.25rem` | 20px | Mobile outer canvas container horizontal padding |
| `gutter` | `1.5rem` | 24px | Desktop grid column gutters |
| `gutter-mobile` | `1rem` | 16px | Mobile grid column gutters |

### 2. Section Vertical Cadence
- Header height: `h-20` (80px / 5rem)
- Hero section padding: `pt-space-xl pb-32`
- Main content sections: `py-28` (112px)
- Flagship Entriva section: `py-24` (96px)
- Vision Statement section: `py-32` (128px)
- Final Call to Action section: `pt-8 pb-32`

---

## Layout

### 1. Breakpoints & Grid Matrix
- **Desktop (1280px+)**: 12-column responsive grid, `gutter: 24px` (`1.5rem`), `margin: 48px` (`3rem`)
- **Tablet (768px - 1279px)**: 8-column responsive grid, `gutter: 20px`, `margin: 32px`
- **Mobile (< 768px)**: 4-column stack, `gutter: 16px` (`1rem`), `margin: 20px` (`1.25rem`)

### 2. Container Maximum Widths
- Standard Max Width: `max-w-[1440px] mx-auto`
- Editorial & Vision Max Width: `max-w-[1040px] mx-auto`
- Subtitle & Description Max Width: `max-w-2xl` / `max-w-3xl`

### 3. Glassmorphic Surface Tiers
- **Tier 0 (Root Void Canvas)**: `#03040A` solid background
- **Tier 1 (Panels & Fixed Nav)**: `#080B14` with `80% - 85%` opacity, `backdrop-filter: blur(16px)` to `blur(20px)`, top/bottom hairline border `rgba(0, 150, 255, 0.20)`
- **Tier 2 (Interactive Floating Cards)**: `#0D1120` / `bg-surface-container/60` at `70%` opacity, `backdrop-filter: blur(24px)`, border `1px solid rgba(0, 150, 255, 0.15)`
- **Tier 3 (Modals & Focus Consoles)**: `#0D1120` / `bg-surface-container/90` at `90% - 92%` opacity, `backdrop-filter: blur(32px)`, border `rgba(0, 200, 255, 0.35)` with peripheral glow

---

## Components

### 1. Status Pills & Telemetry Badges
- **Operational Protocol Pill**:
  - Container: `inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container/80 backdrop-blur-md`
  - Live Dot: Double ping `w-2 h-2 rounded-full bg-tertiary animate-ping` and stationary `bg-tertiary`
  - Text: `font-label-caps text-label-caps text-tertiary tracking-widest uppercase`
- **Flagship Release Badge**:
  - Container: `px-space-md py-1 rounded-full bg-primary-container/15 text-tertiary`
  - Icon: Google Material Symbols `stars` (14px)
  - Text: `font-label-caps text-label-caps uppercase tracking-wider`
- **HUD Orbit Badges**:
  - Container: `px-space-md py-1.5 rounded-lg bg-surface-container/90 backdrop-blur-xl shadow-lg flex items-center gap-space-xs border border-white/5`
  - Text: `font-code-md text-code-md text-on-surface`
- **Tech Stack Badges**:
  - Container: `px-2 py-0.5 rounded bg-surface-container-high font-code-md text-code-md text-on-surface-variant`

---

## Buttons

### 1. Primary Action Button (Gradient Glow)
- **Visuals**:
  `bg-gradient-to-r from-primary-container via-[#4030f0] to-[#7020ff] text-[#f5f7fa] font-semibold font-label-md text-label-md`
- **Padding & Radius**:
  - Normal CTA: `px-space-xl py-4 rounded-xl`
  - Nav CTA: `px-space-md py-space-sm rounded-lg`
- **Hover & Active States**:
  `shadow-xl hover:shadow-[0_0_28px_rgba(0,200,255,0.45)] hover:scale-[1.02] transition-all duration-300`

### 2. Secondary Glass Button
- **Visuals**:
  `bg-surface-container/70 backdrop-blur-xl text-on-surface border border-white/5 font-semibold font-label-md text-label-md`
- **Padding & Radius**: `px-space-xl py-4 rounded-xl`
- **Hover State**:
  `hover:bg-surface-container-high transition-all duration-300 shadow-md`

### 3. Ghost / Text Action Link
- **Visuals**: `font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors flex items-center gap-1`
- **Interaction**: Suffix icon translates right by `4px` (`group-hover:translate-x-1`)

### 4. Nav Circular Action Button
- **Visuals**: `w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:brightness-110 transition-all`
- **Icon**: `person` in `text-on-primary text-[18px]`

---

## Cards

### 1. Capability Cards (Core Architecture)
- **Container**: `group relative rounded-xl bg-surface-container/60 backdrop-blur-xl p-space-xl flex flex-col justify-between hover:bg-surface-container transition-all duration-300 shadow-md border border-white/5`
- **Top Corner Ambient Glow**: `absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-all`
- **Icon Block**: `w-12 h-12 rounded-xl flex items-center justify-center text-[28px]` with semi-transparent themed container fill
- **Index Tag**: `font-code-md text-code-md tracking-wider` (`ARCH // 01`, `ARCH // 02`, `ARCH // 03`)
- **Headline**: `font-headline-sm text-headline-sm font-semibold`
- **Body**: `font-body-md text-body-md text-on-surface-variant`

### 2. Interactive Module Selectors (Entriva List)
- **Default State**: `p-space-lg rounded-xl bg-surface-container-low/40 backdrop-blur-md cursor-pointer transition-all duration-200 hover:bg-surface-container border border-white/5`
- **Selected State**: `bg-surface-container/70 shadow-lg border border-primary-container/30`
- **Icon Plate**: `w-10 h-10 rounded-lg flex items-center justify-center text-[20px]`

### 3. Bento Grid Cards (Technical Taxonomy)
- **Container**: `p-space-lg rounded-xl bg-surface-container/60 backdrop-blur-lg flex flex-col justify-between hover:bg-surface-container transition-all group border border-white/5`
- **Layer Indicator**: `font-code-md text-code-md` (`LAYER_01` through `LAYER_05`)
- **Large Layer Span**: `LAYER_05` spans `lg:col-span-2`

### 4. Process Stage Nodes (From Idea &rarr; To Impact)
- **Container**: `relative z-10 flex flex-col gap-space-md p-space-md rounded-xl bg-surface-container-low/80 backdrop-blur-md border border-white/5`
- **Step Circle**: `w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-code-md text-code-md font-bold shadow-md`

---

## Navigation

- **Placement**: Fixed to top viewport (`fixed top-0 left-0 right-0 z-50`)
- **Height**: `h-20` (80px)
- **Styling**: `bg-[#03040a]/80 backdrop-blur-xl border-b border-[#0096ff]/20`
- **Inner Bounds**: `max-w-[1440px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between gap-space-md`
- **Brand Group**:
  - Image: `src/assets/shimix-logo.jpeg` (`h-8 w-auto object-contain`)
  - Title: `font-headline-sm text-headline-sm uppercase tracking-wider text-on-surface group-hover:text-primary transition-colors`
- **Menu Links** (Desktop: `hidden lg:flex items-center gap-space-lg`):
  - `Home`: Active (`text-primary font-semibold`)
  - `Products`: Inactive (`font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors`)
  - `Solutions`: Inactive
  - `About`: Inactive
  - `Contact`: Inactive
- **Right Utilities**:
  - CTA Button: `Explore Entriva` (`hidden sm:inline-flex bg-gradient-to-r from-[#0096ff] to-[#7020ff]`)
  - User Action: Profile round avatar icon button (`person`)

---

## Hero

- **Container**: `relative w-full overflow-hidden px-margin-mobile md:px-margin pt-space-xl pb-32`
- **Background Light Sculpting**:
  - Central Cyan Glow: `-top-24 left-1/2 -translate-x-1/2 w-[700px] h-[500px]`
  - Right Purple Glow: `top-1/3 -right-24 w-[420px] h-[420px]`
  - Left Indigo Glow: `top-1/4 -left-20 w-[380px] h-[380px]`
- **Layout**: 12-column grid (`lg:col-span-7` editorial, `lg:col-span-5` HUD centerpiece)
- **Left Editorial Column**:
  - Pill: `ENGINEERING PROTOCOL // 2025.1`
  - Headline:
    ```
    BUILDING TECHNOLOGY
    FOR WHAT'S NEXT.
    ```
    *(Line 2 styled with 3-stop gradient clip)*
  - Subhead: *"Shimix Tech is a technology company building modern digital products and intelligent solutions that simplify complex experiences through engineered elegance."*
  - CTA Row: `Explore Our Products` (primary) + `Work With Us` (secondary glass)
  - Telemetry Indicators (3-column grid):
    - `99.99%` | Core Availability
    - `<40ms` | Global Edge Latency
    - `256-bit` | Cryptographic Core
- **Right HUD Centerpiece**:
  - Center Dimensions: `w-80 h-80 sm:w-96 sm:h-96`
  - Backing Glow Ring: `rounded-full bg-gradient-to-tr from-primary-container/20 to-secondary/20 blur-2xl animate-pulse`
  - Outer SVG Ring: Concentric dashed circle (`r="180"` and `r="150"`, animated clockwise `animate-[spin_24s_linear_infinite]`)
  - Inner SVG Ring: Reverse concentric dashed circle (`r="140"` and `r="120"`, animated counter-clockwise `animate-[spin_38s_linear_infinite_reverse]`)
  - Core Emblem Plate: `w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-surface-container-lowest/90 backdrop-blur-2xl p-space-md shadow-2xl`
  - Center Emblem Artwork: High-resolution Shimix Tech Emblem with `filter drop-shadow-[0_0_20px_rgba(0,150,255,0.45)]`
  - 3 Orbiting Telemetry Badges:
    - Top-right: `Encrypted Core` (`verified_user` in tertiary cyan)
    - Bottom-left: `Zero-Latency State` (`bolt` in secondary violet)
    - Bottom-right: `99.99% Operational` (`#00e676` live pulsing dot)

---

## Sections

### Section 1: Core Architecture ("We Build. We Connect. We Innovate.")
- **Category Badge**: `CORE ARCHITECTURE`
- **Headline**: `WE BUILD. WE CONNECT. WE INNOVATE.`
- **Right Tag**: `memory` icon + `DISTRIBUTED CAPABILITY MATRIX`
- **Cards**:
  1. `ARCH // 01`: Digital Products (SaaS ecosystems, interfaces, consumer platforms)
  2. `ARCH // 02`: Smart Experiences (real-time intelligence, tokens, instant sync)
  3. `ARCH // 03`: Scalable Solutions (cloud-native microservices, fault-tolerant backbones)

### Section 2: Flagship Product ("ENTRIVA — Event Experience & Invitation Platform")
- **Container**: `bg-surface-container-lowest`
- **Release Badge**: `FLAGSHIP PRODUCT RELEASE` with `stars` icon
- **Headline**: `ENTRIVA` | Sub-headline: `Event Experience & Invitation Platform`
- **Left Column: 5 Interactive Modules**:
  1. `Digital Invitations`: Dynamic RSVP engine, personalized guest tokens
  2. `Guest Management`: Tiered VIP ticketing, real-time arrival sync
  3. `QR Verification`: Sub-second offline & online scanner, anti-counterfeit
  4. `Omnichannel Messaging`: Instant SMS, WhatsApp & automated email concierge
  5. `Live Analytics`: Attendance heatmaps, conversion metrics, drop-off rate
  - Button: `Launch Entriva Platform` + `Live Enterprise Production` badge
- **Right Column: Live Verification Console** (`ENTRIVA // GATE-OPERATIONS-ALPHA`):
  - Console header with window status dots + `SCANNER ONLINE` indicator
  - Metrics Grid:
    - `1,420 / 1,500 Checked In` (with `94.6%` gradient progress bar)
    - `0.38s latency` (Avg Verification, Zero Collision)
    - `SHA-512` (Hardware Verified Security Protocol)
  - Sparkline Wave Visualization: SVG dual wave (cyan solid line + violet dashed line) with gradient area glow
  - Live Feed Ticker:
    - `TICKET #TK-9804 (VIP Keypass)`: Alexander Drake • Access Granted (0.24s ago)
    - `TICKET #TK-9805 (Keynote Hall)`: Dr. Maya Lin • Access Granted (1.10s ago)

### Section 3: Technical Taxonomy ("Technology That Moves With You")
- **Category Badge**: `TECHNICAL TAXONOMY`
- **Headline**: `TECHNOLOGY THAT MOVES WITH YOU.`
- **5-Card Bento Grid**:
  - `LAYER_01`: Web Applications (TypeScript, Edge SSR, WASM)
  - `LAYER_02`: SaaS Platforms (Multi-Tenant, RBAC, Billing API)
  - `LAYER_03`: Intelligent Automation (Event Brokers, Workers, Zero-Loss Queues)
  - `LAYER_04`: APIs & Integrations (GraphQL, Webhooks, gRPC)
  - `LAYER_05`: Data Telemetry & Analytics (Stream Pipeline, Timeseries, OLAP, Sub-Second Aggregation)

### Section 4: Execution Discipline ("From Idea → To Impact")
- **Category Badge**: `EXECUTION DISCIPLINE`
- **Headline**: `FROM IDEA → TO IMPACT`
- **5-Step Circuit Pipeline**:
  - Connecting line: gradient track (`hidden md:block absolute top-7 left-12 right-12 h-0.5`)
  - `01 Discover`: Requirements distillation, system boundary definitions
  - `02 Design`: High-fidelity design systems, ergonomic interfaces
  - `03 Build`: Modern stack implementation, resilient micro-architectures
  - `04 Launch`: Zero-downtime deployment, distributed telemetry monitoring
  - `05 Evolve`: Continuous optimization, performance tuning

### Section 5: Conviction ("We're Building More Than Software.")
- **Category Badge**: `OUR CONVICTION`
- **Headline**: `WE'RE BUILDING MORE THAN SOFTWARE.`
- **Conviction Narrative**: High-contrast central manifesto
- **3 Global Counter Metrics**:
  - `50M+` Requests Processed
  - `99.99%` Guaranteed Availability
  - `<100ms` Global Edge Latency

### Section 6: Collaboration Initiation ("Have An Idea? Let's Build It.")
- **Container**: `rounded-3xl bg-gradient-to-br from-surface-container via-surface-container-high to-surface-container p-space-xl md:p-24 shadow-2xl`
- **Category Badge**: `COLLABORATION INITIATION` with `terminal` icon
- **Headline**: `HAVE AN IDEA? LET'S BUILD IT.` (gradient clip on line 2)
- **Action Buttons**:
  - `Start a Conversation`: Gradient button with `send` icon (triggers consultation modal/flow)
  - `Review Specifications`: Glass button with `visibility` icon (scrolls to `#flagship`)

### Section 7: Global Footer
- **Background**: `#03040A` with dual ambient radial top halos
- **Border**: `border-t border-outline-variant/30`
- **Column Layout** (6-column responsive grid on lg):
  - Columns 1-2: Brand wordmark, logo, mission summary, `Operational // v4.2.0` badge
  - Column 3 (`Products`): Entriva (Event Suite), Future Labs, Platform APIs
  - Column 4 (`Solutions`): Enterprise SaaS, Intelligent Automation, Cloud Architectures
  - Column 5 (`Company`): About Shimix, Vision & Mission, Careers, Newsroom
  - Column 6 (`Connect`): Contact, GitHub, LinkedIn, X / Twitter
- **Bottom Legal Bar**:
  - Copyright: `© 2025 Shimix Tech. All rights reserved.`
  - Links: Privacy Policy, Terms of Service, Security

---

## Responsive Behavior

- **Mobile Viewports (< 768px)**:
  - Header: Desktop navigation links and `Explore Entriva` CTA collapse; logo, brand wordmark, and avatar icon remain visible.
  - Hero: Editorial and HUD centerpiece stack into a single vertical column (`grid-cols-1`). Headlines step down from `56px` to `36px` (`text-display-hero-mobile`). Orbit HUD scales to `w-80 h-80`.
  - Architecture Cards: 3-column grid collapses to a single vertical column (`grid-cols-1`).
  - Entriva Section: Modules stack above the Verification Tablet console.
  - Tech Taxonomy: Bento grid collapses into single-column layout.
  - Process Circuit: Connecting wire hides (`hidden md:block`); steps stack vertically with numbering indicators.
  - Collaboration Banner: Padding adjusts to `p-space-xl`, CTAs expand to `w-full`.
  - Footer: Multi-column grid collapses to single/two-column mobile layout.
- **Tablet Viewports (768px - 1024px)**:
  - 2-column bento layouts, responsive grid adjustments, margin reduced to `32px`.
- **Desktop (1024px - 1440px+)**:
  - Full 12-column layout, horizontal circuit line visible, full navigation visible, max container bounded to `1440px`.

---

## Animations

1. **Rotating HUD Rings**:
   - Outer Dashed Ring: `animate-[spin_24s_linear_infinite]` (Clockwise, 24 seconds period)
   - Inner Dashed Ring: `animate-[spin_38s_linear_infinite_reverse]` (Counter-clockwise, 38 seconds period)
2. **Operational Status Ping**:
   - Live telemetry dot: `animate-ping` (expansion and fade every 1-2s) paired with a solid stationary core dot.
3. **Pulsing Halos**:
   - Backing HUD emblem ring: `animate-pulse` (soft opacity pulse)
4. **Button & Card Glows on Hover**:
   - Primary Buttons: `transition-all duration-300 hover:shadow-[0_0_28px_rgba(0,200,255,0.45)] hover:scale-[1.02]`
   - Glass Cards: `transition-all duration-300 hover:bg-surface-container hover:-translate-y-0.5`
   - Emblem Plate: `hover:scale-105 transition-transform duration-500`
5. **Interactive Console Module Selection**:
   - Smooth transition of active card background from `bg-surface-container-low/40` to `bg-surface-container/70 shadow-lg`.

---

## Assets

### 1. Logo Asset
- **File**: `shimix-logo.jpeg`
- **Local Path**: `src/assets/shimix-logo.jpeg`
- **Stitch Origin**: Screen `projects/17013908383455229880/screens/2957114927360851183`
- **Dimensions**: `1254 x 1254` (Square, high-resolution)
- **Usage**: Header navigation (`h-8 w-auto`) and Footer brand lockup (`h-8 w-auto`)

### 2. Shimix Tech Central Emblem Asset
- **Description**: The 3D geometric high-tech emblem displayed in the center of the rotating HUD centerpiece plate.
- **Remote URL**: `https://lh3.googleusercontent.com/aida-public/AB6AXuB-dqShFkNiuYSQuh6_6vuHGnx3gekcKFkG8-GH8KoGzKVpYvIsfVzZxRvX1La9HRkNoXgJ5pOcv95m8CX340a2p2HVT13-KQW_gJoYc9P7gDPGIgZf2WSN_QkBMJjH7pJ_2T-Zf2eyztQyHBXgQ1EEaLYRrlRPkOFpS0LsDlgs5m4FIs151PH84ygcycFK1k10KHqdHKwcPKclVcd54JKXFHEIKl42r_Gi-sT3M8fdqbjzPd0ySvlKUWFnR0QzlV4HRPQ`
- **Usage**: Hero HUD center stage with `drop-shadow-[0_0_20px_rgba(0,150,255,0.45)]`

### 3. Iconography (Google Material Symbols Outlined)
- Standard glyph configuration: `opsz=24, wght=400, FILL=0, GRAD=0`
- Glyphs used in design:
  - Header: `person`
  - Hero & Badges: `arrow_forward`, `code`, `verified_user`, `bolt`
  - Core Architecture: `memory`, `devices`, `hub`, `cloud_sync`
  - Flagship Entriva: `stars`, `drafts`, `groups`, `qr_code_scanner`, `chat`, `monitoring`, `open_in_new`
  - Technical Taxonomy: `web`, `dns`, `smart_toy`, `cable`, `insights`
  - Call to Action: `terminal`, `send`, `visibility`

---

## Implementation Notes

1. **Google Fonts Dependency**:
   - `index.html` currently lacks font declarations. To match the Stitch design, the following fonts must be loaded:
     - `Space Grotesk:wght@500;600;700`
     - `Inter:wght@400;500;600`
     - `JetBrains Mono:wght@400;500;600`
     - `Material Symbols Outlined:wght,FILL@100..700,0..1`
2. **Tailwind Config Harmony**:
   - Existing `tailwind.config.js` in the project defines basic colors (`shimix.black`, `shimix.blue`, etc.).
   - It will need expansion with exact Stitch token names (`surface-container`, `tertiary`, `on-surface`, font families `display-hero`, `label-caps`, custom spacing, etc.) so that all utility classes match the design specifications directly.
3. **Component Architecture Plan**:
   - Modular breakdown recommended:
     - `Navbar.tsx` (sticky navigation with mobile drawer/collapse)
     - `Hero.tsx` (dual rotating SVGs, telemetry stats, emblem HUD)
     - `CoreArchitecture.tsx` (3 capability cards with hover glows)
     - `FlagshipEntriva.tsx` (interactive module tab state + live verification tablet console with SVG wave sparkline)
     - `TechnicalTaxonomy.tsx` (5-layer bento grid)
     - `ExecutionPipeline.tsx` (5-step connected circuit)
     - `ConvictionMetrics.tsx` (manifesto statement + 3 key metrics)
     - `CollaborationCta.tsx` (interactive consultation trigger modal)
     - `Footer.tsx` (multi-column site map and copyright)
     - `ConsultationModal.tsx` (ergonomic modal dialog replacing browser prompt)
4. **State Management**:
   - Active Entriva module tab index (`0` through `4`).
   - Consultation dialog modal open/closed state.
   - Mobile navigation menu toggle state.

---

## Stitch Source

Project:
Shimix Tech Landing Page

Project ID:
17013908383455229880
