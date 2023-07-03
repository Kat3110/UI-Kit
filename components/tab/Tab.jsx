import React, { useState, useEffect } from "react";
import "./tab.css";

export default function Tab() {
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
            <button
              className={
                activeTab === "Mars"
                  ? "tablinks tablinks-active active"
                  : "tablinks"
              }
              data-country="Mars"
            >
              <span>Mars</span>
            </button>
            <button
              className={
                activeTab === "Neptune" ? "tablinks tablinks-active" : "tablinks"
              }
              data-country="Neptune"
            >
              <span>Neptune</span>
            </button>
            <button
              className={
                activeTab === "Venus"
                  ? "tablinks tablinks-active"
                  : "tablinks"
              }
              data-country="Venus"
            >
              <span>Venus</span>
            </button>
            <button
              className={
                activeTab === "Mercury" ? "tablinks tablinks-active" : "tablinks"
              }
              data-country="Mercury"
            >
              <span>Mercury</span>
            </button>
          </div>

          <div className="wrapper-tabcontent">
            <div
              id="Mars"
              className={
                activeTab === "Mars"
                    ? "tabcontent tabcontent-active"
                  : "tabcontent"
              }
            >
              <h3>Mars</h3>
              <p>
                Fourth planet by distance from Sun and  seventh largest in Solar system; mass of the planet is 10.7% of mass of  Earth. It is named after Mars, ancient Roman god of war, corresponding to ancient Greek Ares.  Mars is also called "red planet" because of reddish tint of surface, given to it by the mineral maghemite - γ—iron(III) oxide.
              </p>
            </div>
            <div
              id="Neptune"
              className={
                activeTab === "Neptune"
                  ? "tabcontent tabcontent-active"
                  : "tabcontent"
              }
            >
              <h3>Neptune</h3>
              <p>
                Eighth and farthest planet of Solar system from  Sun. Its mass exceeds  mass of  Earth by 17.2 times and is third among  planets of  Solar system, and Neptune ranks fourth in equatorial diameter, surpassing  Earth by 3.9 times. Planet is named after Neptune,  Roman god of  seas
              </p>
            </div>
            <div
              id="Venus"
              className={
                activeTab === "Venus"
                  ? "tabcontent tabcontent-active"
                  : "tabcontent"
              }
            >
              <h3>Venus</h3>
              <p>
                Second most distant planet from Sun and sixth largest planet in Solar system, along with Mercury, Earth and Mars, belongs to family of terrestrial planets. Named after ancient Roman goddess of love Venus. By a number of characteristics — for example, by mass and size — Venus is considered the "sister" of the Earth.
              </p>
            </div>
            <div
              id="Mercury"
              className={
                activeTab === "Mercury"
                  ? "tabcontent tabcontent-active"
                  : "tabcontent"
              }
            >
              <h3>Mercury</h3>
              <p>
                Smallest planet in Solar system and closest to Sun. It is named after ancient Roman god of commerce — fast Mercury, because it moves through sky faster than other planets. Its period of revolution around Sun is shortest among all planets of Solar System.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
