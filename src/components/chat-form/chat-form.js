import CardBox from "../card-box/card-box";
import { Avatar } from "antd";
import styles from "./chat-form.styles.module.scss";
import Typography from "../typography/typography";
import PhoneSvg from "../../assets/svg/phone-svg";
import { message } from "antd";
import MyInput from "../input/input";
import MyButton from "../button/button";
import UserInfo from "../user-info/user-info";

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
          <UserInfo name="Stone" lastTime="So'nggi faollik 2022 M08 05" />
          <div className={styles.number}>
            <PhoneSvg />
            <Typography type="text" line={1} size="24px" weight={700}>
              <a href="tel:+998900098333">+99 890 0098333</a>
            </Typography>
          </div>
        </div>
        <form className={styles.form}>
          <MyInput
            type="textarea"
            cols="30"
            rows="10"
            placeholder="Xabaringizni yozing..."
          />
          <MyButton
            type="primary-outline"
            onClick={(e) => {
              e.preventDefault();
              message.success("This is a success message");
              // openMessage();
            }}
            style={{
              margin: "0px 0px 0px auto",
              padding: "10px 30px",
            }}
          >
            Yuborish
          </MyButton>
        </form>
      </div>
    </CardBox>
  );
}

export default ChatForm;
