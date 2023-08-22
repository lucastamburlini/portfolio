import "./footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div className="footer container pd-1">
      <div className="logo">
        <img
          src={"../../public/logoWhiteLarge.png"}
          alt={"logoWhiteLarge.png"}
        />
      </div>
      <div className="phrase pd-1">
        <p>Every day, growing, learning, and progressing one step at a time.</p>
      </div>
      <div className="pd-0">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/lucasgabrieltamburlini/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/l.tamburlini/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lucastamburlini"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright pd-0">
        Handcrafted by me
        <CopyrightIcon />
        Lucas Tamburlini
      </div>
    </div>
  );
};

export default Footer;
