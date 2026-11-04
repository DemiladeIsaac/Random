import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const themes = {
  ComicVerse: "comic-preview",
  Fashionista: "fashion-preview",
  "Secret Message": "secret-preview",
};

function PlaceholderPreview({ name }) {
  return (
    <div
      className={`placeholder-preview ${themes[name] || ""}`}
      aria-label={`${name} visual preview placeholder`}
    >
      <div className="preview-window-bar">
        <i />
        <i />
        <i />
        <span>{name.toLowerCase().replaceAll(" ", "")}.app</span>
      </div>
      {name === "ComicVerse" && (
        <div className="comic-art">
          <b>
            COMIC
            <br />
            VERSE
          </b>
          <span>
            YOUR NEXT
            <br />
            ADVENTURE
          </span>
          <div className="comic-orb" />
        </div>
      )}
      {name === "Fashionista" && (
        <div className="fashion-art">
          <span>
            THE NEW
            <br />
            EDIT
          </span>
          <div className="fashion-shape" />
          <small>STYLE / FORM / FEEL</small>
        </div>
      )}
      {name === "Secret Message" && (
        <div className="secret-art">
          <div className="secret-envelope">✉</div>
          <b>
            A LITTLE
            <br />
            MYSTERY
          </b>
          <small>Send something secretly.</small>
        </div>
      )}
      <span className="preview-placeholder-note">
        Replace with project screenshot
      </span>
    </div>
  );
}

export default function ProjectCard({ project, index }) {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <motion.article
      className={`project-card ${project.featured ? "featured-project" : ""}`}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -7 }}
    >
      <a
        className="project-image-link"
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.name} live preview`}
      >
        {project.image && !imageFailed ? (
          <img
            src={project.image}
            alt={project.imageAlt}
            className="project-image"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <PlaceholderPreview name={project.name} />
        )}
        <span className="image-open">
          <ArrowUpRight size={19} />
        </span>
      </a>
      <div className="project-content">
        <div className="project-meta">
          <span>{project.number} / 04</span>
          <span>{project.category}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tech-list">
          {project.stack.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
        <a
          className="live-link"
          href={project.url}
          target="_blank"
          rel="noreferrer"
        >
          Live preview <ExternalLink size={15} />
        </a>
      </div>
    </motion.article>
  );
}
