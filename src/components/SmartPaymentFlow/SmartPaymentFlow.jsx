import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Smartphone,
  Zap,
  Wifi,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

import "./SmartPaymentFlow.css";

const STEPS = [
  {
    key: "service",
    icon: Smartphone,
  },
  {
    key: "details",
    icon: Zap,
  },
  {
    key: "review",
    icon: ShieldCheck,
  },
  {
    key: "success",
    icon: CheckCircle2,
  },
];

export default function SmartPaymentFlow() {
  const { t, i18n } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const isArabic = i18n.language === "ar";

  const nextStep = () => {
    setActiveStep((current) => (current < STEPS.length - 1 ? current + 1 : 0));
  };

  const previousStep = () => {
    setActiveStep((current) => (current > 0 ? current - 1 : STEPS.length - 1));
  };

  return (
    <section className="smart-flow section" id="smart-flow">
      <div className="container">
        <div className="smart-flow__header">
          <span className="smart-flow__eyebrow">{t("smartFlow.eyebrow")}</span>

          <h2 className="smart-flow__title">
            {t("smartFlow.title")}
            <span>{t("smartFlow.highlight")}</span>
          </h2>

          <p className="smart-flow__description">
            {t("smartFlow.description")}
          </p>
        </div>

        <div className="smart-flow__layout">
          <div className="smart-flow__steps">
            {STEPS.map(({ key, icon: Icon }, index) => (
              <button
                key={key}
                type="button"
                className={`smart-flow__step ${
                  activeStep === index ? "is-active" : ""
                }`}
                onClick={() => setActiveStep(index)}
              >
                <span className="smart-flow__step-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="smart-flow__step-icon">
                  <Icon size={18} strokeWidth={1.8} />
                </span>

                <span className="smart-flow__step-content">
                  <strong>{t(`smartFlow.steps.${key}.title`)}</strong>
                  <small>{t(`smartFlow.steps.${key}.description`)}</small>
                </span>
              </button>
            ))}
          </div>

          <div className="smart-flow__demo">
            <div className="smart-flow__demo-top">
              <div>
                <span>{t("smartFlow.demo.label")}</span>
                <strong>
                  {t(`smartFlow.steps.${STEPS[activeStep].key}.title`)}
                </strong>
              </div>

              <span className="smart-flow__demo-status">
                <span />
                {t("smartFlow.demo.live")}
              </span>
            </div>

            <div className="smart-flow__phone">
              <div className="smart-flow__phone-notch" />

              <div className="smart-flow__phone-header">
                <div>
                  <small>{t("smartFlow.demo.cashPay")}</small>
                  <strong>
                    {t(`smartFlow.steps.${STEPS[activeStep].key}.screenTitle`)}
                  </strong>
                </div>

                <div className="smart-flow__phone-avatar">CP</div>
              </div>

              <div className="smart-flow__progress">
                {STEPS.map((_, index) => (
                  <span
                    key={index}
                    className={index <= activeStep ? "is-filled" : ""}
                  />
                ))}
              </div>

              <div className="smart-flow__screen">
                {activeStep === 0 && (
                  <div className="smart-flow__screen-content">
                    <span className="smart-flow__screen-label">
                      {t("smartFlow.demo.chooseService")}
                    </span>

                    <div className="smart-flow__service-grid">
                      <div className="smart-flow__service-card is-selected">
                        <Smartphone size={21} />
                        <span>{t("smartFlow.services.recharge")}</span>
                      </div>

                      <div className="smart-flow__service-card">
                        <Zap size={21} />
                        <span>{t("smartFlow.services.electricity")}</span>
                      </div>

                      <div className="smart-flow__service-card">
                        <Wifi size={21} />
                        <span>{t("smartFlow.services.internet")}</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="smart-flow__screen-content">
                    <span className="smart-flow__screen-label">
                      {t("smartFlow.demo.enterDetails")}
                    </span>

                    <div className="smart-flow__input">
                      <small>{t("smartFlow.demo.number")}</small>
                      <strong>010 2456 7812</strong>
                    </div>

                    <div className="smart-flow__amount">
                      <span>50</span>
                      <small>EGP</small>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="smart-flow__screen-content">
                    <span className="smart-flow__screen-label">
                      {t("smartFlow.demo.review")}
                    </span>

                    <div className="smart-flow__summary">
                      <div>
                        <span>{t("smartFlow.demo.service")}</span>
                        <strong>{t("smartFlow.services.recharge")}</strong>
                      </div>

                      <div>
                        <span>{t("smartFlow.demo.number")}</span>
                        <strong>010 2456 7812</strong>
                      </div>

                      <div>
                        <span>{t("smartFlow.demo.total")}</span>
                        <strong>50.00 EGP</strong>
                      </div>
                    </div>

                    <div className="smart-flow__secure">
                      <ShieldCheck size={16} />
                      <span>{t("smartFlow.demo.secure")}</span>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="smart-flow__success">
                    <div className="smart-flow__success-icon">
                      <CheckCircle2 size={38} strokeWidth={1.7} />
                    </div>

                    <strong>{t("smartFlow.demo.completed")}</strong>

                    <span>{t("smartFlow.demo.completedDescription")}</span>

                    <b>50.00 EGP</b>
                  </div>
                )}
              </div>

              <div className="smart-flow__phone-action">
                <button type="button" onClick={nextStep}>
                  {activeStep === STEPS.length - 1
                    ? t("smartFlow.demo.restart")
                    : t("smartFlow.demo.continue")}

                  {isArabic ? (
                    <ArrowLeft size={17} />
                  ) : (
                    <ArrowRight size={17} />
                  )}
                </button>
              </div>
            </div>

            <div className="smart-flow__controls">
              <button type="button" onClick={previousStep}>
                <ArrowLeft size={16} />
                {t("smartFlow.controls.previous")}
              </button>

              <span>{String(activeStep + 1).padStart(2, "0")} / 04</span>

              <button type="button" onClick={nextStep}>
                {t("smartFlow.controls.next")}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
