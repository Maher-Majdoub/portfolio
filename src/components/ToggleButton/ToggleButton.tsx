import { useThemeContext } from "../../Providers/CustomThemeProvider";
import styles from "./ToggleButton.module.css";

const ToggleButton = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <div className={styles.container}>
      <div className={styles.toggleSwitch}>
        <label className={styles.label}>
          <input
            type="checkbox"
            className={styles.input}
            checked={!isDarkMode}
            onChange={toggleTheme}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
};

export default ToggleButton;
