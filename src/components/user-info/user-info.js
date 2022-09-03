import AvatarSvg from "../../assets/svg/avatar-svg";
import Typography from "../typography/typography";
import styles from "./user-info.styles.module.scss";

function UserInfo({ name, lastTime, weightIcon = "320", heightIcon = "32" }) {
  return (
    <div className={styles.user}>
      <AvatarSvg weight={weightIcon} height={heightIcon} />
      <span>
        <Typography type="text" size="18px" weight={400}>
          {name}
        </Typography>
        <br />
        <Typography
          type="text"
          size="13px"
          weight={400}
          color="var(--muted-green-color)"
        >
          {lastTime}
        </Typography>
      </span>
    </div>
  );
}

export default UserInfo;
