import clsx from 'clsx';
import css from './Contact.module.css';
export const Contact = () => {
  return (
    <section className={clsx(css.contact)}>
      <div className={clsx(css.container)}>
        <div className={clsx(css.contactWrapper)}>
          <h2 className={clsx(css.title)}>Contact me</h2>
          <form
            className={clsx(css.form)}
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
            <label className={clsx(css.label)}>
              Email
              <input
                className={clsx(css.input)}
                type="email"
                placeholder="Youre email address"
              />
            </label>
            <label className={css.label}>
              Message
              <textarea
                className={css.textarea}
                placeholder="Your message"
              ></textarea>
            </label>
            <button className={css.button} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
