"use client";

import { useState } from "react";
import Form from "./form";

function page() {
  return <TaskPage />;
}

function TaskPage() {
  const [taskClick, setTaskClick] = useState(false);

  function createTask(e) {
    e.preventDefault();
    setTaskClick(true);
  }
  if (taskClick) return <Form />;
  return (
    <div>
      <button
        onClick={(e) => createTask(e)}
        className="text-[2rem] bg-[#87CEEB] w-[100%] text-center rounded-md mb-4 text-[#fff] px-2 py-5"
      >
        Assign a Task
      </button>
      <div className="h-[80vh] min-w-[800px] bg-[#ffffff]"></div>
    </div>
  );
}

export default page;
