import Section from "../components/section";

export default function ContactSection() {
  return (
    <Section title="Contact">
      <table className="table-auto mr-auto">
        <tbody>
          <tr>
            <td className="pr-4 py-2">Email:</td>
            <td className="py-2 text-gray-500">
              <a
                href="mailto:satriowisnuap@gmail.com"
                className="hover:underline"
              >
                satriowisnuap@gmail.com
              </a>
            </td>
          </tr>

          <tr>
            <td className="pr-4 py-2">Phone:</td>
            <td className="py-2 text-gray-500">
              <a href="https://wa.me/6289520214500" className="hover:underline">
                +62 895 2021 4500
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
}
