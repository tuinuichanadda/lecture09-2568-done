import TaskCard from "../components/TaskCard";
import TodoModal from "../components/Modal";
import { type TaskCardProps } from "../libs/Todolist";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState<TaskCardProps[]>([
    {
      id: "1",
      title: "Read a book",
      description: "Vite + React + Bootstrap + TS",
      isDone: false,
    },
    {
      id: "2",
      title: "Write code",
      description: "Finish project for class",
      isDone: false,
    },
    {
      id: "3",
      title: "Deploy app",
      description: "Push project to GitHub Pages",
      isDone: false,
    },
  ]);

  const handleAdd = (newTask: TaskCardProps) => {
    //make a new array based on old "tasks" and add newTask as last one
    const newTasks = [...tasks, newTask]; // เอาอันเก่าต่อกันแล่วเป็นอันใหม่
    setTasks(newTasks);
  };

  // Define the function with proper type
  const deleteTask = (taskId: string) => {
    const newTasks = tasks.filter((task: TaskCardProps) => task.id !== taskId);
    setTasks(newTasks);
  };

  // Define the function with proper type
  const toggleDoneTask = (taskId: string) => {
    const newTasks = tasks.map((todo: TaskCardProps) =>
      todo.id === taskId ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTasks(newTasks);
  };

  // const doneTasks = tasks.filter((task) => {
  //   return task.isDone === true;
  // });

  // const doneCount = doneTasks.length;
  // const totalCount = tasks.length;
  const doneLength = tasks.filter((task) => task.isDone).length;

  return (
    <div className="col-12 m-2 p-0">
      <div className="container text-center">
        <h2>Todo List</h2>
        <span className="m-2">
          All : ({doneLength}) Done : ({tasks.length})
        </span>
        {/* Modal Component */}
        <button
          type="button"
          className="btn btn-primary my-3"
          data-bs-toggle="modal"
          data-bs-target="#todoModal"
        >
          Add
        </button>
        {/* 1.สร้างปุ่ม เรียกใช้ model ผ่าน   
        แอดทิบิ้ว ของ bb -> data-bs-target="#todoModal"
        id  = #todoModal */}
        {/* ส่ง props เป็น ฟังชัน */}
        {/* 2.เรียกใช้ component ส่ง prop ขื่อ  onAdd เป็น function */}
        <TodoModal onAdd={handleAdd} />
        <>
          {tasks.map((task) => (
            <TaskCard
              id={task.id}
              title={task.title}
              description={task.description}
              deleteTaskFunc={deleteTask}
              toggleDoneTaskFunc={toggleDoneTask}
              isDone={task.isDone}
              key={task.id}
            />
          ))}
        </>
      </div>
    </div>
  );
}

export default App;
