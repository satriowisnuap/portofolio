import Section from "../components/section";

export default function ExperienceSection() {
  const experience = [
    {
      image: "/assets/hackerank.png",
      title: "Problem Solving (Basic) Certificate",
      company: "HackerRank",
      location: "Online",
      start: "2025",
      end: "Completed",
      link: "https://www.hackerrank.com/certificates/iframe/19af4b65fa0a",
      description: [
        "Demonstrated fundamental problem-solving and algorithmic thinking skills.",
        "Solved coding challenges involving logic, data structures, and basic algorithms.",
      ],
    },

    {
      image: "/assets/dicoding.jpg",
      title: "Belajar Dasar Manajemen Proyek",
      company: "Dicoding Indonesia",
      location: "Online",
      start: "2024",
      end: "Completed",
      link: "https://www.dicoding.com/certificates/NVP7J7M9OXR0",
      description: [
        "Learned basic concepts of project management including planning, execution, and evaluation.",
        "Understood team collaboration and project workflow in software development.",
      ],
    },

    {
      image: "/assets/dicoding.jpg",
      title: "Belajar Dasar Structured Query Language (SQL)",
      company: "Dicoding Indonesia",
      location: "Online",
      start: "2024",
      end: "Completed",
      link: "https://www.dicoding.com/certificates/2VX340J84ZYQ",
      description: [
        "Learned fundamental SQL concepts such as SELECT queries, filtering data, and basic data manipulation.",
        "Practiced retrieving and managing structured data from relational databases.",
      ],
    },

    {
      image: "/assets/dicoding.jpg",
      title: "Belajar Dasar Artificial Intelligence (AI)",
      company: "Dicoding Indonesia",
      location: "Online",
      start: "2024",
      end: "Completed",
      link: "https://www.dicoding.com/certificates/0LZ05217NX65",
      description: [
        "Learned the fundamentals of Artificial Intelligence and its real-world applications.",
        "Explored machine learning concepts and AI technologies used in modern systems.",
      ],
    },

    {
      image: "/assets/dicoding.jpg",
      title: "Belajar Dasar Data Science",
      company: "Dicoding Indonesia",
      location: "Online",
      start: "2024",
      end: "Completed",
      link: "https://www.dicoding.com/certificates/4EXG71YEDPRL",
      description: [
        "Introduced to data analysis concepts and data-driven decision making.",
        "Learned basic data processing, visualization, and insights extraction.",
      ],
    },
  ];

  return (
    <Section title="Experience">
      <div className="space-y-6">
        {experience.map((experience) => (
          <a
            key={experience.title}
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full border border-gray-200 p-6 rounded-xl hover:-translate-y-1 hover:shadow-md transition duration-300"
          >
            <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    width={25}
                    height={25}
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-800">
                    {experience.title}
                  </h3>
                  <div>{experience.company}</div>
                </div>
              </div>
              <div>
                {experience.start} - {experience.end}
              </div>
            </div>

            <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
              {experience.description.map((description) => (
                <li key={description}>{description}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </Section>
  );
}
