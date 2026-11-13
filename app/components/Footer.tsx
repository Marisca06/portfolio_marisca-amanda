import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer wrap">
      <Link className="brand" href="/">
        Marisca Portofolio<span>.</span>
      </Link>
      <span>
        © {new Date().getFullYear()} Marisca Amanda Hidayat. Dibuat dengan
        Next.js.
      </span>
      <div className="socials" style={{ border: "none", padding: 0 }}>
        <a href="https://github.com/Marisca06" target="_blank" rel="noreferrer">
          <Github size={15} /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/marisca-amanda/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={15} /> LinkedIn
        </a>
        <a href="mariscaamanda11@gmail.com">
          <Mail size={15} /> Email
        </a>
      </div>
    </footer>
  );
}
