import React, { useState } from "react";

const Accordion = ({ ques, ans }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div
        className="font-Poppins box bg-white p-3 mb-2 rounded-md cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <div className="question ">
          <span className=" text-sm mr-4"> {show ? "➖" : "➕"}</span>
          <span>{ques}</span>
        </div>
      </div>

      {show && (
        <div className="answer">
          <p className=" bg-amber-100 mb-3 p-4 mt-[-10px]">{ans}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
