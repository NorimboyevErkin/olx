import React, { useState, useEffect } from "react";
import CategoryList from "../../components/category-list/category-list";
import { useSelector, useDispatch } from "react-redux";
import styles from "./category-id.styles.module.scss";
import { useParams } from "react-router-dom";

function CategoryId() {
  const category = useSelector((state) => state.category.value);
  const dispatch = useDispatch();
  let { categoryId } = useParams();
  return (
    <div className={styles.CategoryId}>
      <CategoryList data={category[--categoryId]} />
    </div>
  );
}

export default CategoryId;
