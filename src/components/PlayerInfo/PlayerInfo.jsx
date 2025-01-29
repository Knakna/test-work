import styles from "./PlayerInfo.module.less";
import star from "../../assets/img/Vector.svg";
import avatar from "../../assets/img/Ellipse 464.svg";
import visible from "../../assets/icons/visible.svg";

export function PlayerInfo() {


    return (
        <div className={styles.info}>
            <div className={styles.user}>
                <div className={styles.wrap}>
                    <div className={styles.name}>
                        LongUserName
                    </div>

                    <div className={styles.rating}>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                    </div>
                </div>


                <div className={styles.avatar}>
                    <img src={avatar} alt="avatar"/>
                </div>
            </div>


            <div className={styles.balance}>
                <span className={styles.icon}>
                   <img src={visible} alt="icon" />
                </span>
                <span className={styles.sum}>
                     $100,500.00
                </span>

            </div>
        </div>
    )
}
