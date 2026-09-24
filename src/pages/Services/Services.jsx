import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    key: "recharge",
    type: "mobile",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect
          x="6"
          y="3"
          width="12"
          height="18"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9 6H15M10 18H14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    key: "electricity",
    type: "electricity",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M13.5 2L5 13H11L10.5 22L19 10H13L13.5 2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "water",
    type: "water",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3C12 3 6 9.2 6 13.5C6 17.1 8.7 20 12 20C15.3 20 18 17.1 18 13.5C18 9.2 12 3 12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9.5 14.5C9.8 16 10.6 16.8 12 17"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    key: "gas",
    type: "gas",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3C12 3 16 7 16 11C16 12.2 15.6 13.2 15 14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M9 7C9 7 6 10.5 6 14C6 17.3 8.7 20 12 20C15.3 20 18 17.3 18 14C18 11.5 16.5 9.5 15 8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M10 15.5C10 14.4 11 13.4 12 12.2C13 13.4 14 14.4 14 15.5C14 16.6 13.1 17.5 12 17.5C10.9 17.5 10 16.6 10 15.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
  {
    key: "internet",
    type: "internet",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M4 9C8.4 5 15.6 5 20 9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M7 12C9.8 9.5 14.2 9.5 17 12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M10 15C11.1 14 12.9 14 14 15"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="18" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "wallet",
    type: "wallet",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M4 7.5C4 6.1 5.1 5 6.5 5H18C19.1 5 20 5.9 20 7V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V7.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M4 8H18" stroke="currentColor" strokeWidth="1.8" />
        <path d="M15 13H20" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="15" cy="13" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

function Services() {
  const { t } = useTranslation();

  return (
    <main className="services-page">
      <section className="services-page__hero">
        <div className="container">
          <span className="services-page__eyebrow">
            <span />
            {t("servicesPage.eyebrow")}
          </span>

          <h1>
            {t("servicesPage.title")}
            <strong>{t("servicesPage.highlight")}</strong>
          </h1>

          <p>{t("servicesPage.description")}</p>
        </div>
      </section>

      <section className="services-page__list">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <article
                className={`service-large-card service-large-card--${service.type}`}
                key={service.key}
              >
                <div className="service-large-card__top">
                  <div className="service-large-card__icon">{service.icon}</div>

                  <span className="service-large-card__arrow">←</span>
                </div>

                <div className="service-large-card__content">
                  <span className="service-large-card__label">
                    {t(`servicesPage.items.${service.key}.label`)}
                  </span>

                  <h2>{t(`servicesPage.items.${service.key}.title`)}</h2>

                  <p>{t(`servicesPage.items.${service.key}.description`)}</p>
                </div>

                <div className="service-large-card__footer">
                  <span>{t("servicesPage.available")}</span>

                  <span className="service-large-card__check">✓</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-page__cta">
        <div className="container">
          <div className="services-page__cta-card">
            <div>
              <span className="services-page__cta-label">
                {t("servicesPage.cta.label")}
              </span>

              <h2>{t("servicesPage.cta.title")}</h2>

              <p>{t("servicesPage.cta.description")}</p>

              <Link to="/wallet" className="services-page__cta-button">
                {t("servicesPage.cta.button")}
                <span>←</span>
              </Link>
            </div>

            <div className="services-page__cta-visual">
              <div className="services-page__wallet-card">
                <span>{t("features.wallet.balance")}</span>

                <strong>
                  12,450.00
                  <small> {t("common.currency")}</small>
                </strong>

                <div>
                  <span>{t("features.wallet.name")}</span>
                  <span>{t("features.wallet.lastDigits")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
