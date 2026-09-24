import { useTranslation } from "react-i18next";
import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    key: "choose",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8 9H16M8 12H16M8 15H13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    key: "data",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M7 4H17C18.1 4 19 4.9 19 6V18C19 19.1 18.1 20 17 20H7C5.9 20 5 19.1 5 18V6C5 4.9 5.9 4 7 4Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8 8H16M8 12H16M8 16H13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    key: "confirm",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="8.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8.5 12L10.8 14.3L15.8 9.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works__container">
        <div className="how-it-works__heading">
          <span className="how-it-works__eyebrow">
            <span />
            {t("howItWorks.eyebrow")}
          </span>

          <h2>
            {t("howItWorks.title")}
            <strong> {t("howItWorks.highlight")}</strong>
          </h2>

          <p>{t("howItWorks.description")}</p>
        </div>

        <div className="steps">
          {steps.map((step, index) => (
            <div className="step-wrapper" key={step.number}>
              <article className="step">
                <div className="step__top">
                  <span className="step__number">{step.number}</span>

                  <div className="step__icon">{step.icon}</div>
                </div>

                <div className="step__content">
                  <h3>{t(`howItWorks.steps.${step.key}.title`)}</h3>

                  <p>{t(`howItWorks.steps.${step.key}.description`)}</p>
                </div>
              </article>

              {index < steps.length - 1 && (
                <div className="step__connector">
                  <span>←</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="how-it-works__bottom">
          {["easy", "confirmation", "allServices"].map((key) => (
            <div className="how-it-works__check" key={key}>
              <span>✓</span>

              <div>
                <strong>{t(`howItWorks.bottom.${key}.title`)}</strong>

                <p>{t(`howItWorks.bottom.${key}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
