import CardBox from "../card-box/card-box";
import Typography from "../typography/typography";

function AboutInfo() {
  return (
    <CardBox>
      <Typography type="text" size="14px" weight={700}>
        БИЗ ҲАҚИМИЗДА
      </Typography>
      <br />
      <br />
      <Typography
        type="title"
        size="13px"
        line={10}
        weight={400}
        color="var(--muted-green-color)"
      >
        Представляем вашему вниманию большой спектр услуг из искусственного
        камня кварца, акрила,гранита. Мы изготавливаем столешницы, раковины,
        островки, барные стойки. Форма оплаты любая. более подробной информацией
        обращайтесь по телефону.
      </Typography>
    </CardBox>
  );
}

export default AboutInfo;
