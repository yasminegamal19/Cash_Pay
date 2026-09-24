import { useTranslation } from "react-i18next";
import {
  Smartphone,
  Zap,
  Droplets,
  Flame,
  Wifi,
  WalletCards,
  ArrowDownLeft,
  ArrowUpRight,
} from "lucide-react";

import "./PaymentEcosystem.css";

const SERVICES = [
  {
    key: "recharge",
    icon: Smartphone,
    position: "top-left",
  },
  {
    key: "electricity",
    icon: Zap,
    position: "top-right",
  },
  {
    key: "water",
    icon: Droplets,
    position: "bottom-left",
  },
  {
    key: "gas",
    icon: Flame,
    position: "bottom-right",
  },
  {
    key: "internet",
    icon: Wifi,
    position: "right",
  },
];

export default function PaymentEcosystem() {
  const { t } = useTranslation();

  return (
    <section className="ecosystem section" id="ecosystem">
      <div className="container">
        <div className="ecosystem__header">
          <span className="ecosystem__eyebrow">{t("ecosystem.eyebrow")}</span>

          <h2 className="ecosystem__title">
            {t("ecosystem.title")}
            <span>{t("ecosystem.highlight")}</span>
          </h2>

          <p className="ecosystem__description">{t("ecosystem.description")}</p>
        </div>

        <div className="ecosystem__stage">
          <div className="ecosystem__grid">
            <span className="ecosystem__grid-line ecosystem__grid-line--one" />
            <span className="ecosystem__grid-line ecosystem__grid-line--two" />
            <span className="ecosystem__grid-line ecosystem__grid-line--three" />
            <span className="ecosystem__grid-line ecosystem__grid-line--four" />
          </div>

          <div className="ecosystem__connection ecosystem__connection--1" />
          <div className="ecosystem__connection ecosystem__connection--2" />
          <div className="ecosystem__connection ecosystem__connection--3" />
          <div className="ecosystem__connection ecosystem__connection--4" />
          <div className="ecosystem__connection ecosystem__connection--5" />

          {SERVICES.map(({ key, icon: Icon, position }) => (
            <div
              key={key}
              className={`ecosystem__orbit-item ecosystem__orbit-item--${position}`}
            >
              <div className="ecosystem__service">
                <div className="ecosystem__service-icon">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <strong>{t(`ecosystem.services.${key}.title`)}</strong>
                  <span>{t(`ecosystem.services.${key}.label`)}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="ecosystem__wallet">
            <div className="ecosystem__wallet-glow" />

            <div className="ecosystem__wallet-top">
              <div className="ecosystem__wallet-icon">
                <WalletCards size={21} />
              </div>

              <span>{t("ecosystem.wallet.label")}</span>
            </div>

            <div className="ecosystem__wallet-balance">
              <small>{t("ecosystem.wallet.balance")}</small>
              <strong>12,450.00</strong>
              <span>EGP</span>
            </div>

            <div className="ecosystem__wallet-footer">
              <div>
                <ArrowDownLeft size={14} />
                <span>{t("ecosystem.wallet.incoming")}</span>
              </div>

              <div>
                <ArrowUpRight size={14} />
                <span>{t("ecosystem.wallet.outgoing")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ecosystem__bottom">
          <span className="ecosystem__bottom-dot" />
          <span>{t("ecosystem.bottom")}</span>
        </div>
      </div>
    </section>
  );
}
