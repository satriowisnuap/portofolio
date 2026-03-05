import Section from "../components/section";

export default function ProjectsSection() {
  const projects = [
    {
      title: "TAAT - Student Discipline Record System",
      description:
        "A web-based information system used to record and manage student disciplinary violations. Built using native PHP and Microsoft SQL Server as the database.",
      image: "/assets/proyek-1.png",
      link: "https://github.com/satriowisnuap/proyek-Tata-Tertib",
    },
    {
      title: "Compass - Student Achievement Recording System",
      description:
        "A web application designed to record and manage student achievements. Developed using the Laravel framework with MySQL as the database.",
      image: "/assets/proyek-2.png",
      link: "https://github.com/Sythaz/COMPASS",
    },
    {
      title: "Jawara Mobile - Housing Information System",
      description:
        "A mobile application for managing housing information. Built using Flutter for the mobile frontend and Laravel as the backend service.",
      image: "/assets/proyek-3.png",
      link: "https://github.com/syaifulmain/jawara_mobile",
    },
  ];

  return (
    <Section title="Projects">
      <div className="flex flex-wrap gap-6">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-72 border border-gray-200 rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition duration-300"
          >
            {/* Image container with fixed ratio */}
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-base font-semibold">{project.title}</h3>

              <p className="text-gray-500 mt-2 text-sm">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
