import { ExternalLink } from "lucide-react";
import ProjectImage from "../components/ProjectImage";

const projects = [
  {
    number: "01",
    name: "Alesha Motor Speed Workshop Information System",
    category: "Thesis · Web Development",
    description:
      "A web-based workshop management information system developed to digitize and streamline daily workshop operations. The system provides features for online service booking, inventory management to monitor spare parts and stock availability, and transaction processing to manage customer payments and service records. It aims to improve operational efficiency, simplify administrative tasks, and maintain more organized workshop data.",
    stack: ["Laravel", "PHP", "MySQL", "HTML", "CSS"],
    link: "https://github.com/Marisca06/AleshaMotorSpeed",
    image: "/images/alesha.jpg",
  },
  {
    number: "02",
    name: "AdventureWorks Data Warehouse Dashboard",
    category: "Data Warehousing · Data Analytics",
    description:
      "A data warehousing project developed as part of a Data Warehouse course to explore and analyze the AdventureWorks dataset. The project focuses on organizing structured data and presenting analytical results through an interactive dashboard with visual reports and charts. It helps users explore business data, identify patterns, and gain insights from the available information to support data-driven analysis.",
    stack: ["PHP", "MySQL", "JavaScript", "Chart.js"],
    link: "https://github.com/Marisca06/dwo_adventureworks_kelompok6",
    image: "/images/dwo.jpg",
  },
  {
    number: "03",
    name: "T-Space Mobile Application",
    category: "Mobile Application Development",
    description:
      "A mobile application designed to simplify the process of booking storage spaces. The application provides a digital platform where users can explore storage solutions and make reservations according to their needs. The project focuses on delivering a convenient booking experience through a mobile interface, making storage reservation more accessible and organized.",
    stack: ["Flutter", "Dart"],
    link: "https://github.com/Marisca06/T-Space",
    image: "/images/tspace.jpg",
  },
  {
    number: "04",
    name: "Order Process Dashboard",
    category: "Data Analytics · Data Visualization",
    description:
      "A data analytics dashboard developed as the final project of the MSIB program to analyze the order process at PT Oke Garden. The dashboard presents order-related data through interactive visualizations, making it easier to monitor order activities, understand operational patterns, and identify relevant insights. The project demonstrates how data visualization can support business process analysis and help stakeholders understand operational performance.",
    stack: ["Looker Studio"],
    link: "https://datastudio.google.com/u/0/reporting/eb8630bf-cac5-4a02-85ad-ef5cf5dc43ca/page/p_1mumzmaeod",
    image: "/images/orderprocess.jpg",
  },
  {
    number: "05",
    name: "Omura Laundry Mobile Application",
    category: "Mobile Application Development",
    description:
      "A mobile application designed to simplify laundry service booking and order tracking. Users can place laundry orders, monitor the progress of their laundry from submission to completion, and manage payments through an integrated API. The application aims to provide a more convenient and transparent laundry service experience by allowing users to track order status and access essential service information directly from their mobile devices.",
    stack: ["Flutter", "Dart"],
    link: "https://github.com/Marisca06/OmuraLaundry",
    image: "/images/omura.jpg",
  },
  {
    number: "06",
    name: "Faculty of Social and Political Sciences Profile App",
    category: "Mobile Development · Academic Project",
    description:
      "A mobile application developed to provide students and users with accessible information about the Faculty of Social and Political Sciences. The application presents faculty-related information through a mobile interface, helping users explore the faculty profile and access relevant academic information more conveniently. The project focuses on organizing institutional information into an accessible and user-friendly mobile experience.",
    stack: ["Flutter", "Dart"],
    link: "https://github.com/Marisca06/FakultasFisip",
    image: "/images/fisip.jpg",
  },
  {
    number: "07",
    name: "Coffee Ground Cashier Information System",
    category: "Desktop Application · Coursework",
    description:
      "A simple desktop-based cashier application developed to support basic sales and transaction activities. The application features a graphical user interface for cashier operations and uses a database to store transaction-related information. Crystal Reports is used to support report generation, providing a practical introduction to desktop application development, database integration, and transaction data management.",
    stack: ["Visual Basic", "Visual Studio", "SQL", "Crystal Reports"],
    link: "#",
    image: "/images/cg.jpg",
  },
  {
    number: "08",
    name: "Nutrizen Website UI/UX Project",
    category: "UI/UX Design · Web Design",
    description:
      "A website UI/UX design project focused on helping users explore nutritional information about food products. The design aims to present nutrition-related details in a clear and accessible way, allowing users to understand product composition and make more informed food choices. The project emphasizes user-centered design principles, intuitive navigation, and the presentation of information through a structured and user-friendly interface.",
    stack: ["Figma", "Maze", "UI/UX Design"],
    link: "https://bit.ly/NutrizenAplikasi",
    image: "/images/nutrizen.jpg",
  },
  {
    number: "09",
    name: "Beautify App UI/UX Project",
    category: "UI/UX Design · Human-Computer Interaction",
    description:
      "A UI/UX design project for a skincare and cosmetics analysis application that aims to help users identify potential microplastic content in beauty products through camera-assisted product scanning. The concept focuses on making product information easier to access and understand, supporting users in evaluating cosmetic products before making purchasing decisions. The design emphasizes an intuitive scanning experience, accessible information presentation, and user-centered interaction.",
    stack: ["Figma", "Maze", "UI/UX Design"],
    link: "https://bit.ly/BeautifyAplikasi",
    image: "/images/beautify.jpg",
  },

  {
    number: "10",
    name: "BiteBuddy App UI/UX Project",
    category: "UI/UX Design · Mobile Application",
    description:
      "A UI/UX design project for a dental appointment booking application that simplifies the process of finding and scheduling appointments with dentists at dental clinics. BiteBuddy aims to provide a seamless booking experience through an intuitive and user-friendly interface, helping users discover dental services and schedule appointments quickly and efficiently. The design focuses on streamlined appointment booking, accessible information, and user-centered interactions.",
    stack: ["Figma", "Maze", "UI/UX Design"],
    link: "https://bit.ly/BiteBuddyAplikasi",
    image: "/images/bitebuddy.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <div className="projectsPage wrap">
        {/* Page Header */}
        <div className="pageHeaderWrap">
          <div className="sectionLabel">
            <span>02</span> PROJECTS
          </div>

          <h1>All projects.</h1>

          <p className="subtitle">
            A collection of projects I’ve built — from internal tools to
            public-facing web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="homeProjectGrid">
          {projects.map((project) => {
            const hasLink = project.link.trim() !== "" && project.link !== "#";

            return (
              <article className="homeProjectCard" key={project.number}>
                {/* Project Image */}
                <div className="homeProjectImageHeader">
                  <ProjectImage
                    src={project.image}
                    alt={project.name}
                    category={project.category}
                  />
                </div>

                {/* Project Information */}
                <div className="homeProjectBody">
                  <div className="homeProjectTop">
                    <div className="homeProjectMeta">
                      <span className="homeProjectNum">{project.number}</span>

                      <span className="homeProjectCat">{project.category}</span>
                    </div>
                  </div>

                  <h3 className="homeProjectName">{project.name}</h3>

                  <p className="homeProjectDesc">{project.description}</p>

                  {/* View Project Button */}
                  {hasLink && (
                    <a
                      className="projectViewButton"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name}`}
                    >
                      <span>View Project</span>
                      <ExternalLink size={15} />
                    </a>
                  )}

                  {/* Technology Stack */}
                  <div className="homeProjectTags">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
