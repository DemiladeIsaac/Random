import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  Layers3,
  Sparkles,
  Terminal,
  Download,
  MapPin,
  Phone,
} from "lucide-react";
import SectionHeading from "./components/SectionHeading";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

const navItems = ["Home", "About", "Projects", "Contact"];
const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "TypeScript",
  "HTML & CSS",
  "Angular",
  "NextJs",
  "Git",
  "REST APIs",
  "TanStack Query",
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a href="#home" className="brand">
        <span className="brand-mark">D.</span>
        <span>
          DEMILADE<span className="brand-dot">.</span>
        </span>
      </a>
      <button
        className="mobile-menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "nav-links nav-open" : "nav-links"}>
        {navItems.map((item, i) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            <span>0{i + 1}</span>
            {item}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Let's talk <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const orbY = useTransform(scrollY, [0, 700], [0, 180]);
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-grid" />
      <motion.div className="hero-orb orb-one" style={{ y: orbY }} />
      <motion.div
        className="hero-orb orb-two"
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="hero-copy">
        <motion.div
          className="availability"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="availability-dot" /> FRONTEND ENGINEER{" "}
          <span className="availability-line" /> LAGOS, NIGERIA
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Building digital
          <br />
          experiences with <em>purpose.</em>
        </motion.h1>
        <motion.p
          className="hero-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          I'm Demilade Olorode — a software engineer focused on crafting
          thoughtful, accessible and scalable web experiences.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
        >
          <a className="button-primary" href="#projects">
            Explore my work <ArrowUpRight size={17} />
          </a>
          <a className="button-quiet" href="#about">
            Get to know me <ArrowDown size={16} />
          </a>
        </motion.div>
        <motion.div
          className="hero-footnote"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-track">
            <i />
          </span>
          <span>01 — 04</span>
        </motion.div>
      </div>
      <motion.div
        className="hero-art"
        initial={{ opacity: 0, scale: 0.86, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.45 }}
      >
        <div className="art-frame">
          <div className="art-topline">
            <span>CREATIVE DEVELOPER</span>
            <span>EST. 2021</span>
          </div>
          <div className="art-kanji">創造</div>
          <div className="art-sun" />
          <div className="art-mountain mountain-back" />
          <div className="art-mountain mountain-front" />
          <div className="art-silhouette">
            <div className="silhouette-head" />
            <div className="silhouette-body" />
          </div>
          <div className="art-bottomline">
            <span>
              DESIGN THE
              <br />
              IMPOSSIBLE.
            </span>
            <span className="art-stamp">
              D<br />✳
            </span>
          </div>
        </div>
        <span className="floating-tag tag-code">
          <Code2 size={14} /> clean code
        </span>
        <span className="floating-tag tag-spark">
          <Sparkles size={14} /> curious mind
        </span>
      </motion.div>
      <div className="hero-index">
        01 <span /> INTRODUCTION
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about-section section-shell section-pad">
      <SectionHeading
        eyebrow="A LITTLE ABOUT ME / 02"
        title={
          <>
            Engineer by craft.
            <br />
            <em>Curious by nature.</em>
          </>
        }
        description="I enjoy turning complex ideas into useful, intuitive digital products."
      />
      <div className="about-layout">
        <motion.div
          className="about-note"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="note-mark">“</span>
          <p>
            I’m a software engineer who loves building things that make a
            difference — from fintech platforms to playful, user-focused web
            experiences.
          </p>
          <span className="note-signature">— DEMILADE OLORODE</span>
          <div className="note-decoration">好奇心</div>
        </motion.div>
        <div className="about-details">
          <motion.div
            className="about-bio"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              My experience spans frontend engineering and collaborative product
              development. I've worked with product, design and backend teams to
              build payment gateways, merchant dashboards, admin tools and
              customer-facing experiences.
            </p>
            <p>
              I hold a <strong>First Class degree in Computer Science</strong>{" "}
              from Covenant University. I’m a fast learner who enjoys solving
              problems, sharing ideas and continuously getting better at the
              craft.
            </p>
          </motion.div>
          <div className="stats-row">
            <div>
              <strong>4+</strong>
              <span>YEARS BUILDING</span>
            </div>
            <div>
              <strong>4</strong>
              <span>FEATURED PROJECTS</span>
            </div>
            <div>
              <strong>01</strong>
              <span>FIRST CLASS DEGREE</span>
            </div>
          </div>
          <div className="skills-block">
            <div className="skills-title">
              <span>MY TOOLKIT</span>
              <span>ALWAYS LEARNING ↗</span>
            </div>
            <div className="skills-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="experience-block">
        <div className="experience-heading">
          <span>SELECTED EXPERIENCE</span>
          <span>2021 — PRESENT</span>
        </div>
        <div className="experience-item">
          <div className="experience-date">01/2024 — NOW</div>
          <div>
            <h3>
              Software Engineer <span>↗</span>
            </h3>
            <p>Unified Payments · Lagos, Nigeria</p>
            <small>
              Collaborating on Payloft — a secure payment gateway, merchant
              dashboard, admin dashboard and payment widget.
            </small>
          </div>
          <span className="experience-type">FINTECH</span>
        </div>
        <div className="experience-item">
          <div className="experience-date">01/2022 — 07/2023</div>
          <div>
            <h3>
              Frontend Developer <span>↗</span>
            </h3>
            <p>E-Settlement Limited · Lagos, Nigeria</p>
            <small>
              Built features for Yep! Pay merchant and admin dashboards using
              React and Tailwind CSS, and contributed to product documentation.
            </small>
          </div>
          <span className="experience-type">FINTECH</span>
        </div>
        <div className="experience-item">
          <div className="experience-date">03/2021 — 10/2021</div>
          <div>
            <h3>
              Software Developer Intern <span>↗</span>
            </h3>
            <p>IIEMA / Ecora Consulting · Lagos, Nigeria</p>
            <small>
              Developed company web pages and contributed to an hotel management
              system using Angular, Node.js and MySQL.
            </small>
          </div>
          <span className="experience-type">CONSULTING</span>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="projects-section section-shell section-pad"
    >
      <SectionHeading
        eyebrow="THINGS I'VE BUILT / 03"
        title={
          <>
            Selected <em>projects.</em>
          </>
        }
        description="A few experiments and products I've brought to life. Take a look around."
      />
      <div className="projects-topline">
        <span>FEATURED WORK</span>
        <span>
          2024 — 2026 <i>✳</i> 04 PROJECTS
        </span>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="contact-section section-shell">
      <div className="contact-glow" />
      <div className="contact-inner">
        <SectionHeading
          eyebrow="HAVE A GOOD ONE IN MIND? / 04"
          title={
            <>
              Let's make
              <br />
              <em>something matter.</em>
            </>
          }
          description="Have a project, an idea, or just want to say hello? My inbox is always open."
        />

        <div className="contact-details">
          <Mail size={16} /> oluwademilade.olorode@gmail.com
          <a href="tel:09131761446">
            <Phone size={16} /> 09131761446
          </a>
          <span>
            <MapPin size={16} /> Lagos, Nigeria
          </span>
        </div>
        <div className="footer-bottom">
          <a href="#home" className="brand">
            <span className="brand-mark">D.</span>
            <span>
              DEMILADE<span className="brand-dot">.</span>
            </span>
          </a>
          <span className="footer-copy">
            DESIGNED & BUILT WITH CURIOSITY · © {new Date().getFullYear()}
          </span>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/demilade-olorode-7840b3164"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/DemiladeIsaac"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Contact />
    </>
  );
}
