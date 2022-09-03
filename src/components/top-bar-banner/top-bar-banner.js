import { useRef } from "react";
import SuccesSvg from "../../assets/svg/succes-svg";
import styles from "./top-bar-banner.styles.module.scss";
import { IoCloseOutline } from "react-icons/io5";
import Typography from "../typography/typography";
function TopBarBanner({ title, icon = <SuccesSvg />, closeBtn = true }) {
  const alertRef = useRef();
  return (
    <div className={styles.box} ref={alertRef}>
      <div className={styles.info}>
        <span className={styles.icon}>{icon}</span>
        <Typography
          type="title"
          size="14px"
          color="var(--green-text)"
          weight={300}
        >
          {title}
        </Typography>
      </div>
      <div className={styles.action}>
        <div className={styles.button}>
          <button>Batafsil malumot</button>
          <span className={styles.line}></span>
        </div>
        {closeBtn ? (
          <button
            className={styles.close}
            onClick={() => {
              alertRef.current.style.display = "none";
            }}
          >
            <IoCloseOutline />
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default TopBarBanner;
