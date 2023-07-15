import React, { useState } from "react";
import questions from "./API";
import Accordion from "./Accordion";

const Questions = () => {
  const [data, setData] = useState(questions);

  return (
    <div>
      {data.map((curQues) => {
        const { id } = curQues;
        return <Accordion key={id} {...curQues} />;
      })}
    </div>
  );
};

export default Questions;
