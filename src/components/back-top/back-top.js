import { BackTop } from "antd";
import { RiArrowUpSLine } from "react-icons/ri";
import "./back-top.styles.scss";
function BackTopBox() {
  return (
    <BackTop>
      <button className="BackTopButton">
        <RiArrowUpSLine />
      </button>
    </BackTop>
  );
}

export default BackTopBox;
