import React from 'react';
import clsx from 'clsx';
import styles from './Footer.module.css';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
export const Footer = () => {
  const { ref, inView } = useInView({
    rootMargin: '-100px 0px',
    triggerOnce: true,
  });
  return (
    <footer
      ref={ref}
      className={(styles.footer, inView ? styles.isVisible : styles.noVisible)}
    >
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
            {/* <form
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
            </form> */}
          </div>
          <div className={clsx(styles.column, styles.github)}>
            <h3>Social media</h3>
            <div className={clsx(styles.social)}>
              <a
                href="https://github.com/SzEmil"
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(styles.socialLink)}
              >
                <AiFillGithub size={48} />
              </a>
              <a
                className={clsx(styles.socialLink)}
                href="https://www.linkedin.com/in/emil-szymczyk-209613209/"
              >
                <AiFillLinkedin size={48} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
