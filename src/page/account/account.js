// import { Empty } from "antd";
import React, { useContext, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Container from "../../components/container/container";
import Empty from "../../components/empty/empty";
import MyTabs from "../../components/tabs/tabs";
import UserInfo from "../../components/user-info/user-info";
import { CurrentAccount } from "../../context";
import styles from "./account.styles.module.scss";

function Account() {
  const { curAccount, setcurAccount } = useContext(CurrentAccount);
  const navigate = useNavigate();

  console.log(curAccount, "account");
  return (
    <>
      {curAccount ? (
        <Container>
          <div className={styles.Account}>
            <UserInfo
              name={curAccount?.email}
              lastTime={curAccount?.metadata.lastSignInTime}
              weightIcon="80"
              heightIcon="80"
            />
            <div className={styles.messageContainer}>
              <p>
                <strong>
                  E'tibor bering, OLX.UZ-da yetkazib berish xizmati mavjud emas
                </strong>
                <br />
                Xaridni yetkazib berish orqali rasmiylashtirish haqidagi
                havolalarni e'tiborsiz qoldiring. Eng muhimi, hech qachon bank
                kartangiz maxfiy raqamini yozmang
              </p>
              <a
                href="https://help.olx.uz/hc/ru/articles/360013813097-Xavfsizlik-to-g-risida-umumiy-ma-lumot-"
                target="_blank"
                rel="noreferrer"
              >
                Internetda xavfsiz xarid qilishni bilib oling
              </a>
            </div>
            <div className={styles.tabs}>
              <MyTabs>
                <div tab="Elonlar">
                  <Empty size="min" />
                </div>
                <div tab="Xabarlar">
                  <Empty size="min" />
                </div>
              </MyTabs>
            </div>
          </div>
        </Container>
      ) : (
        <Navigate to="/register" replace />
      )}
    </>
  );
}

export default Account;
