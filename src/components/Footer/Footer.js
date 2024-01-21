import Github from "../../assets/icons/Github";
import LinkedIn from "../../assets/icons/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <h4 style={{ paddingRight: '8px' }}>Come find me uwu</h4>
        <div className="footer__socials">
          <a href="https://github.com/lizisawizard" style={{ paddingRight: '4px' }}>
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/liz-tremblay5039">
            <LinkedIn />
          </a>
        </div>
      </div>
      {/* <div className="footer__bar"></div> */}
    </div>
  );
};

export default Footer;
