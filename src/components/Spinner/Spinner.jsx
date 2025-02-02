import styles from "./Spinner.module.less";
import spinner from "../../assets/imgs/spinner.svg";


export function Spinner() {
    return (
        <div className={styles.spinner}>
            <img src={spinner} alt="spinner"/>
        </div>
    );
}
