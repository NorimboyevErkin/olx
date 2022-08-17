import { Collapse } from "antd";
function MyCollapse({ children }) {
  const { Panel } = Collapse;
  return (
    <Collapse defaultActiveKey={["1"]} ghost>
      {/* {children.map((item, index) => (
        <Panel header={item.props.name} key={index}>
          {item}
        </Panel>
      ))} */}
      <Panel header="ko'proq" key="1">
        {children}
      </Panel>
    </Collapse>
  );
}

export default MyCollapse;
