function Form() {
  return (
    <form className="flex flex-col gap-4 min-w-[50%] h-[60%] p-[2rem] bg-[#fff] rounded-md">
      <div className="flex gap-2 items-center justify-center">
        <label
          htmlFor="Person Name"
          className="inline-block  bg-[#87CEEB] p-[10px]"
        >
          Person Name
        </label>
        <input
          type="text"
          name="personName"
          placeholder="Person Name"
          className="w-[50%] p-[10px] rounded-md border-[#87CEEB] border-2"
        />
      </div>
      <div className="flex gap-2 items-center justify-center">
        <label
          htmlFor="Person Name"
          className="inline-block  bg-[#87CEEB] p-[10px]"
        >
          Assigner Role
        </label>
        <select className="w-[50%] p-[10px] rounded-md border-[#87CEEB] border-2 text-[#87CEEB]">
          <option value="Project Manager">Project Manager</option>
          <option value="Team Lead">Team Lead</option>
          <option value="Developer">Developer</option>
          <option value="QA">QA</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
