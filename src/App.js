import { useState } from "react";
import { Task } from "./Task.js";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    // const newToDoList = [...toDoList, newTask];
    // setToDoList(newToDoList);
    // ===========================
    // pakai id untuk tanda unik
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setToDoList([...toDoList, task]);
  };

  const deleteTask = (task) => {
    // const newTasks = toDoList.filter((data) => {
    //   return data !== task;
    // });
    // setToDoList(newTasks);
    // setToDoList(toDoList.filter((data) => data !== task)); // problem tidak pake tanda unik, jika task sama maka ketika di hapus akan ke hapus semua
    setToDoList(toDoList.filter((data) => data.id !== task.id));
  };

  const completeTask = (id) => {
    setToDoList(
      toDoList.map((data) => {
        if (data.id === id) {
          return { ...data, completed: true };
        } else {
          return data;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="listTask">
        {toDoList.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              data={task.taskName}
              completed={task.completed}
              deleteData={deleteTask}
              completeData={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
