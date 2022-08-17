import React, { useState, useEffect } from "react";
import MainCategoryMobile from "../../components/main-category-mobile/main-category-mobile";
import { useSelector, useDispatch } from "react-redux";
import styles from "./category.styles.module.scss";
function Category() {
  const category = useSelector((state) => state.category.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.category}>
      <div className={styles.grid}>
        {category.map((item, index) => (
          <MainCategoryMobile key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Category;
