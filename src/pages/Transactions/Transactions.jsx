import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Transactions.css";

const transactions = [
  {
    id: 1,
    type: "recharge",
    number: "01012345678",
    amount: "+250.00",
    date: "today",
    time: "11:42 AM",
    status: "successful",
  },
  {
    id: 2,
    type: "electricity",
    number: "Meter •••• 2841",
    amount: "-180.50",
    date: "today",
    time: "10:15 AM",
    status: "successful",
  },
  {
    id: 3,
    type: "transfer",
    number: "Cash Pay Wallet",
    amount: "-300.00",
    date: "yesterday",
    time: "08:20 PM",
    status: "successful",
  },
  {
    id: 4,
    type: "internet",
    number: "Internet •••• 6192",
    amount: "-450.00",
    date: "yesterday",
    time: "04:30 PM",
    status: "successful",
  },
  {
    id: 5,
    type: "recharge",
    number: "01198765432",
    amount: "+150.00",
    date: "older",
    time: "01:18 PM",
    status: "pending",
  },
  {
    id: 6,
    type: "water",
    number: "Account •••• 7290",
    amount: "-120.00",
    date: "older",
    time: "09:45 AM",
    status: "successful",
  },
];

function Transactions() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter((item) => item.type === filter);

  return (
    <main className="transactions-page">
      <section className="transactions-page__hero">
        <div className="container">
          <div className="transactions-page__hero-content">
            <span className="transactions-page__eyebrow">
              <span></span>
              {t("transactionsPage.eyebrow")}
            </span>

            <h1>
              {t("transactionsPage.title")}
              <strong>{t("transactionsPage.highlight")}</strong>
            </h1>

            <p>{t("transactionsPage.description")}</p>
          </div>
        </div>
      </section>

      <section className="transactions-dashboard">
        <div className="container">
          <div className="transactions-summary">
            <div className="summary-card summary-card--main">
              <span>{t("transactionsPage.summary.balance")}</span>
              <strong>
                12,450.00
                <small>{t("common.currency")}</small>
              </strong>
              <p>{t("transactionsPage.summary.balanceDescription")}</p>
            </div>

            <div className="summary-card">
              <span>{t("transactionsPage.summary.income")}</span>
              <strong>8,250.00</strong>
              <small>{t("common.currency")}</small>
            </div>

            <div className="summary-card">
              <span>{t("transactionsPage.summary.expenses")}</span>
              <strong>3,740.50</strong>
              <small>{t("common.currency")}</small>
            </div>

            <div className="summary-card">
              <span>{t("transactionsPage.summary.count")}</span>
              <strong>24</strong>
              <p>{t("transactionsPage.summary.thisMonth")}</p>
            </div>
          </div>

          <div className="transactions-content">
            <div className="transactions-heading">
              <div>
                <span>{t("transactionsPage.listEyebrow")}</span>
                <h2>{t("transactionsPage.listTitle")}</h2>
              </div>

              <Link to="/wallet" className="transactions-wallet-link">
                {t("transactionsPage.backToWallet")}
                <span>←</span>
              </Link>
            </div>

            <div className="transactions-filters">
              <div className="transactions-filters__buttons">
                {[
                  { key: "all", label: t("transactionsPage.filters.all") },
                  {
                    key: "recharge",
                    label: t("transactionsPage.filters.recharge"),
                  },
                  {
                    key: "electricity",
                    label: t("transactionsPage.filters.electricity"),
                  },
                  {
                    key: "internet",
                    label: t("transactionsPage.filters.internet"),
                  },
                  {
                    key: "transfer",
                    label: t("transactionsPage.filters.transfer"),
                  },
                ].map((item) => (
                  <button
                    type="button"
                    key={item.key}
                    className={filter === item.key ? "active" : ""}
                    onClick={() => setFilter(item.key)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <button type="button" className="transactions-filter-date">
                <span>⌄</span>
                {t("transactionsPage.filters.date")}
              </button>
            </div>

            <div className="transactions-list">
              {filteredTransactions.map((transaction) => (
                <article className="transaction-row" key={transaction.id}>
                  <div
                    className={`transaction-row__icon transaction-row__icon--${transaction.type}`}
                  >
                    {transaction.type === "recharge" && "↗"}
                    {transaction.type === "electricity" && "ϟ"}
                    {transaction.type === "transfer" && "→"}
                    {transaction.type === "internet" && "⌁"}
                    {transaction.type === "water" && "◌"}
                  </div>

                  <div className="transaction-row__main">
                    <div>
                      <h3>
                        {t(`transactionsPage.types.${transaction.type}.title`)}
                      </h3>

                      <span>{transaction.number}</span>
                    </div>

                    <div className="transaction-row__date">
                      <strong>
                        {t(`transactionsPage.dates.${transaction.date}`)}
                      </strong>
                      <span>{transaction.time}</span>
                    </div>
                  </div>

                  <div className="transaction-row__status">
                    <span className={`status status--${transaction.status}`}>
                      <i></i>
                      {t(`transactionsPage.status.${transaction.status}`)}
                    </span>
                  </div>

                  <div
                    className={`transaction-row__amount ${
                      transaction.amount.startsWith("+")
                        ? "positive"
                        : "negative"
                    }`}
                  >
                    {transaction.amount}
                    <small>{t("common.currency")}</small>
                  </div>

                  <button
                    type="button"
                    className="transaction-row__more"
                    aria-label={t("transactionsPage.more")}
                  >
                    ⋮
                  </button>
                </article>
              ))}

              {filteredTransactions.length === 0 && (
                <div className="transactions-empty">
                  <div>⌕</div>
                  <h3>{t("transactionsPage.empty.title")}</h3>
                  <p>{t("transactionsPage.empty.description")}</p>
                </div>
              )}
            </div>
          </div>

          <div className="transactions-info">
            <div className="transactions-info__icon">✓</div>

            <div>
              <h3>{t("transactionsPage.info.title")}</h3>
              <p>{t("transactionsPage.info.description")}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Transactions;
