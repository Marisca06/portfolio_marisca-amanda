"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MoveUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="nav wrap" style={{ position: "sticky", top: 0, zIndex: 100, background: "var(--bg)" }}>
        <Link className="brand" href="/">
          Marisca Portofolio<span>.</span>
        </Link>
        <div className="navLinks">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "navActive" : ""}
            >
              {l.label}
            </Link>
          ))}
          <Link className="navContact" href="/contact">
            Contact <MoveUpRight size={14} />
          </Link>
        </div>
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <div className={`mobileMenu${open ? " open" : ""}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="navContact"
          onClick={() => setOpen(false)}
          style={{ width: "fit-content" }}
        >
          Contact <MoveUpRight size={14} />
        </Link>
      </div>
    </>
  );
}
