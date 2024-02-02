import ReactDom from "react-dom";

import React from "react";
import styles from "./Notification.module.css";

const Notification = ({ title, message, status }) => {
  let statusstyles = "";

  if (status === "success") {
    statusstyles = styles.success;
  }

  if (status === "error") {
    statusstyles = styles.error;
  }

  const cssstyles = `${styles.notification} ${statusstyles}`;

  return ReactDom.createPortal(
    <div className={cssstyles}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")
  );
};

export default Notification;
