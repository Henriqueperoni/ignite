const initState = {
  popular: [],
  newGames: [],
  upComing: [],
  searched: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETECH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};
export default gameReducer;
