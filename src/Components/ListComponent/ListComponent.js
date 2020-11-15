import React, { useState } from "react";
import { useSelector } from "react-redux";
import ListTitle from "../ListTitle/ListTitle";
import ListDashboard from "../ListDashboard/ListDashboard";
import TaskList from "../TaskList/TaskList";
import "./ListComponent.css";

const ListComponent = () => {
  const [taskFilter, setTaskFilter] = useState("All");
  const activeTasks = useSelector((state) => state.activeTasks);
  const completedTasks = useSelector((state) => state.completedTasks);

  const changeFilter = (filter) => {
    setTaskFilter(filter);
  };

  return (
    <div className="listContainer">
      <ListTitle />
      <ListDashboard
        tasksRemaining={activeTasks.length}
        changeFilter={changeFilter}
      />
      <TaskList
        taskFilter={taskFilter}
        activeTasks={activeTasks}
        completedTasks={completedTasks}
      />
    </div>
  );
};

export default ListComponent;
