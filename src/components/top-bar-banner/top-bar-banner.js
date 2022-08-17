import { useRef } from "react";
import SuccesSvg from "../../assets/svg/succes-svg";
import styles from "./top-bar-banner.styles.module.scss";
import { IoCloseOutline } from "react-icons/io5";
import Typography from "../typography/typography";
function TopBarBanner() {
  const alertRef = useRef();
  return (
    <div className={styles.box} ref={alertRef}>
      <div className={styles.info}>
        <span className={styles.icon}>
          <SuccesSvg />
        </span>
        <Typography
          type="title"
          size="14px"
          color="var(--green-text)"
          weight={300}
        >
          Qaysi pullik xizmatlar OLXda e'lonlarni oldinga surishda, sotuvni
          yaxshilashga yordam beradi?
        </Typography>
      </div>
      <div className={styles.action}>
        <div className={styles.button}>
          <button>Batafsil malumot</button>
          <span className={styles.line}></span>
        </div>
        <button
          className={styles.close}
          onClick={() => {
            alertRef.current.style.display = "none";
          }}
        >
          <IoCloseOutline />
        </button>
      </div>
    </div>
  );
}

export default TopBarBanner;
