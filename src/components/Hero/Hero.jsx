import { useTranslation } from "react-i18next";
import {
  Smartphone,
  Zap,
  Droplets,
  Flame,
  Wifi,
  ShieldCheck,
  Clock3,
  ArrowUpRight,
  ArrowDownLeft,
  Bell,
  Home,
  ArrowLeftRight,
  WalletCards,
  UserRound,
  Download,
  CheckCircle2,
} from "lucide-react";

import "./Hero.css";

const SERVICES = [
  {
    key: "recharge",
    icon: Smartphone,
  },
  {
    key: "electricity",
    icon: Zap,
  },
  {
    key: "water",
    icon: Droplets,
  },
  {
    key: "gas",
    icon: Flame,
  },
  {
    key: "internet",
    icon: Wifi,
  },
];

export default function Hero() {
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  return (
    <section className="hero" id="top">
      <div className="hero__background">
        <span className="hero__orb hero__orb--one" />
        <span className="hero__orb hero__orb--two" />
        <span className="hero__grid" />
      </div>

      <div className="container">
        <div className="hero__content">
  

          <div className="hero__copy">
            <div className="hero__eyebrow">
              <span className="hero__eyebrow-dot" />
              {t("hero.eyebrow")}
            </div>

            <h1 className="hero__title">
              {t("hero.title")}
              <span>{t("hero.highlight")}</span>
            </h1>

            <p className="hero__description">{t("hero.description")}</p>


            <div className="hero__actions">
              <a href="#download" className="hero__download">
                <Download size={17} />

                <span>
                  <small>{t("hero.downloadSmall")}</small>
                  <strong>{t("hero.downloadApp")}</strong>
                </span>
              </a>

              <a href="#services" className="hero__secondary-button">
                {t("hero.explore")}
                <ArrowUpRight size={17} />
              </a>
            </div>


            <div className="hero__trust">
              <div className="hero__trust-item">
                <span>
                  <Zap size={17} />
                </span>

                <div>
                  <strong>{t("hero.trust.fast.title")}</strong>
                  <small>{t("hero.trust.fast.text")}</small>
                </div>
              </div>

              <div className="hero__trust-divider" />

              <div className="hero__trust-item">
                <span>
                  <ShieldCheck size={17} />
                </span>

                <div>
                  <strong>{t("hero.trust.secure.title")}</strong>
                  <small>{t("hero.trust.secure.text")}</small>
                </div>
              </div>

              <div className="hero__trust-divider" />

              <div className="hero__trust-item">
                <span>
                  <Clock3 size={17} />
                </span>

                <div>
                  <strong>{t("hero.trust.available.title")}</strong>
                  <small>{t("hero.trust.available.text")}</small>
                </div>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__visual-glow" />


            <div className="hero__floating hero__floating--success">
              <div className="hero__floating-icon">
                <CheckCircle2 size={18} />
              </div>

              <div>
                <strong>{t("hero.floating.success.title")}</strong>
                <span>{t("hero.floating.success.text")}</span>
                <b>320.00 EGP</b>
              </div>
            </div>


            <div className="hero__floating hero__floating--electricity">
              <div className="hero__floating-service-icon">
                <Zap size={17} />
              </div>

              <div>
                <span>{t("hero.floating.electricity.label")}</span>

                <strong>-320 EGP</strong>
              </div>

              <ArrowUpRight size={15} />
            </div>


            <div className="hero__floating hero__floating--recharge">
              <div className="hero__floating-service-icon">
                <Smartphone size={17} />
              </div>

              <div>
                <span>{t("hero.floating.recharge.label")}</span>

                <strong>+150 EGP</strong>
              </div>

              <ArrowDownLeft size={15} />
            </div>


            <div className="hero__receipt">
              <div className="hero__receipt-top">
                <span>
                  <CheckCircle2 size={16} />
                </span>

                <small>{t("hero.receipt.label")}</small>
              </div>

              <div className="hero__receipt-lines">
                <i />
                <i />
                <i />
              </div>

              <strong>320.00 EGP</strong>

              <button type="button">{t("hero.receipt.view")}</button>
            </div>



            <div className="hero__phone">
              <div className="hero__phone-frame">
                <div className="hero__island" />


                <div className="hero__screen">

                  <div className="hero__status">
                    <span>9:41</span>

                    <div>
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>


                  <div className="hero__app-header">
                    <div className="hero__app-brand">
                      <span>C</span>
                      <strong>Cash Pay</strong>
                    </div>

                    <Bell size={15} />
                  </div>


                  <div className="hero__balance">
                    <div className="hero__balance-top">
                      <span>{t("hero.phone.balance")}</span>

                      <WalletCards size={14} />
                    </div>

                    <strong>12,450.00</strong>

                    <div>
                      <span>EGP</span>

                      <small>+8.4% {t("hero.phone.month")}</small>
                    </div>
                  </div>


                  <div className="hero__phone-services">
                    {SERVICES.map(({ key, icon: Icon }) => (
                      <div key={key}>
                        <span>
                          <Icon size={14} />
                        </span>

                        <small>{t(`hero.phone.services.${key}`)}</small>
                      </div>
                    ))}
                  </div>


                  <div className="hero__recent-header">
                    <strong>{t("hero.phone.recent")}</strong>

                    <span>{t("hero.phone.viewAll")}</span>
                  </div>

                  <div className="hero__transactions">
                    <div className="hero__transaction">
                      <span className="hero__transaction-icon expense">
                        <Zap size={13} />
                      </span>

                      <div>
                        <strong>
                          {t("hero.phone.transactions.electricity")}
                        </strong>

                        <small>12 Apr 2025</small>
                      </div>

                      <b className="expense">-320 EGP</b>
                    </div>

                    <div className="hero__transaction">
                      <span className="hero__transaction-icon income">
                        <Smartphone size={13} />
                      </span>

                      <div>
                        <strong>{t("hero.phone.transactions.recharge")}</strong>

                        <small>11 Apr 2025</small>
                      </div>

                      <b className="income">+150 EGP</b>
                    </div>

                    <div className="hero__transaction">
                      <span className="hero__transaction-icon expense">
                        <Wifi size={13} />
                      </span>

                      <div>
                        <strong>{t("hero.phone.transactions.internet")}</strong>

                        <small>10 Apr 2025</small>
                      </div>

                      <b className="expense">-300 EGP</b>
                    </div>

                    <div className="hero__transaction">
                      <span className="hero__transaction-icon expense">
                        <Droplets size={13} />
                      </span>

                      <div>
                        <strong>{t("hero.phone.transactions.water")}</strong>

                        <small>8 Apr 2025</small>
                      </div>

                      <b className="expense">-180 EGP</b>
                    </div>
                  </div>


                  <div className="hero__phone-nav">
                    <span className="active">
                      <Home size={13} />
                      <small>{t("hero.phone.nav.home")}</small>
                    </span>

                    <span>
                      <ArrowLeftRight size={13} />
                      <small>{t("hero.phone.nav.transactions")}</small>
                    </span>

                    <span>
                      <WalletCards size={13} />
                      <small>{t("hero.phone.nav.wallet")}</small>
                    </span>

                    <span>
                      <UserRound size={13} />
                      <small>{t("hero.phone.nav.profile")}</small>
                    </span>
                  </div>
                </div>
              </div>
            </div>


            <div className="hero__ribbon hero__ribbon--one" />
            <div className="hero__ribbon hero__ribbon--two" />


            <div className="hero__mini-icon hero__mini-icon--one">
              <Zap size={17} />
            </div>

            <div className="hero__mini-icon hero__mini-icon--two">
              <Wifi size={17} />
            </div>

            <div className="hero__mini-icon hero__mini-icon--three">
              <Droplets size={17} />
            </div>

            <div className="hero__mini-icon hero__mini-icon--four">
              <Flame size={17} />
            </div>


            <div className="hero__platform" />
          </div>
        </div>
      </div>
    </section>
  );
}
