import clsx from 'clsx';
import css from './MyPoster.module.css';
export const MyPoster = () => {
  return (
    <div className={clsx(css.myImgWrapper)}>
      <img
        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/315920106_3471030993126450_2307931600603871811_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=EkWKLN9qN1AAX_WU2RK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQVh7DBX65Qq8jr_A26tcC_U4jdCPeySvCZkSm7gGRyxg&oe=6426DAB9"
        alt="my pic"
        className={clsx(css.myImg)}
      />
    </div>
  );
};
