import { useTranslation } from "react-i18next";
import { Smartphone, ShieldCheck, Zap, ArrowDownToLine } from "lucide-react";

import "./DownloadApp.css";

function DownloadApp() {
  const { t } = useTranslation();

  return (
    <section className="download-app section" id="download">
      <div className="container">
        <div className="download-app__wrapper">
          <div className="download-app__content">
            <span className="download-app__eyebrow">
              {t("downloadApp.eyebrow")}
            </span>

            <h2 className="download-app__title">
              {t("downloadApp.title")} <span>{t("downloadApp.highlight")}</span>
            </h2>

            <p className="download-app__description">
              {t("downloadApp.description")}
            </p>

            <div className="download-app__points">
              <div className="download-app__point">
                <div className="download-app__point-icon">
                  <Smartphone size={20} />
                </div>

                <div>
                  <h4>{t("downloadApp.points.mobile.title")}</h4>
                  <p>{t("downloadApp.points.mobile.description")}</p>
                </div>
              </div>

              <div className="download-app__point">
                <div className="download-app__point-icon">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <h4>{t("downloadApp.points.security.title")}</h4>
                  <p>{t("downloadApp.points.security.description")}</p>
                </div>
              </div>

              <div className="download-app__point">
                <div className="download-app__point-icon">
                  <Zap size={20} />
                </div>

                <div>
                  <h4>{t("downloadApp.points.speed.title")}</h4>
                  <p>{t("downloadApp.points.speed.description")}</p>
                </div>
              </div>
            </div>

            <div className="download-app__actions">
              <a href="#" className="download-app__store">
                <div className="download-app__store-icon">
                  <ArrowDownToLine size={22} />
                </div>

                <div>
                  <small>{t("downloadApp.store.downloadOn")}</small>
                  <strong>{t("downloadApp.store.googlePlay")}</strong>
                </div>
              </a>

              <a href="#" className="download-app__store">
                <div className="download-app__store-icon">
                  <ArrowDownToLine size={22} />
                </div>

                <div>
                  <small>{t("downloadApp.store.downloadOn")}</small>
                  <strong>{t("downloadApp.store.appStore")}</strong>
                </div>
              </a>
            </div>
          </div>

          <div className="download-app__visual">
            <div className="download-app__glow" />

            <div className="download-app__phone">
              <div className="download-app__phone-notch" />

              <div className="download-app__phone-screen">
                <div className="download-app__phone-header">
                  <span>{t("common.appName")}</span>
                  <span className="download-app__status-dot" />
                </div>

                <div className="download-app__balance">
                  <span>{t("downloadApp.mockup.balance")}</span>

                  <strong>
                    2,850.00 <small>{t("common.currency")}</small>
                  </strong>
                </div>

                <div className="download-app__quick-actions">
                  <div>
                    <span>↗</span>
                    <small>{t("downloadApp.mockup.recharge")}</small>
                  </div>

                  <div>
                    <span>₿</span>
                    <small>{t("downloadApp.mockup.bills")}</small>
                  </div>

                  <div>
                    <span>◉</span>
                    <small>{t("downloadApp.mockup.wallet")}</small>
                  </div>
                </div>

                <div className="download-app__mock-transactions">
                  <div className="download-app__mock-heading">
                    <strong>{t("downloadApp.mockup.transactions")}</strong>
                    <span>{t("common.viewAll")}</span>
                  </div>

                  <div className="download-app__mock-transaction">
                    <span className="download-app__mock-icon">↗</span>

                    <div>
                      <strong>{t("features.transactions.recharge")}</strong>
                      <small>{t("features.transactions.successful")}</small>
                    </div>

                    <b>- 100</b>
                  </div>

                  <div className="download-app__mock-transaction">
                    <span className="download-app__mock-icon">✓</span>

                    <div>
                      <strong>{t("features.transactions.electricity")}</strong>
                      <small>{t("features.transactions.completed")}</small>
                    </div>

                    <b>- 350</b>
                  </div>
                </div>
              </div>
            </div>

            <div className="download-app__floating-card">
              <ShieldCheck size={18} />
              <div>
                <strong>{t("downloadApp.secureCard.title")}</strong>
                <span>{t("downloadApp.secureCard.description")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
