import styles from "./main-category-mobile.styles.module.scss";
import { HiChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
function MainCategoryMobile({ data, onClick = null, ...others }) {
  const navigate = useNavigate();
  const { id, img, title, category, color } = data;
  return (
    <div
      className={styles.box}
      style={{ background: color }}
      onClick={onClick ? onClick : () => navigate(`./${id}`)}
    >
      <div className={styles.opacity}></div>
      <div className={styles.grid}>
        <div className={styles.img}>
          <img src={img} alt={id} style={{ background: color }} />
        </div>
        <div className={styles.title}>
          <span className={styles.text}>
            <h3>{title}</h3>
            <p>{category.length} toifa</p>
          </span>
          {category.length > 0 ? (
            <span className={styles.icon}>
              <HiChevronRight />
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default MainCategoryMobile;
