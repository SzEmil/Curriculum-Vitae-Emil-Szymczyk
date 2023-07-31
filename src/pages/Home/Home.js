import { About } from 'components/About/About';
// import { MyPoster } from 'components/MyPoster/MyPoster';
import { Portfolio } from 'components/Portfolio/Portfolio';
import { Skills } from 'components/Skills/Skills';
import { TopProjects } from 'components/TopProjects/TopProjects';
export const Home = () => {
  return (
    <>
      <About />
      <Skills />
      <TopProjects />
      <Portfolio />
    </>
  );
};
