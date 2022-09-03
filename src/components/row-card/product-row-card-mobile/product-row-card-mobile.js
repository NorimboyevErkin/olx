import Like from "../../like/like";
import Typography from "../../typography/typography";
import styles from "./product-row-card-mobile.styles.module.scss";
import { useNavigate } from "react-router-dom";
function ProductRowCardMobile({ data }) {
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
        <div className={styles.left}>
          <Typography
            type="title"
            weight={400}
            size="14px"
            onClick={handleClick}
          >
            {title}
          </Typography>
          <span className={styles.price}>{price}</span>
          <div className={styles.location}>
            <p>{location}</p>
            <p>{atTime}</p>
          </div>
        </div>
        <div className={styles.right}>
          <Like size="18px" />
        </div>
      </div>
    </div>
  );
}

export default ProductRowCardMobile;
