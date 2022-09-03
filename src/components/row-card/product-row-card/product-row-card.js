import Like from "../../like/like";
import Typography from "../../typography/typography";
import styles from "./product-row-card.styles.module.scss";
import { useNavigate } from "react-router-dom";
function ProductRowCard({ data }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/advertising/${title}`);
  };
  const { img, title, location, price, atTime } = data;

  return (
    <div className={styles.card}>
      <div className={styles.header} onClick={handleClick}>
        {img.length > 0 ? <img src={img} alt={title} /> : null}
      </div>
      <div className={styles.info}>
        <div className={styles.top}>
          <Typography onClick={handleClick}>{title}</Typography>
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
