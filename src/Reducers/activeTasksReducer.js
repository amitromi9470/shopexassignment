export const activeTasksReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "REMOVE_ONE_ACTIVE_TASK":
      return state.filter((value) => value !== action.payload);
    case "REMOVE_TASK":
      return state.filter((value, index) => {
        return index !== action.payload;
      });
    default:
      return state;
  }
};
