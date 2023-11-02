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
        <p>
            {t("read-more")} <a href="https://www.datatilsynet.no/rettigheter-og-plikter/den-registrertes-rettigheter/">{t("here")}</a>
        </p>
        <p>
            {t("send-email")} <a href="mailto: MaAndPa@rayfuse.no">MaAndPa@rayfuse.no</a>
        </p>
    </footer>
  );
}

export default Footer;
