import { Instagram, GitHub, LinkedIn, Mail } from "@mui/icons-material";
import Link from "next/link";
import { FooterData, SocialIconsData } from "@/lib/data";


const IconsData = [
  { Icon: LinkedIn, url: SocialIconsData.LinkedinUrl },
  { Icon: GitHub, url: SocialIconsData.GithubuUrl },
  { Icon: Instagram, url: SocialIconsData.InstagramUrl },
  { Icon: Mail, url: SocialIconsData.Mail },
];

const Footer = ({ isDarkMode }) => {
  return (
    <footer id="footer" className={`text-white py-4 ${isDarkMode ? 'bg-white' : 'text-pink-700'}`}>
      <div className="md:hidden lg:hidden text-center">
        <div className="flex justify-center items-center gap-4">
          {IconsData.map(({ Icon, url }, index) => (
            <Link href={url} target="_blank" key={index} className={`text-pink-700 ${isDarkMode ? 'text-black' : 'text-pink-700'}`}>
              <Icon />
            </Link>
          ))}
        </div>
      </div>
      <div className={`grid grid-cols-1 lg:grid-cols-1 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <div>
          <p className={`mt-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            {FooterData.name}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
