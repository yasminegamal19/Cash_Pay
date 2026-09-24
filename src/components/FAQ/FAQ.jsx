import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, HelpCircle } from "lucide-react";

import "./FAQ.css";

function FAQ() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      key: "whatIsCashPay",
    },
    {
      key: "whatServices",
    },
    {
      key: "isSecure",
    },
    {
      key: "howToRecharge",
    },
    {
      key: "transactionHistory",
    },
    {
      key: "contactSupport",
    },
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="faq__header">
          <span className="faq__eyebrow">
            <HelpCircle size={16} />
            {t("faq.eyebrow")}
          </span>

          <h2 className="faq__title">
            {t("faq.title")} <span>{t("faq.highlight")}</span>
          </h2>

          <p className="faq__description">{t("faq.description")}</p>
        </div>

        <div className="faq__list">
          {questions.map((question, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                className={`faq__item ${isOpen ? "faq__item--active" : ""}`}
                key={question.key}
              >
                <button
                  type="button"
                  className="faq__question"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                >
                  <span>{t(`faq.questions.${question.key}.question`)}</span>

                  <span className="faq__icon">
                    <ChevronDown size={19} />
                  </span>
                </button>

                <div className="faq__answer-wrapper">
                  <div className="faq__answer">
                    {t(`faq.questions.${question.key}.answer`)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
