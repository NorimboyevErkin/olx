import React, { useEffect, useState } from "react";
import Container from "../../components/container/container";
import MainCategory from "../../components/main-category/main-category";
import TopBarBanner from "../../components/top-bar-banner/top-bar-banner";
import MyTabs from "../../components/tabs/tabs";
import MyCheckbox from "../../components/checkbox/checkbox";
import MySelect from "../../components/select/select";
import CardBox from "../../components/card-box/card-box";
import styles from "./home.styles.module.scss";
import Typography from "../../components/typography/typography";
import OwlSlider from "../../components/owl-slider/owl-slider";
import { useMediaQuery } from "react-responsive";
import Grid from "../../components/grid/grid";
import MainCategoryMobile from "../../components/main-category-mobile/main-category-mobile";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useGetFetch from "../../utils/custom-hook/useGetHook";
import { setmainCategory } from "../../redux-toolkit/reducers/mainCategory";
import NotAway from "../not-away";
import Loader from "../../components/loader/loader";
import ColumnCard from "../../components/column-card";
import Search from "../../components/search";
function Home() {
  const category = useSelector((state) => state.category.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const { data, isLoading, isError } = useGetFetch(
    "products1",
    "products",
    (data) => console.log("OK"),
    (error) => console.log(error)
  );

  const breakpoints = {
    0: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    350: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
    620: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  };

  if (isError) {
    return <NotAway />;
  }
  return (
    <>
      <div className={styles.home}>
        <TopBarBanner />
        <Container>
          <Search />
        </Container>
        <div className={styles.category}>
          {isMobile ? (
            <div className={styles.mobileGrid}>
              <div className={styles.top}>
                <h3>Bosh toifalar</h3>
                <button onClick={() => navigate("/categorys")}>See all</button>
                <span></span>
              </div>
              <OwlSlider breakpoints={breakpoints}>
                {category.map((item, index) => (
                  <MainCategory
                    key={`${index}-list`}
                    data={item}
                    isMobile={isMobile}
                    onClick={() => navigate(`categorys/${item.id}`)}
                  />
                ))}
              </OwlSlider>
            </div>
          ) : (
            <>
              <Container>
                <h2>Bosh toifalar</h2>
                <Grid minmax={"125px"} gap={"32px 10px"}>
                  {category.map((item, index) => (
                    <MainCategory key={`${index}-list`} data={item} />
                  ))}
                </Grid>
              </Container>
            </>
          )}
        </div>
        <Container>
          <h2>Yangi elonlar</h2>
          <Grid
            minmax={isMobile ? "160px" : "266px"}
            gap={isMobile ? "10px" : "16px"}
          >
            {data?.map((item, index) => (
              <ColumnCard data={item} key={index} />
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Home;
