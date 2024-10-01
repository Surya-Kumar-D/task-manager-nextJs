"use client";

import { useEffect, useRef, useState } from "react";
import Form from "./form";

function page() {
  return <TaskPage />;
}

function TaskPage() {
  const [taskClick, setTaskClick] = useState(false);
  const formRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setTaskClick(false);
    }
  };
  useEffect(() => {
    if (taskClick) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [taskClick]);
  function createTask(e) {
    e.preventDefault();
    setTaskClick(true);
  }

  if (taskClick) return <Form ref={formRef} />;

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
