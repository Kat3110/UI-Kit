import React, { useState, useEffect } from "react";
import "./tab.css";

export default function Tab() {
  const [activeTab, setActiveTab] = useState("London");

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
                activeTab === "London"
                  ? "tablinks tablinks-active active"
                  : "tablinks"
              }
              data-country="London"
            >
              <span>London</span>
            </button>
            <button
              className={
                activeTab === "Paris" ? "tablinks tablinks-active" : "tablinks"
              }
              data-country="Paris"
            >
              <span>Paris</span>
            </button>
            <button
              className={
                activeTab === "Barcelona"
                  ? "tablinks tablinks-active"
                  : "tablinks"
              }
              data-country="Barcelona"
            >
              <span>Barcelona</span>
            </button>
            <button
              className={
                activeTab === "Madrid" ? "tablinks tablinks-active" : "tablinks"
              }
              data-country="Madrid"
            >
              <span>Madrid</span>
            </button>
          </div>

          <div className="wrapper-tabcontent">
            <div
              id="London"
              className={
                activeTab === "London"
                    ? "tabcontent tabcontent-active"
                  : "tabcontent"
              }
            >
              <h3>London</h3>
              <p>
                London is the capital of Great Britain. It is one of the greatest
                cities in the world. It is an important business and financial
                centre. It is an intellectual centre, too. Everywhere in London,
                there are open spaces: Hyde Park and Regent Park are the largest.
                  The City is the oldest part of London.
              </p>
            </div>
            <div
              id="Paris"
              className={
                activeTab === "Paris"
                  ? "tabcontent tabcontent-active"
                  : "tabcontent"
              }
            >
              <h3>Paris</h3>
              <p>
                Paris is in the Paris department of the Paris-Isle-of-France
                region. The French historic, political and economic capital, with
                a population of only 2.5 million is located in the northern part
                of France. One of the most beautiful cities in the world, home
                to historical monuments such as Notre Dame, the Eiffel tower
                (320m), Bastille, Louvre and many more.
              </p>
            </div>
            <div
              id="Barcelona"
              className={
                activeTab === "Barcelona"
                  ? "tabcontent tabcontent-active"
                  : "tabcontent"
              }
            >
              <h3>Barcelona</h3>
              <p>
                Barcelona has been an urban laboratory since the high Medieval
                Ages. A place of diversity, a backdrop
                for a multiplicity of social and cultural processes on multiple scales that reflect
                different ways of constructing the future, a city with a long
                experience of urban life and social innovations.
              </p>
            </div>
            <div
              id="Madrid"
              className={
                activeTab === "Madrid"
                  ? "tabcontent tabcontent-active"
                  : "tabcontent"
              }
            >
              <h3>Madrid</h3>
              <p>
                Madrid is in the middle of Spain, in the Community of Madrid.
                The Community is a large area that includes the city as well as
                small towns and villages outside the city. Seven million people live
                in the Community. More than 3 million live in the city itself.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
