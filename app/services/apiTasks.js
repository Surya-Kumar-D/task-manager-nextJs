import supabase from "./supabase";

export async function getTasks() {
  let { data: tasks, error } = await supabase.from("task-table").select("*");
  if (error) {
    console.error(error);
    throw new Error("Task could not be fetched");
  }
  return tasks;
}

export async function insertTask(task) {
  const { data, error } = await supabase.from("task-table").insert([task]);

  if (error) {
    console.error(error);
    throw new Error("Task could not be inserted");
  }
  return data;
}
