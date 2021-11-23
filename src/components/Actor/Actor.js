import React from "react";
import "./Actor.css";

export const Actor = ({ name, as }) => {
  return (
    <div className="actor">
      <span className="bold">{name}</span> <br />
      <span>as {as}</span>
    </div>
  );
};
