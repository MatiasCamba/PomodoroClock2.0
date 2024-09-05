import React from "react";
import github from "../../../public/assets/github.png";
import linkedin from "../../../public/assets/linkedin.png";

function Footer() {
  return (
    <footer className="flex flex-1 align-middle items-center justify-center gap-8 inset-x-0 bottom-0 opacity-70">
      <span>
        © Matias Cambaa<sup>®</sup>
      </span>
      <a href="https://github.com/MatiasCamba" target="_blank">
        <img src={github} alt="GitHub" className="w-20 h-20" />
      </a>

      <a href="https://www.linkedin.com/in/matiascamba/" target="_blank">
        <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />
      </a>
    </footer>
  );
}

export default Footer;
