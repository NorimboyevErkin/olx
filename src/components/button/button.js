import styles from "./button.styles.module.scss";
import { Link } from "react-router-dom";
function MyButton({ type, children, to = "/", ...others }) {
  return (
    <Link
      className={
        type === "primary"
          ? styles.PrimaryBtn
          : type === "primary-outline"
          ? styles.PrimaryOutlineBtn
          : styles.LinkBtn
      }
      {...others}
      to={to}
    >
      {children}
    </Link>
  );
}

export default MyButton;
