import React, { useState } from 'react';
import clsx from 'clsx';
import css from './Portfolio.module.css';
import { projectsList } from './projectsList';
import { nanoid } from 'nanoid';
import { useInView } from 'react-intersection-observer';
import { SiGithub } from 'react-icons/si';
export const Portfolio = () => {
  const { ref, inView } = useInView({
    rootMargin: '-100px 0px',
    triggerOnce: true,
  });

  const [activeProjectId, setActiveProjectId] = useState(null);

  const handleClick = id => {
    setActiveProjectId(prevId => (prevId === id ? null : id));
  };

  return (
    <section
      ref={ref}
      className={clsx(css.portfolio, inView ? css.isVisible : css.noVisible)}
    >
      <div className={clsx(css.container)}>
        <div className={clsx(css.portfolioWrapper)}>
          <h3 className={clsx(css.portfolioHeadThird)}>
            Some of my projects made while studying
          </h3>
          <h2 className={clsx(css.portfolioHead)}>Learning jurney</h2>
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
                        <SiGithub size={'24px'} color="white" />
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
