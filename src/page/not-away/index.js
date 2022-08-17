import styles from "./index.styles.module.scss";
import NotAwaySvg from "../../assets/svg/not-away-svg";
import MyButton from "../../components/button/button";
import Container from "../../components/container/container";

function NotAway() {
  return (
    <div className={styles.NotAway}>
      <div className={styles.NotAwayGrid}>
        <NotAwaySvg />
        <h3>Sahifa topilmadi</h3>
        <p>
          Ehtimol, asosiy sahifada siz qidirgan narsangizni topishingiz mumkin
        </p>
        <MyButton type="primary-outline" to="/">
          Bosh sahifaga o'tish
        </MyButton>
      </div>
    </div>
  );
}

export default NotAway;
