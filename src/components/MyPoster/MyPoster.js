import clsx from 'clsx';
import css from './MyPoster.module.css';
export const MyPoster = () => {
  return (
    <div className={clsx(css.myImgWrapper)}>
      <img
        src="https://images-ssl.gotinder.com/63b1f2630996fb0100a561b7/640x800_75_c4a66917-9525-4e06-b520-e358e2b2f66c.webp"
        alt="my pic"
        className={clsx(css.myImg)}
      />
    </div>
  );
};
