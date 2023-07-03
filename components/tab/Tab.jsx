import React, {useState, useEffect} from "react";
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
                Fourth planet by&nbsp;distance from Sun and seventh largest in&nbsp;Solar system; mass of&nbsp;the
                planet is&nbsp;10.7% of&nbsp;mass of&nbsp;Earth. It&nbsp;is&nbsp;named after Mars, ancient Roman god
                of&nbsp;war, corresponding to&nbsp;ancient Greek Ares. Mars is&nbsp;also called &laquo;red
                planet&raquo; because of&nbsp;reddish tint of&nbsp;surface, given to&nbsp;it&nbsp;by&nbsp;the mineral
                maghemite&nbsp;&mdash; &gamma;&mdash;iron(III) oxide.</p>
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
                Eighth and farthest planet of&nbsp;Solar system from Sun. Its mass exceeds mass of&nbsp;Earth
                by&nbsp;17.2 times and is&nbsp;third among planets of&nbsp;Solar system, and Neptune ranks fourth
                in&nbsp;equatorial diameter, surpassing Earth by&nbsp;3.9&nbsp;times. Planet is&nbsp;named after
                Neptune, Roman god of&nbsp;seas</p>
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
                Second most distant planet from Sun and sixth largest planet in&nbsp;Solar system, along with Mercury,
                Earth and Mars, belongs to&nbsp;family of&nbsp;terrestrial planets. Named after ancient Roman goddess
                of&nbsp;love Venus. By&nbsp;a&nbsp;number of&nbsp;characteristics&nbsp;&mdash; for example, by&nbsp;mass
                and size&nbsp;&mdash; Venus is&nbsp;considered the &laquo;sister&raquo; of&nbsp;the Earth.</p>
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
                Smallest planet in&nbsp;Solar system and closest to&nbsp;Sun. It&nbsp;is&nbsp;named after ancient Roman
                god of&nbsp;commerce&nbsp;&mdash; fast Mercury, because it&nbsp;moves through sky faster than other
                planets. Its period of&nbsp;revolution around Sun is&nbsp;shortest among all planets of&nbsp;Solar
                System.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
