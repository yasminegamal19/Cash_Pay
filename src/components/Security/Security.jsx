import { useTranslation } from "react-i18next";
import "./Security.css";

const securityItems = [
  {
    key: "data",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3L19 6V11C19 15.5 16.2 19.1 12 21C7.8 19.1 5 15.5 5 11V6L12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9 12L11 14L15 10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "transactions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M5 7H19M5 12H19M5 17H13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="17" cy="17" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M17 15.5V17L18 18"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    key: "privacy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect
          x="5"
          y="10"
          width="14"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8 10V7.5C8 5.29 9.79 3.5 12 3.5C14.21 3.5 16 5.29 16 7.5V10"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="15" r="1.3" fill="currentColor" />
      </svg>
    ),
  },
];

function Security() {
  const { t } = useTranslation();

  return (
    <section className="security" id="security">
      <div className="security__container">
        <div className="security__visual">
          <div className="security__glow"></div>

          <div className="security-dashboard">
            <div className="security-dashboard__top">
              <div>
                <span>Cash Pay</span>
                <strong>{t("security.status.title")}</strong>
              </div>

              <div className="security-dashboard__shield">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3L19 6V11C19 15.5 16.2 19.1 12 21C7.8 19.1 5 15.5 5 11V6L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="security-dashboard__line"></div>

            <div className="security-dashboard__status">
              <span className="status-dot"></span>

              <div>
                <strong>{t("security.status.subtitle")}</strong>
                <span>Cash Pay Security</span>
              </div>

              <span className="status-check">✓</span>
            </div>

            <div className="security-dashboard__bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="security-dashboard__footer">
              <span>SECURE</span>
              <span>● ● ●</span>
            </div>
          </div>

          <div className="security__floating security__floating--top">
            <div className="security__floating-icon">✓</div>

            <div>
              <strong>Protected</strong>
              <span>Secure connection</span>
            </div>
          </div>

          <div className="security__floating security__floating--bottom">
            <span>256</span>
            <div>
              <strong>Data Protection</strong>
              <span>Encrypted connection</span>
            </div>
          </div>
        </div>

        <div className="security__content">
          <span className="security__eyebrow">
            <span></span>
            {t("security.eyebrow")}
          </span>

          <h2>
            {t("security.title")}
            <br />
            <strong>{t("security.highlight")}</strong>
          </h2>

          <p className="security__description">{t("security.description")}</p>

          <div className="security__items">
            {securityItems.map((item) => (
              <article className="security-item" key={item.key}>
                <div className="security-item__icon">{item.icon}</div>

                <div>
                  <h3>{t(`security.items.${item.key}.title`)}</h3>

                  <p>{t(`security.items.${item.key}.description`)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Security;
