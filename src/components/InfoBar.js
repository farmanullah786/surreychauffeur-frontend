import React, { useEffect, useState } from "react";

const InfoBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleOkClick = () => {};

  const collapseSection = (element) => {
    var sectionHeight = element.scrollHeight;
    var elementTransition = element.style.transition;
    element.style.transition = "";
    requestAnimationFrame(function () {
      element.style.height = sectionHeight + "px";
      // element.style.height = sectionHeight + "px";
      element.style.transition = elementTransition;
      requestAnimationFrame(function () {
        element.style.height = 0 + "px";
      });
    });
    element.setAttribute("data-collapsed", "true");
  };
  useEffect(() => {
    return () => {
      let toggleButton = document.querySelector("#ok");
      if (toggleButton) {
        toggleButton.addEventListener("click", function (e) {
          var section = document.querySelector(".section.collapsible");
          var isCollapsed = section.getAttribute("data-collapsed") === "true";
          if (isCollapsed) {
            collapseSection(section);
            section.setAttribute("data-collapsed", "false");
            setTimeout(() => {
              document.querySelector("#ctl00_barwrap").classList.remove("bar");
            }, 1000
            );
          }
        });
      }
    };
  });

  return (
    <>
      {/* {isVisible && ( */}
      <div
        id="ctl00_barwrap"
        className={"bar section collapsible"}
        data-collapsed="true"
      >
        <span id="text">
          <p style={{ margin: "0px", textAlign: "center" }}>
            <span
              style={{
                fontWeight: "bold",
                fontFamily: "verdana, arial, helvetica, sans-serif",
              }}
            >
              Open 24/7
              <br
                style={{
                  fontFamily: "verdana, arial, helvetica, sans-serif",
                  fontWeight: "bold",
                }}
              />
              Get a Quote &amp; Book Online,&nbsp;WhatsApp Chat,
            </span>
            <font color="#ff0000" style={{ fontWeight: "bold" }}>
              <span
                style={{
                  fontFamily: "verdana, arial, helvetica, sans-serif",
                }}
              >
                &nbsp;
              </span>
            </font>
            <span
              style={{
                fontWeight: "bold",
                fontFamily: "verdana, arial, helvetica, sans-serif",
              }}
            >
              Call us
            </span>
          </p>
        </span>
        <span id="otherimg"></span>
        <span id="ok">
          <a href="#" onClick={handleOkClick}>
            ✔
          </a>
        </span>
      </div>
      {/* )}  */}
      <a id="top"></a>
    </>
  );
};

export default InfoBar;
