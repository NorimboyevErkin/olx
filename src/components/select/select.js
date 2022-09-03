import { useState, useRef } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Select } from "antd";
import "./select.styles.scss";

function MySelect({
  field,
  defaultValue,
  placeholder,
  children,
  ...others
}) {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const { Option } = Select;

  return (
    <div className="my-select" {...others}>
      <Select
        {...field}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onClick={() => setisOpenSelect(!isOpenSelect)}
        allowClear
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
