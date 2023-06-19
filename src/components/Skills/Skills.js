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
                        src="https://z-p3-scontent.xx.fbcdn.net/v/t1.15752-9/334509218_244149844687202_4513382093802942157_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_ohc=wMh_4pnNa4cAX8vKkLd&_nc_ht=z-p3-scontent.xx&oh=03_AdT7IXi05hryQjXkfKqyiC2Ai0X04DfBMd8mA95XRaGTZA&oe=64B64167"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://z-p3-scontent.xx.fbcdn.net/v/t1.15752-9/334058146_754629002597747_3557196023037684166_n.png?stp=cp0_dst-png&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=mww49VmMaqQAX9461aH&_nc_ht=z-p3-scontent.xx&oh=03_AdQMN5hlt5BfuI8X4C_L4IoIgT2yZgIxLxPDwJbqc3vjkA&oe=64B64E18"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://z-p3-scontent.xx.fbcdn.net/v/t1.15752-9/332096124_1898921507112075_1867001865560316565_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_ohc=fI_XNY_MTAwAX_xILw0&_nc_ht=z-p3-scontent.xx&oh=03_AdTojanWgu2s5qoTCq-YfVa8CgqFtYUVUB1BqbglaZ_2SQ&oe=64B659B0"
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
                        src="https://z-p3-scontent.xx.fbcdn.net/v/t1.15752-9/334297181_654164693380639_5039900204347865199_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=J_0HNyZOJpIAX_45Cth&_nc_ht=z-p3-scontent.xx&oh=03_AdThu5v-ioM84AACHYC5tw73ZgbfJNRD5QVGBQQRuqHCbQ&oe=64B64B61"
                        alt="ico pic"
                      />
                    </li>
                  </ul>
                  <ul className={clsx(css.skillsCardList)}>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://z-p3-scontent.xx.fbcdn.net/v/t1.15752-9/332098169_907159687266952_5777785164947134451_n.png?stp=cp0_dst-png&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=_dGXwgOArb0AX-fO34_&_nc_ht=z-p3-scontent.xx&oh=03_AdSnTDU4lDLEpdE1ewa8aLJXH_iUI3S6utHTcC93bPejzg&oe=64B65470"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://z-p3-scontent.xx.fbcdn.net/v/t1.15752-9/334676268_1479399715918189_1631366352366251437_n.png?stp=cp0_dst-png&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Exh53v0fwAkAX_Dh-ay&_nc_ht=z-p3-scontent.xx&oh=03_AdSFj0ZY43Vq0Opsa1luhLzTBgMrbAyily2jr09AlO41jA&oe=64B64591"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://z-p3-scontent.xx.fbcdn.net/v/t1.15752-9/334531802_572897468206591_2342754920938403865_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=SIhuA-z2EewAX_1SCT0&_nc_ht=z-p3-scontent.xx&oh=03_AdQTfERlNgRVzzLAYIiDXK4UC3_bND3T3Ejy1UwtC1n5TQ&oe=64B64F9A"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://z-p3-scontent.xx.fbcdn.net/v/t1.15752-9/334121956_578550840960648_7016293354037149638_n.png?_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Cwl-NIlv3xgAX_mfofq&_nc_ht=z-p3-scontent.xx&oh=03_AdT28rBGrSG_54uIg-_qIio1v41J6CibyRkjahIo6Fyqig&oe=64B6632C"
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
