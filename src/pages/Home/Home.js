import { About } from 'components/About/About';
import { MyPoster } from 'components/MyPoster/MyPoster';
import { Skills } from 'components/Skills/Skills';
export const Home = () => {
  return (
    <>
      <MyPoster />
      <About />
      <Skills />
    </>
  );
};
