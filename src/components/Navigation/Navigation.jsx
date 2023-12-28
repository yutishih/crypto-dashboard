// Navigation.jsx
"use client";
import React, { useState } from "react";
import "./Navigation.scss";

const asideData = [
  {
    page: "Bitcoin",
    link: "/bitcoin",
  },
  {
    page: "Ethereum",
    link: "/ethereum",
  },
  {
    page: "Litecoin",
    link: "/litecoin",
  },
  {
    page: "Dogecoin",
    link: "/dogecoin",
  },
];

const topData = [
  {
    icon: "magnifying-glass",
    link: "/",
  },
  {
    icon: "globe",
    link: "/",
  },
  {
    icon: "moon",
    link: "/",
  },
  {
    icon: "bell",
    link: "/",
  },
];

function Navigation() {
  const [toggleAside, setToggleAside] = useState(true);

  const asideToggler = () => {
    setToggleAside(!toggleAside);
  };

  return (
    <div className="navigation">
      <div className="top-bar">
        <div className="top-bar-flex">
          <div
            className={`aside-bar-toggle ${toggleAside ? "open" : ""}`}
            onClick={asideToggler}
          >
            <i className="fa-solid fa-list"></i>
          </div>
          <ul>
            {topData.map((v1, v1Index) => (
              <li key={v1Index}>
                <a href={v1.link}>
                  <i className={`fa-solid fa-${v1.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`aside-bar ${toggleAside ? "open" : ""}`}>
        <div className={`logo ${toggleAside ? "" : "hide"}`}>
          <img src="/next.svg" />
        </div>
        <div className="aside-menu">
          <p className={`list-title ${toggleAside ? "" : "hide"}`}>MAIN</p>
          <ul className={`${toggleAside ? "" : "hide"}`}>
            {asideData.map((v2, v2Index) => (
              <li key={v2Index}>
                <a href={v2.link}>{v2.page}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
