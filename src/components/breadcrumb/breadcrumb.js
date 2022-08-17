import { useState } from "react";
import { Breadcrumb } from "antd";
import Typography from "../typography/typography";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./breadcrumb.styles.scss";

function MyBreadcrumb() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [navList, setnavList] = useState(pathname.split("/"));

  return (
    <div className="my-breadcrumb">
      <Typography
        type="title"
        line={1}
        size="16px"
        weight={400}
        color="var(--green-text)"
        icon={<IoChevronBack style={{ fontSize: "20px" }} />}
        onClick={() => navigate(-1)}
      >
        Orqaga
      </Typography>
      <Breadcrumb>
        {navList.map((item, index) => {
          if (index === navList.length - 1) {
            return;
          }
          if (item === "") {
            return (
              <Breadcrumb.Item key={index}>
                <Link to={`/${item}`}>Bosh Sahifa</Link>
              </Breadcrumb.Item>
            );
          }
          return (
            <Breadcrumb.Item key={index}>
              <Link to={`/${item}`}>{item}</Link>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
}

export default MyBreadcrumb;
