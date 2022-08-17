import Like from "../../like/like";
import Typography from "../../typography/typography";
import styles from "./product-row-card-mobile.styles.module.scss";
function ProductRowCardMobile({ data }) {
  const { img, title, location, price, atTime } = data;
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.info}>
        <div className={styles.left}>
          <Typography type="title" weight={400} size="14px">
            {title}
          </Typography>
          <span className={styles.price}>{price}</span>
          <div className={styles.location}>
            <p>{location}</p>
            <p>{atTime}</p>
          </div>
        </div>
        <div className={styles.right}>
          <Like size="18px"/>
        </div>
      </div>
    </div>
  );
}

export default ProductRowCardMobile;
