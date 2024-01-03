import React from 'react';
import contact from './Contact.module.css';

const Contact = () => {
  const path = process.env.PUBLIC_URL;

  return (
    <div className={contact.contact} id="Contact">
      <h1>Contact</h1>
      <div className={contact.all}>
        <div className={contact.pages}>
          <p>GITHUB</p>
          <a href="https://github.com/sslee1210" target="_blank" rel="noreferrer">
            <img src={path + '/images/github.png'} alt="깃허브" />
          </a>
        </div>

        <div className={contact.pages}>
          <p>BLOG</p>
          <a href="https://blog.naver.com/sungmoong2" target="_blank" rel="noreferrer">
            <img src={path + '/images/naver-blog.png'} alt="블로그" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
