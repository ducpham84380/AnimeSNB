import React from "react";
import notificationIcon from "src/assets/images/notification-outline.svg";
import "src/share/notification/Notification.scss";


interface NotificationProps {}

const Notification: React.FC<NotificationProps> = (props) => {
    return (
        <div className="header-notification">
            <div className="notification-icon">
                <img className="img-notification-icon" src={notificationIcon} alt="" />
            </div>
        </div>
    );
};

export default Notification;