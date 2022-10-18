import React, { useState } from "react";
import styles from "./upload.styles.module.scss";
import { MdOutlinePhotoCamera } from "react-icons/md";
import MyButton from "../button/button";
import { Modal } from "antd";
import { HiOutlineEye } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
function MyUpload({ type = "title", setFileList = null, FileList = null }) {
  const [imgList, setimgList] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);

  const onImageChange = (event) => {
    setFileList((old) => {
      let curFile = event.target?.files[0];
      return [...old, curFile];
    });
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setimgList(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  const handleCancel = () => setPreviewVisible(false);

  return (
    <>
      <div
        className={styles.uploadBox}
        style={
          type === "title"
            ? { background: "rgb(200, 248, 246)" }
            : { background: "rgb(242, 244, 245)" }
        }
      >

        {type === "title" ? (
          <h3>Rasmlarni qo'shish</h3>
        ) : (
          <MdOutlinePhotoCamera
            style={{ fontSize: "33px", color: "var(--muted-green-color-2)" }}
          />
        )}
        {imgList ? (
          <>
            <div className={styles.viewImg}>
              <MyButton
                onClick={() => {
                  setPreviewVisible(true);
                }}
              >
                <HiOutlineEye
                  style={{ fontSize: "22px", color: "var(--muted-color)" }}
                />
              </MyButton>
              <MyButton
                onClick={() => {
                  setimgList(null);
                }}
              >
                <BsTrash
                  style={{ fontSize: "22px", color: "var(--muted-color)" }}
                />
              </MyButton>
            </div>
            <img src={imgList} alt="img" className={styles.img} />
          </>
        ) : null}

        <input
          type="file"
          accept="image/heic, image/png, image/jpeg, image/webp"
          onChange={onImageChange}
        />
      </div>
      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{ width: "100%", height: "60vh", minHeight: "400px" }}
          src={imgList}
        />
      </Modal>
    </>
  );
}

export default MyUpload;
