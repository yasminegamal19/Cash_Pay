import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Phone } from "lucide-react";
import cashPayLogo from "../../assets/Cash pay Logo dark.png";


import "./Footer.css";

function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    // لو إحنا بالفعل في الـ Home
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    navigate(`/#${id}`);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="Cash Pay">
              <img src={cashPayLogo} alt="Cash Pay" />
            </Link>

            <p>{t("footer.description")}</p>

            <div className="footer__socials">
              <a
                href="#"
                aria-label="Facebook"
                onClick={(event) => event.preventDefault()}
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                onClick={(event) => event.preventDefault()}
              >
                ◎
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                onClick={(event) => event.preventDefault()}
              >
                in
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h4>{t("footer.navigation.title")}</h4>

            <button type="button" onClick={() => scrollToSection("top")}>
              {t("navbar.home")}
            </button>

            <button type="button" onClick={() => scrollToSection("services")}>
              {t("navbar.services")}
            </button>

            <button type="button" onClick={() => scrollToSection("features")}>
              {t("navbar.features")}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("how-it-works")}
            >
              {t("navbar.howItWorks")}
            </button>

            <button type="button" onClick={() => scrollToSection("security")}>
              {t("navbar.security")}
            </button>

            <button type="button" onClick={() => scrollToSection("faq")}>
              {t("footer.navigation.faq")}
            </button>
          </div>

          <div className="footer__column">
            <h4>{t("footer.legal.title")}</h4>

            <Link to="/privacy-policy">{t("footer.legal.privacy")}</Link>

            <Link to="/terms-and-conditions">{t("footer.legal.terms")}</Link>
          </div>

          <div className="footer__column footer__contact">
            <h4>{t("footer.contact.title")}</h4>

            <a href="mailto:support@cashpay.com">
              <Mail size={17} />

              <span>support@cashpay.com</span>
            </a>

            <a href="tel:+201000000000">
              <Phone size={17} />

              <span>+20 100 000 0000</span>
            </a>

            <div>
              <MapPin size={17} />

              <span>{t("footer.contact.location")}</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Cash Pay. {t("footer.rights")}
          </p>

          <span>{t("footer.madeFor")}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
