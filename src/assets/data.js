import userAvatar from "./imgs/avatar.svg";

export const data = [
    {
        id: "1",
        status: "registering",
        title: "OFC Pineapple",
        time: "12:00 pm, 28 July",
        totalPlayersCount: 1000,
        registeredPlayers: 1000,
        pokerType: "NL 2-7 Triple Draw",
        award: 1000000,
        fixed: true,
        isSelected: false
    },
    {
        id: "2",
        status: "registering",
        title: "OFC Pineapple",
        titleColor: "#86FF8B",
        time: "12:00 pm, 28 July",
        totalPlayersCount: 6,
        registeredPlayers: 1,
        pokerType: "NL Holdem",
        award: 100,
        fixed: true,
        isSelected: false
    },
    {
        id: "3",
        status: "canceled",
        title: "Hourly Freeroll",
        time: "12:00 pm, 28 July",
        totalPlayersCount: 10000,
        registeredPlayers: 1,
        pokerType: "NL OFC/pineapple prg",
        conditions: ["Time", "FreeRoll"],
        award: 1000,
        fixed: true,
        isSelected: false
    },
    {
        id: "4",
        status: "canceled",
        title: "Rapid Tournament",
        time: "12:00 pm, 28 July",
        totalPlayersCount: 10000,
        registeredPlayers: 1,
        pokerType: "PL Omaha h/l",
        award: 1000000,
        fixed: false,
        isSelected: false
    },
    {
        id: "5",
        status: "canceled",
        title: "PL Omaha Knockout",
        titleColor: "#FAFF1A",
        time: "12:00 pm, 28 July",
        totalPlayersCount: 1000,
        registeredPlayers: 1000,
        pokerType: "NL 6 cards omaha h/l",
        conditions: ["Rapid"],
        award: 146,
        fixed: false,
        isSelected: false
    },
    {
        id: "6",
        status: "registering",
        title: "OFC Pineapple",
        time: "12:00 pm, 28 July",
        totalPlayersCount: 1000,
        registeredPlayers: 1000,
        pokerType: "NL 2-7 Triple Draw",
        award: 1000000,
        fixed: false,
        isSelected: true
    },
];

export const userInfo =
    {
        id: "7",
        name: "LongUserName",
        balance: "100,500.00",
        starCount: 5,
        avatar: userAvatar
    }