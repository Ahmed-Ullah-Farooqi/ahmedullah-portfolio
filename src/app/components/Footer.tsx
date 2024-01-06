import { log } from "console";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const logo = [
    { icon: <FaInstagram /> },
    { icon: <FaFacebook /> },
    { icon: <FaLinkedin /> },
    { icon: <FaTwitter /> },
  ];
  return (
    <footer className="flex justify-between mx-4 mb-3">
      <p className="text-sm text-white ">
        Copyright © 2023 Ahmed Ullah Farooqi
      </p>

      <ul className="text-2xl flex text-gray-600 gap-5 ">
        {logo.map((icon, i) => (
          <li key={i} className="hover:text-white cursor-pointer">
            {icon?.icon}
          </li>
        ))}
      </ul>
    </footer>
  );
}
