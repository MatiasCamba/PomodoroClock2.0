import React, { useEffect, useState } from "react";
import ReactFlagSelect from "react-flags-select";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

function LanguageSelector() {
  const { i18n } = useTranslation();

  let langResult = localStorage.getItem("language");

  const handleLangSelection = (countryCode) => {
    localStorage.setItem(
        "language",
        countryCode.toLowerCase(),
        i18n.changeLanguage(countryCode.toLowerCase())
      );
  };

  useEffect(() => {
    let langResult = localStorage.getItem("language");
    if (langResult === "es" || langResult === "undefined") {
      i18n.changeLanguage("es");
    } else {
      i18n.changeLanguage("en");
    }
  }, [langResult]);

  return (
    <ReactFlagSelect
      countries={["ES", "US"]}
      customLabels={{ ES: "ES", US: "US" }}
      onSelect={handleLangSelection}
      className="flag-container"
    />
  );
}

export default LanguageSelector;
