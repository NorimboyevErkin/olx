import styles from "./product-column-card.styles.module.scss";
import { useNavigate } from "react-router-dom";
import Like from "../../like/like";
import Typography from "../../typography/typography";
function ProductColumnCard({ data }) {
  const navigate = useNavigate();
  const { img, title, location, price, atTime, valute } = data;
  const handleClick = () => {
    navigate(`/advertising/${title}`);
  };
  return (
    <div className={styles.card}>
      <div className={styles.header} onClick={handleClick}>
        {img?.length > 0 ? <img src={img} alt={title} /> : null}
      </div>
      <div className={styles.footer}>
        <Typography style={{ margin: "15px 0" }} onClick={handleClick}>
          {title}
        </Typography>
        <div className={styles.text}>
          <div className={styles.location}>
            <span>{location} - </span>
            <span>{atTime}</span>
          </div>
          <div className={styles.price}>
            <span>
              {price} {valute}
            </span>
            <Like />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductColumnCard;
