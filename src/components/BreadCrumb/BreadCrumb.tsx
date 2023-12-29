import React from "react";
import "./BreadCrumb.scss";

function BreadCrumb() {
  return (
    <div className="breadcrumb-container">
      <div className="item-space-between">
        <div className="page-title">Dashboard</div>
        <div className="page-title">Dashboard / Home</div>
      </div>
    </div>
  );
}
export default BreadCrumb;
