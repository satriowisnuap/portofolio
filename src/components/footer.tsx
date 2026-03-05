export default function Footer() {
  return (
    <footer className="mt-32 w-full text-center py-6 text-gray-500 border-t border-gray-200">
      <p>© {new Date().getFullYear()} Satrio Wisnu Adi Pratama</p>

      <p className="mt-2 text-sm">
        Informatics Engineering Student • Web Developer • Network Enthusiast
      </p>

      <p className="mt-2 text-sm">Built with React, Vite, and Tailwind CSS</p>
    </footer>
  );
}
