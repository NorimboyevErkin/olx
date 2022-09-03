import { Dropdown } from "antd";
import "./dropdown.styles.scss";

function makeMenu(menu) {
  return (
    <ul className="menu-container-box">
      {menu.map((item, index) => {
        const { label, title, icon, type } = item;
        if (type === "divider") {
          return (
            <li key={index} className="ant-dropdown-menu-item-divider"></li>
          );
        }
        return (
          <li
            key={index}
            className={
              title
                ? "menu-container-box-items-title"
                : "menu-container-box-items"
            }
          >
            <span>{icon}</span>
            {label}
          </li>
        );
      })}
    </ul>
  );
}

function MyDropdown({ menu, children, placement = "bottom" }) {
  const newMenu = makeMenu(menu);
  return (
    <Dropdown overlay={newMenu} placement={placement}>
      <div className="drop-down-btn-box">{children}</div>
    </Dropdown>
  );
}

export default MyDropdown;
