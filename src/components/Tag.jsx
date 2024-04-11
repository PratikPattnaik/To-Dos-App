import React from "react";

const Tag = ({ tagName, selectTag, checkTag }) => {
  const tagStyles = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JS: { backgroundColor: "#ffd12c" },
    ReactJS: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#fff" },
  };
  return (
    <button
      type="button"
      style={checkTag ? tagStyles[tagName] : tagStyles.default}
      className="text-sm border-2 border-gray-500 py-1 px-2 mr-2 rounded md:text-base md:px-3"
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
