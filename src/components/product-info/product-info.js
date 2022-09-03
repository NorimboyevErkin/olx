import CardBox from "../card-box/card-box";
import Like from "../like/like";
import MyTag from "../tag/tag";
import Typography from "../typography/typography";
import styles from "./product-info.styles.module.scss";
import { useMediaQuery } from "react-responsive";
function ProductInfo() {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <CardBox>
      <div className={styles.box}>
        <div className={styles.top}>
          <Typography type="title" size="12px" color="var(--muted-green-color)">
            Joylashtirildi 2022-08-05
          </Typography>
          <Like />
        </div>
        <Typography type="title" size={isMobile ? "24px" : "32px"}>
          Искусственный камень, столешницы,ванны подоконники,лестницы
        </Typography>
        <div className={styles.tags}>
          <MyTag>Biznes</MyTag>
          <MyTag>Holati: Yangi</MyTag>
          <MyTag>HP</MyTag>
        </div>
        <Typography type="title" size="20px" weight={700}>
          TAVSIF
        </Typography>
        <p>
          Установка каменных материалов, акрил,кварц. Кухонные столешницы,ванные
          раковины и прочее. Кварц 1 погонный метр от 130$-360 Акрил 1 погонный
          метр от 110$-160 Один из лучших камней в Ташкенте, работаем более 10
          лет на рынке Узбекистана. Качество. Гарантия. Работаем 24/7 телефон
          доступен с 9:00 до 23:00
        </p>
      </div>
    </CardBox>
  );
}

export default ProductInfo;
