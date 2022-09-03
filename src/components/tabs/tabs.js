import { Tabs } from "antd";
import React from "react";
import "./tabs.styles.scss";

const { TabPane } = Tabs;

const MyTabs = ({ type = "bordered", children ,onChange}) => (
  <div className={type === "bordered" ? "my-tabs" : "my-primary-tabs"}>
    <Tabs defaultActiveKey="0" onChange={onChange}>
      {children.map((item, index) => (
        <TabPane tab={item.props.tab} key={index}>
          {item}
        </TabPane>
      ))}
    </Tabs>
  </div>
);

export default MyTabs;
