import Typography from "../typography/typography";
import styles from "./main-category-mobile.styles.module.scss";
import { Popover } from "antd";
import { HiChevronRight } from "react-icons/hi";
import CategoryList from "../category-list/category-list";
import { useNavigate } from "react-router-dom";
function MainCategoryMobile({ data, ...others }) {
  const navigate = useNavigate();
  const { id, img, title, category, color } = data;
  return (
    <Popover
      placement="bottom"
      content={<CategoryList data={data} />}
      trigger="click"
    >
      <div
        className={styles.box}
        style={{ background: color }}
        onClick={() => navigate(`./${id}`)}
      >
        <div className={styles.opacity}></div>
        <div className={styles.grid}>
          <img
            src={img}
            alt={title}
            className={styles.img}
            style={{ background: color }}
          />
          <div className={styles.title}>
            <h3>{title}</h3>
            <HiChevronRight style={{ fontSize: "20px" }} />
          </div>
        </div>
      </div>
    </Popover>
  );
}

export default MainCategoryMobile;
