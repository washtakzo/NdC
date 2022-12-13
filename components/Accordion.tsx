import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

import { textToHeigth } from "../helper/functions";

const Accordion = () => {
  const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Qui ratione, a distinctio magni vitae ullam laboriosam aspernatur veniam cum eius 
  vel beatae libero consequatur commodi earum. Quos porro amet quibusdam nostrum iure 
  nihil accusantium nobis quia, impedit laboriosam. Optio, corporis excepturi. Earum aut 
  molestias veritatis blanditiis vel architecto corrupti fugit.`;

  const maxHeigth = `${textToHeigth(description)}px`;

  const [isShowText, setIsShowText] = useState(false);
  const clickHandler = () => {
    setIsShowText((prev) => !prev);
  };
  return (
    <div className="first-of-type:border-t border-b border-secondary py-4 px-2">
      <button
        onClick={clickHandler}
        className="flex justify-between items-center text-third cursor-pointer w-full h-full text-left text-sm tracking-wider"
      >
        LIVRAISON
        {isShowText ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
      <div
        className={`max-h-0 overflow-hidden transition-all duration-500 ease-in-out ${
          isShowText && "maxHeigth my-4"
        }`}
        style={{
          maxHeight: isShowText ? maxHeigth : "0",
        }}
      >
        {description}
      </div>
    </div>
  );
};

export default Accordion;
