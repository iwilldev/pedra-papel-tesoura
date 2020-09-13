
export const TOKENS_LIST = [
    'tesoura',
    'papel',
    'pedra',
    'lagarto',
    'spock',
];

export const randomToken = () => {
    const randomIndex = Math.random() * TOKENS_LIST.length;
    return TOKENS_LIST[Math.floor(randomIndex)];
};

const tokenBeats = (player, house) => {

    const beats = {
        0: [1, 3],
        1: [2, 4],
        2: [3, 0],
        3: [4, 1],
        4: [0, 2],
    };

    var playerIndex = TOKENS_LIST.indexOf(player);
    var houseIndex = TOKENS_LIST.indexOf(house);

    console.log(playerIndex);
    console.log(houseIndex);

    return beats[playerIndex].includes(houseIndex);
}

export const getResult = (player, house) => {
    if (player === house) {
        return 0;
    }

    const playerBeatsHouse = tokenBeats(player, house);
    return playerBeatsHouse ? 1 : -1;
};