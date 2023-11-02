import React from "react";
import { useTranslation } from "react-i18next";
import "./languageButton.css";

function LanguageSwitchButton() {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "no" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div data-testid="language-display">
      <button
        data-testid="translate-button"
        className="languageButton"
        onClick={toggleLanguage}
      >
        {i18n.language === "en" ? t("norwegian") : t("english")}
      </button>
    </div>
  );
}

export default LanguageSwitchButton;
