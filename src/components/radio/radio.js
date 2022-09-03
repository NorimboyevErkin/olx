import { Radio } from "antd";
import styles from "./radio.styles.module.scss";

function MyRadio({ field, defaultValue, children, alert }) {
  return (
    <>
      <Radio.Group {...field} defaultValue={defaultValue}>
        {children.map((item, index) => (
          <Radio.Button value={item.props.radio} key={index}>
            {item}
          </Radio.Button>
        ))}
      </Radio.Group>
      {alert ? <p className={styles.alert}>{alert}</p> : null}
    </>
  );
}

export default MyRadio;
