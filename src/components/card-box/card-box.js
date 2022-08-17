import styles from "./card-box.styles.module.scss";
function CardBox({ children }) {
  return <div className={styles.CardBox}>{children}</div>;
}

export default CardBox;
