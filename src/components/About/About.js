import css from './About.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import football from '../../images/skills/footballFile.png';
import education from '../../images/skills/educationFile.png';
import webDev from '../../images/skills/webFile.png';

export const About = () => {
  const { ref, inView } = useInView({
    rootMargin: '-100px 0px',
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      className={clsx(css.about, inView ? css.isVisible : css.noVisible)}
    >
      <div className={clsx(css.container)}>
        <div className={clsx(css.aboutWrapper)}>
          <h3 className={clsx(css.aboutHeadThird)}>Good to know</h3>
          <h2 className={clsx(css.aboutHead)}>About Me</h2>
          <div className={clsx(css.descriptionWrapper)}>
            <div className={clsx(css.myImgWrapper)}>
              <img
                src="https://images-ssl.gotinder.com/6490ae00866e1601001855fd/640x800_75_3efb53d7-cb32-4667-8a48-701d9d0b622b.webp"
                alt="my pic"
                className={clsx(css.myImg)}
              />
            </div>
            <div className={clsx(css.hobbyBox)}>
              <div className={clsx(css.hobbysWrapper)}>
                <div>
                  <img
                    className={clsx(css.hobbysImg)}
                    src={football}
                    alt="football pic"
                  />
                </div>
                <div>
                  <img
                    className={clsx(css.hobbysImg)}
                    src={education}
                    alt="football pic"
                  />
                </div>
                <div>
                  <img
                    className={clsx(css.hobbysImg)}
                    src={webDev}
                    alt="football pic"
                  />
                </div>
              </div>
              <p className={clsx(css.description)}>
                Hello and welcome to my CV!
              </p>
              <p className={clsx(css.description)}>
                I am a young and flourishing Fullstack Developer who is
                passionate about programming and always eager to learn more. My
                knowledge and skills have been acquired through various
                channels, including bootcamp courses and my current pursuit of a
                Master's degree in Mechatronics, with only one semester left to
                complete. During my studies, I have gained valuable experience
                in networking and programming in languages such as Python and
                C++. However, it is with Javascript that I have found my true
                calling and where I am most excited to focus my future career. I
                am driven, creative, and always pushing myself to improve. My
                passion for coding and attention to detail make me a valuable
                asset to any team. I am constantly seeking new challenges and
                opportunities to expand my knowledge and skillset, and I am
                eager to contribute my talents to your organization. Thank you
                for considering my application, and I look forward to the
                opportunity to discuss my qualifications with you further.
              </p>
              <NavLink className={css.contactLinkWrapper} to="contact">
                <p className={clsx(css.contactLink)}>Let's talk</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
