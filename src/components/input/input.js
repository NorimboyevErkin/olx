import React, { useState } from "react";
import styles from "./input.styles.module.scss";
function MyInput({
  type = "text",
  label,
  placeholder,
  cols = "30",
  rows = "10",
  alert = null,
  onChange,
  register,
  ...others
}) {
  const borderLineStyle = {
    borderBottomColor: alert ? "rgb(255, 86, 54)" : "var(--green-text)",
  };
  return (
    <div className={styles.inputBox}>
      <label className={styles.label}>
        {label}
        {type === "textarea" ? (
          <textarea
            {...register}
            className={styles.textarea}
            cols={cols}
            rows={rows}
            placeholder={placeholder}
            style={borderLineStyle}
            // onChange={(e) => {
            //   onChange(e.target.value);
            // }}
            {...others}
          />
        ) : (
          <input
            {...register}
            className={styles.input}
            type={type}
            placeholder={placeholder}
            style={borderLineStyle}
            // onChange={(e) => {
            //   onChange(e.target.value);
            // }}
            {...others}
          />
        )}
      </label>
      {alert ? <p className={styles.alert}>{alert}</p> : null}
    </div>
  );
}

export default MyInput;
