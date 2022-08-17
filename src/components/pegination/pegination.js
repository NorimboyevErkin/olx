import { Pagination } from "antd";
import "./pegination.styles.scss";
function MyPegination() {
  return (
    <div className="pegination-box">
      <Pagination defaultCurrent={1} total={50} />
    </div>
  );
}

export default MyPegination;
