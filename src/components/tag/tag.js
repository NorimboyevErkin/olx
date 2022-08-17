import "./tag.styles.scss";
import { Tag } from "antd";

function MyTag({ children }) {
  return (
    <div className="my-tag">
      <Tag >{children}</Tag>
    </div>
  );
}

export default MyTag;
