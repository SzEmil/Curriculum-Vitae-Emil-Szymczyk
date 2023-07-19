import clsx from 'clsx';
import css from './Portfolio.module.css';
import { projectsList } from './projectsList';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useInView } from 'react-intersection-observer';
export const Portfolio = () => {
  const { ref, inView } = useInView({
    rootMargin: '-100px 0px',
    triggerOnce: false,
  });

  const [activeProjectId, setActiveProjectId] = useState(null);

  const handleClick = id => {
    setActiveProjectId(id);
  };

  return (
    <section
      ref={ref}
      className={clsx(css.portfolio, inView ? css.isVisible : css.noVisible)}
    >
      <div className={clsx(css.container)}>
        <div className={clsx(css.portfolioWrapper)}>
          <h3 className={clsx(css.portfolioHeadThird)}>
            Some of my projects so far
          </h3>
          <h2 className={clsx(css.portfolioHead)}>Portfolio</h2>
          <div>
            <ul className={clsx(css.projectList)}>
              {projectsList.map(project => (
                <li key={project.id} className={clsx(css.projectItem)}>
                  <div className={clsx(css.projectListCard)}>
                    <a href={project.web}>
                      <div className={clsx(css.projectImgContainer)}>
                        <div
                          className={clsx(css.projectImg)}
                          style={{
                            borderRadius: '5px',
                            width: '350px',
                            height: '350px',
                            background: ` url(${project.picture})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }}
                        ></div>
                      </div>
                    </a>
                    <h3 className={clsx(css.projectDesription)}>
                      {project.name}
                    </h3>
                    <p className={clsx(css.projectDesriptionHeader)}>
                      Tech stack:
                    </p>
                    <ul className={clsx(css.projectDesriptionTechList)}>
                      {project.tech.map(tec => (
                        <li key={nanoid()}>
                          <p className={clsx(css.projectDesriptionTech)}>
                            {tec}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className={clsx(css.projectDesriptionBox)}>
                      <button
                        type="button"
                        className={clsx(css.projectDesriptionBtn)}
                        onClick={() => handleClick(project.id)}
                      >
                        Overview
                      </button>
                      <a
                        className={clsx(css.projectDesriptionGitLink)}
                        href={project.git}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className={clsx(css.projectDesriptionGit)}
                          alt="git pic"
                          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/333613275_157166563826589_61108254476814997_n.png?_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=8RCenn7rIJsAX8c1pDI&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTwG_AV0U75pmx1Cqu7ynQIaIqoBc0XwwNwXi4AE8MjXA&oe=64D9F880"
                        />
                      </a>
                    </div>
                    {activeProjectId === project.id ? (
                      <p className={clsx(css.projectDesriptionOverview)}>
                        {project.overwiev}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
