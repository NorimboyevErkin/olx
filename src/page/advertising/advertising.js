import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AboutInfo from "../../components/about-info/about-info";
import MyBreadcrumb from "../../components/breadcrumb/breadcrumb";
import ChatForm from "../../components/chat-form/chat-form";
import ProductColumnCardMobile from "../../components/column-card/product-column-card-mobile/product-column-card-mobile";
import Container from "../../components/container/container";
import LocationInfo from "../../components/location-info/location-info";
import OwlSlider from "../../components/owl-slider/owl-slider";
import ProductInfo from "../../components/product-info/product-info";
import Search from "../../components/search";
import MySlider from "../../components/slider/slider";
import Typography from "../../components/typography/typography";
import { useMediaQuery } from "react-responsive";
import styles from "./advertising.styles.module.scss";

function Advertising() {
  const [dataProduct, setdataProduct] = useState([]);
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const getdata = async (name, setData) => {
    await fetch(`https://olx-fake-api.herokuapp.com/${name}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  
  useEffect(() => {
    getdata("products", setdataProduct);
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div className={styles.product}>
      {isMobile ? <MySlider /> : null}
      <Container>
        {isMobile ? null : (
          <>
            <Search />
            <MyBreadcrumb />
          </>
        )}
        <br />
        <div className={styles.grid}>
          <div className={styles.left}>
            {isMobile ? null : <MySlider />}
            <ProductInfo />
            <ChatForm />
          </div>
          <div className={styles.right}>
            <LocationInfo />
            <AboutInfo />
          </div>
        </div>
        <br />
        <Typography type="title" size="22px" weight={600}>
          O'xshash e'lonlar
        </Typography>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          <OwlSlider pagination={true}>
            {dataProduct.map((item, index) => (
              <ProductColumnCardMobile data={item} key={index} />
            ))}
          </OwlSlider>
        </div>
        <br />
        <Typography type="title" size="22px" weight={600}>
          O'xshash e'lonlar
        </Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            marginBottom: "50px",
          }}
        >
          <OwlSlider>
            {dataProduct.map((item, index) => (
              <ProductColumnCardMobile data={item} key={index} />
            ))}
          </OwlSlider>
        </div>
      </Container>
    </div>
  );
}

export default Advertising;
