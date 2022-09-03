import React , {useEffect} from 'react';
import styles from "./index.styles.module.scss";
import NotAwaySvg from "../../assets/svg/not-away-svg";
import MyButton from "../../components/button/button";
import Container from "../../components/container/container";
import Typography from '../../components/typography/typography';

function NotAway() {
    useEffect(() => {
      return () => {
        window.scrollTo(0, 0);
      };
    }, []);
  return (
    <div className={styles.NotAway} style={{ height: window.innerHeight }}>
      <div className={styles.NotAwayGrid}>
        <NotAwaySvg />
        <Typography type="title" size="22px" weight={500}>
          Sahifa topilmadi
        </Typography>
        <Typography
          type="title"
          size="14px"
          align="center"
          color="var(--muted-green-color)"
        >
          Ehtimol, asosiy sahifada siz qidirgan narsangizni topishingiz mumkin
        </Typography>
        <MyButton type="primary-outline" to="/">
          Bosh sahifaga o'tish
        </MyButton>
      </div>
    </div>
  );
}

export default NotAway;
