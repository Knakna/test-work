import {Spinner} from "./components/Spinner/Spinner.jsx";
import {PlayerInfo} from "./components/PlayerInfo/PlayerInfo.jsx";
import {Loader} from "./components/Loader/Loader.jsx";
import {TournamentItem} from "./components/TournamentItem/TournamentItem.jsx";
import styles from './App.module.less';
import {data, userInfo} from './assets/data.js';


function App() {
    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <h1>Poker</h1>
                <Spinner/>
                <PlayerInfo userInfo={userInfo}/>
                <Loader/>
                <div className={styles.wrapperTournaments}>
                    {data.map((item) => (
                        <TournamentItem tournamentData={item} key={item.id}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App
