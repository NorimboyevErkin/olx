import { Switch } from "antd";

const MySwitch = ({ field, value, defaultValue }) => (
  <Switch
    {...field}
    checked={value}
    defaultChecked
    defaultValue={defaultValue}
  />
);

export default MySwitch;
