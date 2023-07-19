import css from './About.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
export const About = () => {
  const { ref, inView } = useInView({
    rootMargin: '-100px 0px',
    triggerOnce: false,
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
                src="https://images-ssl.gotinder.com/63b1f2630996fb0100a561b7/640x800_75_c4a66917-9525-4e06-b520-e358e2b2f66c.webp"
                alt="my pic"
                className={clsx(css.myImg)}
              />
            </div>
            <div className={clsx(css.hobbyBox)}>
              <div className={clsx(css.hobbysWrapper)}>
                <div>
                  <img
                    className={clsx(css.hobbysImg)}
                    src="https://scontent.xx.fbcdn.net/v/t1.15752-9/332100313_1449813155550581_1852114687805046348_n.png?_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=sEtLDyEmxq0AX_qOLe4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRhCQywV0RUIZ7-JfiocIuG1VXNrDV0CEqgRABmgL0lmA&oe=64D9C27F"
                    alt="football pic"
                  />
                </div>
                <div>
                  <img
                    className={clsx(css.hobbysImg)}
                    src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334287603_752856276510252_4421287918504714941_n.png?stp=dst-png_p1080x2048&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=pgZa0aATrOYAX-Sik-V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRyIAfGE5DGZ4sO7BVm1AFFYJYkw4jWkD10X6HaMJ07GA&oe=64D9C54D"
                    alt="football pic"
                  />
                </div>
                <div>
                  <img
                    className={clsx(css.hobbysImg)}
                    src="https://scontent.xx.fbcdn.net/v/t1.15752-9/332032790_1603627126716652_8730413911266970293_n.png?_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=IkIS7fvwOD0AX8UqjkK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTToUneYcq0TzMd2imGVF8Zv4StdNi5XbxqA1Ijyj6iog&oe=64D9DF5A"
                    alt="football pic"
                  />
                </div>
              </div>
              <p className={clsx(css.description)}>
                Hello and welcome to my CV!
              </p>
              <p className={clsx(css.description)}>
                I am a young and flourishing Frontend Developer who is
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
              <NavLink to="contact">
                <p className={clsx(css.contactLink)}>Let's talk</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
