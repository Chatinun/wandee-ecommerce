import styles from "./Toast.module.css";

export const Toast = () => {
  return (
    <div className={styles["toast-container"]}>
      <div className={styles["toast"]}>Toast</div>
    </div>
  );
};
