import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="muted">
          {new Date().getFullYear()} {profile.name}
        </p>
        <p className="muted">Built with React and Vite</p>
      </div>
    </footer>
  );
}
