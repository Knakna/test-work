import {Spinner} from "./components/Spinner/Spinner.jsx";
import {PlayerInfo} from "./components/PlayerInfo/PlayerInfo.jsx";
import {Loader} from "./components/Loader/Loader.jsx";
import {TournamentItem} from "./components/TournamentItem/TournamentItem.jsx";
import styles from './App.module.less';

const data = [
    {
        id :"1",
        status: "registering",
        title:"OFC Pineapple",
        time:"12:00 pm, 28 July",
        totalPlayersCount: 1000,
        registeredPlayers : 1000,
        pokerType: "NL 2-7 Triple Draw",
        award: 1000000,
        fixed: true
    },
    {
        id :"2",
        status: "registering",
        title:"OFC Pineapple",
        titleColor: "#86FF8B",
        time:"12:00 pm, 28 July",
        totalPlayersCount: 6,
        registeredPlayers : 1,
        pokerType: "NL Holdem",
        award: 100,
        fixed: true
    },
    {
        id: "3",
        status: "canceled",
        title:"Hourly Freeroll",
        time:"12:00 pm, 28 July",
        totalPlayersCount: 10000,
        registeredPlayers : 1,
        pokerType: "NL OFC/pineapple prg",
        conditions: ["Time", "FreeRoll"],
        award: 1000,
        fixed: true
    },
    {
        id :"4",
        status: "canceled",
        title:"Rapid Tournament",
        time:"12:00 pm, 28 July",
        totalPlayersCount: 10000,
        registeredPlayers : 1,
        pokerType: "PL Omaha h/l",
        conditions: [""],
        award: 1000000,
        fixed: false
    },
    {
        id :"5",
        status: "canceled",
        title:"PL Omaha Knockout",
        time:"12:00 pm, 28 July",
        totalPlayersCount: 1000,
        registeredPlayers : 1000,
        pokerType: "NL 6 cards omaha h/l",
        conditions: ["Rapid"],
        award: 146,
        fixed: false
    },
    {
        id :"6",
        status: "registering",
        title:"OFC Pineapple",
        time:"12:00 pm, 28 July",
        totalPlayersCount: 1000,
        registeredPlayers : 1000,
        pokerType: "NL 2-7 Triple Draw",
        conditions: [""],
        award: 1000000,
        fixed: false
    },
]


function App() {
    return (
        <div className={styles.app}>
            <div className={styles.container}>
                <h1>Poker</h1>
                <Spinner/>
                <PlayerInfo/>
                <Loader/>
                <div>
                    {data.map((item) => (
                        <TournamentItem tournamentData={item} key={item.id} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default App
