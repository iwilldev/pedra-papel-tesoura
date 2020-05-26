export const TOKENS_LIST = {
	ROCK: 'rock',
	PAPER: 'paper',
	SCISSORS: 'scissors',
	LIZARD: 'lizard',
	SPOCK: 'spock',
};

export const randomToken = () => {
	const tokens = Object.values(TOKENS_LIST);
	const randomIndex = Math.random() * tokens.length;
	return tokens[Math.floor(randomIndex)];
};

const tokenBeat = (player, house) => {
	const {
		ROCK,
		PAPER,
		SCISSORS,
		LIZARD,
		SPOCK,
	} = TOKENS_LIST;

	const beat = {
		[ROCK]: [LIZARD, SCISSORS],
		[PAPER]: [ROCK, SPOCK],
		[SCISSORS]: [PAPER, LIZARD],
		[LIZARD]: [SPOCK, PAPER],
		[SPOCK]: [SCISSORS, ROCK],
	};

	return beat[player].includes(house);
};

export const getResult = (player, house) => {
	if (player === house) {
		return 0;
	}

	const playerBeatsHouse = tokenBeat(player, house);
	return playerBeatsHouse ? 1 : -1;
};
