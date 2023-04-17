import clsx from 'clsx';
import css from './Skills.module.css';
import { useInView } from 'react-intersection-observer';
export const Skills = () => {
  const { ref, inView } = useInView({
    rootMargin: '-100px 0px',
    triggerOnce: false,
  });
  return (
    <section ref={ref} className={clsx(css.skills, inView ? css.isVisible : css.noVisible)}>
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
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334509218_244149844687202_4513382093802942157_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeHwlB68BMziq_cKBrRy-4Y_i7XSR1G_N12LtdJHUb83Xc8ZKgC39EpRa7xuCzy8R05f0KV9Q9WJ0fkfXZoe9pun&_nc_ohc=DwSW4QmoM7QAX-fsfW6&_nc_ht=scontent.xx&oh=03_AdS59RrTessUtjiYiy57THFQw6iTQ3pb_4bbiokjtCd24g&oe=645DB4A7"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334058146_754629002597747_3557196023037684166_n.png?stp=cp0_dst-png&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeHtMXkPEl8FHpBWJAsGYL55IJ0y2g3FC_QgnTLaDcUL9MbMrjvB0rlpLtnLMkRYEIUc09FfHNyoTSNM5Y-6StSV&_nc_ohc=CzIJGGeYVQYAX-CaTNO&_nc_ht=scontent.xx&oh=03_AdRsgpBeS7tgt6U0AvE6fDV4goZN0g3dS-SkkYu9D8iBTg&oe=645DC158"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/332096124_1898921507112075_1867001865560316565_n.png?stp=cp0_dst-png&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeFfqS6DExKppyohkgMyUlamEmqmQKImISgSaqZAoiYhKNWWd0C5rjfjKpG-v9wnoZIghtyOfRAyjcF0NUrnqv8x&_nc_ohc=LrZj0ONsmoAAX-RNKwy&_nc_ht=scontent.xx&oh=03_AdQJ8EsWhDo_3ZBAySJNpvUXQiPV8p2NEW1cKIaCozojew&oe=645DCCF0"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334297181_654164693380639_5039900204347865199_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeF6yuVCFx13ocDhebvHYINjL0SQPpao0DkvRJA-lqjQOdpTTQP-838p1nCR8K9MmgyIfBR4n-XxCv1c214ahDgB&_nc_ohc=9iDoRcuW86YAX_vwoy6&_nc_ht=scontent.xx&oh=03_AdTmUUwfgL_rvkYPHWtKxTrFxuQT5g29nmg7g9YAG2Ejog&oe=645DBEA1"
                        alt="ico pic"
                      />
                    </li>
                  </ul>
                  <ul className={clsx(css.skillsCardList)}>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334676268_1479399715918189_1631366352366251437_n.png?stp=cp0_dst-png&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeEeq23e5MOc1xTN0kiaLT4JdBzwaTqETRt0HPBpOoRNG6Yx9CO1ZHwh2Rld4-bGa5XL1tl8WFpk_qYYjTwAtmoW&_nc_ohc=8Ab_ujTL2ukAX_sNNuq&_nc_ht=scontent.xx&oh=03_AdTxNomt0kJ8vo6m6_e0y6TZgXaeMEz8H0GNJBJtnBy6DQ&oe=645DB8D1"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334531802_572897468206591_2342754920938403865_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeEY9mhJeeWJJ6QVp8UDLFnR8ob3E_4TPhnyhvcT_hM-GXpaKxGtrOFt4yPNjpUcm4bl4i8BRTaXBxiL1hrYb7hD&_nc_ohc=uCc7qxmHSroAX-Peqrc&_nc_ht=scontent.xx&oh=03_AdR17FZCyd102CvCVCykqCQCUFOp2TaZ640J9UJVVHRPXw&oe=645DC2DA"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/332098169_907159687266952_5777785164947134451_n.png?stp=cp0_dst-png&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeFqSdjgMNJerkqVnFLNM0xXzb3VtCdsI5_NvdW0J2wjn4j83gNuMBZvCV4fnJmGCuWxAmYwZKcWAYmZE6fiUcTl&_nc_ohc=Z_Xh63yVc90AX9lTn4D&_nc_ht=scontent.xx&oh=03_AdSmQM9kGUSr5l4NwziobcBrARgmLN3_cN-wwQVhHGezcA&oe=645DC7B0"
                        alt="ico pic"
                      />
                    </li>
                    <li className={clsx(css.skillsCardItem)}>
                      <img
                        className={clsx(css.skillsCardImg)}
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/334121956_578550840960648_7016293354037149638_n.png?_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeHqa7kGW_B-5Wa86w2g22Lmu0yOYYsBNYm7TI5hiwE1ieVRKoceXRAjAooRJhGge5rhzqH0HGiq7Isk6FOKIwDy&_nc_ohc=32hCQ-7NJCcAX9wZDpl&_nc_ht=scontent.xx&oh=03_AdTsXk0wOCiuaxWq5kQYWskiBGcWgNadKIXJoUtHrozDxw&oe=645DD66C"
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
                      <p className={clsx(css.skillsCardSoft)}>Adaptability</p>
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
