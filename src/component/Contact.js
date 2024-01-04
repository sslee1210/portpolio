import React from "react";
import contact from "./Contact.module.css";

const Contact = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <div className={contact.contact} id="Contact">
      <h1>Contact</h1>
      <div className={contact.all}>
        <div className={contact.pages}>
          <a
            href="https://github.com/sslee1210"
            target="_blank"
            rel="noreferrer"
            className={contact.git}
          >
            깃허브 보러가기
          </a>
        </div>

        <div className={contact.pages}>
          <a
            href="https://blog.naver.com/sungmoong2"
            target="_blank"
            rel="noreferrer"
          >
            블로그 보러가기
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
