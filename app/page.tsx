import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Figma,
  Code2,
  Globe,
  Layers,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import HeroPhoto from "./components/HeroPhoto";
import ProjectImage from "./components/ProjectImage";

export default function Home() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero wrap" id="home">
        <div className="heroInner">
          {/* LEFT — text */}
          <div className="heroText">
            <div className="eyebrow">
              <span className="statusDot" /> OPEN TO OPPORTUNITIES
            </div>

            <h1>
              Hi, I&apos;m <span>Marisca</span>
              <br />
              Amanda Hidayat.
            </h1>

            <p className="heroRole">
              Web Developer, UI/UX Designer, &amp; System Analyst.
            </p>

            <p className="heroIntro">
              Web Developer, UI/UX Designer, and System Analyst focused on
              creating functional web applications, intuitive user experiences,
              and efficient system solutions.
            </p>

            {/* ── CTA BUTTONS ── */}
            <div className="heroActions">
              <Link className="button primary" href="/projects">
                See My Projects <ArrowDownRight size={17} />
              </Link>
              <a
                className="button outline"
                href="/cv/CV_MariscaAmanda.pdf"
                download
              >
                Download CV <Download size={16} />
              </a>
            </div>

            {/* ── SOCIAL LINKS ── */}
            <div className="heroSocials">
              <a
                href="mariscaamanda11@gmail.com"
                className="heroSocialLink"
                aria-label="Email"
              >
                <Mail size={16} />
                <span>mariscaamanda11@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/marisca-amanda/"
                target="_blank"
                rel="noreferrer"
                className="heroSocialLink"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Marisca06"
                target="_blank"
                rel="noreferrer"
                className="heroSocialLink"
                aria-label="GitHub"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* RIGHT — photo */}
          <HeroPhoto />
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section className="homeAbout section wrap" id="about">
        <div className="homeAboutInner">
          {/* left — text */}
          <div className="homeAboutLeft">
            <div className="sectionLabel">
              <span>01</span> ABOUT ME
            </div>

            <h2 className="homeAboutHeading">
              Turning problems
              <br />
              into meaningful
              <br />
              <span className="accentText">digital solutions.</span>
            </h2>

            <p className="homeAboutDesc">
              I am strong interest in <strong>Web Developer</strong>,{" "}
              <strong>UI/UX Designer</strong>, and{" "}
              <strong>System Analyst </strong>. I enjoy building functional web
              applications, designing intuitive user experiences, and analyzing
              system requirements to create effective solutions.
            </p>

            <p
              className="homeAboutDesc"
              style={{ color: "var(--muted)", fontSize: "13px" }}
            >
              I am passionate about continuous learning, collaboration, and
              developing impactful digital products that balance functionality
              with user needs.
            </p>

            <Link href="/about" className="aboutCta">
              More About Me <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* right — stat cards */}
          <div className="homeAboutRight">
            <div className="statCards">
              <div className="statCard">
                <span className="statNum">3+</span>
                <span className="statLabel">Projects Completed</span>
              </div>

              <div className="statCard statCardAccent">
                <span className="statNum">2+</span>
                <span className="statLabel">Years of Learning</span>
              </div>

              <div className="statCard">
                <span className="statNum">1</span>
                <span className="statLabel">Achievements</span>
              </div>

              <div className="statCard statCardDark">
                <BookOpen size={22} style={{ color: "#b9f36a" }} />
                <span className="statLabel" style={{ color: "#b3b5aa" }}>
                  Certifications
                  <br />& Credentials
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact wrap" id="contact">
        <div className="sectionLabel">
          <span>02</span> GET IN TOUCH
        </div>

        <h2>
          Have a project in mind?
          <br />
          <span>Let’s talk.</span>
        </h2>

        <p>
          I’m open to new opportunities, collaborations, and meaningful
          conversations. Let’s create something great together.
        </p>

        <a className="button primary" href="mariscaamanda11@gmail.com">
          Email Me <ArrowUpRight size={17} />
        </a>

        <div className="socials">
          <a
            href="https://github.com/Marisca06"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/marisca-amanda/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={17} /> LinkedIn
          </a>

          <a href="mariscaamanda11@gmail.com">
            <Mail size={17} /> Email
          </a>
        </div>
      </section>
    </main>
  );
}
