import "../../style/app.scss";
import { NavLink } from "react-router-dom";
import Resume from "../../assets/Liz-Tremblay-Resume-2024.zip"

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink
        to=""
        className={(e) =>
          e.isActive
            ? "navigation__link-active"
            : "navigation__link-pending"
        }
      >
        <div className="navigation__logo" />
      </NavLink>
      <div className="navigation__links">
        <NavLink
          to="about"
          className={(e) =>
            e.isActive
              ? "navigation__link-active"
              : "navigation__link-pending"
          }
        >
          About
        </NavLink>
        <NavLink
        to="blog"
          className={(e) =>
            e.isActive
              ? "navigation__link-active"
              : "navigation__link-pending"
          }
        >
          Blog
        </NavLink>
        <a className="navigation__link-pending" href={Resume} download>Resume</a>
      </div>
    </div>
  );
};
export default Navigation;
