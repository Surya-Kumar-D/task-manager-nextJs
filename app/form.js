/* eslint-disable react/display-name */
"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import TaskIcon from "@mui/icons-material/Task";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { insertTask } from "./services/apiTasks";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Task from "@mui/icons-material/Task";
import KeyboardBackspace from "@mui/icons-material/KeyboardBackspace";
import { set } from "date-fns";
import useStore from "./store";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Form = React.forwardRef(({ inputRef, closeForm }, ref) => {
  const queryClient = useQueryClient();
  const [personName, setPersonName] = useState("");
  const [personRole, setPersonRole] = useState("");
  const [assignerName, setAssignerName] = useState("");
  const [assignerRole, setAssignerRole] = useState("");
  const [taskName, setTaskName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { register, handleSubmit, setValue, reset } = useForm();
  const tasks = useStore((state) => state.tasks);
  const addTask = useStore((state) => state.addTask);
  const { mutate, isLoading } = useMutation({
    mutationFn: insertTask,
    onSuccess: (data) => {
      toast.success("Task added successfully");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      reset();
      closeForm();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const onSubmit = (data) => {
    mutate(data);
    reset();
  };
  console.log(tasks);
  return (
    <form
      ref={ref}
      className="flex flex-col gap-4 max-w-[600px]  w-[50%] h-[60%] p-[2rem] bg-[#fff] rounded-md "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-2 items-center justify-center">
        <label
          htmlFor="Person Name"
          className="w-1/3 text-center inline-block  bg-[#87CEEB] p-[10px] rounded-md"
        >
          Person Name
        </label>
        <input
          onChange={(e) => setPersonName(e.target.value)}
          type="text"
          name="personName"
          wrapperClassName="w-[50%] "
          placeholder="Person Name"
          className="w-[50%] text-[#87CEEB] p-[10px] rounded-md border-[#87CEEB] border-2"
          {...register("personName", { required: true })}
        />
      </div>
      <div className="flex gap-2 items-center justify-center">
        <label
          htmlFor="personRole"
          className="w-1/3 text-center inline-block  bg-[#87CEEB] p-[10px] rounded-md"
        >
          Person Role
        </label>
        <select
          onChange={(e) => setPersonRole(e.target.value)}
          name="personRole"
          className="w-[50%] p-[10px] rounded-md border-[#87CEEB] border-2 text-[#87CEEB]"
          {...register("personRole", { required: true })}
        >
          <option value="Project Manager">Project Manager</option>
          <option value="Team Lead">Team Lead</option>
          <option value="Team Member">Team Member</option>
          <option value="Developer">Developer</option>
          <option value="QA">QA</option>
        </select>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <label
          htmlFor="Person Name"
          className="w-1/3 text-center inline-block  bg-[#87CEEB] p-[10px] rounded-md"
        >
          Assigner Name
        </label>
        <input
          onChange={(e) => setAssignerName(e.target.value)}
          type="text"
          name="assignerName"
          placeholder="Assigner Name"
          className="w-[50%] text-[#87CEEB] placeholder:text-[#87CEEB] p-[10px] rounded-md border-[#87CEEB] border-2"
          {...register("assignerName", { required: true })}
        />
      </div>
      <div className="flex gap-2 items-center justify-center">
        <label
          htmlFor="Assigner Role"
          className="w-1/3 text-center inline-block  bg-[#87CEEB] p-[10px] rounded-md"
        >
          Assigner Role
        </label>
        <select
          onChange={(e) => setAssignerRole(e.target.value)}
          name="assignerRole"
          className="w-[50%] p-[10px] rounded-md border-[#87CEEB] border-2 text-[#87CEEB]"
          {...register("assignerRole", { required: true })}
        >
          <option value="Project Manager">Project Manager</option>
          <option value="Team Lead">Team Lead</option>
          <option value="Team Member">Team Member</option>
          <option value="Developer">Developer</option>
          <option value="QA">QA</option>
        </select>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <label
          htmlFor="taskName"
          className="w-1/3 text-center inline-block  bg-[#87CEEB] p-[10px] rounded-md"
        >
          Task
        </label>
        <input
          onChange={(e) => setTaskName(e.target.value)}
          type="text"
          name="taskName"
          placeholder="Task"
          className="w-[50%] text-[#87CEEB] placeholder:text-[#87CEEB] p-[10px] rounded-md border-[#87CEEB] border-2"
          {...register("taskName", { required: true })}
        />
      </div>
      <div className="flex gap-2 items-center justify-center">
        <label
          htmlFor="startDate"
          className="w-1/3 text-center inline-block  bg-[#87CEEB] p-[10px] rounded-md"
        >
          Start Date
        </label>
        <div className="w-[50%] placeholder:text-[#87CEEB] p-[10px] rounded-md border-[#87CEEB] border-2 cursor-pointer">
          <DatePicker
            selected={startDate}
            onChange={(e) => {
              setStartDate(e);
              setValue("startDate", e);
            }}
            name="startDate"
            placeholderText="Select the start date"
          />
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <label
          htmlFor="endDate"
          className="w-1/3 text-center inline-block  bg-[#87CEEB] p-[10px] rounded-md"
        >
          End Date
        </label>
        <div className="w-[50%] placeholder:text-[#87CEEB] p-[10px] rounded-md border-[#87CEEB] border-2 cursor-pointer">
          <DatePicker
            selected={endDate}
            onChange={(e) => {
              setEndDate(e);
              setValue("endDate", e);
            }}
            name="endDate"
            placeholderText="Select the start date"
          />
        </div>
      </div>
      <div className="w-[100%] p-[10px] gap-[50px] flex justify-around items-center">
        <button
          onClick={() => closeForm()}
          className="w-1/3 text-center inline-block   bg-[#87CEEB] p-[10px] rounded-md"
        >
          <KeyboardBackspace /> Back
        </button>
        <button
          type="submit"
          className="w-1/3 text-center inline-block   bg-[#87CEEB] p-[10px] rounded-md"
        >
          <Task /> Submit
        </button>
      </div>
    </form>
  );
});

export default Form;
