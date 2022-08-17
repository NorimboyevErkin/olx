import { useState, useRef } from "react";
import "./select.styles.scss";
import { Select } from "antd";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

function MySelect({ placeholder, onChange, children, ...others }) {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const { Option } = Select;

  return (
    <div className="my-select">
      
      <Select
        placeholder={placeholder}
        onChange={onChange}
        onClick={() => setisOpenSelect(!isOpenSelect)}
        allowClear
        {...others}
      >
        {children.map((item, index) => (
          <Option value={item.props.value} key={index} className="option">
            {item}
          </Option>
        ))}
      </Select>
      <span className="arrow-icon">
        {isOpenSelect ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
      </span>
    </div>
  );
}

export default MySelect;
