import styles from "./TournamentItem.module.less";
import pin from "../../assets/icons/pin.svg";
import players from "../../assets/icons/players.svg";
import timeIcon from "../../assets/icons/time.svg";
import tourney from "../../assets/icons/tourney.svg";
import Bounty from "../../assets/icons/tags/Bounty.svg";
import FreeRoll from "../../assets/icons/tags/FreeRoll.svg";
import Knockout from "../../assets/icons/tags/Knockout.svg";
import ProBounty from "../../assets/icons/tags/ProBounty.svg";
import Rapid from "../../assets/icons/tags/Rapid.svg";
import Time from "../../assets/icons/tags/Time.svg";

const tags = {Time, Rapid, ProBounty, Knockout, FreeRoll, Bounty};

export function TournamentItem({tournamentData}) {
    const {
        status,
        title,
        time,
        totalPlayersCount,
        registeredPlayers,
        pokerType,
        award,
        fixed,
        conditions,
        isSelected
    } = tournamentData;
    const isCanceled = status === 'canceled'
    return (
        <div className={`${styles.tournament} ${isSelected ? styles.selected : ''}`}>

            <div className={`${styles.status} ${isCanceled ? styles.canceled : ''}`}>{status}</div>

            <div className={styles.info}>
                <div className={styles.top}>
                    <div className={styles.label}>
                        <div className={styles.subtitle}>
                            {fixed &&
                                <div className={styles.pin}>
                                    <img src={pin} alt="pin"/>
                                </div>
                            }
                            <div className={styles.pokerType}>
                                {pokerType}
                            </div>

                            <div className={styles.tags}>
                                {conditions && conditions.map((condition, i) => (
                                    <img
                                        key={i}
                                        src={tags[condition]}
                                        alt={`tag-${condition}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <h2 style={{color: tournamentData["titleColor"]}} className={styles.title}>
                            {title}
                        </h2>

                    </div>
                    <button className={styles.button} disabled={isCanceled}>
                        {isCanceled ? "Cancelled" : "Join table"}
                    </button>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.time}>
                        <img src={timeIcon} alt="time"/>
                        <time>{time}</time>
                    </div>

                    <div className={styles.wrap}>
                        <div className={styles.counter}>
                            <img src={players} alt="players"/>
                            <span>{`${registeredPlayers}/${totalPlayersCount}`}</span>
                        </div>

                        <div className={styles.award}>
                            <img src={tourney} alt="tourney"/>
                            <span> {award}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

