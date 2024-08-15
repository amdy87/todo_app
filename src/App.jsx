import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import { useState, useEffect } from "react";

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="To Do"
          tasks={tasks}
          status="Todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Doing"
          tasks={tasks}
          status="Doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Done"
          tasks={tasks}
          status="Done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
