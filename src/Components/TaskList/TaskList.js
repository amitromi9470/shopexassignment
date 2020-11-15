import React from "react";
import TaskInput from "../TaskInput/TaskInput";
import Tasks from "../Tasks/Tasks";
import "./TaskList.css";

const TaskList = (props) => {
  const renderTaskByFilter = (filterArrayTask) => {
    return filterArrayTask.map((task, index) => {
      return (
        <Tasks
          index={index}
          taskName={task.completed ? task.taskName : task}
          completed={task.completed}
        />
      );
    });
  };

  const renderTasks = () => {
    const { taskFilter, activeTasks, completedTasks } = props;
    if (taskFilter === "All") {
      const allTasks = [...activeTasks, ...completedTasks];
      return renderTaskByFilter(allTasks);
    } else if (taskFilter === "Active") {
      return renderTaskByFilter(activeTasks);
    } else if (taskFilter === "Completed") {
      return renderTaskByFilter(completedTasks);
    } else return null;
  };

  return (
    <div className="taskList">
      <TaskInput />
      {renderTasks()}
    </div>
  );
};

export default TaskList;
