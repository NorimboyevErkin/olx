import styles from "./search-form-mobile.styles.module.scss";
import { HiOutlineLocationMarker, HiOutlineSearch } from "react-icons/hi";
function SearchFormMobile() {
  return (
    <form className={styles.form}>
      <div className={styles.input}>
        <label>
          <span>
            <HiOutlineSearch />
          </span>
          <input type="text" placeholder="Search ..." />
        </label>
      </div>
      <button className={styles.submit}>
        <span>
          <HiOutlineSearch />
        </span>
      </button>
    </form>
  );
}

export default SearchFormMobile;
