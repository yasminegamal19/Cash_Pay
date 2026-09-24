import { useTranslation } from "react-i18next";
import "./Features.css";

const features = [
  {
    number: "01",
    key: "wallet",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M3 7.5C3 6.12 4.12 5 5.5 5H19C20.1 5 21 5.9 21 7V18C21 19.1 20.1 20 19 20H5.5C4.12 20 3 18.88 3 17.5V7.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M3 8H18.5C19.88 8 21 9.12 21 10.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M16 13H18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    key: "transactions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M6 3.5H18C19.1 3.5 20 4.4 20 5.5V20.5L17 18.5L14.5 20.5L12 18.5L9.5 20.5L7 18.5L4 20.5V5.5C4 4.4 4.9 3.5 6 3.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8 8H16M8 11.5H16M8 15H13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    key: "favorites",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M20.8 8.7C20.8 13.2 12 19 12 19C12 19 3.2 13.2 3.2 8.7C3.2 6.1 5.2 4.2 7.7 4.2C9.4 4.2 10.9 5.1 12 6.4C13.1 5.1 14.6 4.2 16.3 4.2C18.8 4.2 20.8 6.1 20.8 8.7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    key: "notifications",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M18 9C18 5.69 15.76 3.5 12 3.5C8.24 3.5 6 5.69 6 9C6 14 4 15 4 16.5H20C20 15 18 14 18 9Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M10 19C10.45 19.8 11.13 20.2 12 20.2C12.87 20.2 13.55 19.8 14 19"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

function Features() {
  const { t } = useTranslation();

  return (
    <section className="features" id="features">
      <div className="features__container">
        <div className="features__heading">
          <span className="features__eyebrow">
            <span />
            {t("features.eyebrow")}
          </span>

          <h2>
            {t("features.title")}
            <br />
            <span>{t("features.highlight")}</span>
          </h2>

          <p>{t("features.description")}</p>
        </div>

        <div className="features__content">
          <div className="features__visual">
            <div className="features__glow" />

            <div className="wallet-card">
              <div className="wallet-card__top">
                <div>
                  <span>{t("features.wallet.balance")}</span>

                  <strong>
                    2,850.00 <small>{t("common.currency")}</small>
                  </strong>
                </div>

                <div className="wallet-card__logo">CP</div>
              </div>

              <div className="wallet-card__bottom">
                <span>{t("features.wallet.name")}</span>

                <span className="wallet-card__dots">
                  {t("features.wallet.lastDigits")}
                </span>
              </div>
            </div>

            <div className="transaction-preview">
              <div className="transaction-preview__header">
                <span>{t("features.transactions.title")}</span>

                <button type="button">{t("common.viewAll")}</button>
              </div>

              <div className="transaction">
                <div className="transaction__icon transaction__icon--green">
                  ✓
                </div>

                <div className="transaction__info">
                  <strong>{t("features.transactions.recharge")}</strong>

                  <span>{t("features.transactions.today")}</span>
                </div>

                <strong className="transaction__amount">
                  +100 {t("common.currency")}
                </strong>
              </div>

              <div className="transaction">
                <div className="transaction__icon transaction__icon--blue">
                  ⚡
                </div>

                <div className="transaction__info">
                  <strong>{t("features.transactions.electricity")}</strong>

                  <span>{t("features.transactions.yesterdayEvening")}</span>
                </div>

                <strong className="transaction__amount transaction__amount--out">
                  -250 {t("common.currency")}
                </strong>
              </div>

              <div className="transaction">
                <div className="transaction__icon transaction__icon--purple">
                  ↗
                </div>

                <div className="transaction__info">
                  <strong>{t("features.transactions.walletTransfer")}</strong>

                  <span>{t("features.transactions.yesterdayAfternoon")}</span>
                </div>

                <strong className="transaction__amount">
                  +500 {t("common.currency")}
                </strong>
              </div>
            </div>

            <div className="features__floating">
              <span className="features__floating-icon">✓</span>

              <div>
                <strong>{t("features.transactions.successful")}</strong>

                <span>{t("features.transactions.completed")}</span>
              </div>
            </div>
          </div>

          <div className="features__list">
            {features.map((feature) => (
              <article className="feature-item" key={feature.number}>
                <div className="feature-item__number">{feature.number}</div>

                <div className="feature-item__icon">{feature.icon}</div>

                <div className="feature-item__content">
                  <h3>{t(`features.items.${feature.key}.title`)}</h3>

                  <p>{t(`features.items.${feature.key}.description`)}</p>
                </div>

                <span className="feature-item__arrow">←</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
