export const completedTaskReducer = (state = [], action) => {
  switch (action.type) {
    case "TASK_COMPLETED":
      return [...state, action.payload];
    case "REMOVE_ONE_COMPLETED_TASK":
      return state.filter(
        (taskObject) => taskObject.taskName !== action.payload
      );
    case "CLEAR_COMPLETED_TASK":
      return [];
    default:
      return state;
  }
};
