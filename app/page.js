"use client";

import { useEffect, useRef, useState } from "react";
import Form from "./form";

import { getTasks } from "./services/apiTasks";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function page() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" reverseOrder={false} />
      <TaskPage />
    </QueryClientProvider>
  );
}
function TaskPage() {
  const [taskClick, setTaskClick] = useState(false);
  const formRef = useRef(null);

  const { data: tasks, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
  console.log(tasks);
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
  const closeForm = () => {
    setTaskClick(false);
  };
  if (taskClick) return <Form ref={formRef} closeForm={closeForm} />;

  return (
    <div>
      <button
        onClick={(e) => createTask(e)}
        className="text-[2rem] bg-[#87CEEB] w-[100%] text-center rounded-md mb-4 text-[#fff] px-2 py-5"
      >
        Assign a Task
      </button>
      <div className="h-[80vh] min-w-[1000px] bg-[#ffffff]">
        <table className="w-[100%] border-collapse">
          <thead className="border-[1px] border-[#87CEEB] text-[#87CEEB] text-left">
            <tr className="border-[1px] border-[#87CEEB]">
              <th className="p-2 text-left">Person Name</th>
              <th className="p-2 text-left">Person Role</th>
              <th className="p-2 text-left">Assigner Name</th>
              <th className="p-2 text-left">Assigner Role</th>
              <th className="p-2 text-left">Task</th>
              <th className="p-2 text-left">Start Date</th>
              <th className="p-2 text-left">End Date</th>
            </tr>
          </thead>
          <tbody>
            {tasks &&
              tasks.map((task, index) => {
                return (
                  <tr key={index} className="border-[1px] border-[#87CEEB]">
                    <td className="p-2 text-left text-[#87ceeb]">
                      {task.personName}
                    </td>
                    <td className="p-2 text-left text-[#87ceeb]">
                      {task.personRole}
                    </td>
                    <td className="p-2 text-left text-[#87ceeb]">
                      {task.assignerName}
                    </td>
                    <td className="p-2 text-left text-[#87ceeb]">
                      {task.assignerRole}
                    </td>
                    <td className="p-2 text-left text-[#87ceeb]">
                      {task.taskName}
                    </td>
                    <td className="p-2 text-left text-[#87ceeb]">
                      {task.startDate}
                    </td>
                    <td className="p-2 text-left text-[#87ceeb]">
                      {task.endDate}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default page;
