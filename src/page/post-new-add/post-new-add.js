import React, { useState, useEffect, useContext } from "react";
import MyButton from "../../components/button/button";
import CardBox from "../../components/card-box/card-box";
import Container from "../../components/container/container";
import MyInput from "../../components/input/input";
import MyRadio from "../../components/radio/radio";
import MySelect from "../../components/select/select";
import MySwitch from "../../components/switch/switch";
import MyTabs from "../../components/tabs/tabs";
import Typography from "../../components/typography/typography";
import MyUpload from "../../components/upload/upload";
import { storage, useAuth } from "../../firebase/config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import styles from "./post-new-add.styles.module.scss";
import Grid from "../../components/grid/grid";
import { useMediaQuery } from "react-responsive";
import CategoryModal from "../../components/category-modal/category-modal";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productYup } from "../../utils/yup/yup";
import { useSelector } from "react-redux";
import { CurrentAccount } from "../../context";
import usePostFetch from "../../utils/custom-hook/usePostFetch";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
const navUpload = [
  { type: "title" },
  { type: "default" },
  { type: "default" },
  { type: "default" },
  { type: "default" },
  { type: "default" },
  { type: "default" },
  { type: "default" },
];

function PostNewAdd() {
  const mutation = useMutation((newData) => {
    return axios.post("https://olx-fake-api.herokuapp.com/products", newData);
  });

  const mutationDelete = useMutation((id) => {
    return axios.delete(`https://olx-fake-api.herokuapp.com/products/${id}`);
  });

  const { curAccount, setcurAccount } = useContext(CurrentAccount);
  const currentUser = useAuth();
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  
  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productYup),
  });
  const [fileList, setFileList] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  const [data, setdata] = useState({});
  const [progresspercent, setProgresspercent] = useState(0);
  const [selectedMainCategory, setselectedMainCategory] = useState("");
  const [category, setcategory] = useState("");
  const navigate = useNavigate();

  const sendFileFirebase = async () => {
    fileList.forEach((file) => {
      if (!file) return;

      const storageRef = ref(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgresspercent(progress);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImgUrl((old) => [...old, downloadURL]);
          });
        }
      );
    });
  };

  const submitFunc = (data) => {
    sendFileFirebase();
    setdata((old) => {
      return {
        ...old,
        ...data,
      };
    });

    reset();
  };

  useEffect(() => {
    setdata((old) => {
      return { ...old, img: imgUrl };
    });
  }, [imgUrl]);

  useEffect(() => {
    if (!curAccount) {
      navigate("/register");
    } else {
      setValue("who", curAccount?.email);
    }
  }, []);

  // useEffect(() => {
  //   if (progresspercent === 100) {
  //     mutation.mutate({ id: new Date(), ...data });
  //   }
  // }, [progresspercent]);

  console.log(progresspercent, data, "data");

  return (
    <div className={styles.postBox}>
      <form onSubmit={handleSubmit(submitFunc)}>
        <Container>
          <h2>E'lon joylashtirish</h2>

          <CardBox
            onClick={() => {
              if (!currentUser) {
                navigate("/register");
              }
            }}
          >
            <div className={styles.productInfo}>
              <Typography type="title" size="20px">
                Bizga e'loningiz haqida gapirib bering
              </Typography>
              <MyInput
                register={register("title")}
                alert={errors.title?.message}
                placeholder="Masalan , Iphone 11 pro"
                type="text"
                label="Sarlavhani kiriting*"
              />
              <CategoryModal
                onClickMainCategory={(list) => {
                  setValue("categoryId", list.id);
                  setselectedMainCategory(list.title);
                }}
                onClickCategory={(list) => {
                  setValue("mainCategoryId", list.id);
                  setcategory(list.title);
                }}
              >
                {console.log(
                  errors.categoryId?.message,
                  errors.mainCategoryId?.message,
                  "errors.categoryId?.message || errors.mainCategoryId?.message"
                )}
                <MyInput
                  register={register("categoryId")}
                  alert={
                    errors.categoryId?.message || errors.mainCategoryId?.message
                  }
                  placeholder="Bo'limni tanlang"
                  type="text"
                  label="Rukn*"
                  value={`${selectedMainCategory} / ${category}`}
                  disabled="disabled"
                />
              </CategoryModal>
            </div>
          </CardBox>

          <CardBox>
            <div className={styles.productInfo}>
              <Typography type="title" size="20px">
                Rasmlar
              </Typography>
              <p>
                Birinchi surat e’loningiz asosiy rasmi bo’ladi. Suratlar
                tartibini ularning ustiga bosib va olib o’tish bilan
                o’zgartirishingiz mumkin.
              </p>
              <Grid minmax={isMobile ? "130px" : "159px"} gap="16px">
                {navUpload.map((item, index) => (
                  <MyUpload
                    type={item.type}
                    key={index}
                    fileList={fileList}
                    setFileList={setFileList}
                  />
                ))}
              </Grid>
            </div>
          </CardBox>

          <CardBox>
            <div className={styles.productInfo}>
              <Typography type="title" size="20px">
                Bizga e’loningizni tavsiflab bering
              </Typography>
              <MyInput
                register={register("description")}
                alert={errors.description?.message}
                placeholder="O’zingizni shu e'lonni ko’rayotgan odam o’rniga qo’ying va tavsif yozing"
                type="textarea"
                label="Sarlavhani kiriting*"
              />
              <p>Yana kamida 80 ta belgi yozing</p>
            </div>
          </CardBox>

          <CardBox>
            <div className={styles.productPrice}>
              <MyTabs
                type="primary"
                onChange={(key) => {
                  if (key !== "0") {
                    setValue("price", "null");
                  }
                }}
              >
                <div tab="Narx">
                  <div className={styles.flexStart}>
                    <MyInput
                      register={register("price")}
                      placeholder="100 000"
                      type="text"
                      label="Narx*"
                    />
                    <Controller
                      name="valute"
                      control={control}
                      defaultValue="so'm"
                      render={({ field }) => (
                        <MySelect
                          field={field}
                          name="valute"
                          control={control}
                          defaultValue="so'm"
                          style={{
                            background: "var(--body-color)",
                          }}
                        >
                          <div value="so'm" style={{ minWidth: "40px" }}>
                            so'm
                          </div>
                          <div value="y.e" style={{ minWidth: "40px" }}>
                            y.e
                          </div>
                        </MySelect>
                      )}
                    />
                  </div>
                  <p style={{ color: "rgb(255, 86, 54)" }}>
                    {errors.price?.message}
                  </p>
                  <br />
                  <label className={styles.flexBetween}>
                    <span>Kelishuv asosida</span>
                    <Controller
                      name="byAgreement"
                      control={control}
                      defaultValue={true}
                      render={({ field: { value, ...others } }) => (
                        <MySwitch field={others} value={value} />
                      )}
                    />
                  </label>
                </div>
                <div tab="Bepul"></div>
                <div tab="Ayriboshlash"></div>
              </MyTabs>

              <Typography type="title" size="20px">
                Qo'shimcha ma'lumot
              </Typography>
              <label>
                <span>Xususiy yoki biznes*</span>
                <Controller
                  name="personalBusiness"
                  control={control}
                  alert={errors.personalBusiness?.message}
                  defaultValue="js"
                  render={({ field }) => (
                    <MyRadio field={field}>
                      <span radio="js">Jismoniy shaxs</span>
                      <span radio="b">Biznes</span>
                    </MyRadio>
                  )}
                />
              </label>
              <label>
                <span>Holati*</span>
                <Controller
                  name="status"
                  control={control}
                  alert={errors.status?.message}
                  defaultValue="yangi"
                  render={({ field }) => (
                    <MyRadio field={field}>
                      <span radio="yangi">Yangi</span>
                      <span radio="f/b">F/B</span>
                    </MyRadio>
                  )}
                />
              </label>
            </div>
          </CardBox>

          <CardBox>
            <div className={styles.productInfo}>
              <Typography type="title" size="20px">
                Aloqa uchun ma'lumotlar
              </Typography>
              <MyInput
                register={register("location")}
                alert={errors.location?.message}
                placeholder="Gazalkent"
                type="text"
                label="Joylashuv*"
              />
              <MyInput
                register={register("email")}
                alert={errors.email?.message}
                placeholder="email"
                type="email"
                label="Email-манзил"
              />
              <MyInput
                register={register("phone")}
                alert={errors.phone?.message}
                placeholder="phone"
                type="text"
                label="Telefon raqami"
              />
            </div>
          </CardBox>

          <CardBox>
            <div className={styles.productSubmit}>
              <MyButton type="primary-outline">E'lon Joylashtirish</MyButton>
            </div>
          </CardBox>
        </Container>
      </form>
      {/* <button
        onClick={() => {
          mutationDelete.mutate("2022-09-02T13:35:20.701Z");
        }}
      >
        delete
      </button> */}
    </div>
  );
}

export default PostNewAdd;
