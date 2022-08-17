import styles from "./typography.styles.module.scss";

function Typography({
  type = "link",
  line = 2,
  children,
  size = "16px",
  weight = 400,
  color = "var(--green-text)",
  icon = null,
  align = "start",
  ...other
}) {
  return (
    <div
      className={type === "link" ? styles.titleLink : styles.title}
      {...other}
    >
      {icon}
      <span
        style={{
          WebkitLineClamp: line,
          fontSize: size,
          fontWeight: weight,
          color: color,
          textAlign: align,
        }}
      >
        {children}
      </span>
    </div>
  );
}

export default Typography;
