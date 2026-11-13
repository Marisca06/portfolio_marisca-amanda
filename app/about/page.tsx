import {
  Code2,
  Trophy,
  GraduationCap,
  Briefcase,
  Award,
  Users,
  ExternalLink,
  BookOpen,
  Figma,
  Globe,
  Layers,
} from "lucide-react";
import SectionImage from "../components/SectionImage";

/* ═══════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════ */

const skillCategories = [
  {
    category: "Design",
    icon: <Figma size={18} />,
    color: "#b9f36a",
    skills: [
      "UI/UX Design",
      "Figma",
      "Wireframing",
      "Prototyping",
      "Design System",
      "User Research",
    ],
  },
  {
    category: "Frontend",
    icon: <Code2 size={18} />,
    color: "#b9f36a",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    icon: <Globe size={18} />,
    color: "#b9f36a",
    skills: ["PHP", "Laravel", "MySQL", "REST API"],
  },
  {
    category: "Tools",
    icon: <Layers size={18} />,
    color: "#b9f36a",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
];

const experiences = [
  {
    period: "February 2025 — June 2025",
    title: "Front-End Mobile Developer Intern",
    company: "PT. Lima Benua Koneksindo",
    desc: [
      "Designed the UI/UX of a mobile application, including user flows, wireframes, high-fidelity designs, and interactive prototypes using Figma.",
      "Developed the mobile application interface using Flutter based on approved UI/UX designs, ensuring consistency between design and implementation.",
      "Created a pitch deck and presented the project concept, development process, and final results to mentors and stakeholders.",
      "Successfully completed the mobile application development according to project requirements by integrating design, functionality, and user experience.",
    ],

    tags: ["Flutter", "Dart", "Figma", "UI/UX Design"],
    images: ["/images/sertif_limabenua.jpg"],
  },
];

const education = [
  {
    period: "AUG 2022 — JUN 2026",
    degree: "Bachelor of Information Systems",
    institution: "Universitas Pembangunan Nasional “Veteran” Jawa Timur",
    location: "Surabaya, Indonesia",
    desc: [
      "GPA: 3.92/4.00",
      "Relevant Coursework: Human-Computer Interaction (HCI), Information Systems Analysis and Design, Database Management, Software Engineering, Computational Statistics, and Programming (Java, Python, Dart, HTML, CSS, Laravel, and Flutter). Design: UI/UX Design.",
    ],
  },
  {
    period: "SEP — DEC 2024",
    degree: "Data Analyst Pathway",
    institution:
      "Studi Independen Bersertifikat Kampus Merdeka — Kemendikbud x MyEduSolve",
    location: "Jakarta, Indonesia",
    desc: [
      "Selected as one of the Data Analyst mentees from over 7,000 applicants across universities in Indonesia, with the opportunity to learn directly from industry experts through an intensive four-month program.",
      "Learning Objectives: Excel, IT Specialist: Database, Python, IT Specialist: Data Analytics, and Data Visualization.",
    ],
  },
];

const achievements = [
  {
    title: "Best Graduate – Information Systems Program",
    year: "2026",
    issuer: 'Universitas Pembangunan Nasional "Veteran" Jawa Timur',
    date: "June 2026",
    desc: 'Recognized as the Best Graduate of the Information Systems Program at the June 2026 Graduation Determination (Yudisium), Universitas Pembangunan Nasional "Veteran" Jawa Timur.',
    image: "/images/sertif_bestgradu.jpg",
  },
  {
    title:
      "2nd Place – Tech Dev Competition, Information System Competition 2024",
    year: "2024",
    issuer: 'Information Systems Student Association, UPN "Veteran" Jawa Timur',
    date: "August 2024",
    desc: "Achieved 2nd place at the national level for creating Creativo, a web-based platform offering innovative solutions to real-world community challenges. The project was developed collaboratively with a five-member team for the Information System Competition 2024.",
    image: "/images/sertif_techdevv.jpg",
  },
  {
    title: "2nd Place – UI/UX Design Competition, Technology Days #12",
    year: "2023",
    issuer: "Faculty of Industrial Technology, Universitas Ahmad Dahlan",
    date: "November 2023",
    desc: "Achieved 2nd place in a national-level UI/UX Design Competition as part of a team through the design of Beautify, an application that helps users detect microplastic content in cosmetic products.",
    image: "/images/sertif_uad.jpg",
  },
  {
    title: "Finalist – UI/UX Design Competition, DIESNAT SIITASE 5.0",
    year: "2023",
    issuer: "Information Systems Student Association, IT Telkom Purwokerto",
    date: "November 2023",
    desc: "Selected as a finalist as part of a team in the national-level UI/UX Design Competition DIESNAT SIITASE 5.0, organized by the Information Systems Student Association of IT Telkom Purwokerto.",
  },
  {
    title: "Semifinalist – UI/UX Design Competition, X-Project 9.0",
    year: "2023",
    issuer: "Informatics Engineering Student Association, UNESA",
    date: "October 2023",
    desc: "Selected as a semifinalist as part of a team in the national-level UI/UX Design Competition X-Project 9.0, demonstrating skills in UI/UX design and user-centered design.",
  },
];

const certifications = [
  {
    title: "Junior Web Programmer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    meta: "NOV 2025 — NOV 2028",
    credentialId: "62010.2513.3.0006969.2025",
    skills: ["PHP", "Laravel", "Web Development"],
    image: "/images/sertif_juniorweb.jpg",
  },
  {
    title: "Data Analytics",
    issuer: "Certiport — A Pearson VUE Business",
    meta: "NOV 2024 — NOV 2027",
    credentialId: "wA9rk-2F6w",
    skills: ["Data Visualization", "Data Cleaning", "Data Analytics"],
    image: "/images/sertif_dataanalityc.jpg",
  },
  {
    title: "Databases",
    issuer: "Certiport — A Pearson VUE Business",
    meta: "OCT 2024 — OCT 2027",
    credentialId: "wbhmo-H94A",
    skills: ["Databases", "Database Management System (DBMS)"],
    image: "/images/sertif_databases.jpg",
  },
  {
    title: "Belajar Dasar UX Design",
    issuer: "Dicoding Indonesia",
    meta: "FEB 2024 — FEB 2027",
    credentialId: "L4PQQEN32PO1",
    skills: ["UI Design", "User Experience (UX)", "UX Research"],
    link: "https://www.dicoding.com/certificates/L4PQQEN32PO1",
    image: "/images/sertif_dicoding.jpg",
  },
];

const activities = [
  {
    title: "Presenter",
    org: "Proceeding of Sinergy: Scholars International Conference on Research and Global Youth",
    period: "FEB 2026",
    role: "Research Presenter",
    desc: "Presented a research paper titled \"Design and Development of 'Plasticare' Information System as an Effort to Support Sustainable Environmental Management\" at a national-level academic event hosted by Universitas Tulungagung.",
    images: ["/images/sertif_presenter.png"],
  },
  {
    title: "Staff of Security and Licensing Division",
    org: 'Pekan Serasi (PENSI) 2023 · Himpunan Mahasiswa Sistem Informasi UPN "Veteran" Jawa Timur',
    period: "OCT — NOV 2023",
    role: "Committee Staff",
    desc: "Maintained event security and order, managed permit applications with relevant parties, and supported security procedures to ensure the event ran smoothly.",
    images: ["/images/sertif_pensi2023.png"],
  },

  {
    title: "Staff of Fundraising Division",
    org: 'Sifo Mengajar 2023 · Himpunan Mahasiswa Sistem Informasi UPN "Veteran" Jawa Timur',
    period: "AUG — SEP 2023",
    role: "Committee Staff",
    desc: "Identified and managed funding sources, supported fundraising targets, and coordinated with division members to implement fundraising programs.",
    images: ["/images/sertif_simeng2023.png"],
  },
  {
    title: "Staff of Security and Licensing Division",
    org: 'Information System Competition (ISC) 2023 · Himpunan Mahasiswa Sistem Informasi UPN "Veteran" Jawa Timur',
    period: "AUG — SEP 2023",
    role: "Committee Staff",
    desc: "Helped maintain event security and order, coordinated permit applications with relevant parties, and ensured compliance with event security procedures and regulations.",
    images: ["/images/sertif_ISC2023.png"],
  },
  {
    title: "Staff of Public Relations Division",
    org: 'MOSAIK 2023 · BEM Fakultas Ilmu Komputer UPN "Veteran" Jawa Timur',
    period: "JUN — AUG 2023",
    role: "Committee Staff",
    desc: "Supported stakeholder relations, coordinated communication and information dissemination, and assisted with public relations and promotional activities throughout the event.",
    images: ["/images/sertif_mosaik2023.png"],
  },
  {
    title: "Head of Public Relations Division",
    org: 'Dies Natalis Sistem Informasi 2023 · Himpunan Mahasiswa Sistem Informasi UPN "Veteran" Jawa Timur',
    period: "JUN — JUL 2023",
    role: "Division Head",
    desc: "Led and coordinated the Public Relations Division, maintained relationships with internal and external stakeholders, and oversaw public relations activities and information dissemination throughout the event.",
    images: ["/images/sertif_diesnat2023.png"],
  },
  {
    title: "Staff of Equipment Division",
    org: 'PEMIRA Sistem Informasi 2023 · Himpunan Mahasiswa Sistem Informasi UPN "Veteran" Jawa Timur',
    period: "JAN — FEB 2023",
    role: "Committee Staff",
    desc: "Prepared and managed event equipment and logistical needs, ensuring that all necessary equipment was available and ready before and during the event.",
    images: ["/images/sertif_pemira2023.png"],
  },
  {
    title: "Head of Consumption and Health Division",
    org: 'Rawat Bumi 2023 · Himpunan Mahasiswa Sistem Informasi UPN "Veteran" Jawa Timur',
    period: "DEC 2022 — JAN 2023",
    role: "Division Head",
    desc: "Led the Consumption and Health Division, managed food and beverage needs for participants and committee members, and ensured health support was available throughout the event.",
    images: ["/images/sertif_rabun2023.png"],
  },
];

const publications = [
  {
    type: "Jurnal Internasional",
    title:
      "Rancang Bangun Sistem Informasi Manajemen Bengkel Menggunakan Metode Rapid Application Development (Studi Kasus: Bengkel Alesha Motor Speed)",
    journal: "JIRSI (Jurnal Ilmu Komputer dan Sistem Informasi)",
    year: "2026",
    authors:
      "Marisca Amanda Hidayat, Anindo Saka Fitri, Seftin Fitria Ana Wati",
    url: "https://jurnal.unity-academy.sch.id/index.php/jirsi/article/view/368",
    indexed: "Sinta 4",
  },
  {
    type: "Prosiding",
    title:
      "Design and Development of “Plasticare” Information System as an Effort to Support Sustainable Environmental Management",
    journal:
      "Proceeding of Sinergy : Scholars International Conference on Research and Global Youth",
    year: "2026",
    authors:
      "Marisca Amanda Hidayat, Syuraini Noor Chamsyah, Nurul Izzah, Puti Tsabita Najwa Arief, Muhammad Alfanul Ulum, Kevin Joy Nasserino",
    url: "https://conference.unita.ac.id/index.php/proceeding-of-sinergy/article/view/687",
    indexed: "IEEE Xplore",
  },

  {
    type: "Jurnal Internasional",
    title:
      "Optimalisasi Ekonomi Digital dan Lingkungan untuk Pengembangan Masyarakat Berbasis SDGs 8 & 11",
    journal: "ABIDUMASY : JURNAL PENGABDIAN KEPADA MASYARAKAT",
    year: "2025",
    authors:
      "Marisca Amanda Hidayat, Joey Michael Flaurance Andia, Amanda Soraya, Rahella Ripatiana Br Ginting, Maharani Ikaningtyas",
    url: "https://doi.org/10.33752/abidumasy.v6i2.10025",
    indexed: "Sinta 4",
  },

  {
    type: "Jurnal Internasional",
    title:
      "Analisis Manajemen Risiko Teknologi Informasi pada Dinkominfo Surabaya Menggunakan Metode Failure Mode and Effect Analysis (FMEA)",
    journal: "Merkurius: Jurnal Riset Sistem Informasi dan Teknik Informatika",
    year: "2025",
    authors:
      "Marisca Amanda Hidayat, Fidyah Salsabila Putri Sillehu, Raihana Sakhi Aswanda, Audrey Septya Rosanti, Agung Brastama Putra, Amalia Anjani Arifiyanti",
    url: "https://journal.arteii.or.id/index.php/Merkurius/article/view/947",
    indexed: "Sinta 4",
  },
  {
    type: "Prosiding",
    title:
      "Analisis Tingkat Penerimaan Mahasiswa terhadap Aplikasi Remini Menggunakan Kerangka Model TAM",
    journal: "Seminar Nasional Teknologi dan Sistem Informasi (SITASI)",
    year: "2024",
    authors:
      "Marisca Amanda Hidayat, Hilmi Arya Rafwa Muhammad, Rakha Maulana, Anggi Trisna Sari",
    url: "https://sitasi.upnjatim.ac.id/index.php/sitasi/article/view/788",
    indexed: "IEEE Xplore",
  },
];

/* ═══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <main>
      <div className="aboutPage wrap">
        {/* ── HEADER ── */}
        <div className="aboutPageHeader">
          <div className="aboutHeaderRow">
            <div className="aboutHeaderLeft">
              <div className="sectionLabel">
                <span>01</span> ABOUT ME
              </div>

              <h1 className="aboutPageTitle">
                Get to know me
                <br />
                <span>a little better.</span>
              </h1>

              <p className="aboutPageSub">
                An Information Systems graduate passionate about
                <span> Web Developer</span>, <span> UI/UX Designer</span> and{" "}
                <span>System Analyst</span>, driven by the desire to build
                meaningful and user-centered digital experiences.
              </p>
            </div>

            <div className="aboutHeaderPhotoCol">
              <div className="aboutPhotoMain">
                <SectionImage
                  src="/images/mari2.jpg"
                  alt="Foto profil"
                  aspect="portrait"
                  fill
                />
              </div>

              <div className="aboutPhotoSecondary">
                <SectionImage
                  src="/images/mari3.JPG"
                  alt="Foto aktivitas"
                  aspect="portrait"
                  fill
                />
              </div>

              <div className="aboutPhotoSmall">
                <SectionImage
                  src="/images/mari1.JPG"
                  alt="Foto kegiatan"
                  aspect="portrait"
                  fill
                />
              </div>

              <div className="aboutPhotoCaption">
                <span>CREATIVE MINDSET</span>
                <span>✳</span>
              </div>
            </div>
          </div>
        </div>
        {/* ══════════════════════════════════════════
            1 · SKILLS
        ══════════════════════════════════════════ */}
        <section className="aboutSection" id="skills">
          <div className="aboutSectionLabel">
            <Code2 size={15} />
            <span>SKILLS</span>
          </div>

          <div className="homeSkillsGrid aboutSkillsGrid">
            {skillCategories.map((cat) => (
              <div key={cat.category} className="homeSkillGroup">
                <div className="homeSkillGroupHeader">
                  <span
                    className="homeSkillIcon"
                    style={{ background: cat.color }}
                  >
                    {cat.icon}
                  </span>

                  <span className="homeSkillGroupLabel">{cat.category}</span>
                </div>

                <div className="homeSkillCloud">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="homeSkillChip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* ══════════════════════════════════════════
            2 · EXPERIENCE
        ══════════════════════════════════════════ */}
        <section className="aboutSection" id="experience">
          <div className="aboutSectionLabel">
            <Briefcase size={15} />
            <span>WORK EXPERIENCE</span>
          </div>
          <div className="expGrid">
            {experiences.map((e, i) => (
              <div key={i} className="expCard">
                {/* Kolom 1: Periode */}
                <div className="expPeriod">{e.period}</div>

                {/* Kolom 2: Informasi pengalaman */}
                <div className="expContent">
                  <h3>{e.title}</h3>
                  <div className="expCompany">{e.company}</div>
                  <ul className="expDescription">
                    {e.desc.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="expTags">
                    {e.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Kolom 3: Foto dokumentasi */}
                <div className="expImage">
                  {e.images.map((image, index) => (
                    <SectionImage
                      key={image}
                      src={image}
                      alt={`${e.title} - Documentation ${index + 1}`}
                      hint="Taruh foto dokumentasi di /public/images/"
                      aspect="landscape"
                      className="cardInlineImg"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
    3 · EDUCATION
══════════════════════════════════════════ */}
        <section className="aboutSection" id="education">
          <div className="aboutSectionLabel">
            <GraduationCap size={15} />
            <span>EDUCATION</span>
          </div>

          <div className="timeline">
            {education.map((e, i) => (
              <div key={i} className="timelineItem">
                <div className="period">{e.period}</div>

                <h3>{e.degree}</h3>

                <div className="institution">{e.institution}</div>

                <div className="educationLocation">{e.location}</div>

                <ul className="educationDescription">
                  {e.desc.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
    ACHIEVEMENTS
══════════════════════════════════════════ */}
        <section className="aboutSection" id="achievements">
          <div className="aboutSectionLabel">
            <Trophy size={15} strokeWidth={1.8} />
            <span>ACHIEVEMENTS</span>
          </div>

          <div className="achievementList">
            {achievements.map((item, index) => (
              <article className="achievementCard" key={item.title}>
                <div className="achNumber">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="achContent">
                  <div className="achMeta">
                    {item.year} <span>·</span> {item.issuer}
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>

                {item.image && (
                  <div className="achImage">
                    <SectionImage
                      src={item.image}
                      alt={item.title}
                      hint="Taruh foto sertifikat di /public/images/"
                      aspect="landscape"
                      className="cardInlineImg"
                    />
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            5 · CERTIFICATION
        ══════════════════════════════════════════ */}
        <section className="aboutSection" id="certification">
          <div className="aboutSectionLabel">
            <Award size={15} />
            <span>CERTIFICATION</span>
          </div>

          <div className="certGrid">
            {certifications.map((c, i) => (
              <article key={i} className="certCard">
                {c.image && (
                  <SectionImage
                    src={c.image}
                    alt={c.title}
                    hint="Taruh foto sertifikat di /public/images/"
                    aspect="landscape"
                    className="certCardImg"
                  />
                )}

                <div className="certCardBody">
                  <div className="certMeta">{c.meta}</div>

                  <h3>{c.title}</h3>

                  <div className="certIssuer">{c.issuer}</div>

                  {c.credentialId && (
                    <div className="certCredential">
                      <span className="certCredentialLabel">CREDENTIAL ID</span>
                      <span className="certCredentialValue">
                        {c.credentialId}
                      </span>
                    </div>
                  )}

                  {c.skills?.length > 0 && (
                    <div className="certSkills">
                      {c.skills.map((skill) => (
                        <span className="certSkillTag" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {c.link && c.link !== "#" && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certLink"
                    >
                      View Credential
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
        {/* ══════════════════════════════════════════
            6 · CAMPUS ACTIVITIES
        ══════════════════════════════════════════ */}
        <section className="aboutSection" id="campus-activities">
          <div className="aboutSectionLabel">
            <Users size={15} />
            <span>CAMPUS ACTIVITIES</span>
          </div>
          <div className="campusGrid">
            {activities.map((a, i) => (
              <div key={i} className="campusCard">
                <div>
                  <h3>{a.title}</h3>
                  <div className="campusOrg">{a.org}</div>
                  <p>{a.desc}</p>
                  {/* Foto kegiatan */}
                  {a.images?.length > 0 && (
                    <div className="campusImages">
                      {a.images.map((image, index) => (
                        <SectionImage
                          key={image}
                          src={image}
                          alt={`${a.title} - Documentation ${index + 1}`}
                          hint="Taruh foto kegiatan di /public/images/"
                          aspect="landscape"
                          className="cardInlineImg"
                        />
                      ))}
                    </div>
                  )}

                  <span className="campusTag">{a.role}</span>
                </div>
                <div className="campusPeriod">{a.period}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            7 · PUBLIKASI
        ══════════════════════════════════════════ */}
        <section className="aboutSection" id="publikasi">
          <div className="aboutSectionLabel">
            <BookOpen size={15} />
            <span>PUBLIKASI</span>
          </div>
          <div className="pubList">
            {publications.map((p, i) => (
              <div key={i} className="pubCard">
                <div className="pubLeft">
                  <span className="pubType">{p.type}</span>
                  <span className="pubYear">{p.year}</span>
                </div>
                <div className="pubRight">
                  <h3 className="pubTitle">{p.title}</h3>
                  <p className="pubJournal">{p.journal}</p>
                  <p className="pubAuthors">{p.authors}</p>
                  {p.indexed && <span className="pubIndexed">{p.indexed}</span>}
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="pubLink"
                  >
                    Baca Jurnal / DOI <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
