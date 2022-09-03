import React, { useState } from "react";
import MyButton from "../../components/button/button";
import MyCheckbox from "../../components/checkbox/checkbox";
import MyInput from "../../components/input/input";
import MyTabs from "../../components/tabs/tabs";
import { logIn, signUp, useAuth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerYup } from "../../utils/yup/yup";
import styles from "./register.styles.module.scss";
function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerYup),
  });

  const [loading, setloading] = useState(false);
  const [isChecked, setisChecked] = useState(false);

  const handleSignUp = async (data) => {
    setloading(true);
    try {
      await signUp(data.email, data.password);
      navigate(-1);
      // alert("succseful");
    } catch (error) {
      alert("Error!", error);
    } finally {
      setloading(false);
    }
  };

  const handleLogIn = async (data) => {
    setloading(true);
    try {
      await logIn(data.email, data.password);
      navigate(-1);
      // alert("succseful");
    } catch (error) {
      alert("Error!", error);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <div className={styles.loginPage}>
        <div className={styles.loginBox}>
          <MyTabs type="primary">
            <form tab="Tizimga kirish" onSubmit={handleSubmit(handleLogIn)}>
              <div className={styles.register}>
                <MyInput
                  register={register("email")}
                  type="text"
                  alert={errors.email?.message}
                  placeholder="Sizning Email pochtangiz"
                  label="Sizning Email pochtangiz"
                />
                <MyInput
                  register={register("password")}
                  type="password"
                  alert={errors.password?.message}
                  placeholder="Sizning OLX dagi xozirgi parolingiz"
                  label="Sizning OLX dagi xozirgi parolingiz"
                />
                <MyButton type="primary-outline">Tizimga kirish</MyButton>
                <p>
                  Mening profilimga bo‘limiga kirib, ….ni qabul qilasiz
                  Foydalanish shartlari Sayt
                </p>
              </div>
            </form>

            <form tab="Ro'yhatdan o'tish" onSubmit={handleSubmit(handleSignUp)}>
              <div className={styles.register}>
                <MyInput
                  register={register("email")}
                  type="text"
                  alert={errors.email?.message}
                  placeholder="Sizning Email pochtangiz"
                  label="Sizning Email pochtangiz"
                />
                <MyInput
                  register={register("password")}
                  type="password"
                  alert={errors.password?.message}
                  placeholder="Sizning OLX dagi xozirgi parolingiz"
                  label="Sizning OLX dagi xozirgi parolingiz"
                />
                <MyCheckbox
                  title=" * OLX.uz qoidalarini qabul qilaman"
                  isChecked={isChecked}
                  setisChecked={setisChecked}
                />
                <div
                  className={
                    isChecked
                      ? styles.btnBox
                      : styles.btnBox + " " + styles.disabled
                  }
                >
                  <MyButton
                    type="primary-outline"
                    disabled={!isChecked}
                    onClick={handleSignUp}
                  >
                    Ro'yhatdan o'tish
                  </MyButton>
                </div>
              </div>
            </form>
          </MyTabs>
        </div>
      </div>
    </>
  );
}

export default Register;
