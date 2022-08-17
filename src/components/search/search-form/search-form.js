import styles from "./search-form.styles.module.scss";
import { HiOutlineLocationMarker, HiOutlineSearch } from "react-icons/hi";
import { Popover } from "antd";
import { useSelector, useDispatch } from "react-redux";
import CategoryList from "../../category-list/category-list";
import LocationList from "../../location-list/location-list";
import { useLocation } from "react-router-dom";
function SearchForm() {
  const regions = useSelector((state) => state.regions.value);
  const { pathname } = useLocation();
  return (
    <form className={styles.form}>
      <div className={styles.box}>
        <div className={styles.input}>
          <label>
            <span>
              <HiOutlineSearch />
            </span>
            <input type="text" placeholder="Search ..." />
          </label>
        </div>
        <Popover
          placement="bottom"
          content={<LocationList data={regions} />}
          trigger="click"
        >
          <div className={styles.select}>
            <span>
              <HiOutlineLocationMarker />
            </span>
            <p>Location</p>
          </div>
        </Popover>
        <button
          className={pathname === "/" ? styles.submit : styles.submitPrimary}
        >
          <p className={styles.title}> Qidiruv</p>
          <span>
            <HiOutlineSearch />
          </span>
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
