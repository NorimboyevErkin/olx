import Typography from "../../typography/typography";
import styles from "./product-column-card-mobile.styles.module.scss";
import { useNavigate } from "react-router-dom";
import Like from "../../like/like";
function ProductColumnCardMobile({ data }) {
  const { img, title, location, price, atTime } = data;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/advertising/${title}`);
  };
  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.header}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.footer}>
        <div className={styles.top}>
          <div className={styles.title}>
            <Typography
              type="title"
              size="14px"
              style={{ marginBottom: "5px" }}
            >
              {title}
            </Typography>
            <Like size="16px" />
          </div>
          <Typography
            type="title"
            size="16px"
            color="var(--green-text)"
            weight={700}
            line={1}
            style={{ marginTop: "5px" }}
          >
            {price}
          </Typography>
        </div>
        <div className={styles.bottom}>
          <Typography
            type="title"
            size="12px"
            color="var(--green-text)"
            weight={300}
            line={1}
          >
            {location}
          </Typography>
          <Typography
            type="title"
            size="12px"
            color="var(--green-text)"
            weight={300}
            line={1}
          >
            {atTime}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default ProductColumnCardMobile;
