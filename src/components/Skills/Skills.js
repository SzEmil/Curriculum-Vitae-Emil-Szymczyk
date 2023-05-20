import clsx from 'clsx';
import css from './Skills.module.css';
import { useInView } from 'react-intersection-observer';

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
              <h3 className={clsx(css.skillsCardHeader)}>Hard Skills</h3>
              <div className={clsx(css.skillsBox)}>
                <div className={clsx(css.skillsCardListWrapper)}>
                  <ul className={clsx(css.skillsCardList)}>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334509218_244149844687202_4513382093802942157_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_ohc=4AJjF67f0V8AX85TFXc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTYQCUPItXDs7P_Hap7-AWtID3AtzIxdJkvtGvSezzc3Q&oe=64903E27"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334058146_754629002597747_3557196023037684166_n.png?stp=cp0_dst-png&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=yQbTZf_wydgAX-1vITw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQBZrTA6AdD7cz7epkGAhU3Jlh0686XSAo4Ywzyw1uxSg&oe=64904AD8"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/332096124_1898921507112075_1867001865560316565_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_ohc=OnXvsi84k4EAX-VUu3K&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRA4fyzXH5sfLgJTP4n4arXGoFz18zlN-wVHmMiTLQztw&oe=64905670"
                        alt="ico pic"
                      />
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
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334297181_654164693380639_5039900204347865199_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Znt--6hRdrgAX-E0FiB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR6ffLLxEIEslgiuMa9GWS3F1qZhJnFscgf6h9aV7rYMw&oe=64904821"
                        alt="ico pic"
                      />
                    </li>
                  </ul>
                  <ul className={clsx(css.skillsCardList)}>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334121956_578550840960648_7016293354037149638_n.png?_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=x0Nh0E7HvxQAX8UeIYu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSO6YsL6vx6xCmD8QWNHXz5k19V_tXHJjMtrG0r02hf2Q&oe=649027AC"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334531802_572897468206591_2342754920938403865_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=pdB7psz50CcAX8Uh-kN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSM3MXfugOZy-5MsfEkopDQgZh4SWXMEexZGjNncMNyXQ&oe=64904C5A"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/332098169_907159687266952_5777785164947134451_n.png?stp=cp0_dst-png&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=uvfbj_YlFOUAX-VlmF_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdREMURszpasPxzaqKCsL7yurgE29m4TUiLEtKgLb1tPSw&oe=64905130"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334676268_1479399715918189_1631366352366251437_n.png?stp=cp0_dst-png&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=K7o0hwFj4ykAX-UnQqi&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQhkVf1bFQR0w9kogtX5tsOJGT0Sd_gensCwBc1dbKfww&oe=64904251"
                        alt="ico pic"
                      />
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
