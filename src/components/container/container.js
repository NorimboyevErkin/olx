import styles from "./container.styles.module.scss";
function Container({ children }) {
  return <div className={styles.ContainerBox}>{children}</div>;
}

export default Container;
