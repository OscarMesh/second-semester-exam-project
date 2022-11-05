import React, { useEffect, useState } from "react";
import "./Repos.css";
import { Icon } from "@iconify/react";
import axios from "axios";
import SideBar from "../../components/SideBar/Sidebar";
import Card from "../../components/Card/Card";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(4);
  const [pageNumberLimit, setpageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(repos.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = repos.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "https://api.github.com/users/OscarMesh/repos"
      );
      console.log(data);
      setRepos(data);
    };

    getData();
  }, []);

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  // const handleLoadMore = () => {
  //   setitemsPerPage(itemsPerPage + 5);
  // };

  return (
    <div className="repos">
      <SideBar />
      <div className="content">
        <div className="header">
          <span>
            <Icon icon="logos:google-developers" width={45} />
            <h2>OscarMesh</h2>
          </span>
          <div className="search">
            <Icon icon="eva:search-fill" width={24} height={24} />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="repoList">
          <Card repos={currentItems} />
        </div>
        <ul className="pageNumbers">
          <li>
            <span
              onClick={handlePrevbtn}
              disabled={currentPage == pages[0] ? true : false}
            >
              Prev
            </span>
          </li>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}

          <li>
            <span
              onClick={handleNextbtn}
              disabled={currentPage == pages[pages.length - 1] ? true : false}
            >
              Next
            </span>
          </li>
        </ul>
        {/* <button onClick={handleLoadMore} className="loadmore">
          Load More
        </button> */}
      </div>
    </div>
  );
};

export default Repos;
