import Typography from "../typography/typography";
import styles from "./category-list.styles.module.scss";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
function CategoryList({ data }) {
  const { id, title, category } = data;
  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <Link to={`../product/${id}`}>
          <Typography
            icon={<HiChevronRight style={{ fontSize: "18px" }} />}
            color="#ababab"
          >
            Barchasini ko'rish
          </Typography>
        </Link>
      </div>
      <ul>
        {category.map((item) => (
          <li key={item.id}>
            <Link to={`../product/${title}/${item.id}`}>
              <Typography
                icon={<HiChevronRight style={{ fontSize: "18px" }} />}
              >
                {item.title}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
