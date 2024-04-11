import React from "react";
import Todo from "../assets/direct-hit.png";
import Doing from "../assets/glowing-star.png";
import Done from "../assets/check-mark-button.png";
import TaskCard from "./TaskCard";
import DropArea from "./DropArea";

const TaskColumn = ({
  colName,
  colType,
  tasks,
  status,
  handleDelete,
  setActiveCard,
  onDrop,
}) => {
  //   console.log(tasks);
  return (
    <section className=" w-full ">
      <h2 className="flex flex-row w-full items-center justify-center mb-4">
        <img src={colType} alt="todo" className=" w-8 mr-2 " />
        {colName}
      </h2>
      <DropArea onDrop={() => onDrop(status, 0)} />
      {tasks.map(
        (t, i) =>
          t.status === status && (
            <React.Fragment key={i}>
              <TaskCard
                key={i}
                title={t.task}
                tagsList={t.tags}
                handleDelete={handleDelete}
                idx={i}
                setActiveCard={setActiveCard}
              />
              <DropArea onDrop={() => onDrop(status, i + 1)} />
            </React.Fragment>
          )
      ) || <h2>Hi</h2>}
    </section>
  );
};

export default TaskColumn;
