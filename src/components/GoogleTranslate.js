import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    function googleTranslateElementInit() {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    }

    // Ensure that the Google Translate script is loaded before calling the initialization function
    if (window.google && window.google.translate) {
      googleTranslateElementInit();
    }
  }, []);

  return (
    <>
      <span
        id="google_translate_element"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></span>
    </>
  );
};

export default GoogleTranslate;
