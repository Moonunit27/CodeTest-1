import React, { Suspense, useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Card from "./components/card/card";
import Form from "./components/form/Form";
import i18n from "./i18n";

function App() {
  const { t } = useTranslation();

  const currentLanguage = i18n.language;
  const formRef = useRef(null);
  const [customerData, setCustomerData] = useState(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    import(`./locales/customerSuccessStories-${currentLanguage}.js`)
      .then((module) => {
        setCustomerData(module.default);
      })
      .catch((error) => {
        console.error("Error loading customer data:", error);
      });
  }, [currentLanguage]);

  return (
    <div className="App" data-testid="app-component">
      <div data-testid="header">
        <Header className="App-header" /> {/* Updated this line */}
      </div>
      <div className="body margins-sides">
        <div className="panel">
          <h2>{t("jar-service-title")}</h2>
          <p>{t("jar-service-description-1")}</p>
          <p>{t("jar-service-description-2")}</p>
          <p>{t("jar-service-description-3")}</p>
          <button data-testid="help" onClick={scrollToForm}>
            {t("help-me")}
          </button>
        </div>
        <div className="card-container">
          {customerData ? (
            <Suspense fallback={<div>Loading Card...</div>}>
              {customerData.map((customer, index) => (
                <Card
                  key={index}
                  image={customer.image}
                  alt={customer.alt}
                  title={customer.title}
                  description={customer.description}
                  className="card"
                />
              ))}
            </Suspense>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div data-testid="form-component" className="panel" ref={formRef}>
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
