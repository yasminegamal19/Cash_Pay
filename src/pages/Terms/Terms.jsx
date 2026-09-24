import { useEffect, useState } from "react";
import { FileCheck2, ChevronRight, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

import "../LegalPages/LegalPages.css";

const SECTION_IDS = [
  "terms-intro",
  "terms-account",
  "terms-services",
  "terms-transactions",
  "terms-prohibited",
  "terms-availability",
  "terms-changes",
  "terms-contact",
];

export default function Terms() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState(SECTION_IDS[0]);

  const sections = SECTION_IDS.map((id, index) => ({
    id,
    number: String(index + 1).padStart(2, "0"),
    title: t(`terms.sections.${id}.title`),
    content: t(`terms.sections.${id}.content`, {
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
              <FileCheck2 size={25} />
            </div>

            <div>
              <span className="legal-hero__eyebrow">
                {t("footer.legal.terms")}
              </span>

              <h1>{t("terms.hero.title")}</h1>

              <p>{t("terms.hero.description")}</p>
            </div>
          </div>

          <div className="legal-hero__meta">
            <div>
              <span>{t("terms.meta.documentType.label")}</span>
              <strong>{t("terms.meta.documentType.value")}</strong>
            </div>

            <div>
              <span>{t("terms.meta.lastUpdated.label")}</span>
              <strong>{t("terms.meta.lastUpdated.value")}</strong>
            </div>

            <div>
              <span>{t("terms.meta.status.label")}</span>
              <strong className="is-active">
                {t("terms.meta.status.value")}
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
                  <span>{t("terms.contentsTitle")}</span>
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

                <h2>{t("terms.document.title")}</h2>

                <p>{t("terms.document.description")}</p>
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
