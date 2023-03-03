import React from 'react';
import clsx from 'clsx';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={clsx(styles.column, styles.contact)}>
            <address>
              <span className={clsx(styles.contactSpan)}>
                Address: Białystok
              </span>
            </address>
            <a href="mailto:emil-szymczyk2@wp.pl">
              <span className={clsx(styles.contactSpan)}>
                Email: emil-szymczyk2@wp.pl
              </span>
            </a>
            <a href="tel:+48793686522">
              <span className={clsx(styles.contactSpan)}>
                Phone number: +48 793686522
              </span>
            </a>
            <form
              className={clsx(styles.form)}
              action="https://formsubmit.co/f28d6c390aedf929c9efa17a9becb022"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="Kontakt CV Emil Szymczyk"
              />
              <input
                type="hidden"
                name="_next"
                value="https://szemil.github.io/Curriculum-Vitae-Emil-Szymczyk/"
              />
              <input type="email" placeholder="Email" name="email" />
              <textarea placeholder="Message" name="text"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className={clsx(styles.column, styles.github)}>
            <h3>Github</h3>
            <p>See my projects on Github:</p>
            <a
              href="https://github.com/SzEmil"
              target="_blank"
              rel="noopener noreferrer"
            >
              SzEmil
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
