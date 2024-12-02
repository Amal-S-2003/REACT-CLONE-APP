import React, { useState } from "react";

function FaqCard() {
  const [view, setView] = useState(true);
  return (
    <>
      <div
        className="col-12 px-4 py-2  d-flex align-items-center justify-content-between text-light fs-4 border-2 border-light rounded-3"
        style={{ backgroundColor: "gray" }}
        onClick={() => setView(!view)}

      >
        <p className="mt-2">What is NetFlix</p>
        {view ? (
          <button
            className="bg-transparent border-0"
          >
            <i class="fa-solid fa-plus "></i>
          </button>
        ) : (
          <button
            className="bg-transparent border-0"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        )}
      </div>
      {!view ? (
        <div className="col-12 px-4 py-2 rounded-3 mt-3 f-4 text-light fw-bold"
        style={{ backgroundColor: "gray" }}
>
    <p className="fs-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi error quidem ex perferendis distinctio officiis enim ullam et praesentium odio pariatur voluptatibus accusamus atque debitis sequi cupiditate explicabo, quo nesciunt.</p>
          
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default FaqCard;
