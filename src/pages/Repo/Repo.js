import { Icon } from "@iconify/react";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import SideBar from "../../components/SideBar/Sidebar";
import "./Repo.css";

const Repo = () => {
  const [repo, setRepo] = useState([]);
  const { repoName } = useParams();
  console.log(repoName);
  let date = moment(repo.created_at).format("MMMM Do YYYY, h:mm:ss a");
  let date2 = moment(repo.updated_at).format("MMMM Do YYYY, h:mm:ss a");

  useEffect(() => {
    fetch(`https://api.github.com/repos/OscarMesh/${repoName}`)
      .then((res) => res.json())
      .then((data) => setRepo(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Helmet>
        <title>Repo</title>
        <meta name="description" content="Repo" />
        <link rel="canonical" href={`repos/${repoName}`} />
      </Helmet>
      <div className="repo">
        <SideBar />
        <div className="content">
          <div className="header">
            <span>
              <Icon icon="logos:google-developers" width={45} />
              <h2>OscarMesh</h2>
            </span>
          </div>
          <div className="body">
            <div className="head">
              <img
                src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png"
                alt="oscarmesh"
              />
              <h3>{repo?.owner?.login}</h3>
              <span className="name">
                <span>Repository name:</span>
                <p> {repo.name}</p>
              </span>
            </div>
            <div className="stars">
              <span>Stars:</span>
              <p>{repo.stargazers_count}</p>

              <span>Watchers:</span>
              <p>{repo.watchers}</p>
            </div>
            <p className="desc">
              The repository was created on {date} by OscarMesh and was updated
              on {date2} by OscarMesh{" "}
            </p>

            <a href={repo.html_url} target="_blank" rel="noreferrer">
              <span>
                View Repo on github
                <Icon icon="ion:logo-github" color="#A6A6A6" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Repo;
