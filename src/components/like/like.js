import { useState } from "react";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import styles from "./like.styles.module.scss";

function Like({ size = "22px" }) {
  const [isLike, setisLike] = useState(false);
  return (
    <button
      onClick={() => setisLike(!isLike)}
      className={styles.like}
      style={{ fontSize: size }}
    >
      {isLike ? <HiHeart /> : <HiOutlineHeart />}
    </button>
  );
}

export default Like;
