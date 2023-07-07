import React, {useState, useEffect} from "react";
import "./tabs.css";

export default function Tabs({tabs}) {
  const [activeTab, setActiveTab] = useState("Mars");

  useEffect(() => {
    const tabLinks = document.querySelectorAll(".tablinks");
    tabLinks.forEach((element) => {
      element.addEventListener("click", openTabs);
    });
    return () => {
      tabLinks.forEach((element) => {
        element.removeEventListener("click", openTabs);
      });
    };
  }, []);

  function openTabs(evt) {
    const btnTarget = evt.currentTarget;
    const country = btnTarget.dataset.country;

    setActiveTab(country);

    const tabContents = document.querySelectorAll(".tabcontent");
    tabContents.forEach((item) => {
      item.classList.remove("tabcontent-active");
    });

    const tabLinks = document.querySelectorAll(".tablinks");
    tabLinks.forEach((item) => {
      item.classList.remove("tablinks-active");
    });

    document.querySelector(`#${country}`).classList.add("tabcontent-active");

    btnTarget.classList.add("tablinks-active");
  }

  return (
    <>
      <section className="wrapper">
        <div className="content">
          <div className="tabs">
            {tabs.map(tab => (
              <button
                className={
                  activeTab === `${tab.id}`
                    ? "tablinks tablinks-active active"
                    : "tablinks"
                }
                data-country={tab.id}
                title={tab.id}
                key={tab.id}
              >
                <span>{tab.id}</span>
              </button>
            ))}
          </div>

          <div className="wrapper-tabcontent">
            {tabs.map(tab => (
              <div
                id={tab.id}
                key={tab.id}
                className={
                  activeTab === `${tab.id}`
                    ? "tabcontent tabcontent-active"
                    : "tabcontent"
                }
              >
                <h3>{tab.id}</h3>
                <p>
                  {tab.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
