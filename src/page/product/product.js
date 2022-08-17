import React, { useState } from "react";
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

function Product() {
  const [isSum, setisSum] = useState(true);
  const [isRowCard, setisRowCard] = useState(true);
  const { productCategory, productName } = useParams();
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const searchQuery = productName
    ? `category/${productName}?_embed=products`
    : `mainCategory/${productCategory}?_embed=products`;

  const { data, status, isLoading, isFetching, isError, error } = useGetFetch(
    "products2",
    searchQuery,
    (data) => console.log(data, "OK"),
    (error) => console.log(error)
  );
  console.log(isFetching, "isLoading");

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <div className={styles.product}>
            <div className={styles.filter}>
              <Search />
              <MyCheckbox title="Faqat fotosurat bilan" />
              <Typography type="title" size="24px" weight={500}>
                Filtrlar
              </Typography>
              <MySelect placeholder="Transport">
                <div value="dev-1">Developer 1</div>
                <div value="dev-2">Developer 2</div>
                <div value="dev-3">Developer 3</div>
              </MySelect>

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
        </Container>
      )}
    </>
  );
}

export default Product;
