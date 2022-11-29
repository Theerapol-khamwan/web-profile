import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <section className={style.sectionFooter}>
        <h1 className={style.footerText}>
          Embrace that "happiness" <br />
          as tightly as possible
        </h1>
        <p className={style.message}>
          theerapol.khamwan@gmail.com ❤
        </p>
      </section>
    </>
  );
};

export default Footer;
