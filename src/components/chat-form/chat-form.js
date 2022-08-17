import CardBox from "../card-box/card-box";
import { Avatar } from "antd";
import styles from "./chat-form.styles.module.scss";
import Typography from "../typography/typography";
import PhoneSvg from "../../assets/svg/phone-svg";
import { message } from "antd";

const key = "updatable";

const openMessage = () => {
  message.loading({ content: "Loading...", key });
  setTimeout(() => {
    message.success({ content: "Loaded!", key, duration: 2 });
  }, 1000);
};

function ChatForm() {
  return (
    <CardBox>
      <div className={styles.box}>
        <div className={styles.top}>
          <div className={styles.user}>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            <span>
              <Typography type="text" size="20px" weight={400}>
                Stone
              </Typography>
              <br />
              <Typography
                type="text"
                size="14px"
                weight={400}
                color="var(--muted-green-color)"
              >
                So'nggi faollik 2022 M08 05
              </Typography>
            </span>
          </div>
          <div className={styles.number}>
            <PhoneSvg />
            <Typography type="text" line={1} size="24px" weight={700}>
              <a href="tel:+998900098333">+99 890 0098333</a>
            </Typography>
          </div>
        </div>
        <form className={styles.form}>
          <textarea
            cols="30"
            rows="10"
            placeholder="Xabaringizni yozing..."
          ></textarea>
          <button onClick={(e) => {
            e.preventDefault();
            message.success("This is a success message");
            // openMessage();
          }}>
            Yuborish
          </button>
        </form>
      </div>
    </CardBox>
  );
}

export default ChatForm;
