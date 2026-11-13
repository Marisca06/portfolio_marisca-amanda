import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <div className="contactPage wrap">
        <div className="pageHeaderWrap">
          <div className="sectionLabel">
            <span>03</span> CONTACT
          </div>

          <h1>Let&apos;s connect.</h1>

          <p className="subtitle">
            I&apos;m open to discussions, collaborations, job opportunities, and
            new experiences. Feel free to reach out.
          </p>
        </div>

        <div className="contactGrid">
          <div className="contactForm">
            <div className="formGroup">
              <label htmlFor="name">FULL NAME</label>
              <input id="name" name="name" type="text" placeholder="John Doe" />
            </div>

            <div className="formGroup">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
              />
            </div>

            <div className="formGroup">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                placeholder="Hi, I would like to discuss..."
              />
            </div>

            <a
              className="button primary"
              href="mailto:hello@example.com"
              style={{ width: "fit-content" }}
            >
              Send a message <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="contactInfo">
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--muted)",
                  lineHeight: "1.9",
                  marginBottom: "2px",
                }}
              >
                For urgent inquiries, you can contact me directly via email or
                connect with me through the platforms below.
              </p>
            </div>

            <div className="contactInfoItem">
              <span className="label">EMAIL</span>
              <a href="mailto:hello@example.com">mariscaamanda11@gmail.com</a>
            </div>

            <div className="contactInfoItem">
              <span className="label">LOCATION</span>
              <span>Surabaya 🇮🇩</span>
            </div>

            <div className="contactInfoItem">
              <span className="label">AVAILABILITY</span>
              <span style={{ color: "#7aa92e" }}>● Open to opportunities</span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginTop: "2px",
              }}
            >
              <a
                href="https://github.com/Marisca06"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                <Github size={16} /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/marisca-amanda/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                <Linkedin size={16} /> LinkedIn
              </a>

              <a
                href="mailto:hello@example.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                <Mail size={16} /> mariscaamanda11@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
