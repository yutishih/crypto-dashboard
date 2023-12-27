import React from "react";
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
  return (
    <div className="navigation">
      <div className="top-bar">
        <div>
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
      <div className="aside-bar">
        <div className="logo">
          <img src="/next.svg" />
        </div>
        <ul>
          {asideData.map((v2, v2Index) => (
            <li key={v2Index}>
              <a href={v2.link}>{v2.page}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
