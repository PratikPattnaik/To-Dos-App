import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import Todo from "../src/assets/direct-hit.png";
import Doing from "../src/assets/glowing-star.png";
import Done from "../src/assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");
function App() {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [activeCard, setActiveCard] = useState(null);

  const handleDelete = (idx) => {
    const newTasks = tasks.filter((t, i) => i !== idx);
    setTasks(newTasks);
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  // console.log(tasks);
  const onDrop = (status, position) => {
    // console.log(
    //   `${activeCard} is going to be dropped in ${status} @ position ${position}`
    // );
    if (activeCard === null || activeCard === undefined) return;
    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task, index) => index !== activeCard);
    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status,
    });
    setTasks(updatedTasks);
  };
  return (
    <>
      <div className=" font-mono text-gray-700">
        <TaskForm setTasks={setTasks} />
        <main className="grid grid-cols-1 gap-4 mx-24 mt-8 lg:grid-cols-3 lg:gap-8">
          <TaskColumn
            colName={"To-Do"}
            colType={Todo}
            tasks={tasks}
            status="todo"
            handleDelete={handleDelete}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
          <TaskColumn
            colName={"Doing"}
            colType={Doing}
            tasks={tasks}
            status="doing"
            handleDelete={handleDelete}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
          <TaskColumn
            colName={"Done"}
            colType={Done}
            tasks={tasks}
            status="done"
            handleDelete={handleDelete}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
        </main>
      </div>
    </>
  );
}

export default App;
