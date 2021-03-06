import React from 'react'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NovelContext } from "../../novelContext";

const Header = (props) => {
  const currentUser = sessionStorage.getItem("user");
  // const [novelList, setnovelList, loading, setLoading] = useContext(NovelContext);

  const logout = () => {
    sessionStorage.removeItem("user/novel");
    window.location.replace("/login");
  };
  const showLoggedIn = () => {
    if (currentUser) {
      return (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/manage">
              Manage Novel
            </Link>
          </li>
          <li className="nav-item">
            <button onClick={logout} className="btn btn-danger">
              Logout
            </button>
          </li>
        </>
      );
    } else {
      return (
        <>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/main/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/main/signup">
              Signup
            </Link>
          </li> */}
        </>
      );
    }
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <div className="container-fluid">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      <a className="navbar-brand" href="#">
        BookWorms
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/main/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/main/viewNovel">
              ViewNovel
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/main/browseNovel">
              BrowseNovel
            </Link>
          </li>
           <li className="nav-item">
            <Link className="nav-link" to="/Main/novelDetail">
            NovelDetail
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/main/signup">
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Main/login">
              Login
            </Link>
          </li>

          {showLoggedIn()}
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form> */}
        </ul>
      </div>
    </div>
  </nav>
  )
}
export default Header;
