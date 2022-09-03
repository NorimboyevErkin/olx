import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import MainCategoryMobile from "../main-category-mobile/main-category-mobile";
import { useSelector } from "react-redux";
import Grid from "../grid/grid";
import CategoryList from "../category-list/category-list";
import "./category-modal.styles.scss";

function CategoryModal({
  children,
  title = "Bo'limni tanlang",
  onClickMainCategory,
  onClickCategory,
}) {
  const category = useSelector((state) => state.category.value);
  const [visible, setVisible] = useState(false);
  const [curMainCategoryId, setcurMainCategoryId] = useState(0);
  const [isOpenCategoryList, setisOpenCategoryList] = useState(false);

  return (
    <>
      <div onClick={() => setVisible(true)} style={{ all: "unset" }}>
        {children}
      </div>
      <Modal
        title={title}
        centered
        visible={visible}
        onCancel={() => {
          setisOpenCategoryList(false);
          setVisible(false);
        }}
        footer={false}
        width={1000}
        className="category-modal"
      >
        {isOpenCategoryList ? (
          <CategoryList
            data={category[curMainCategoryId - 1]}
            headerTitle="Ortga"
            headerOnClick={() => setisOpenCategoryList(false)}
            itemOnClick={(item) => {
              setisOpenCategoryList(false);
              setVisible(false);
              onClickCategory(item);
            }}
          />
        ) : (
          <Grid minmax="250px" gap="16px">
            {category.map((item) => (
              <MainCategoryMobile
                data={item}
                key={item.id}
                onClick={() => {
                  setcurMainCategoryId(item.id);
                  setisOpenCategoryList(true);
                  onClickMainCategory(item);
                }}
              />
            ))}
          </Grid>
        )}
      </Modal>
    </>
  );
}

export default CategoryModal;
