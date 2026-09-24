import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Help.css";

const categories = [
  {
    key: "account",
    icon: "◎",
  },
  {
    key: "wallet",
    icon: "◈",
  },
  {
    key: "payments",
    icon: "↗",
  },
  {
    key: "security",
    icon: "✓",
  },
];

const faqs = [
  {
    key: "wallet",
    category: "wallet",
  },
  {
    key: "recharge",
    category: "payments",
  },
  {
    key: "bills",
    category: "payments",
  },
  {
    key: "transaction",
    category: "payments",
  },
  {
    key: "security",
    category: "security",
  },
  {
    key: "account",
    category: "account",
  },
];

function Help() {
  const { t } = useTranslation();

  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;

    const question = t(`helpPage.faqs.${faq.key}.question`);
    const answer = t(`helpPage.faqs.${faq.key}.answer`);

    const searchValue = search.toLowerCase().trim();

    const matchesSearch =
      !searchValue ||
      question.toLowerCase().includes(searchValue) ||
      answer.toLowerCase().includes(searchValue);

    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (key) => {
    setOpenFaq((current) => (current === key ? null : key));
  };

  return (
    <main className="help-page">
      <section className="help-page__hero">
        <div className="container">
          <div className="help-page__hero-content">
            <span className="help-page__eyebrow">
              <span></span>
              {t("helpPage.eyebrow")}
            </span>

            <h1>
              {t("helpPage.title")}
              <strong>{t("helpPage.highlight")}</strong>
            </h1>

            <p>{t("helpPage.description")}</p>

            <div className="help-search">
              <span className="help-search__icon">⌕</span>

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={t("helpPage.searchPlaceholder")}
                aria-label={t("helpPage.searchPlaceholder")}
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label={t("helpPage.clearSearch")}
                >
                  ×
                </button>
              )}
            </div>

            <span className="help-page__search-hint">
              {t("helpPage.searchHint")}
            </span>
          </div>
        </div>
      </section>

      <section className="help-page__content">
        <div className="container">
          <div className="help-categories">
            <button
              type="button"
              className={`help-category ${
                activeCategory === "all" ? "active" : ""
              }`}
              onClick={() => setActiveCategory("all")}
            >
              <span className="help-category__icon">⌕</span>
              <span>{t("helpPage.categories.all")}</span>
            </button>

            {categories.map((category) => (
              <button
                type="button"
                className={`help-category ${
                  activeCategory === category.key ? "active" : ""
                }`}
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
              >
                <span className="help-category__icon">{category.icon}</span>

                <span>{t(`helpPage.categories.${category.key}`)}</span>
              </button>
            ))}
          </div>

          <div className="help-faq-section">
            <div className="help-section-heading">
              <div>
                <span>{t("helpPage.faqEyebrow")}</span>
                <h2>{t("helpPage.faqTitle")}</h2>
              </div>

              <span className="help-results">
                {filteredFaqs.length} {t("helpPage.results")}
              </span>
            </div>

            <div className="help-faq-list">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaq === faq.key;

                return (
                  <article
                    className={`help-faq ${isOpen ? "is-open" : ""}`}
                    key={faq.key}
                  >
                    <button
                      type="button"
                      className="help-faq__question"
                      onClick={() => toggleFaq(faq.key)}
                      aria-expanded={isOpen}
                    >
                      <span>{t(`helpPage.faqs.${faq.key}.question`)}</span>

                      <span className="help-faq__toggle">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div className="help-faq__answer">
                      <p>{t(`helpPage.faqs.${faq.key}.answer`)}</p>
                    </div>
                  </article>
                );
              })}

              {filteredFaqs.length === 0 && (
                <div className="help-empty">
                  <div className="help-empty__icon">⌕</div>
                  <h3>{t("helpPage.empty.title")}</h3>
                  <p>{t("helpPage.empty.description")}</p>

                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setActiveCategory("all");
                    }}
                  >
                    {t("helpPage.empty.button")}
                  </button>
                </div>
              )}
            </div>
          </div>

          <section className="help-contact">
            <div className="help-contact__content">
              <span>{t("helpPage.contact.eyebrow")}</span>

              <h2>{t("helpPage.contact.title")}</h2>

              <p>{t("helpPage.contact.description")}</p>

              <Link to="/contact" className="help-contact__button">
                {t("helpPage.contact.button")}
                <span>←</span>
              </Link>
            </div>

            <div className="help-contact__visual">
              <div className="help-contact__circle">?</div>

              <div className="help-contact__mini-card">
                <span></span>
                {t("helpPage.contact.available")}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Help;
