import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/Logo.svg";
import "./Footer.css"
const socials = [
  {
    icon: faInstagram,
    url: "https://www.instagram.com/yourrestaurant",
  },
  {
    icon: faFacebook,
    url: "https://www.facebook.com/yourrestaurant",
  },
  {
    icon: faXTwitter,
    url: "https://x.com/yourrestaurant",
  },
  {
    icon: faWhatsapp,
    url: "https://wa.me/911234567890",
  },
  {
    icon: faEnvelope,
    url: "mailto:hello@yourrestaurant.com",
  },
];

function Footer() {
  return (
    <footer className="footer">
    <img src={Logo} alt="Restaurant Logo"/>
      {socials.map(({ icon, url }) => (
        <a
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={url}
        >
          <FontAwesomeIcon icon={icon} size="2x" />
        </a>
      ))}
    </footer>
  );
}

export default Footer;