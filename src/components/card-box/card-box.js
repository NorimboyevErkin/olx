import styles from "./card-box.styles.module.scss";
function CardBox({ children, ...others }) {
  return (
    <div className={styles.CardBox} {...others}>
      {children}
    </div>
  );
}

export default CardBox;
