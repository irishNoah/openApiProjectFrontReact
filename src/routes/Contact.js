import React from "react";
/* 일반 CSS가 아닌 Module CSS를 사용할거면 -> styles 를 활용해야 함*/
import styles from  "../components/Layout.module.css"

function Contact() {
  return (
    <div className={styles["welcome-container"]}>
      <h3>This is Contact Page!</h3>
    </div>
  );
}

export default Contact;
