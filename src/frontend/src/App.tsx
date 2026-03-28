import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSubmitForm } from "./hooks/useQueries";

// ---------- NAV ----------
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Industries", href: "#industries" },
  { label: "Quality", href: "#quality" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2"
          data-ocid="nav.link"
        >
          <div className="w-8 h-8 bg-navy rounded-sm flex items-center justify-center">
            <svg
              role="img"
              aria-label="Logo"
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5"
            >
              <rect x="2" y="8" width="20" height="2" fill="white" rx="1" />
              <rect x="2" y="14" width="20" height="2" fill="#E4572E" rx="1" />
              <path d="M6 4 L18 4 L22 8 L2 8 Z" fill="white" />
              <path
                d="M2 16 L22 16 L18 20 L6 20 Z"
                fill="white"
                opacity="0.5"
              />
            </svg>
          </div>
          <span className="font-display font-bold text-navy text-lg tracking-tight uppercase">
            FrientersTech <span className="text-orange-DEFAULT">Solutions</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              onClick={() => setActiveSection(link.href.replace("#", ""))}
              className={`text-xs font-body font-semibold uppercase tracking-widest transition-colors hover:text-orange-DEFAULT ${
                activeSection === link.href.replace("#", "")
                  ? "text-orange-DEFAULT border-b-2 border-orange-DEFAULT pb-0.5"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:block"
          data-ocid="nav.primary_button"
        >
          <Button className="bg-navy text-white hover:bg-navy-light uppercase text-xs tracking-widest font-semibold px-5 py-2 rounded-sm">
            Request a Quote
          </Button>
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-navy" />
          ) : (
            <Menu className="w-6 h-6 text-navy" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              onClick={() => setMenuOpen(false)}
              className="text-xs font-semibold uppercase tracking-widest text-foreground hover:text-orange-DEFAULT py-1"
            >
              {link.label}
            </a>
          ))}
          <Button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            data-ocid="nav.primary_button"
            className="bg-navy text-white w-full uppercase text-xs tracking-widest font-semibold rounded-sm mt-2"
          >
            Request a Quote
          </Button>
        </div>
      )}
    </header>
  );
}

// ---------- HERO ----------
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg, oklch(0.18 0.06 220) 0%, oklch(0.24 0.055 220) 40%, oklch(0.28 0.04 215) 70%, oklch(0.22 0.05 225) 100%)",
      }}
    >
      {/* Metallic texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.08) 4px), repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px)",
        }}
      />
      {/* Spark/glow effects */}
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, oklch(0.63 0.19 38), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full opacity-5"
        style={{
          background:
            "radial-gradient(circle, oklch(0.80 0.15 60), transparent 70%)",
        }}
      />

      {/* Diagonal accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-orange-DEFAULT" />
      <div className="absolute left-1 top-0 h-full w-0.5 bg-orange-DEFAULT opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-orange-DEFAULT/20 border border-orange-DEFAULT/40 rounded-sm px-3 py-1 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-DEFAULT animate-pulse" />
            <span className="text-orange-DEFAULT text-xs font-semibold uppercase tracking-widest">
              Precision Manufacturing
            </span>
          </div>

          <h1
            className="font-display font-extrabold uppercase tracking-tight leading-none text-white mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Growing
            <br />
            <span className="text-orange-DEFAULT">Together</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-body mb-10 max-w-xl leading-relaxed">
            Precision sheet metal fabrication and engineering solutions —
            design, laser cutting, CNC bending, and custom manufacturing,
            delivered with quality and care.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#services" data-ocid="hero.primary_button">
              <Button
                className="bg-orange-DEFAULT hover:bg-orange-hover text-white uppercase text-sm tracking-widest font-bold px-8 py-6 rounded-sm shadow-lg"
                size="lg"
              >
                Discover Our Services
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="#contact" data-ocid="hero.secondary_button">
              <Button
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 uppercase text-sm tracking-widest font-semibold px-8 py-6 rounded-sm"
                size="lg"
              >
                Get a Quote
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "15+", label: "Years Experience" },
              { value: "99.8%", label: "Quality Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-orange-DEFAULT text-3xl">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-xs uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------- SERVICES ----------
const SERVICES = [
  {
    title: "Design Solutions",
    desc: "CAD/CAM design and engineering solutions tailored to your specifications, ensuring precision before production begins.",
    icon: (
      <svg
        role="img"
        aria-label="Service icon"
        viewBox="0 0 48 48"
        fill="none"
        className="w-12 h-12"
      >
        <rect
          x="8"
          y="8"
          width="32"
          height="32"
          rx="3"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="2"
          fill="oklch(0.28 0.055 220 / 0.05)"
        />
        <line
          x1="14"
          y1="18"
          x2="34"
          y2="18"
          stroke="oklch(0.63 0.19 38)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="24"
          x2="28"
          y2="24"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="30"
          x2="24"
          y2="30"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="36"
          cy="34"
          r="6"
          fill="oklch(0.63 0.19 38 / 0.15)"
          stroke="oklch(0.63 0.19 38)"
          strokeWidth="1.5"
        />
        <line
          x1="34"
          y1="34"
          x2="38"
          y2="34"
          stroke="oklch(0.63 0.19 38)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="36"
          y1="32"
          x2="36"
          y2="36"
          stroke="oklch(0.63 0.19 38)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Laser Cutting",
    desc: "Precision laser cutting for complex shapes and tight tolerances, delivering clean edges on steel, aluminum, and stainless.",
    icon: (
      <svg
        role="img"
        aria-label="Service icon"
        viewBox="0 0 48 48"
        fill="none"
        className="w-12 h-12"
      >
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="2"
          fill="oklch(0.28 0.055 220 / 0.05)"
        />
        <line
          x1="12"
          y1="24"
          x2="22"
          y2="24"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="3" fill="oklch(0.63 0.19 38)" />
        <line
          x1="26"
          y1="24"
          x2="38"
          y2="18"
          stroke="oklch(0.63 0.19 38)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="26"
          y1="24"
          x2="38"
          y2="24"
          stroke="oklch(0.63 0.19 38)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        <line
          x1="26"
          y1="24"
          x2="38"
          y2="30"
          stroke="oklch(0.63 0.19 38)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>
    ),
  },
  {
    title: "CNC Bending (Press Brake)",
    desc: "Accurate CNC press brake bending for consistent, high-quality results with multi-axis back-gauging and complex geometries.",
    icon: (
      <svg
        role="img"
        aria-label="Service icon"
        viewBox="0 0 48 48"
        fill="none"
        className="w-12 h-12"
      >
        <rect
          x="8"
          y="20"
          width="32"
          height="4"
          rx="2"
          fill="oklch(0.28 0.055 220 / 0.1)"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="2"
        />
        <path
          d="M14 24 Q14 34 24 34 Q34 34 34 24"
          stroke="oklch(0.63 0.19 38)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <rect
          x="10"
          y="14"
          width="6"
          height="8"
          rx="1"
          fill="oklch(0.28 0.055 220)"
        />
        <rect
          x="32"
          y="14"
          width="6"
          height="8"
          rx="1"
          fill="oklch(0.28 0.055 220)"
        />
      </svg>
    ),
  },
  {
    title: "Sheet Metal Fabrication",
    desc: "End-to-end sheet metal fabrication for industrial and commercial needs, from raw material to finished component.",
    icon: (
      <svg
        role="img"
        aria-label="Service icon"
        viewBox="0 0 48 48"
        fill="none"
        className="w-12 h-12"
      >
        <rect
          x="6"
          y="14"
          width="36"
          height="20"
          rx="2"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="2"
          fill="oklch(0.28 0.055 220 / 0.05)"
        />
        <line
          x1="6"
          y1="22"
          x2="42"
          y2="22"
          stroke="oklch(0.63 0.19 38)"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <line
          x1="14"
          y1="14"
          x2="14"
          y2="34"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1"
          strokeDasharray="2 2"
          opacity="0.5"
        />
        <line
          x1="34"
          y1="14"
          x2="34"
          y2="34"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1"
          strokeDasharray="2 2"
          opacity="0.5"
        />
        <circle cx="10" cy="10" r="3" fill="oklch(0.63 0.19 38)" />
        <circle cx="38" cy="10" r="3" fill="oklch(0.63 0.19 38)" />
        <circle cx="10" cy="38" r="3" fill="oklch(0.63 0.19 38)" />
        <circle cx="38" cy="38" r="3" fill="oklch(0.63 0.19 38)" />
      </svg>
    ),
  },
  {
    title: "Custom Component Manufacturing",
    desc: "Custom components manufactured to exact client requirements, from CAD files to finished parts with full DFM support.",
    icon: (
      <svg
        role="img"
        aria-label="Service icon"
        viewBox="0 0 48 48"
        fill="none"
        className="w-12 h-12"
      >
        <rect
          x="8"
          y="8"
          width="14"
          height="14"
          rx="2"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="2"
          fill="oklch(0.28 0.055 220 / 0.06)"
        />
        <rect
          x="26"
          y="8"
          width="14"
          height="14"
          rx="2"
          stroke="oklch(0.63 0.19 38)"
          strokeWidth="2"
          fill="oklch(0.63 0.19 38 / 0.06)"
        />
        <rect
          x="8"
          y="26"
          width="14"
          height="14"
          rx="2"
          stroke="oklch(0.63 0.19 38)"
          strokeWidth="2"
          fill="oklch(0.63 0.19 38 / 0.06)"
        />
        <rect
          x="26"
          y="26"
          width="14"
          height="14"
          rx="2"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="2"
          fill="oklch(0.28 0.055 220 / 0.06)"
        />
        <line
          x1="22"
          y1="15"
          x2="26"
          y2="15"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />
        <line
          x1="15"
          y1="22"
          x2="15"
          y2="26"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />
        <line
          x1="33"
          y1="22"
          x2="33"
          y2="26"
          stroke="oklch(0.63 0.19 38)"
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />
        <line
          x1="22"
          y1="33"
          x2="26"
          y2="33"
          stroke="oklch(0.63 0.19 38)"
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />
      </svg>
    ),
  },
  {
    title: "Prototype & Batch Production",
    desc: "Rapid prototyping and scalable batch production runs, helping you move from concept to market at speed.",
    icon: (
      <svg
        role="img"
        aria-label="Service icon"
        viewBox="0 0 48 48"
        fill="none"
        className="w-12 h-12"
      >
        <rect
          x="6"
          y="28"
          width="10"
          height="12"
          rx="1"
          stroke="oklch(0.63 0.19 38)"
          strokeWidth="2"
          fill="oklch(0.63 0.19 38 / 0.08)"
        />
        <rect
          x="19"
          y="20"
          width="10"
          height="20"
          rx="1"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="2"
          fill="oklch(0.28 0.055 220 / 0.08)"
        />
        <rect
          x="32"
          y="12"
          width="10"
          height="28"
          rx="1"
          stroke="oklch(0.63 0.19 38)"
          strokeWidth="2"
          fill="oklch(0.63 0.19 38 / 0.08)"
        />
        <path
          d="M8 26 L22 18 L35 10"
          stroke="oklch(0.63 0.19 38)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="3 2"
        />
      </svg>
    ),
  },
];

function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-14">
          <div className="inline-block mb-3">
            <span className="text-orange-DEFAULT font-semibold text-xs uppercase tracking-widest">
              What We Do
            </span>
          </div>
          <h2 className="font-display font-extrabold uppercase text-navy text-3xl sm:text-4xl tracking-tight">
            Our Services
          </h2>
          <div className="mx-auto mt-4 w-16 h-1 bg-orange-DEFAULT" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`services.item.${i + 1}`}
              className="bg-white border border-border rounded-sm p-6 shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="flex justify-center mb-5">{svc.icon}</div>
              <h3 className="font-display font-bold uppercase text-navy text-sm tracking-wide mb-3 text-center">
                {svc.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">
                {svc.desc}
              </p>
              <div className="mt-4 text-center">
                <a
                  href="#contact"
                  className="text-orange-DEFAULT text-xs font-semibold uppercase tracking-widest hover:underline inline-flex items-center gap-1"
                  data-ocid={`services.link.${i + 1}`}
                >
                  Learn More <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- CAPABILITIES ----------
const CAPABILITIES = [
  {
    title: "CNC Laser Cutting",
    desc: "4kW – 12kW fiber lasers. Capacity up to 3m × 1.5m sheets. Tolerances ±0.1mm. Nitrogen & oxygen assist cutting.",
  },
  {
    title: "CNC Press Brakes",
    desc: "Hydraulic press brakes from 80T to 320T bending force. 6-axis back-gauging. Complex multi-bend forming programs.",
  },
  {
    title: "Precision Tooling",
    desc: "In-house punch tooling, custom dies, and forming tools. Fast changeover for prototype and production runs alike.",
  },
  {
    title: "Multi-Material",
    desc: "Mild steel, stainless steel, aluminum, titanium, copper, and specialty alloys from 0.5mm to 25mm thickness.",
  },
];

function Capabilities() {
  return (
    <section
      id="capabilities"
      className="py-20"
      style={{ background: "oklch(0.26 0.04 220)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-14">
          <div className="inline-block mb-3">
            <span className="text-orange-DEFAULT font-semibold text-xs uppercase tracking-widest">
              Infrastructure
            </span>
          </div>
          <h2 className="font-display font-extrabold uppercase text-white text-3xl sm:text-4xl tracking-tight">
            Our Capabilities & Equipment
          </h2>
          <div className="mx-auto mt-4 w-16 h-1 bg-orange-DEFAULT" />
        </div>

        {/* Equipment visual blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-12">
          {[
            { label: "Fiber Laser Systems", color: "oklch(0.22 0.05 220)" },
            { label: "CNC Press Brakes", color: "oklch(0.24 0.04 215)" },
            { label: "Welding Stations", color: "oklch(0.20 0.06 225)" },
            { label: "Inspection Lab", color: "oklch(0.26 0.03 210)" },
          ].map((item, idx) => (
            <div
              key={item.label}
              data-ocid={`capabilities.item.${idx + 1}`}
              className="relative h-40 rounded-sm overflow-hidden flex items-end p-4"
              style={{ background: item.color }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    idx % 2 === 0
                      ? "repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 12px)"
                      : "repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 10px)",
                }}
              />
              <div className="absolute top-3 right-3 w-8 h-8 border border-orange-DEFAULT/50 rounded-sm flex items-center justify-center">
                <span className="text-orange-DEFAULT text-xs font-bold">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <span className="text-white text-xs font-semibold uppercase tracking-wider relative z-10">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t-2 border-orange-DEFAULT pt-5"
            >
              <h3 className="font-display font-bold uppercase text-white text-sm tracking-wide mb-3">
                {cap.title}
              </h3>
              <p
                className="text-slate-300 text-sm leading-relaxed"
                style={{ color: "oklch(0.80 0.02 220)" }}
              >
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- ABOUT ----------
function About() {
  return (
    <section id="about" className="py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
        {/* Left: dark with quote */}
        <div
          className="flex items-center justify-center p-12 lg:p-20"
          style={{ background: "oklch(0.24 0.055 220)" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-1 bg-orange-DEFAULT mb-8" />
            <blockquote
              className="font-display font-bold text-white uppercase leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              "Growing
              <br />
              <span className="text-orange-DEFAULT">Together,</span>
              <br />
              Building
              <br />
              Excellence."
            </blockquote>
            <div className="mt-8 text-slate-400 text-sm">
              — FrientersTech Solutions
            </div>
          </motion.div>
        </div>

        {/* Right: about text */}
        <div className="flex items-center bg-white p-12 lg:p-20">
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-DEFAULT font-semibold text-xs uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="font-display font-extrabold uppercase text-navy text-2xl sm:text-3xl tracking-tight mt-3 mb-6">
              About Us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Frienters Technologies Pvt Ltd is a precision sheet metal
              fabrication company specializing in laser cutting, CNC bending,
              and custom component manufacturing. We provide high-quality
              fabrication solutions for automotive, industrial machinery, and
              OEM sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With a strong background in design and engineering, we ensure
              accuracy, durability, and cost-effective production for both
              prototype and bulk requirements. Our focus is on delivering
              reliable products with quick turnaround times while maintaining
              the highest quality standards.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 italic border-l-4 border-orange-DEFAULT pl-4">
              "Our mission is to deliver reliable and innovative fabrication
              solutions while building long-term partnerships with our clients."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At Frienters Technologies, we believe in building long-term
              relationships with our clients by delivering consistent value and
              performance.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Production Floor", value: "25,000 sq ft" },
                { label: "Certified Operators", value: "40+" },
                { label: "On-Time Delivery", value: "98.5%" },
                { label: "Industries Served", value: "12+" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-l-2 border-orange-DEFAULT pl-4"
                >
                  <div className="font-display font-bold text-navy text-xl">
                    {item.value}
                  </div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------- INDUSTRIES + QUALITY ----------
const INDUSTRIES = [
  {
    label: "Aerospace",
    icon: (
      <svg
        role="img"
        aria-label="Industry icon"
        viewBox="0 0 32 32"
        fill="none"
        className="w-8 h-8"
      >
        <path
          d="M16 4 L20 20 L16 18 L12 20 Z"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M8 16 L16 18 L24 16"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 24 L16 26 L20 24"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Automotive",
    icon: (
      <svg
        role="img"
        aria-label="Industry icon"
        viewBox="0 0 32 32"
        fill="none"
        className="w-8 h-8"
      >
        <rect
          x="4"
          y="14"
          width="24"
          height="8"
          rx="2"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
        />
        <path
          d="M8 14 L10 8 L22 8 L24 14"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle
          cx="10"
          cy="23"
          r="3"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
        />
        <circle
          cx="22"
          cy="23"
          r="3"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    label: "Medical",
    icon: (
      <svg
        role="img"
        aria-label="Industry icon"
        viewBox="0 0 32 32"
        fill="none"
        className="w-8 h-8"
      >
        <rect
          x="6"
          y="6"
          width="20"
          height="20"
          rx="4"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
        />
        <line
          x1="16"
          y1="10"
          x2="16"
          y2="22"
          stroke="oklch(0.63 0.19 38)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="16"
          x2="22"
          y2="16"
          stroke="oklch(0.63 0.19 38)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Robotics",
    icon: (
      <svg
        role="img"
        aria-label="Industry icon"
        viewBox="0 0 32 32"
        fill="none"
        className="w-8 h-8"
      >
        <rect
          x="10"
          y="10"
          width="12"
          height="12"
          rx="2"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
        />
        <circle cx="14" cy="15" r="1.5" fill="oklch(0.28 0.055 220)" />
        <circle cx="18" cy="15" r="1.5" fill="oklch(0.28 0.055 220)" />
        <line
          x1="16"
          y1="10"
          x2="16"
          y2="6"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="16"
          cy="5"
          r="2"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
        />
        <line
          x1="10"
          y1="16"
          x2="6"
          y2="16"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="22"
          y1="16"
          x2="26"
          y2="16"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="13"
          y1="22"
          x2="11"
          y2="27"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="19"
          y1="22"
          x2="21"
          y2="27"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Construction",
    icon: (
      <svg
        role="img"
        aria-label="Industry icon"
        viewBox="0 0 32 32"
        fill="none"
        className="w-8 h-8"
      >
        <rect
          x="4"
          y="20"
          width="24"
          height="4"
          rx="1"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
        />
        <rect
          x="8"
          y="12"
          width="6"
          height="8"
          rx="1"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
        />
        <rect
          x="18"
          y="8"
          width="8"
          height="12"
          rx="1"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
        />
        <rect
          x="14"
          y="15"
          width="4"
          height="5"
          rx="0.5"
          fill="oklch(0.28 0.055 220 / 0.2)"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1"
        />
      </svg>
    ),
  },
  {
    label: "Electronics",
    icon: (
      <svg
        role="img"
        aria-label="Industry icon"
        viewBox="0 0 32 32"
        fill="none"
        className="w-8 h-8"
      >
        <rect
          x="6"
          y="8"
          width="20"
          height="16"
          rx="2"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1.5"
        />
        <line
          x1="10"
          y1="13"
          x2="14"
          y2="13"
          stroke="oklch(0.63 0.19 38)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="16"
          x2="22"
          y2="16"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="19"
          x2="18"
          y2="19"
          stroke="oklch(0.28 0.055 220)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle
          cx="20"
          cy="13"
          r="2"
          stroke="oklch(0.63 0.19 38)"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

function IndustriesQuality() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Industries */}
          <div id="industries">
            <span className="text-orange-DEFAULT font-semibold text-xs uppercase tracking-widest">
              Who We Serve
            </span>
            <h2 className="font-display font-extrabold uppercase text-navy text-2xl sm:text-3xl tracking-tight mt-3 mb-8">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {INDUSTRIES.map((ind, i) => (
                <motion.div
                  key={ind.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  data-ocid={`industries.item.${i + 1}`}
                  className="border border-border rounded-sm p-4 flex flex-col items-center gap-3 hover:border-orange-DEFAULT hover:shadow-card transition-all"
                >
                  {ind.icon}
                  <span className="text-navy text-xs font-semibold uppercase tracking-wider">
                    {ind.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quality */}
          <div id="quality">
            <span className="text-orange-DEFAULT font-semibold text-xs uppercase tracking-widest">
              Certifications
            </span>
            <h2 className="font-display font-extrabold uppercase text-navy text-2xl sm:text-3xl tracking-tight mt-3 mb-8">
              Quality Assurance
            </h2>

            <div className="flex gap-4 mb-8">
              {["ISO 9001:2015", "AS9100 Rev D"].map((cert) => (
                <div
                  key={cert}
                  className="flex-1 border-2 border-navy rounded-sm p-4 text-center"
                >
                  <div className="w-8 h-8 bg-navy rounded-sm flex items-center justify-center mx-auto mb-2">
                    <svg
                      role="img"
                      aria-label="Certificate"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="w-5 h-5"
                    >
                      <path
                        d="M10 2 L12.5 7.5 L18 8.5 L14 12.5 L15 18 L10 15.5 L5 18 L6 12.5 L2 8.5 L7.5 7.5 Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="font-display font-bold text-navy text-sm uppercase tracking-wide">
                    {cert}
                  </div>
                  <div className="text-muted-foreground text-xs mt-1">
                    Certified
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Dimensional Inspection",
                  desc: "100% first-article inspection with CMM verification and detailed measurement reports.",
                },
                {
                  title: "Material Traceability",
                  desc: "Full mill certificate traceability and material certification for every production lot.",
                },
                {
                  title: "Process Control",
                  desc: "Statistical process control (SPC) on critical features with documented control plans.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-orange-DEFAULT flex items-center justify-center flex-shrink-0">
                    <svg
                      role="img"
                      aria-label="Check"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="w-3 h-3"
                    >
                      <path
                        d="M2 6 L5 9 L10 3"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">
                      {item.title}
                    </div>
                    <div className="text-muted-foreground text-sm mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- CONTACT / FOOTER ----------
function ContactFooter() {
  const { mutateAsync, isPending, isSuccess } = useSubmitForm();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      errs.email = "Valid email required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    try {
      await mutateAsync({
        name: form.name,
        email: form.email,
        companyName: form.company,
        phone: form.phone,
        message: form.message,
      });
      setForm({ name: "", email: "", company: "", phone: "", message: "" });
      toast.success("Message sent! We'll be in touch within 24 hours.");
    } catch {
      toast.error("Failed to send. Please try again.");
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" style={{ background: "oklch(0.22 0.05 220)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-1">
            <h3 className="font-display font-bold uppercase text-white text-sm tracking-widest mb-6">
              Contact Form
            </h3>
            {isSuccess ? (
              <div
                data-ocid="contact.success_state"
                className="text-center py-8"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-400 flex items-center justify-center mx-auto mb-4">
                  <svg
                    role="img"
                    aria-label="Success"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6"
                  >
                    <path
                      d="M5 12 L10 17 L19 7"
                      stroke="#4ade80"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-green-400 font-semibold">
                  Message sent successfully!
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-slate-300 text-xs uppercase tracking-wider mb-1 block"
                    >
                      Name *
                    </Label>
                    <Input
                      id="name"
                      data-ocid="contact.input"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 rounded-sm focus:border-orange-DEFAULT"
                      placeholder="John Smith"
                    />
                    {errors.name && (
                      <p
                        data-ocid="contact.error_state"
                        className="text-red-400 text-xs mt-1"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-slate-300 text-xs uppercase tracking-wider mb-1 block"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      data-ocid="contact.input"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 rounded-sm focus:border-orange-DEFAULT"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p
                        data-ocid="contact.error_state"
                        className="text-red-400 text-xs mt-1"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <Label
                      htmlFor="company"
                      className="text-slate-300 text-xs uppercase tracking-wider mb-1 block"
                    >
                      Company
                    </Label>
                    <Input
                      id="company"
                      data-ocid="contact.input"
                      value={form.company}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, company: e.target.value }))
                      }
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 rounded-sm focus:border-orange-DEFAULT"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-slate-300 text-xs uppercase tracking-wider mb-1 block"
                    >
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      data-ocid="contact.input"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 rounded-sm focus:border-orange-DEFAULT"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Label
                    htmlFor="message"
                    className="text-slate-300 text-xs uppercase tracking-wider mb-1 block"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    data-ocid="contact.textarea"
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 rounded-sm focus:border-orange-DEFAULT resize-none"
                    placeholder="Describe your project requirements..."
                  />
                  {errors.message && (
                    <p
                      data-ocid="contact.error_state"
                      className="text-red-400 text-xs mt-1"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isPending}
                  data-ocid="contact.submit_button"
                  className="w-full bg-orange-DEFAULT hover:bg-orange-hover text-white uppercase text-xs tracking-widest font-bold rounded-sm py-3"
                >
                  {isPending ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : null}
                  {isPending ? "Sending..." : "Submit Message"}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold uppercase text-white text-sm tracking-widest mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-orange-DEFAULT mt-0.5 flex-shrink-0" />
                <div className="text-slate-300 text-sm">
                  123 Industrial Parkway, Suite 400
                  <br />
                  Manufacturing District, CA 94105
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-orange-DEFAULT flex-shrink-0" />
                <a
                  href="tel:8904101073"
                  className="text-slate-300 text-sm hover:text-white"
                >
                  8904101073
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-orange-DEFAULT flex-shrink-0" />
                <a
                  href="mailto:frienterstech@gmail.com"
                  className="text-slate-300 text-sm hover:text-white"
                >
                  frienterstech@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-display font-bold uppercase text-white text-xs tracking-widest mb-4">
                Business Hours
              </h4>
              <div className="space-y-1 text-slate-400 text-sm">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="text-slate-300">7:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-slate-300">8:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-slate-400">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Links + Social */}
          <div>
            <h3 className="font-display font-bold uppercase text-white text-sm tracking-widest mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 mb-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid="footer.link"
                    className="text-slate-300 text-sm hover:text-orange-DEFAULT transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="w-3 h-3 text-orange-DEFAULT" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-display font-bold uppercase text-white text-xs tracking-widest mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <button
                  type="button"
                  key={label}
                  aria-label={label}
                  data-ocid="footer.link"
                  className="w-9 h-9 rounded-sm border border-white/20 flex items-center justify-center text-slate-400 hover:text-white hover:border-orange-DEFAULT hover:bg-orange-DEFAULT/10 transition-all cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        style={{ background: "oklch(0.18 0.05 220)" }}
        className="border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-400 text-xs">
            © {currentYear} FrientersTech Solutions. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ---------- APP ----------
export default function App() {
  return (
    <div className="font-body">
      <Toaster position="top-right" />
      <Header />
      <main>
        <Hero />
        <Services />
        <Capabilities />
        <About />
        <IndustriesQuality />
        <ContactFooter />
      </main>
    </div>
  );
}
