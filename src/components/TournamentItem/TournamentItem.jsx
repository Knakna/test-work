import styles from "./TournamentItem.module.less";
import pin from "../../assets/icons/pin.svg";
import players from "../../assets/icons/players.svg";
import timeIcon from "../../assets/icons/time.svg";
import tourney from "../../assets/icons/tourney.svg";



   /* status: "canceled",
    title:"PL Omaha Knockout",
    time:"12:00 pm, 28 July",
    totalPlayersCount: 1000,
    registeredPlayers : 1000,
    pokerType: "NL 6 cards omaha h/l",
    conditions: ["Rapid"],
    award: 146,
    fixed: false*/

export function TournamentItem({tournamentData}) {
    const {status, title, time, totalPlayersCount, registeredPlayers, pokerType, award, fixed} = tournamentData;
    const isCanceled = status === 'canceled'
    return (
        <div className={styles.tournament}>


            <div className={styles.wrap}>
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

                                {/*<div className={styles.logo}>*/}
                                {/*    {logo && logo.map((link, i) => (*/}
                                {/*        <img*/}
                                {/*            key={i}*/}
                                {/*            width="16px"*/}
                                {/*            height="16px"*/}
                                {/*            src={link}*/}
                                {/*            alt={`logo-${i}`}*/}
                                {/*        />*/}
                                {/*    ))}*/}
                                {/*</div>*/}
                            </div>


                            <div style={{color: tournamentData["title-color"]}} className={styles.title}>
                                {title}
                            </div>

                        </div>
                        <button className={styles.button} disabled={isCanceled}>
                            {isCanceled ? "Cancelled" : "Join table"}
                        </button>
                    </div>

                    <div className={styles.bottom}>
                        <div className={styles.time}>
                            <img src={timeIcon} alt="time"/>
                            <span> {time}</span>
                        </div>

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
