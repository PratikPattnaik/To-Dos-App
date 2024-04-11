import React, { useState } from "react";

const DropArea = ({ onDrop }) => {
  const [showDrop, setshowDrop] = useState(false);
  const show =
    "w-full h-24 bg-[#dcdcdc] border border-dashed border-[#dcdcdc] rounded-lg flex items-center justify-center opacity-60 transition-all duration-200 ease-in-out py-4";
  const hide = "opacity-0";
  return (
    <section
      onDragEnter={() => setshowDrop(true)}
      onDragLeave={() => setshowDrop(false)}
      onDrop={() => {
        onDrop();
        setshowDrop(false);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      className={showDrop ? show : hide}
    >
      --Drop Here--
    </section>
  );
};

export default DropArea;
