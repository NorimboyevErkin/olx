import styles from "./product-column-card.styles.module.scss";
import { useNavigate } from "react-router-dom";
import Like from "../../like/like";
import Typography from "../../typography/typography";

function ProductColumnCard({ data }) {
  const navigate = useNavigate();
  const { img, title, location, price, atTime } = data;
  const handleClick = () => {
    navigate(`/advertising/${title}`);
  };
  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.header}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.footer}>
        <Typography style={{ margin: "15px 0" }}>{title}</Typography>
        <div className={styles.text}>
          <div className={styles.location}>
            <span>{location} - </span>
            <span>{atTime}</span>
          </div>
          <div className={styles.price}>
            <span>{price}</span>
            <Like />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductColumnCard;
