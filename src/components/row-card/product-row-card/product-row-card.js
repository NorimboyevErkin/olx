
import Like from "../../like/like";
import Typography from "../../typography/typography";
import styles from "./product-row-card.styles.module.scss";

function ProductRowCard({ data }) {
  const { img, title, location, price, atTime } = data;
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.info}>
        <div className={styles.top}>
          <Typography>{title}</Typography>
          <span className={styles.price}>{price}</span>
        </div>
        <div className={styles.bottom}>
          <span>
            <span>{location} - </span>
            <span>{atTime}</span>
          </span>
          <Like />
        </div>
      </div>
    </div>
  );
}

export default ProductRowCard;
