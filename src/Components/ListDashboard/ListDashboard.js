import React from "react";
import { useDispatch } from "react-redux";
import "./ListDashboard.css";

const ListDashboard = (props) => {
  const dispatch = useDispatch();

  const clearCompletedTasks = () => {
    dispatch({
      type: "CLEAR_COMPLETED_TASK",
    });
  };

  return (
    <div className="dashboard">
      <div>{props.tasksRemaining} Items Remaining</div>
      <div className="buttonList">
        <div
          className="taskButtons"
          tabIndex="1"
          onClick={() => props.changeFilter("All")}
        >
          All
        </div>
        <div
          className="taskButtons"
          tabIndex="2"
          onClick={() => props.changeFilter("Active")}
        >
          Active
        </div>
        <div
          className="taskButtons"
          tabIndex="3"
          onClick={() => props.changeFilter("Completed")}
        >
          Completed
        </div>
      </div>
      <div className="taskButtons" tabIndex="4" onClick={clearCompletedTasks}>
        Clear Completed
      </div>
    </div>
  );
};

export default ListDashboard;
