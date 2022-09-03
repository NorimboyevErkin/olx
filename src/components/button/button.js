import styles from "./button.styles.module.scss";
import { Link } from "react-router-dom";
function MyButton({
  type,
  children,
  to = null,
  disabled = false,
  onClick,
  ...others
}) {
  return (
    <>
      {to ? (
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
      ) : (
        <button
          className={
            type === "primary"
              ? styles.PrimaryBtn
              : type === "primary-outline"
              ? styles.PrimaryOutlineBtn
              : styles.LinkBtn
          }
          onClick={disabled ? null : onClick}
          {...others}
        >
          {children}
        </button>
      )}
    </>
  );
}

export default MyButton;
