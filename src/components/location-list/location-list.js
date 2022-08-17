import { useState } from "react";
import Typography from "../typography/typography";
import styles from "./location-list.styles.module.scss";
import { HiChevronRight } from "react-icons/hi";
function LocationList({ data }) {
  const [i, seti] = useState(null);
  return (
    <div className={styles.box}>
      <div className={styles.title}>
        {i ? (
          <>
            <span onClick={() => seti(null)}>
              <HiChevronRight style={{ fontSize: "18px" }} />
              <h4>Viloyatni o‘zgartirish</h4>
            </span>
            <span onClick={() => seti(null)}>
              <HiChevronRight style={{ fontSize: "18px" }} />
              <h4>Barchasi</h4>
            </span>
          </>
        ) : (
          <span onClick={() => seti(null)}>
            <HiChevronRight style={{ fontSize: "18px" }} />
            <h4>Butun Uzbekistan</h4>
          </span>
        )}
      </div>
      <ul>
        {data.map((item1) => (
          <div className={styles.list} key={item1.id}>
            <li
              onClick={() => seti(item1.id)}
              style={i ? { display: "none" } : null}
            >
              <HiChevronRight style={{ fontSize: "18px" }} />
              <h4>{item1.name}</h4>
            </li>
            {item1.city.map((item) => (
              <li
                key={item.id}
                style={item.regionId === i ? null : { display: "none" }}
              >
                <HiChevronRight style={{ fontSize: "18px" }} />
                <h4>{item.name}</h4>
              </li>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default LocationList;
