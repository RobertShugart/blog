export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_Post":
      return action.payload;
    default:
      return state;
  }
};
