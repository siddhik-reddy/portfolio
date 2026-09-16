import { useEffect } from "react";
import { X, Mail, Download, FolderGit2, MessageCircle } from "lucide-react";
import { profile } from "../data/profile.js";

export default function OpenToWorkModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="otw-title"
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <p className="modal-eyebrow">Open to work</p>
        <h2 id="otw-title" className="h2 modal-title">
          Full Stack Developer
        </h2>
        <p className="modal-text">
          Available for full-time roles and freelance work. Frontend-first,
          comfortable across the stack — React on the client, Node and REST
          APIs on the server.
        </p>

        <div className="modal-actions">
          <a
            href={`mailto:${profile.email}`}
            className="btn btn-primary"
          >
            <Mail size={16} />
            Email Me
          </a>
          <a
            href={`https://wa.me/${profile.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="btn btn-secondary"
          >
            <Download size={16} />
            Resume
          </a>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={onClose}
          >
            <FolderGit2 size={16} />
            Continue to site
          </button>
        </div>
      </div>
    </div>
  );
}
