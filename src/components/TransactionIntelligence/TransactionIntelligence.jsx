import { useTranslation } from "react-i18next";
import {
  ArrowDownLeft,
  ArrowUpRight,
  TrendingUp,
  WalletCards,
} from "lucide-react";

import "./TransactionIntelligence.css";

const TRANSACTIONS = [
  {
    key: "recharge",
    amount: "+500",
    type: "income",
    x: "16%",
    y: "34%",
  },
  {
    key: "electricity",
    amount: "-320",
    type: "expense",
    x: "38%",
    y: "65%",
  },
  {
    key: "internet",
    amount: "-180",
    type: "expense",
    x: "61%",
    y: "42%",
  },
  {
    key: "wallet",
    amount: "+750",
    type: "income",
    x: "82%",
    y: "28%",
  },
];

export default function TransactionIntelligence() {
  const { t } = useTranslation();

  return (
    <section className="transaction-intelligence section">
      <div className="container">
        <div className="transaction-intelligence__header">
          <span className="transaction-intelligence__eyebrow">
            {t("transactionIntelligence.eyebrow")}
          </span>

          <h2 className="transaction-intelligence__title">
            {t("transactionIntelligence.title")}
            <span>{t("transactionIntelligence.highlight")}</span>
          </h2>

          <p className="transaction-intelligence__description">
            {t("transactionIntelligence.description")}
          </p>
        </div>

        <div className="transaction-intelligence__dashboard">

          <div className="transaction-intelligence__balance">
            <div className="transaction-intelligence__balance-top">
              <div className="transaction-intelligence__wallet-icon">
                <WalletCards size={19} />
              </div>

              <span>{t("transactionIntelligence.balance.label")}</span>
            </div>

            <strong>12,450.00</strong>

            <small>EGP</small>

            <div className="transaction-intelligence__growth">
              <TrendingUp size={14} />
              <span>+8.4%</span>
              <small>{t("transactionIntelligence.balance.period")}</small>
            </div>
          </div>


          <div className="transaction-intelligence__pulse-card">
            <div className="transaction-intelligence__pulse-header">
              <div>
                <span>{t("transactionIntelligence.pulse.label")}</span>

                <strong>{t("transactionIntelligence.pulse.title")}</strong>
              </div>

              <div className="transaction-intelligence__live">
                <span />
                {t("transactionIntelligence.pulse.live")}
              </div>
            </div>

            <div className="transaction-intelligence__chart">
              <div className="transaction-intelligence__grid">
                <span />
                <span />
                <span />
                <span />
              </div>

              <svg
                className="transaction-intelligence__line"
                viewBox="0 0 1000 300"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="pulseGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" />
                    <stop offset="50%" />
                    <stop offset="100%" />
                  </linearGradient>
                </defs>

                <path
                  className="transaction-intelligence__pulse-shadow"
                  d="
                    M0 190
                    C70 190 80 150 140 150
                    C190 150 190 215 250 215
                    C310 215 320 105 390 105
                    C450 105 455 180 520 180
                    C580 180 600 230 650 230
                    C710 230 715 125 780 125
                    C840 125 850 165 900 165
                    C940 165 950 105 1000 105
                  "
                />

                <path
                  className="transaction-intelligence__pulse-line"
                  d="
                    M0 190
                    C70 190 80 150 140 150
                    C190 150 190 215 250 215
                    C310 215 320 105 390 105
                    C450 105 455 180 520 180
                    C580 180 600 230 650 230
                    C710 230 715 125 780 125
                    C840 125 850 165 900 165
                    C940 165 950 105 1000 105
                  "
                />
              </svg>

              {TRANSACTIONS.map((item) => (
                <div
                  key={item.key}
                  className={`transaction-intelligence__transaction transaction-intelligence__transaction--${item.type}`}
                  style={{
                    left: item.x,
                    top: item.y,
                  }}
                >
                  <div className="transaction-intelligence__transaction-dot">
                    {item.type === "income" ? (
                      <ArrowDownLeft size={12} />
                    ) : (
                      <ArrowUpRight size={12} />
                    )}
                  </div>

                  <div>
                    <strong>{item.amount}</strong>
                    <span>
                      {t(`transactionIntelligence.transactions.${item.key}`)}
                    </span>
                  </div>
                </div>
              ))}

              <div className="transaction-intelligence__scanner" />
            </div>

            <div className="transaction-intelligence__legend">
              <span>
                <i className="is-income" />
                {t("transactionIntelligence.legend.income")}
              </span>

              <span>
                <i className="is-expense" />
                {t("transactionIntelligence.legend.expense")}
              </span>
            </div>
          </div>


          <div className="transaction-intelligence__stats">
            <div className="transaction-intelligence__stat">
              <div className="transaction-intelligence__stat-icon income">
                <ArrowDownLeft size={17} />
              </div>

              <div>
                <span>{t("transactionIntelligence.stats.incoming")}</span>
                <strong>8,250 EGP</strong>
              </div>
            </div>

            <div className="transaction-intelligence__stat">
              <div className="transaction-intelligence__stat-icon expense">
                <ArrowUpRight size={17} />
              </div>

              <div>
                <span>{t("transactionIntelligence.stats.outgoing")}</span>
                <strong>3,740 EGP</strong>
              </div>
            </div>

            <div className="transaction-intelligence__stat">
              <div className="transaction-intelligence__stat-icon">
                <TrendingUp size={17} />
              </div>

              <div>
                <span>{t("transactionIntelligence.stats.transactions")}</span>
                <strong>24</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
