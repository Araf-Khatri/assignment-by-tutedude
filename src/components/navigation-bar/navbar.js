import "./navbar.css";
import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import Section from "../section";

const Navbar = ({ children }) => {
  const url = useLocation();
  const isUrlPathNameFriendsRefer = url.pathname === "/friends-referred";
  return (
    <Fragment>
      <div
        className={`nav-bar--section${
          !isUrlPathNameFriendsRefer ? " nb--home" : ""
        }`}
      >
        <nav className="navbar">
          <img className="logo" src="./imgs/tutedude.png" alt="tutedude logo" />
          <button className="profile--btn navbar-one">
            <p>ProfileName</p>
            <img src="/imgs/svgs/chevron-down.svg" alt="icon" />
          </button>
          <div className="navbar-two">
            <p>My Assignment</p>
            <p>Chat with Mentor</p>
            <div className="user-profile">
              <ion-icon name="person-circle-sharp"></ion-icon>
              <p>ProfileName</p>
              <ion-icon name="chevron-down-sharp"></ion-icon>
            </div>
          </div>
        </nav>
        {/* <nav className="navbar">
          <img className="logo" src="./imgs/tutedude.png" alt="tutedude logo" />

        </nav> */}
        <div
          className={`navigation-bar ${
            isUrlPathNameFriendsRefer
              ? "navigation-bar--referral "
              : "navigation-bar--home "
          } `}
        >
          <span>UI/UX</span>
          <ion-icon name="chevron-forward-sharp"></ion-icon>
          <span>Refer & Earn</span>
          {isUrlPathNameFriendsRefer && (
            <Fragment>
              <ion-icon name="chevron-forward-sharp"></ion-icon>
              <span>Friends Referred</span>
            </Fragment>
          )}
        </div>
        {isUrlPathNameFriendsRefer && (
          <Link to={"/"} className="go-back section">
            <ion-icon name="arrow-back-sharp"></ion-icon>
            <p>go back</p>
          </Link>
        )}
      </div>
      {children}
      <footer>
        <Section className="footer ">
          {!isUrlPathNameFriendsRefer && (
            <Link to={"/friends-referred"}>Friends Who Enrolled</Link>
          )}
          <Link to={"/"}>Terms & Conditions</Link>
        </Section>
      </footer>
    </Fragment>
  );
};

export default Navbar;
