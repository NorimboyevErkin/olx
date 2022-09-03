import { useState } from "react";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import styles from "./like.styles.module.scss";
import { message } from "antd";
function Like({ size = "22px" }) {
  const [isLike, setisLike] = useState(false);
  return (
    <button
      onClick={() => {
        isLike
          ? message.success("Saralanganlardan o'chirildi")
          : message.success("Saralanganlarga qo'shildi");
        setisLike(!isLike);
      }}
      className={styles.like}
      style={{ fontSize: size }}
    >
      {isLike ? <HiHeart style={{color:"var(--green-text)"}}/> : <HiOutlineHeart />}
    </button>
  );
}

export default Like;
