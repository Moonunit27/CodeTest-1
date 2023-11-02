import React, { useRef } from "react";
import LanguageSwitchButton from "../languageButton/LanguageButton";
import "./header.css";
import Jar from "../pictureRain/Jar";

function Header() {
  const jarRef = useRef();

  return (
    <header>
      <div className="container">
        <Jar ref={jarRef} />
        <h1 className="title">Homestyle Jar Assistance</h1>
        <div data-testid="language-switch-button">
          <LanguageSwitchButton class="languageButtons" />
        </div>
      </div>
    </header>
  );
}

export default Header;
