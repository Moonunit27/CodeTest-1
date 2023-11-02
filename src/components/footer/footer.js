import React from "react";
import { useTranslation } from "react-i18next";
import "./footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="center-content footer">
      <p>
        &copy; {new Date().getFullYear()} {t("legal-text")}
      </p>
    </footer>
  );
}

export default Footer;
