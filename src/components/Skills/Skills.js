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
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334509218_244149844687202_4513382093802942157_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Zr2fz2d6CoMAX8pDbAN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdST0myaX_2k-omBU-9pDP2ncghpc4UzjWiornjrAOZ_Vg&oe=64D9D9E7"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334058146_754629002597747_3557196023037684166_n.png?stp=cp0_dst-png&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=XuZIXKOWqtMAX-VGR_p&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS6VgwwFnPLtbtkT8yzj0kPd2NTpaJqv1LvRoERjE_qvg&oe=64D9E698"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/332096124_1898921507112075_1867001865560316565_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_ohc=4FJ7TRSss2gAX-uWotL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQpo46d-vp4E1qgz89_1nGa13b2i7eG-A2UqyagHcW-VA&oe=64D9F230"
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
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334297181_654164693380639_5039900204347865199_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=h_tVMG564eUAX-4vcDq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTEEnPlCcSivl-aWYj9Zp0xRZEyZQ49TIwH7V-JhSTgXg&oe=64D9E3E1"
                        alt="ico pic"
                      />
                    </li>
                  </ul>
                  <ul className={clsx(css.skillsCardList)}>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334121956_578550840960648_7016293354037149638_n.png?_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=nfDA9DoatR0AX-YpeTs&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ-kVlYqsjQGTlTv6DOlvC-W_Lt0rPdYujI7RoJJ6Rsgw&oe=64D9C36C"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334531802_572897468206591_2342754920938403865_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=M_XnjrFXyBkAX_C38cr&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRee-uvPywXToZdZOMW-omvJrAtv67DXkwZhaCHYzVpfQ&oe=64D9E81A"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334676268_1479399715918189_1631366352366251437_n.png?stp=cp0_dst-png&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=OvHHxtWug-EAX-JwvD6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR7LV3UxVfwdV9vgef8mAc95GUG8FNzLBzXSBlz1Ag-Fw&oe=64D9DE11"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/332098169_907159687266952_5777785164947134451_n.png?stp=cp0_dst-png&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=OnYYzL1PWT8AX9AmE9j&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQIj2KHhU24M55V1_q4cNhccCwTjcGk9afvafPh0HMuGg&oe=64D9ECF0"
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
