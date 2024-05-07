import React from "react";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <div className="footer-box">
        <span className="code-by">Coded by Jennifer DAUM</span>
        <a
          href="https://github.com/jen-daum/weather-app"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub style={{ color: "black" }} />
        </a>
      </div>
    </footer>
  );
}
