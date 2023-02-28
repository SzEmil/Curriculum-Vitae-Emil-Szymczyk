import { NavLink, Outlet } from 'react-router-dom';
import { OverviewLink } from 'components/OverviewLink/OverviewLink';
import clsx from 'clsx';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <div className={clsx(css.container)}>
          <div className={clsx(css.wrapper)}>
            <p className={clsx(css.hello)}>Hi, I'm</p>
            <h1 className={clsx(css.headName)}>Emil Szymczyk</h1>
            <p className={clsx(css.profesion)}>Frontend developer</p>
            <div style={{ height: '60px' }}>
              <OverviewLink />
            </div>
            <div className={clsx(css.contactBox)}>
              <NavLink to="contact">
                <p className={clsx(css.contactLink)}>Let's talk</p>
              </NavLink>
              <a
                className={clsx(css.cvLink)}
                href="../files/Jr_Frontend_dev_Emil_Szymczyk.pdf"
                download
              >
                Download CV
              </a>
            </div>
            <NavLink className={clsx(css.homeLink)} to="/">
              Home
            </NavLink>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
};