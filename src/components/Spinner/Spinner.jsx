import styles from "./Spinner.module.less";
import spinner from "../../assets/img/spiner.svg";


export function Spinner() {
    return (
        <div className={styles.spinner}>
           <img src={spinner} alt="spinner" />
        </div>
    );
}
