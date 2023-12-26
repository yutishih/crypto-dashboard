import React from "react";
// import "./page.scss";

const data = [
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

function Navigation() {
  return (
    <div className="navigation">
      <div>
        <img src="/next.svg" />
        <ul>
          {data.map((v, id) => (
            <li key={id}>
              <a href={v.link}>{v.page}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
