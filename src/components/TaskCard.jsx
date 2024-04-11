import React from "react";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ title, tagsList, handleDelete, idx, setActiveCard }) => {
  return (
    <article
      className="border-2 border-gray-500 rounded-lg p-4 my-4 cursor-grab active:opacity-60 lg:p-2 lg:my-2"
      draggable
      onDragStart={() => setActiveCard(idx)}
      onDragEnd={() => setActiveCard(null)}
    >
      <p className=" text-base mb-4 font-semibold capitalize">{title}</p>
      <div className="flex items-center justify-between">
        <div>
          {tagsList.map((tag, i) => (
            <Tag key={i} tagName={tag} checkTag={true} />
          ))}
        </div>
        <div
          className=" w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all ease-in-out duration-150 hover:bg-[#ebebeb]"
          onClick={() => handleDelete(idx)}
        >
          <img
            src={deleteIcon}
            alt="deleteicon"
            className="w-5 opacity-50 transition-all ease-in-out duration-150 hover:opacity-80"
          />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
