import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/CristianAlas" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/cristian-alfredo-alas-castellanos-1633732aa" },
    // { icon: <FaTwitter />, path: "" },
    { icon: <FaYoutube />, path: "https://www.youtube.com/watch?v=O-RILwe75vg" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/cristian_alas16/"},
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social
