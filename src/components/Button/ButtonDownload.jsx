import { useState } from "react";
import style from "./ButtonDownload.module.css";
import docPDF from "../../assets/Tamburlini, Lucas.pdf";

const Button = ({ text }) => {
  const [clicked, setClicked] = useState(false);
  const pdf = docPDF;

  const handleButtonClick = () => {
    setClicked(true);
    setTimeout(() => {
      window.open(pdf, "_blank");

      setTimeout(() => {
        setClicked(false);
      }, 500);
    }, 1000);
  };

  return (
    <button onClick={handleButtonClick} className={style.button}>
      {text}{" "}
      {clicked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          viewBox="0 0 1200 1200"
        >
          <path
            fill="currentColor"
            d="M600 0C268.63 0 0 268.63 0 600s268.63 600 600 600c331.369 0 600-268.63 600-600S931.369 0 600 0zm0 130.371c259.369 0 469.556 210.325 469.556 469.629c0 259.305-210.187 469.556-469.556 469.556c-259.37 0-469.556-210.251-469.556-469.556C130.445 340.696 340.63 130.371 600 130.371zm229.907 184.717L482.153 662.915L369.36 550.122L258.691 660.718l112.793 112.793l111.401 111.401l110.597-110.669l347.826-347.754l-111.401-111.401z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M13 13v5.585l1.828-1.828l1.415 1.415L12 22.414l-4.243-4.242l1.415-1.415L11 18.585V13h2ZM12 2a7.001 7.001 0 0 1 6.954 6.194A5.5 5.5 0 0 1 18 18.978V17a6 6 0 0 0-11.996-.225L6 17v1.978a5.5 5.5 0 0 1-.954-10.784A7 7 0 0 1 12 2Z"
          />
        </svg>
      )}
    </button>
  );
};

export default Button;
