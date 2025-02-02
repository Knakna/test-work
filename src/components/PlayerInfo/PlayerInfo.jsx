import styles from "./PlayerInfo.module.less";
import star from "../../assets/imgs/star.svg";
import visible from "../../assets/icons/visible.svg";
import unvisible from "../../assets/icons/unvisible.svg";
import {useState} from "react";

console.log(styles);

export function PlayerInfo({userInfo}) {

    const {name, balance, starCount, avatar} = userInfo;

    const [isBalanceVisible, setIsBalanceVisible] = useState(true);
    const toggleBalanceVisibility = () => {
        setIsBalanceVisible(!isBalanceVisible);
    };

    const stars = Array(starCount).fill(null);

    return (
        <div className={styles.info}>
            <div className={styles.user}>
                <div className={styles.wrap}>
                    <div className={styles.name}>
                        {name}
                    </div>

                    <div className={styles.rating}>
                        {stars.map((_, index) => (
                            <img src={star} alt="star" key={index}/>
                        ))
                        }
                    </div>

                </div>

                <div className={styles.avatar}>
                    {avatar
                        ? <img src={avatar} alt="avatar"/>
                        : <span className={styles.placeAvatar}></span>
                    }
                </div>
            </div>

            <button className={styles.balance} onClick={toggleBalanceVisibility}>
               <span className={isBalanceVisible ? styles.iconVisible : styles.iconUnvisible}>
                    <img src={isBalanceVisible ? unvisible : visible} alt="icon"/>
                </span>
                {isBalanceVisible
                    ? <span className={styles.sum}>${balance}</span>
                    : <span className={styles.showBalance}>Show balance</span>
                }
            </button>
        </div>
    )
}




