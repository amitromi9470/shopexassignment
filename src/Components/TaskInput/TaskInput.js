import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./TaskInput.css";

const TaskInput = () => {
  const [taskValue, setTaskValue] = useState("");
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setTaskValue(e.target.value);
  };

  const addTask = () => {
    if(taskValue)
    {
      setTaskValue("");
      dispatch({
        type: "ADD_TASK",
        payload: taskValue,
      });
    }
    
  };

  return (
    <div className="taskInput">
      <div className="addButton" onClick={addTask}>
        +
      </div>
      <input
        className="enterTask"
        type="text"
        value={taskValue}
        placeholder="What needs to be done?"
        onChange={(event) => onChangeHandler(event)}
      />
    </div>
  );
};

export default TaskInput;
