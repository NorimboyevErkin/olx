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
import styles from "./advertising.styles.module.scss";

function Advertising() {
  const [dataProduct, setdataProduct] = useState([]);
  const getdata = async (name, setData) => {
    await fetch(`https://olx-fake-api.herokuapp.com/${name}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    getdata("products", setdataProduct);
  }, []);
  return (
    <div className={styles.product}>
      <Container>
        <Search />
        <MyBreadcrumb />
        <br />
        <div className={styles.grid}>
          <div className={styles.left}>
            <MySlider />
            <ProductInfo />
            <ChatForm />
          </div>
          <div className={styles.right}>
            <LocationInfo />
            <AboutInfo />
          </div>
        </div>
        <br />
        <Typography type="title" size="24px" weight={500}>
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
        <Typography type="title" size="24px" weight={500}>
          O'xshash e'lonlar
        </Typography>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" ,marginBottom:"50px"}}>
          <OwlSlider pagination={true}>
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
