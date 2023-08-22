import "./contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
  return (
    <div className="contact pd-0">
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
  );
};

export default Contact;
