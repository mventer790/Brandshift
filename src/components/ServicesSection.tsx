"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Website Design & Development",
    description:
      "High-converting websites designed to build trust and drive action. Every element is engineered to move visitors toward a decision.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    visual: <WebsiteMockup />,
    tags: ["UI/UX Design", "CRO", "SEO-Ready"],
  },
  {
    title: "Ecommerce Development",
    description:
      "Premium ecommerce systems optimised for conversions and customer experience — built to sell while you sleep.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
      </svg>
    ),
    visual: <EcommerceMockup />,
    tags: ["Shopify", "Custom Checkout", "Mobile-First"],
  },
  {
    title: "Meta Ads Management",
    description:
      "Targeted Meta advertising systems designed to generate consistent, qualified leads every single day.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z"/>
      </svg>
    ),
    visual: <StatsMockup platform="Meta" />,
    tags: ["Lead Gen", "Retargeting", "Creative Strategy"],
  },
  {
    title: "Google Ads Management",
    description:
      "High-intent Google campaigns built to capture buyers who are actively searching for exactly what you offer.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="M21 21l-4.35-4.35"/>
      </svg>
    ),
    visual: <StatsMockup platform="Google" />,
    tags: ["Search Ads", "Performance Max", "Conversion Tracking"],
  },
  {
    title: "Social Media Management",
    description:
      "Strategic content systems designed to build trust, grow your audience, and position you as the authority in your market.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2H3v16h5v4l4-4h9V2z"/>
      </svg>
    ),
    visual: <SocialMockup />,
    tags: ["Content Calendar", "Instagram", "LinkedIn"],
  },
  {
    title: "Digital Design",
    description:
      "Premium visual identity built to elevate brand perception — so you look like the obvious choice before the first conversation.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    visual: <DesignMockup />,
    tags: ["Brand Identity", "Graphics", "Motion"],
  },
  {
    title: "Hosting & Infrastructure",
    description:
      "Fast, secure, and scalable hosting solutions so your digital assets perform at peak speed — always.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    visual: <ServerMockup />,
    tags: ["99.9% Uptime", "CDN", "SSL"],
  },
  {
    title: "Microsoft Solutions",
    description:
      "Professional Microsoft systems integration for streamlined business operations — from 365 to Azure deployments.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="9" height="9"/>
        <rect x="13" y="2" width="9" height="9"/>
        <rect x="2" y="13" width="9" height="9"/>
        <rect x="13" y="13" width="9" height="9"/>
      </svg>
    ),
    visual: <MicrosoftMockup />,
    tags: ["Microsoft 365", "Azure", "Teams Setup"],
  },
];

/* ─── Visual mockups ──────────────────────────────────────── */

function WebsiteMockup() {
  return (
    <div className="w-full h-full flex items-end justify-center gap-4 pb-2">
      <div className="w-3/5 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="bg-slate-50 px-3 py-2 flex items-center gap-1.5 border-b border-slate-100">
          {["#ef4444","#f59e0b","#22c55e"].map(c => (
            <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }}/>
          ))}
          <div className="flex-1 ml-2 h-2 bg-slate-200 rounded-full" />
        </div>
        <div className="p-3 space-y-2">
          <div className="h-16 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg" />
          <div className="grid grid-cols-3 gap-1.5">
            {[1,2,3].map(i => <div key={i} className="h-8 bg-slate-100 rounded" />)}
          </div>
          <div className="space-y-1">
            <div className="h-2 bg-slate-200 rounded-full w-3/4" />
            <div className="h-2 bg-slate-200 rounded-full w-1/2" />
          </div>
        </div>
      </div>
      <div className="w-1/4 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm self-stretch min-h-[100px]">
        <div className="bg-slate-50 p-1.5 flex justify-center border-b border-slate-100">
          <div className="w-8 h-1 bg-slate-300 rounded-full"/>
        </div>
        <div className="p-2 space-y-1.5">
          <div className="h-10 bg-gradient-to-b from-blue-100 to-transparent rounded-lg" />
          {[1,2,3].map(i => <div key={i} className="h-2 bg-slate-200 rounded-full" style={{width:`${70-i*10}%`}} />)}
          <div className="h-5 bg-blue-500 rounded mt-2"/>
        </div>
      </div>
    </div>
  );
}

function EcommerceMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="bg-slate-50 px-3 py-2 flex justify-between items-center border-b border-slate-100">
          <div className="text-[9px] text-slate-400 font-semibold tracking-widest">STORE</div>
          <div className="flex items-center gap-1.5">
            <div className="w-12 h-1.5 bg-slate-200 rounded-full"/>
            <div className="w-5 h-5 bg-white border border-slate-200 rounded flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="grid grid-cols-2 gap-2 mb-2">
            {[1,2].map(i => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-lg p-2">
                <div className="h-12 bg-gradient-to-b from-blue-100 to-transparent rounded mb-2"/>
                <div className="h-1.5 bg-slate-200 rounded-full w-3/4 mb-1"/>
                <div className="h-1.5 bg-blue-200 rounded-full w-1/2"/>
              </div>
            ))}
          </div>
          <div className="h-5 bg-blue-500 rounded-lg w-full"/>
        </div>
      </div>
    </div>
  );
}

function StatsMockup({ platform }: { platform: string }) {
  const bars = [35, 55, 40, 70, 60, 85, 75];
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{platform} Ads</span>
          <span className="text-[10px] font-semibold text-green-500">↑ 147%</span>
        </div>
        <div className="flex items-end gap-1 h-16">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: "easeOut" }}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-500 to-blue-300"
            />
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[["ROAS","4.8x"],["CPC","$1.24"],["CTR","3.6%"]].map(([k,v]) => (
            <div key={k} className="text-center">
              <p className="text-[8px] text-slate-400 uppercase">{k}</p>
              <p className="text-[12px] font-bold text-blue-600">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-2">
      {[1,2,3].map(i => (
        <div key={i} className="flex-1 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <div className="aspect-square bg-gradient-to-br from-blue-100 via-blue-50 to-slate-50" />
          <div className="p-2 space-y-1">
            <div className="h-1.5 bg-slate-200 rounded-full"/>
            <div className="h-1.5 bg-slate-100 rounded-full w-2/3"/>
          </div>
        </div>
      ))}
    </div>
  );
}

function DesignMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-28 h-28">
        <div className="absolute inset-0 rounded-2xl bg-blue-50 border border-blue-100"/>
        <div className="absolute inset-3 rounded-xl bg-blue-100 border border-blue-200"/>
        <div className="absolute inset-6 rounded-lg bg-blue-500 flex items-center justify-center">
          <span className="text-[10px] font-extrabold text-white tracking-widest">BS</span>
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center">
          <div className="w-3 h-3 rounded-sm bg-blue-400"/>
        </div>
      </div>
    </div>
  );
}

function ServerMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full space-y-2">
        {["99.9% Uptime","CDN Global","SSL Active"].map((label, i) => (
          <div key={label} className="bg-white border border-slate-200 rounded-lg px-3 py-2 flex items-center gap-3 shadow-sm">
            <motion.div
              animate={{ opacity: [0.5,1,0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              className="w-2 h-2 rounded-full bg-green-500 shrink-0"
            />
            <span className="text-[11px] text-slate-600">{label}</span>
            <div className="ml-auto flex gap-0.5 items-end">
              {[4,5,5,4,5,3,5].map((h,j) => (
                <div key={j} className="w-1 rounded-t bg-blue-400" style={{height:`${h*3}px`}}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MicrosoftMockup() {
  const tiles = [
    { color: "#f25022", label: "Word" },
    { color: "#7fba00", label: "Excel" },
    { color: "#00a4ef", label: "Teams" },
    { color: "#ffb900", label: "Azure" },
  ];
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-2 gap-2">
        {tiles.map((t) => (
          <div key={t.label} className="w-14 h-14 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-1">
            <div className="w-5 h-5 rounded" style={{ background: t.color }}/>
            <span className="text-[8px] text-slate-400">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Card ────────────────────────────────────────────────── */

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: (index % 4) * 0.08, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="card rounded-2xl overflow-hidden flex flex-col"
    >
      {/* Visual area */}
      <div className="relative h-44 p-5 bg-white/5 border-b border-white/10 overflow-hidden">
        {service.visual}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center mb-4">
          {service.icon}
        </div>
        <h3 className="font-bold text-[17px] leading-snug mb-2 text-white">{service.title}</h3>
        <p className="text-white text-[14px] leading-relaxed flex-1">{service.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {service.tags.map((tag) => (
            <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ─────────────────────────────────────────────── */

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-28 px-6 bg-[#07090f]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 text-[12px] uppercase tracking-[0.2em] font-semibold mb-3">
            What We Build
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Our Services
          </h2>
          <p className="mt-4 text-white text-[17px] max-w-lg mx-auto">
            Every service is a piece of a complete growth engine — not isolated tactics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
