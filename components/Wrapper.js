import styles from "../styles/Wrapper.module.css";
import Plum from "./layout/plum";

export default function Wrapper({ children }) {
  return (
    <>
      <div className={styles.wrapper}>{children}</div>
      <Plum />
    </>
  );
}
