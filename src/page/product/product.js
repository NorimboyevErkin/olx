import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/container";
import Loader from "../../components/loader/loader";
import useGetFetch from "../../utils/custom-hook/useGetHook";
import styles from "./product.styles.module.scss";
import { useMediaQuery } from "react-responsive";
import Search from "../../components/search";
import RowCard from "../../components/row-card";
import MyCheckbox from "../../components/checkbox/checkbox";
import Typography from "../../components/typography/typography";
import MySelect from "../../components/select/select";
import MyTabs from "../../components/tabs/tabs";

import { MdOutlineViewAgenda } from "react-icons/md";
import { HiOutlineViewGrid } from "react-icons/hi";
import MyBreadcrumb from "../../components/breadcrumb/breadcrumb";
import ColumnCard from "../../components/column-card";
import Grid from "../../components/grid/grid";
import MyPegination from "../../components/pegination/pegination";
import Empty from "../../components/empty/empty";
import MyInput from "../../components/input/input";

function Product() {
  const [isChecked, setisChecked] = useState(false);
  const [isSum, setisSum] = useState(true);
  const [isRowCard, setisRowCard] = useState(true);
  const { mainCategoryId, categoryId } = useParams();
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const searchQuery = categoryId
    ? `category/${categoryId}?_embed=products`
    : `mainCategory/${mainCategoryId}?_embed=products`;

  const { data, status, isLoading, isFetching, isError, error } = useGetFetch(
    "products2",
    searchQuery,
    (data) => console.log(data, "OK"),
    (error) => console.log(error)
  );
  console.log(isFetching, mainCategoryId, categoryId, "isLoading");

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          {data?.products.length > 0 ? (
            <div className={styles.product}>
              <div className={styles.filter}>
                <Search />
                <MyCheckbox
                  title="Faqat fotosurat bilan"
                  isChecked={isChecked}
                  setisChecked={setisChecked}
                />
                <Typography type="title" size="24px" weight={500}>
                  Filtrlar
                </Typography>
                <div className={styles.sort}>
                  <div className={styles.sortByStatus}>
                    <p>Saralash</p>
                    <MySelect placeholder="Tanlangan">
                      <div value="dev-1">Hamma elonlar</div>
                      <div value="dev-2">Yangi</div>
                      <div value="dev-3">b/y</div>
                    </MySelect>
                  </div>
                  <div className={styles.sortByPrice}>
                    <p>Narx</p>
                    <div className={styles.price}>
                      {/* <input type="text" placeholder="dan" /> */}
                      <MyInput type="text" placeholder="dan" />
                      <input type="text" placeholder="gacha" />
                    </div>
                  </div>
                </div>

                <MyTabs>
                  <div tab="Hamma e'lonlar"></div>
                  <div tab="Biznes"></div>
                  <div tab="Jismoniy shaxs"></div>
                </MyTabs>
                <p className={styles.mutedText}>
                  Transport: fb transport sotilshi bo‘yicha e‘lonlar OLX.uz
                  O‘zbekiston, avvalgi Torg.uz
                </p>
                <div className={styles.action}>
                  <MyBreadcrumb />
                  <div className={styles.cardAction}>
                    <button
                      className={isRowCard ? styles.activeBtn : null}
                      onClick={() => setisRowCard(true)}
                    >
                      <MdOutlineViewAgenda />
                    </button>
                    <button
                      className={isRowCard ? null : styles.activeBtn}
                      onClick={() => setisRowCard(false)}
                    >
                      <HiOutlineViewGrid />
                    </button>
                  </div>
                  <div className={styles.priceAction}>
                    <span>valyuta:</span>
                    <span
                      className={
                        isSum
                          ? styles.price + " " + styles.activePrice
                          : styles.price
                      }
                      onClick={() => setisSum(true)}
                    >
                      so'm
                    </span>
                    <span
                      className={
                        isSum
                          ? styles.price
                          : styles.price + " " + styles.activePrice
                      }
                      onClick={() => setisSum(false)}
                    >
                      y.e
                    </span>
                  </div>
                </div>
              </div>
              <h2>Biz {data.products.length} dan ortiq e'lon topdik</h2>
              {isRowCard ? (
                <>
                  {data.products.map((item, index) => (
                    <RowCard data={item} key={index} />
                  ))}
                </>
              ) : (
                <>
                  <Grid
                    minmax={isMobile ? "160px" : "266px"}
                    gap={isMobile ? "10px" : "16px"}
                  >
                    {data.products.map((item, index) => (
                      <ColumnCard data={item} key={index} />
                    ))}
                  </Grid>
                </>
              )}
              <MyPegination />
            </div>
          ) : (
            <Empty />
          )}
        </Container>
      )}
    </>
  );
}

export default Product;
