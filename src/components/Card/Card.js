import React from "react";
import { Link } from "react-router-dom";

import moment from "moment";
import "./Card.css";

const Card = ({ repos }) => {
  return (
    <>
      {repos.map((item) => {
        let date = moment(item.created_at).format("MMMM Do YYYY, h:mm:ss a");
        return (
          <div className="card" key={item.id}>
            <div className="head">
              <img
                src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png"
                alt="oscarmesh"
              />
              <span>
                <h3>OscarMesh</h3>
                <p>{item.name}</p>
              </span>
            </div>
            <p>The repository was created on {date} by OscarMesh </p>
            <Link to="/">
              <span>View Repo</span>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Card;
