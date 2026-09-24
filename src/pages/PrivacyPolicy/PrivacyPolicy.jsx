import { useEffect, useState } from "react";
import { ShieldCheck, ChevronRight, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

import "../LegalPages/LegalPages.css";

const SECTION_IDS = [
  "privacy-intro",
  "privacy-data",
  "privacy-use",
  "privacy-security",
  "privacy-sharing",
  "privacy-rights",
  "privacy-contact",
];

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState(SECTION_IDS[0]);

  const sections = SECTION_IDS.map((id, index) => ({
    id,
    number: String(index + 1).padStart(2, "0"),
    title: t(`privacyPolicy.sections.${id}.title`),
    content: t(`privacyPolicy.sections.${id}.content`, {
      returnObjects: true,
    }),
  }));

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      let current = SECTION_IDS[0];

      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (!element) return;

        if (scrollPosition >= element.offsetTop) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <div className="legal-hero__content">
            <div className="legal-hero__icon">
              <ShieldCheck size={25} />
            </div>

            <div>
              <span className="legal-hero__eyebrow">
                {t("footer.legal.privacy")}
              </span>

              <h1>{t("privacyPolicy.hero.title")}</h1>

              <p>{t("privacyPolicy.hero.description")}</p>
            </div>
          </div>

          <div className="legal-hero__meta">
            <div>
              <span>{t("privacyPolicy.meta.documentType.label")}</span>
              <strong>{t("privacyPolicy.meta.documentType.value")}</strong>
            </div>

            <div>
              <span>{t("privacyPolicy.meta.lastUpdated.label")}</span>
              <strong>{t("privacyPolicy.meta.lastUpdated.value")}</strong>
            </div>

            <div>
              <span>{t("privacyPolicy.meta.status.label")}</span>
              <strong className="is-active">
                {t("privacyPolicy.meta.status.value")}
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className="legal-layout">
            <aside className="legal-sidebar">
              <div className="legal-sidebar__inner">
                <div className="legal-sidebar__title">
                  <FileText size={17} />
                  <span>{t("privacyPolicy.contentsTitle")}</span>
                </div>

                <nav>
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      type="button"
                      className={
                        activeSection === section.id ? "is-active" : ""
                      }
                      onClick={() => scrollToSection(section.id)}
                    >
                      <span>{section.number}</span>

                      <strong>{section.title}</strong>

                      <ChevronRight size={15} />
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="legal-document">
              <div className="legal-document__intro">
                <span>Cash Pay</span>

                <h2>{t("privacyPolicy.document.title")}</h2>

                <p>{t("privacyPolicy.document.description")}</p>
              </div>

              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="legal-section"
                >
                  <div className="legal-section__number">{section.number}</div>

                  <div className="legal-section__body">
                    <h3>{section.title}</h3>

                    {section.content.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
