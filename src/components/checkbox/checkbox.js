import { useState } from "react";
import CheckboxBoxCheckedSvg from "../../assets/svg/checkbox-box-checked-svg";
import "./checkbox.styles.scss";

function MyCheckbox({ title, onChangeFunc = null }) {
  const [isChecked, setisChecked] = useState(false);
  const onChange = (e) => {
    setisChecked(e.target.checked);
    if (onChangeFunc) {
        onChangeFunc();
    }
  };
  return (
    <div className="my-checkbox">
      <label>
        <div className="checkbox-grid">
          <div
            className={
              isChecked ? "checkbox-box checkbox-checked" : "checkbox-box"
            }
          >
            {isChecked ? <CheckboxBoxCheckedSvg /> : null}
          </div>
          <input type="checkbox" onChange={onChange} />
          <span>{title}</span>
        </div>
      </label>
    </div>
  );
}

export default MyCheckbox;
