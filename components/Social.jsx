import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/rupesh-dev30",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/rupeshkumar30/",
  },
  {
    icon: <FaTwitter />,
    path: "https://twitter.com/rupesh30_21",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/ig_rupesh30/",
  },
];

export default function Social({containerStyles, iconStyles}) {
  return <div className={containerStyles}>
    {socials.map((social, index) => {
      return <Link key={index} href={social.path} className={iconStyles}>{social.icon}</Link>
    })}
  </div>;
}
