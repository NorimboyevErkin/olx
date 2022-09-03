import StatisticSvg from "../../../../assets/svg/statistic-svg";
import MyButton from "../../../button/button";
import Container from "../../../container/container";
import styles from "./footer-business-partner.styles.module.scss";
function FooterBusinessPartner() {
  return (
    <div className={styles.FooterBusinessPartner}>
      <Container>
        <div className={styles.FooterBusinessPartnerBox}>
          <StatisticSvg />
          <strong>OLX bilan internetda biznesingizni boshlang!</strong>
          <MyButton type="primary" style={{ width: "130px" }}>
            Batafsil
          </MyButton>
        </div>
      </Container>
    </div>
  );
}

export default FooterBusinessPartner;
