import Typography from "../typography/typography";
import styles from "./category-list.styles.module.scss";
import { HiChevronRight } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
function CategoryList({
  data,
  header = true,
  headerTitle = "Barchasini ko'rish",
  headerOnClick = null,
  itemOnClick = null,
}) {
  const navigate = useNavigate();
  const { id, title, category } = data;
  return (
    <div className={styles.box}>
      {header ? (
        <div className={styles.title}>
          <span
            onClick={
              headerOnClick
                ? headerOnClick
                : () => {
                    navigate(`../product/${id}`);
                  }
            }
          >
            <Typography
              icon={<HiChevronRight style={{ fontSize: "18px" }} />}
              color="#ababab"
            >
              {headerTitle}
            </Typography>
          </span>
        </div>
      ) : null}
      <ul>
        {category.map((item) => (
          <li key={item.id}>
            <span
              onClick={
                itemOnClick
                  ? () => itemOnClick(item)
                  : () => navigate(`../product/${title}/${item.id}`)
              }
            >
              <Typography
                icon={<HiChevronRight style={{ fontSize: "18px" }} />}
              >
                {item.title}
              </Typography>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
