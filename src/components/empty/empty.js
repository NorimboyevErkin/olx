import EmptySvg from "../../assets/svg/empty-svg";
import MyButton from "../../components/button/button";
import Typography from "../../components/typography/typography";
import styles from "./empty.styles.module.scss";
function Empty({
  title = "Bu joyda hali e'lonlar yo'q",
  description = "Bu joyda sizning yangi e'lonlaringiz paydo bo'ladi",
  size = "full",
}) {
  return (
    <div
      className={styles.emptyBox}
      style={size === "full" ? { height: window.innerHeight } : null}
    >
      <EmptySvg />
      <Typography type="title" size="22px" weight={700}>
        {title}
      </Typography>
      <Typography
        type="title"
        size="14px"
        align="center"
        color="var(--muted-green-color)"
      >
        {description}
      </Typography>
      <MyButton type="primary-outline" to="/post-new-add">
        E'lon berish
      </MyButton>
    </div>
  );
}

export default Empty;
