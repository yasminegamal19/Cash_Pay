import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Download, Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import "./Navbar.css";

const NAV_ITEMS = [
  {
    key: "home",
    href: "/",
    type: "route",
    section: "top",
  },
  {
    key: "services",
    href: "/#services",
    type: "anchor",
    section: "services",
  },
  {
    key: "features",
    href: "/#features",
    type: "anchor",
    section: "features",
  },
  {
    key: "howItWorks",
    href: "/#how-it-works",
    type: "anchor",
    section: "how-it-works",
  },
  {
    key: "security",
    href: "/#security",
    type: "anchor",
    section: "security",
  },
  {
    key: "faq",
    href: "/#faq",
    type: "anchor",
    section: "faq",
  },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  const isArabic = i18n.language === "ar";

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => item.section).filter(Boolean);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      let currentSection = "top";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) return;

        const sectionTop = section.offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const changeLanguage = () => {
    const nextLanguage = isArabic ? "en" : "ar";

    i18n.changeLanguage(nextLanguage);

    document.documentElement.lang = nextLanguage;
    document.documentElement.dir = nextLanguage === "ar" ? "rtl" : "ltr";

    setMenuOpen(false);
  };


  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link
          to="/"
          className="navbar__logo"
          aria-label="Cash Pay"
          onClick={() => {
            setActiveSection("top");
            closeMenu();
          }}
        >
          <img src="/src/assets/Cash pay Logo dark.png" alt="Cash Pay" />
        </Link>

        <nav className="navbar__nav">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.section;

            if (item.type === "route") {
              return (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`navbar__link ${
                    isActive ? "navbar__link--active" : ""
                  }`}
                  onClick={() => setActiveSection(item.section)}
                >
                  {t(`navbar.${item.key}`)}
                </Link>
              );
            }

            return (
              <a
                key={item.key}
                href={item.href}
                className={`navbar__link ${
                  isActive ? "navbar__link--active" : ""
                }`}
                onClick={() => {
                  setActiveSection(item.section);
                  closeMenu();
                }}
              >
                {t(`navbar.${item.key}`)}
              </a>
            );
          })}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__language"
            onClick={changeLanguage}
          >
            <Globe size={16} />
            <span>{t("navbar.language")}</span>
          </button>

          <a href="/#download" className="navbar__cta">
            <Download size={16} />
            <span>{t("navbar.downloadApp")}</span>
          </a>
        </div>

        <button
          type="button"
          className="navbar__menu-button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      <div
        className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}
      >
        <div className="container navbar__mobile-inner">
          <nav className="navbar__mobile-nav">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.section;

              if (item.type === "route") {
                return (
                  <Link
                    key={item.key}
                    to={item.href}
                    className={`navbar__mobile-link ${
                      isActive ? "navbar__mobile-link--active" : ""
                    }`}
                    onClick={() => {
                      setActiveSection(item.section);
                      closeMenu();
                    }}
                  >
                    {t(`navbar.${item.key}`)}
                  </Link>
                );
              }

              return (
                <a
                  key={item.key}
                  href={item.href}
                  className={`navbar__mobile-link ${
                    isActive ? "navbar__mobile-link--active" : ""
                  }`}
                  onClick={() => {
                    setActiveSection(item.section);
                    closeMenu();
                  }}
                >
                  {t(`navbar.${item.key}`)}
                </a>
              );
            })}
          </nav>

          <div className="navbar__mobile-actions">
            <button
              type="button"
              className="navbar__mobile-language"
              onClick={changeLanguage}
            >
              <Globe size={17} />
              <span>{t("navbar.language")}</span>
            </button>

            <a
              href="/#download"
              className="navbar__mobile-cta"
              onClick={closeMenu}
            >
              <Download size={17} />
              <span>{t("navbar.downloadApp")}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
