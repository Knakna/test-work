import styles from "./PlayerInfo.module.less";
import star from "../../assets/img/Vector.svg";
import avatar from "../../assets/img/Ellipse 464.svg";
import visible from "../../assets/icons/visible.svg";
import unvisible from "../../assets/icons/unvisible.svg";
import {useState} from "react";

export function PlayerInfo() {

    const [isBalanceVisible, setIsBalanceVisible] = useState(true);

    const toggleBalanceVisibility = () => {
        setIsBalanceVisible(!isBalanceVisible);
    };

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


            <button className={styles.balance} onClick={toggleBalanceVisibility}>
               <span className={isBalanceVisible ? styles.iconVisible : styles.iconUnvisible}>
                    <img src={isBalanceVisible ? unvisible : visible} alt="icon"/>
                </span>
                {isBalanceVisible ? (
                    <span className={styles.sum}>$100,500.00</span>
                ) : (
                    <span className={styles.showBalance}>Show balance</span>
                )}
            </button>
        </div>
    )
}


// className={`${styles.status} ${isCanceled ? styles.canceled : ''}`}


