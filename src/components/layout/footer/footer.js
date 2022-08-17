import AppStoreSvg from "../../../assets/svg/app-store-svg";
import GooglePlaySvg from "../../../assets/svg/google-play-svg";
import footerList from "../../../utils/data/footer-list";
import Container from "../../container/container";
import Typography from "../../typography/typography";
import FooterBusinessPartner from "./footer-business-partner/footer-business-partner";
import FooterSiteInfo from "./footer-site-info/footer-site-info";
import { useLocation } from "react-router-dom";
import styles from "./footer.styles.module.scss";
import { Tooltip } from "antd";
function Footer() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname.startsWith("/categorys") ? null : (
        <footer className={styles.Footer}>
          {pathname === "/" || pathname === "/#" ? (
            <>
              <FooterBusinessPartner />
              <FooterSiteInfo />
            </>
          ) : null}

          <div className={styles.FooterBox}>
            <Container>
              <div className={styles.FooterBottom}>
                <div className={styles.FooterBottomBox}>
                  {footerList.map((item, index) => (
                    <ul key={index}>
                      {item.map((item, index) => (
                        <li key={index}>
                          <Typography>
                            <a href={item.to}>{item.title}</a>
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  ))}
                  <div className={styles.FooterApps}>
                    <Tooltip placement="bottom" title="Google Play">
                      <a href="#">
                        <GooglePlaySvg />
                      </a>
                    </Tooltip>
                    <Tooltip placement="bottom" title="AppStore">
                      <a href="#">
                        <AppStoreSvg />
                      </a>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
