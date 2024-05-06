import React from "react";
import Image from "./images/pinned-octocat.svg";

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
          <img src={Image} alt="GitHub" className="github-logo" />
        </a>
      </div>
    </footer>
  );
}
