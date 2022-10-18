import styles from "./translation.styles.module.scss";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function TranslationNav({ label = null }) {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.translationNav}>
      {label ? (
        <span className={styles.label}>{label}</span>
      ) : null}
      <button
        className={i18n.language === "uz" ? styles.activeTranslationBtn : null}
        onClick={() => {
          i18next.changeLanguage("uz");
        }}
      >
        O'Z
      </button>
      |
      <button
        className={i18n.language === "ru" ? styles.activeTranslationBtn : null}
        onClick={() => {
          i18next.changeLanguage("ru");
        }}
      >
        РУ
      </button>
    </div>
  );
}

export default TranslationNav;
