/* eslint-disable react/display-name */
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "react-day-picker/dist/style.css";

import { DayPicker } from "react-day-picker";

const Form = React.forwardRef(({ inputRef }, ref) => {
  const { register, handleSubmit } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  console.log(ref);
  return (
    <form
      ref={ref}
      className="flex flex-col gap-4 min-w-[50%] h-[60%] p-[2rem] bg-[#fff] rounded-md "
    >
      <div className="flex gap-2 items-center justify-center">
        <label
          htmlFor="Person Name"
          className="w-1/3 text-center inline-block  bg-[#87CEEB] p-[10px] rounded-md"
        >
          Person Name
        </label>
        <input
          type="text"
          name="personName"
          placeholder="Person Name"
          className="w-[50%]  placeholder:text-[#87CEEB] p-[10px] rounded-md border-[#87CEEB] border-2"
          {...register("personName")}
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
          name="personRole"
          className="w-[50%] p-[10px] rounded-md border-[#87CEEB] border-2 text-[#87CEEB]"
          {...register("personRole")}
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
          type="text"
          name="assignerName"
          placeholder="Assigner Name"
          className="w-[50%] placeholder:text-[#87CEEB] p-[10px] rounded-md border-[#87CEEB] border-2"
          {...register("assignerName")}
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
          name="assignerRole"
          className="w-[50%] p-[10px] rounded-md border-[#87CEEB] border-2 text-[#87CEEB]"
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
          type="text"
          name="taskName"
          placeholder="Task"
          className="w-[50%] placeholder:text-[#87CEEB] p-[10px] rounded-md border-[#87CEEB] border-2"
          {...register("taskName")}
        />
      </div>
      <div className="flex gap-2 items-center justify-center">
        <label
          htmlFor="startDate"
          className="w-1/3 text-center inline-block  bg-[#87CEEB] p-[10px] rounded-md"
        >
          Start Date
        </label>
        <DayPicker />
      </div>
    </form>
  );
});

export default Form;
