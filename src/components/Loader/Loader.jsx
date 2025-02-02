import styles from './Loader.module.less'


export function Loader() {


    return (
        <div className={styles.loader}>
            <div className={styles.progressBar}>
                <div className={styles.progress}>
                </div>
            </div>
            <span>
               Loadind 70%
            </span>
        </div>
    )
}
