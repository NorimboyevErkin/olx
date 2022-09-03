import Typography from "../typography/typography";
import styles from "./main-category.styles.module.scss";
import { Popover } from "antd";
import CategoryList from "../category-list/category-list";
import { useNavigate } from "react-router-dom";
function MainCategory({ data, isMobile, ...others }) {
  const navigate = useNavigate();
  const { id, img, title, category, color } = data;
  return (
    <Popover
      placement="bottom"
      content={<CategoryList data={data} />}
      trigger="click"
    >
      <div
        className={styles.card}
        onClick={() => {
          if (category.length <= 0) {
            navigate(`/${id}`);
          }
        }}
        {...others}
      >
        <img
          src={img}
          alt={title}
          className={styles.img}
          style={{ background: color }}
        />
        {isMobile ? (
          <Typography size="12px" weight={400} line={1}>
            {title}
          </Typography>
        ) : (
          <h3 className={styles.title}>{title}</h3>
        )}
      </div>
    </Popover>
  );
}

export default MainCategory;
