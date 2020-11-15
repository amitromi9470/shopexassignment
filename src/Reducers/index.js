import { combineReducers } from "redux";
import { activeTasksReducer } from "./activeTasksReducer";
import { completedTaskReducer } from "./completedTasksReducer";

const rootReducer = combineReducers({
  activeTasks: activeTasksReducer,
  completedTasks: completedTaskReducer,
});

export default rootReducer;
