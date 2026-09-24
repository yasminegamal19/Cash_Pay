import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Smartphone,
  Zap,
  Droplets,
  Flame,
  Wifi,
  ArrowRight,
  FileText,
  CheckCircle2,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import "./Services.css";

const SERVICES = [
  {
    key: "recharge",
    icon: Smartphone,
    amount: "150",
  },
  {
    key: "electricity",
    icon: Zap,
    amount: "320",
  },
  {
    key: "water",
    icon: Droplets,
    amount: "180",
  },
  {
    key: "gas",
    icon: Flame,
    amount: "240",
  },
  {
    key: "internet",
    icon: Wifi,
    amount: "300",
  },
];

export default function Services() {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState("electricity");

  const active =
    SERVICES.find((service) => service.key === activeService) || SERVICES[0];

  const ActiveIcon = active.icon;

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services__intro">
          <span className="services__eyebrow">{t("services.eyebrow")}</span>

          <h2 className="services__title">
            {t("services.title")}  
            <span>{t("services.highlight")}</span>
          </h2>

          <p className="services__description">{t("services.description")}</p>
        </div>

        <div className="services__experience">
          <div className="services__content">
            <div className="services__service-selector">
              {SERVICES.map((service) => {
                const Icon = service.icon;
                const isActive = activeService === service.key;

                return (
                  <button
                    key={service.key}
                    type="button"
                    className={`services__service ${
                      isActive ? "services__service--active" : ""
                    }`}
                    onClick={() => setActiveService(service.key)}
                  >
                    <span className="services__service-icon">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>

                    <span className="services__service-name">
                      {t(`services.items.${service.key}.title`)}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="services__benefits">
              <div className="services__benefit">
                <span>
                  <Zap size={15} />
                </span>

                <div>
                  <strong>{t("services.benefits.fast.title")}</strong>

                  <small>{t("services.benefits.fast.description")}</small>
                </div>
              </div>

              <div className="services__benefit">
                <span>
                  <ShieldCheck size={15} />
                </span>

                <div>
                  <strong>{t("services.benefits.secure.title")}</strong>

                  <small>{t("services.benefits.secure.description")}</small>
                </div>
              </div>

              <div className="services__benefit">
                <span>
                  <Clock3 size={15} />
                </span>

                <div>
                  <strong>{t("services.benefits.available.title")}</strong>

                  <small>{t("services.benefits.available.description")}</small>
                </div>
              </div>
            </div>
          </div>

          <div className="services__visual">
            <div className="services__visual-glow" />

            <div className="services__payment">
              <aside className="services__sidebar">
                <div className="services__brand">
                  <span className="services__brand-mark">C</span>

                  <strong>Cash Pay</strong>
                </div>

                <div className="services__sidebar-links">
                  <span>⌂</span>
                  <span className="is-active">▣</span>
                  <span>⇄</span>
                  <span>▢</span>
                  <span>♙</span>
                </div>
              </aside>

              <div className="services__form">
                <div className="services__form-header">
                  <div>
                    <small>{t("services.payment.back")}</small>

                    <h3>{t("services.payment.title")}</h3>
                  </div>

                  <span className="services__notification">•</span>
                </div>

                <div className="services__selected">
                  <div className="services__selected-icon">
                    <ActiveIcon size={25} strokeWidth={1.8} />
                  </div>

                  <div>
                    <strong>{t(`services.items.${active.key}.title`)}</strong>

                    <span>{t(`services.items.${active.key}.label`)}</span>
                  </div>
                </div>

                <label className="services__field">
                  <span>{t("services.payment.account")}</span>

                  <div>
                    <input value="123456789012" readOnly />

                    <FileText size={17} />
                  </div>
                </label>

                <label className="services__field">
                  <span>{t("services.payment.amount")}</span>

                  <div>
                    <input value={active.amount} readOnly />

                    <small>EGP</small>
                  </div>
                </label>

                <div className="services__summary">
                  <div>
                    <span>{t("services.payment.fee")}</span>

                    <strong>0.00 EGP</strong>
                  </div>

                  <div>
                    <span>{t("services.payment.total")}</span>

                    <strong>{active.amount}.00 EGP</strong>
                  </div>
                </div>

                <button type="button" className="services__pay-button">
                  {t("services.payment.pay")}

                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="services__receipt">
              <div className="services__receipt-top">
                <div className="services__receipt-brand">
                  <span>C</span>
                  <strong>Cash Pay</strong>
                </div>

                <small>{t("services.receipt.label")}</small>
              </div>

              <div className="services__receipt-success">
                <span>
                  <CheckCircle2 size={25} />
                </span>

                <strong>{t("services.receipt.success")}</strong>

                <small>{t("services.receipt.description")}</small>
              </div>

              <div className="services__receipt-details">
                <div>
                  <span>{t("services.receipt.service")}</span>

                  <strong>{t(`services.items.${active.key}.title`)}</strong>
                </div>

                <div>
                  <span>{t("services.receipt.account")}</span>

                  <strong>123456789012</strong>
                </div>

                <div>
                  <span>{t("services.receipt.amount")}</span>

                  <strong>{active.amount}.00 EGP</strong>
                </div>
              </div>

              <button type="button" className="services__receipt-button">
                {t("services.receipt.view")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
