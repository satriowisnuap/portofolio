import Section from "../components/section";

export default function EducationSection() {
  return (
    <Section title="Education">
      <div className="flex flex-col gap-6">
        {/* Politeknik Negeri Malang */}
        <a
          href="https://www.polinema.ac.id"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full border border-gray-200 p-6 rounded-xl hover:-translate-y-1 hover:shadow-md transition duration-300"
        >
          <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <img
                  src="/assets/icon-polinema.png"
                  alt="Education"
                  width={25}
                  height={25}
                  className="size-5.5"
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-800">
                  D4 Informatics Engineering
                </h3>
                <div>State Polytechnic of Malang</div>
              </div>
            </div>
            <div>2023 - Present</div>
          </div>

          <p className="mt-6 text-gray-500">
            Currently studying Informatics Engineering with interests in web
            development and networking. Experienced in using frameworks such as
            Laravel and currently learning modern technologies like Next.js to
            build scalable web applications.
          </p>
        </a>

        {/* SMA */}
        <a
          href="https://smanegeri1turen.sch.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full border border-gray-200 p-6 rounded-xl hover:-translate-y-1 hover:shadow-md transition duration-300"
        >
          <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <img
                  src="/assets/icon-sma.png"
                  alt="Education"
                  width={25}
                  height={25}
                  className="size-5.5"
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-800">
                  Senior High School
                </h3>
                <div>SMA Negeri 1 Turen</div>
              </div>
            </div>
            <div>2020 - 2023</div>
          </div>

          <p className="mt-6 text-gray-500">
            Completed high school education with a science background, where I
            developed strong analytical and problem-solving skills. This
            experience sparked my interest in technology and motivated me to
            pursue a degree in Informatics Engineering.
          </p>
        </a>
      </div>
    </Section>
  );
}
