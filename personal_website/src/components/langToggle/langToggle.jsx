import { useLang } from "../../context/LanguageContext";
import "./LangToggle.css";

const LangToggle = () => {
  const { lang, toggle } = useLang();
  return (
    <button className="floatingLangToggle" onClick={toggle} aria-label="Toggle language">
      <span className={lang === "en" ? "flt-active" : "flt-inactive"}>EN</span>
      <span className="flt-divider" />
      <span className={lang === "es" ? "flt-active" : "flt-inactive"}>ES</span>
    </button>
  );
};

export default LangToggle;