import React, { useState } from "react";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
    // console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
  };
  const selectTag = (tagName) => {
    // console.log(tagName);
    if (taskData.tags.some((item) => item === tagName)) {
      const filterTags = taskData.tags.filter((item) => item !== tagName);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tagName] };
      });
    }
  };
  const checkTag = (tagName) => {
    return taskData.tags.some((item) => item === tagName);
  };
  //   console.log(taskData.tags);
  return (
    <>
      <header className="h-auto pb-8 w-screen flex content-center justify-center border-b-2 border border-gray-500 lg:h-44 pt-2">
        <form className="w-2/5" onSubmit={handleSubmit}>
          <input
            name="task"
            type="text"
            placeholder="Enter a Task..."
            className="text-lg border-2 border-gray-500 rounded px-3 py-2 my-4 w-full"
            value={taskData.task}
            onChange={handleChange}
            required
          />
          <div className="w-full flex items-center justify-center flex-wrap md:justify-between">
            <div className="w-full flex items-center justify-center md:w-fit">
              <Tag
                tagName={"HTML"}
                selectTag={selectTag}
                checkTag={checkTag("HTML")}
              />
              <Tag
                tagName={"CSS"}
                selectTag={selectTag}
                checkTag={checkTag("CSS")}
              />
              <Tag
                tagName={"JS"}
                selectTag={selectTag}
                checkTag={checkTag("JS")}
              />
              <Tag
                tagName={"ReactJS"}
                selectTag={selectTag}
                checkTag={checkTag("ReactJS")}
              />
            </div>
            <div className="w-full flex items-center justify-center my-2 md:w-fit">
              <select
                name="status"
                id="status"
                className="text-sm border-2 border-gray-500 rounded w-28 h-8 py-1 text-center md:text-base md:h-10"
                value={taskData.status}
                onChange={handleChange}
              >
                <option value="todo">Todo</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>

              <button
                type="submit"
                className="text-sm bg-blue-600 text-white rounded h-8 px-2 py-1 ml-2 md:text-base md:px-3 md:ml-2 "
              >
                + Add Task
              </button>
            </div>
          </div>
        </form>
      </header>
    </>
  );
};

export default TaskForm;
