import React from 'react';
import footer from './Footer.module.css';

const Footer = () => {
  return (
    <div className={footer.footer}>
      <p className={footer.name}>
        <span>Portpolio</span> Lee sung soo
      </p>
      <p className={footer.email}>
        <span>Email</span> leesungsoo1@naver.com
      </p>
    </div>
  );
};

export default Footer;
