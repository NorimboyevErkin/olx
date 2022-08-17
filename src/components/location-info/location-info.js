import CardBox from "../card-box/card-box";
import Typography from "../typography/typography";
import { HiOutlineLocationMarker } from "react-icons/hi";
import styles from "./location-info.styles.module.scss";
function LocationInfo() {
  return (
    <CardBox>
      <div className={styles.location}>
        <Typography type="text" size="14px" weight={700}>
          JOYLASHUV
        </Typography>
        <div className={styles.grid}>
          <div className={styles.info}>
            <HiOutlineLocationMarker style={{ fontSize: "34px" }} />
            <div className={styles.text}>
              <Typography type="title" size="16px" weight={700}>
                Toshkent, Yakkasaroy tumani
              </Typography>
              <Typography
                type="title"
                size="13px"
                weight={400}
                color="var(--muted-green-color)"
              >
                Toshkent viloyati
              </Typography>
            </div>
          </div>
          <div className={styles.map}>
            <img
              src="https://www.olx.uz/app/static/media/staticmap.65e20ad98.svg"
              alt="map"
            />
          </div>
        </div>
      </div>
    </CardBox>
  );
}

export default LocationInfo;
