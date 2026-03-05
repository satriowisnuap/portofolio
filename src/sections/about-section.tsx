import Section from "../components/section";

export default function AboutSection() {
  return (
    <Section title="About">
      <div className="text-sm/6.5">
        <p>
          I am Satrio Wisnu Adi Pratama, a 6th semester Informatics Engineering
          student with a strong interest in technology, particularly in software
          development and computer networking.
        </p>

        <p className="mt-5">
          I have experience working with the Laravel framework for backend
          development and building web-based information systems. Currently, I
          am exploring modern web technologies such as Next.js to create dynamic
          and scalable web applications.
        </p>

        <p className="mt-5">
          Recently, I have developed a deeper interest in network engineering
          and I am actively strengthening my knowledge in computer networks. I
          enjoy learning how systems communicate, how network infrastructures
          are designed, and how technologies work behind the scenes to support
          reliable digital services.
        </p>
      </div>
    </Section>
  );
}
