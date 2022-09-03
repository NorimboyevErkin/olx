import React, {useEffect} from 'react';
import FavoritesSvg from "../../assets/svg/favorites-svg";
import Container from "../../components/container/container";
import Typography from "../../components/typography/typography";
import styles from "./favorites.styles.module.scss";
function Favorites() {
    useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <div className={styles.favorites} style={{ height :window.innerHeight}}>
      <Container>
        <div className={styles.empty}>
          <FavoritesSvg />
          <Typography type="title" size="22px" weight={500}>
            You don't have observed ads
          </Typography>
          <Typography
            type="title"
            size="14px"
            align="center"
            color="var(--muted-green-color)"
            line={3}
          >
            Saralanganlar ro‘yxatiga e‘lon sahifasi yoki e‘lonlar ro‘yhati
            sahifasi orqali kiritish mumkin Endi saralangan e‘lonlar Mening
            e‘lonlarimga kirish amalga oshirilganidan so‘ng, saytning mobil
            ko‘rinishida shuningdek,barcha kompyuterlar orqali doim qo‘l
            ostingizda
          </Typography>
        </div>
      </Container>
    </div>
  );
}

export default Favorites;
