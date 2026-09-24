import { useTranslation } from "react-i18next";
import {
  CheckCircle2,
  ArrowDownLeft,
  Bell,
  ShieldCheck,
  Zap,
  Clock3,
} from "lucide-react";

import "./NotificationTimeline.css";

const NOTIFICATIONS = [
  {
    type: "success",
    icon: CheckCircle2,
    title: "notificationTimeline.notifications.payment.title",
    description: "notificationTimeline.notifications.payment.description",
    time: "notificationTimeline.notifications.payment.time",
    amount: "-50.00 EGP",
  },
  {
    type: "incoming",
    icon: ArrowDownLeft,
    title: "notificationTimeline.notifications.received.title",
    description: "notificationTimeline.notifications.received.description",
    time: "notificationTimeline.notifications.received.time",
    amount: "+1,500.00 EGP",
  },
  {
    type: "secure",
    icon: ShieldCheck,
    title: "notificationTimeline.notifications.security.title",
    description: "notificationTimeline.notifications.security.description",
    time: "notificationTimeline.notifications.security.time",
  },
  {
    type: "bill",
    icon: Zap,
    title: "notificationTimeline.notifications.bill.title",
    description: "notificationTimeline.notifications.bill.description",
    time: "notificationTimeline.notifications.bill.time",
    amount: "-320.00 EGP",
  },
];

export default function NotificationTimeline() {
  const { t } = useTranslation();

  return (
    <section
      className="notification-timeline section"
      id="notification-timeline"
    >
      <div className="container">
        <div className="notification-timeline__header">
          <div>
            <span className="notification-timeline__eyebrow">
              {t("notificationTimeline.eyebrow")}
            </span>

            <h2 className="notification-timeline__title">
              {t("notificationTimeline.title")}
              <span>{t("notificationTimeline.highlight")}</span>
            </h2>
          </div>

          <p className="notification-timeline__description">
            {t("notificationTimeline.description")}
          </p>
        </div>

        <div className="notification-timeline__layout">
          <div className="notification-timeline__activity">
            <div className="notification-timeline__activity-head">
              <div>
                <span>{t("notificationTimeline.activity.label")}</span>
                <strong>{t("notificationTimeline.activity.title")}</strong>
              </div>

              <div className="notification-timeline__live">
                <span />
                {t("notificationTimeline.activity.live")}
              </div>
            </div>

            <div className="notification-timeline__line">
              {NOTIFICATIONS.map(
                (
                  { type, icon: Icon, title, description, time, amount },
                  index,
                ) => (
                  <div className="notification-timeline__item" key={title}>
                    <div className={`notification-timeline__marker ${type}`}>
                      <Icon size={16} strokeWidth={2} />
                    </div>

                    <div className="notification-timeline__item-content">
                      <div className="notification-timeline__item-top">
                        <div>
                          <strong>{t(title)}</strong>
                          <span>{t(description)}</span>
                        </div>

                        {amount && (
                          <b className={type === "incoming" ? "positive" : ""}>
                            {amount}
                          </b>
                        )}
                      </div>

                      <div className="notification-timeline__time">
                        <Clock3 size={12} />
                        {t(time)}
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="notification-timeline__side">
            <div className="notification-timeline__preview">
              <div className="notification-timeline__preview-top">
                <div className="notification-timeline__bell">
                  <Bell size={21} />
                  <span />
                </div>

                <div>
                  <small>{t("notificationTimeline.preview.label")}</small>
                  <strong>{t("notificationTimeline.preview.title")}</strong>
                </div>
              </div>

              <div className="notification-timeline__notification">
                <div className="notification-timeline__notification-icon">
                  <CheckCircle2 size={17} />
                </div>

                <div>
                  <strong>
                    {t("notificationTimeline.preview.notificationTitle")}
                  </strong>

                  <span>
                    {t("notificationTimeline.preview.notificationDescription")}
                  </span>

                  <small>
                    {t("notificationTimeline.preview.notificationTime")}
                  </small>
                </div>
              </div>

              <div className="notification-timeline__notification is-secondary">
                <div className="notification-timeline__notification-icon">
                  <ShieldCheck size={17} />
                </div>

                <div>
                  <strong>
                    {t("notificationTimeline.preview.securityTitle")}
                  </strong>

                  <span>
                    {t("notificationTimeline.preview.securityDescription")}
                  </span>
                </div>
              </div>
            </div>

            <div className="notification-timeline__stats">
              <div>
                <strong>24</strong>
                <span>{t("notificationTimeline.stats.notifications")}</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>{t("notificationTimeline.stats.visibility")}</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>{t("notificationTimeline.stats.availability")}</span>
              </div>
            </div>

            <div className="notification-timeline__note">
              <ShieldCheck size={17} />

              <div>
                <strong>{t("notificationTimeline.note.title")}</strong>

                <span>{t("notificationTimeline.note.description")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="notification-timeline__footer">
          <span />
          {t("notificationTimeline.footer")}
        </div>
      </div>
    </section>
  );
}
