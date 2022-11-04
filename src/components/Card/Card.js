import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="head">
        <img src="" alt="" />
        <span>
          <h3>OscarMesh</h3>
          <p>Title of Repo</p>
        </span>
      </div>
      <p>The repository was created on 20th June 2022 by OscarMesh </p>

      <button>View Repo</button>
    </div>
  );
};

export default Card;
