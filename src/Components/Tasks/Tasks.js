import React from "react";
import { useDispatch } from "react-redux";
import "./Tasks.css";

const Tasks = (props) => {
  const dispatch = useDispatch();

  const onSelectHandler = () => {
    dispatch({
      type: "TASK_COMPLETED",
      payload: {
        completed: true,
        taskName: props.taskName,
      },
    });
    dispatch({
      type: "REMOVE_TASK",
      payload: props.index,
    });
  };

  const deleteTask = () => {
    if (props.completed) {
      dispatch({
        type: "REMOVE_ONE_COMPLETED_TASK",
        payload: props.taskName,
      });
    } else {
      dispatch({
        type: "REMOVE_ONE_ACTIVE_TASK",
        payload: props.taskName,
      });
    }
  };

  return (
    <div className="tasks">
      <div className="taskFlex">
        <input
          type="radio"
          name={props.taskName}
          checked={props.completed}
          onClick={onSelectHandler}
        />
        <span className={props.completed ? "strikeTask" : "taskName"}>
          {props.taskName}
        </span>
        <div className="crossButton" onClick={deleteTask}>
          X
        </div>
      </div>
    </div>
  );
};

export default Tasks;
