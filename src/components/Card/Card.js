import React from "react";
// import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import moment from "moment";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ repos }) => {
  return (
    <>
      {repos.map((item) => {
        let date = moment(item.created_at).format("MMMM Do YYYY, h:mm:ss a");
        const repoName = item.name;
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
            <div className="stars">
              <span>Stars:</span>
              <p> {item.stargazers_count}</p>

              <span>Watchers:</span>
              <p> {item.watchers_count}</p>
            </div>
            <p>The repository was created on {date} by OscarMesh </p>
            <Link to={`/repos/${repoName}`}>
              <span>
                View Repo
                <Icon icon="ion:logo-github" color="#A6A6A6" />
              </span>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Card;
