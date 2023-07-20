import clsx from 'clsx';
import css from './Skills.module.css';
import { useInView } from 'react-intersection-observer';
import skillsImages from './utils';
import { SiTypescript } from 'react-icons/si/';
export const Skills = () => {
  const { ref, inView } = useInView({
    rootMargin: '-100px 0px',
    triggerOnce: false,
  });
  return (
    <section
      ref={ref}
      className={clsx(css.skills, inView ? css.isVisible : css.noVisible)}
    >
      <div className={clsx(css.container)}>
        <div className={clsx(css.skillsWrapper)}>
          <h3 className={clsx(css.skillsHeadThird)}>Propably most important</h3>
          <h2 className={clsx(css.skillsHead)}>My Skills</h2>
          <div className={clsx(css.skillsCardWrapper)}>
            <div className={clsx(css.skillsCard)}>
              <h3 className={clsx(css.skillsCardHeader)}>Frontend</h3>
              <div className={clsx(css.skillsBox)}>
                <div className={clsx(css.skillsCardListWrapper)}>
                  <ul className={clsx(css.skillsCardList)}>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src={skillsImages.html}
                        alt="ico pic"
                      />
                      <p className={css.imgDescription}>HTML5</p>
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src={skillsImages.css}
                        alt="ico pic"
                      />
                      <p className={css.imgDescription}>CSS3</p>
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src={skillsImages.javascript}
                        alt="ico pic"
                      />
                      <p className={css.imgDescription}>Javascript (ES6)</p>
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <SiTypescript
                        color="blue"
                        className={clsx(css.skillsCardImg)}
                        style={{
                          backgroundColor: 'white',
                          borderRadius: '5px',
                        }}
                      />
                      <p className={css.imgDescription}>Typescript</p>
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src={skillsImages.react}
                        alt="ico pic"
                      />
                      <p className={css.imgDescription}>React/Redux</p>
                    </li>
                  </ul>
                  <ul className={clsx(css.skillsCardList)}>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src={skillsImages.next}
                        alt="ico pic"
                      />
                      <p className={css.imgDescription}>NextJs (SSR)</p>
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src={skillsImages.api}
                        alt="ico pic"
                      />
                      <p className={css.imgDescription}>Api</p>
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src={skillsImages.sass}
                        alt="ico pic"
                      />
                      <p className={css.imgDescription}>SASS</p>
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src={skillsImages.rwd}
                        alt="ico pic"
                      />
                      <p className={css.imgDescription}>RWD</p>
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src={skillsImages.seo}
                        alt="ico pic"
                      />
                      <p className={css.imgDescription}>SEO</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={clsx(css.skillsCard)}>
              <h3 className={clsx(css.skillsCardHeader)}>Backend</h3>
              <div className={clsx(css.skillsBox)}>
                <div className={clsx(css.skillsCardListWrapper)}>
                  <ul className={clsx(css.skillsCardList)}>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src={skillsImages.nodejs}
                        alt="ico pic"
                      />
                      <p className={css.imgDescription}>NodeJs</p>
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src={skillsImages.express}
                        alt="ico pic"
                      />
                      <p className={css.imgDescription}>Express</p>
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src={skillsImages.mongodb}
                        alt="ico pic"
                      />
                      <p className={css.imgDescription}>MongoDB</p>
                    </li>
                  </ul>
                  <ul className={clsx(css.skillsCardList)}>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src={skillsImages.postman}
                        alt="ico pic"
                      />
                      <p className={css.imgDescription}>Postman</p>
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src={skillsImages.firebase}
                        alt="ico pic"
                      />
                      <p className={css.imgDescription}>Firebase</p>
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src={skillsImages.jwt}
                        alt="ico pic"
                      />
                      <p className={css.imgDescription}>JWT</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={clsx(css.skillsCard)}>
              <h3 className={clsx(css.skillsCardHeader)}>Soft Skills</h3>
              <div className={clsx(css.skillsBox)}>
                <div className={clsx(css.skillsCardListWrapper)}>
                  <ul className={clsx(css.skillsCardSoftList)}>
                    <li className={clsx(css.skillsCardItem)}>
                      <p className={clsx(css.skillsCardSoft)}>Leadership</p>
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <p className={clsx(css.skillsCardSoft)}>Teamwork</p>
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <p className={clsx(css.skillsCardSoft)}>
                        Problems solving
                      </p>
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <p className={clsx(css.skillsCardSoft)}>Scrum</p>
                    </li>
                  </ul>
                  <ul className={clsx(css.skillsCardSoftList)}>
                    <li className={clsx(css.skillsCardItem)}>
                      <p className={clsx(css.skillsCardSoft)}>Comunication</p>
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <p className={clsx(css.skillsCardSoft)}>Punctuality</p>
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <p className={clsx(css.skillsCardSoft)}>Adaptability</p>
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <p className={clsx(css.skillsCardSoft)}>
                        Self-discipline
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
