import { Tabs } from "antd";
import React from "react";
import "./tabs.styles.scss";

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const MyTabs = ({ children }) => (
  <div className="my-tabs">
    <Tabs defaultActiveKey="1" onChange={onChange} >
      {children.map((item, index) => (
        <TabPane tab={item.props.tab} key={index} >
          {item}
        </TabPane >
      ))}
    </Tabs>
  </div>
);

export default MyTabs;
