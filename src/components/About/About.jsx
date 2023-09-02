import './about.css'

const About = () => {
  return (
    <div id="about" className="about container pd-1">
      <h2>About</h2>
      <p>
        {" "}
        Passionate about technology and programming, I was born on June 3, 1991
        in{" "}
        <a
          href="https://goo.gl/maps/EFRJAZAV2rjxeQNJ6"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Concepción del Uruguay, Entre Ríos, Argentina
        </a>
        , and I graduated from {" "}
        <a
          href="https://www.ub.edu.ar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Universidad de Belgrano
        </a>{" "}
        as University Analyst in Human Capital Management in 2022.
      </p>{" "}
      <br />
      <p>
        After finishing my degree, I discovered my true vocation as a developer
        and graduated as a Full Stack Web Developer at{" "}
        <a
          href="https://www.soyhenry.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Henry
        </a>
        , where I acquired the necessary skills to work in the world of
        technology. On the other hand, I also specialized in search and
        selection of talent at the{" "}
        <a
          href="https://sceu.frba.utn.edu.ar/e-learning/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Universidad Tecnologica Nacional
        </a>{" "}
        and as an IT Recruiter at{" "}
        <a
          href="https://www.wearestaffy.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Staffy.
        </a>{" "}
      </p>
    </div>
  );
};

export default About;
