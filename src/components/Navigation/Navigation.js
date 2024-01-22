import "../../style/app.scss";
import { NavLink } from "react-router-dom";
import Resume from "../../assets/Liz_Tremblay_Resume_2022.docx.zip"

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
        to="/"
          className={(e) =>
            e.isActive
              ? "navigation__link-active"
              : "navigation__link-pending"
          }
          style={{ textDecoration: "line-through" }}
        >
          Blog
        </NavLink>
        <a className="navigation__link-pending" href={Resume} download>Resume</a>
      </div>
    </div>
  );
};
export default Navigation;
