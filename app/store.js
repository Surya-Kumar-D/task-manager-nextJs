const { create } = require("zustand");

const useStore = create((set) => ({
  tasks: [],
  addTask: (task) => {
    set((state) => ({
      tasks: [...state.tasks, task],
    }));
  },
  removeTask: (task) => {
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== task.id),
    }));
  },
}));

export default useStore;
