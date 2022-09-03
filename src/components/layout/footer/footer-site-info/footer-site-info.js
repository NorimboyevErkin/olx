import PaperSvg from "../../../../assets/svg/paper-svg";
import Container from "../../../container/container";
import Logo from "../../../logo/logo";
import styles from "./footer-site-info.styles.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function FooterSiteInfo() {
  const category = useSelector((state) => state.category.value);
  return (
    <div className={styles.FooterInfo}>
      <div className={styles.SiteInfo}>
        <Container>
          <div className={styles.SiteInfoBox}>
            <Logo color="var(--green)" />
            <div className={styles.SiteInfoText}>
              <p>Oʻzbekistonda 1-raqamli eʼlonlar servisi</p>
              <p>
                Oʻzbekiston xususiy eʼlonlari OLX (avvalgi torg.uz) – bu yerda
                izlaganingizni topasiz. <br />
                "Eʼlon joylashtirish" tugmasiga bosib, siz istalgan mavzuga oid
                onlayn-eʼlonni joylashtira olasiz – ish qidirish, xizmat
                koʻrsatish, <br />
                avtomobillar, koʻchmas mulk, elektronika va boshqalar savdosi.{" "}
                <br />
                OLX Oʻzbekiston servisi yordamida siz deyarli barcha istagan
                narsangizni sotish yoki sotib olishingiz mumkin. Qidiruv
                funksiyasidan <br />
                foydalanib, oʻzingizni qiziqtirgan mavzuga oid sersisda mavjud
                eʼlonlarni hech bir qiyinchiliksiz topa olasiz. <br />
                OLX Oʻzbekiston – sizning ishonchli va tengi yoʻq yordamchingiz.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.SitePopular}>
        <Container>
          <div className={styles.SitePopularBox}>
            <PaperSvg />
            <div className={styles.SitePopularText}>
              <h4>OLX servisining boʻlimlari:</h4>
              {category.map((item) => (
                <Link key={item.id} to={`/product/${item.id}`}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default FooterSiteInfo;
