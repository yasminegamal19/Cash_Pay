import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Wallet.css";

const transactions = [
  {
    id: 1,
    type: "recharge",
    amount: "+250.00",
    date: "today",
  },
  {
    id: 2,
    type: "electricity",
    amount: "-180.50",
    date: "yesterday",
  },
  {
    id: 3,
    type: "transfer",
    amount: "-300.00",
    date: "yesterday",
  },
];

function Wallet() {
  const { t } = useTranslation();

  return (
    <main className="wallet-page">
      <section className="wallet-page__hero">
        <div className="container">
          <div className="wallet-page__hero-content">
            <span className="wallet-page__eyebrow">
              <span></span>
              {t("walletPage.eyebrow")}
            </span>

            <h1>
              {t("walletPage.title")}
              <strong>{t("walletPage.highlight")}</strong>
            </h1>

            <p>{t("walletPage.description")}</p>
          </div>
        </div>
      </section>

      <section className="wallet-dashboard">
        <div className="container">
          <div className="wallet-dashboard__grid">
            <div className="wallet-main-card">
              <div className="wallet-main-card__top">
                <div>
                  <span>{t("walletPage.balanceLabel")}</span>
                  <h2>
                    12,450.00
                    <small>{t("common.currency")}</small>
                  </h2>
                </div>

                <div className="wallet-main-card__icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5v-9Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M16 12h5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <circle cx="16" cy="12" r="1" fill="currentColor" />
                  </svg>
                </div>
              </div>

              <div className="wallet-main-card__bottom">
                <div>
                  <span>{t("walletPage.walletName")}</span>
                  <strong>{t("walletPage.lastDigits")}</strong>
                </div>

                <span className="wallet-main-card__status">
                  <i></i>
                  {t("walletPage.active")}
                </span>
              </div>
            </div>

            <div className="wallet-actions">
              <div className="wallet-actions__header">
                <span>{t("walletPage.quickActions")}</span>
                <span className="wallet-actions__line"></span>
              </div>

              <div className="wallet-actions__grid">
                <button type="button" className="wallet-action">
                  <span className="wallet-action__icon wallet-action__icon--blue">
                    ↑
                  </span>
                  <span>{t("walletPage.actions.topUp")}</span>
                </button>

                <button type="button" className="wallet-action">
                  <span className="wallet-action__icon wallet-action__icon--dark">
                    →
                  </span>
                  <span>{t("walletPage.actions.transfer")}</span>
                </button>

                <Link to="/services" className="wallet-action">
                  <span className="wallet-action__icon wallet-action__icon--light">
                    +
                  </span>
                  <span>{t("walletPage.actions.pay")}</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="wallet-stats">
            <div className="wallet-stat">
              <span className="wallet-stat__icon">↗</span>
              <div>
                <span>{t("walletPage.stats.incoming")}</span>
                <strong>8,250.00 {t("common.currency")}</strong>
              </div>
            </div>

            <div className="wallet-stat">
              <span className="wallet-stat__icon">↙</span>
              <div>
                <span>{t("walletPage.stats.outgoing")}</span>
                <strong>3,740.50 {t("common.currency")}</strong>
              </div>
            </div>

            <div className="wallet-stat">
              <span className="wallet-stat__icon">#</span>
              <div>
                <span>{t("walletPage.stats.transactions")}</span>
                <strong>24</strong>
              </div>
            </div>
          </div>

          <div className="wallet-transactions">
            <div className="wallet-section-heading">
              <div>
                <span>{t("walletPage.transactionsEyebrow")}</span>
                <h2>{t("walletPage.transactionsTitle")}</h2>
              </div>

              <Link to="/transactions">
                {t("common.viewAll")}
                <span>←</span>
              </Link>
            </div>

            <div className="wallet-transactions__list">
              {transactions.map((transaction) => (
                <div className="wallet-transaction" key={transaction.id}>
                  <div
                    className={`wallet-transaction__icon wallet-transaction__icon--${transaction.type}`}
                  >
                    {transaction.type === "recharge" && "↗"}
                    {transaction.type === "electricity" && "ϟ"}
                    {transaction.type === "transfer" && "→"}
                  </div>

                  <div className="wallet-transaction__info">
                    <strong>
                      {t(`walletPage.transactionTypes.${transaction.type}`)}
                    </strong>

                    <span>
                      {t(`walletPage.transactionDates.${transaction.date}`)}
                    </span>
                  </div>

                  <div
                    className={`wallet-transaction__amount ${
                      transaction.amount.startsWith("+")
                        ? "is-positive"
                        : "is-negative"
                    }`}
                  >
                    {transaction.amount} {t("common.currency")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="wallet-security">
            <div className="wallet-security__icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3 19 6v5c0 4.6-2.9 8.7-7 10-4.1-1.3-7-5.4-7-10V6l7-3Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="m9 12 2 2 4-4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div>
              <h3>{t("walletPage.security.title")}</h3>
              <p>{t("walletPage.security.description")}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Wallet;
