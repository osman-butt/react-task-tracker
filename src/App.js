import "./App.css";
import Header from "./components/Header.js";
import Tasks from "./components/Tasks.js";
import React from "react";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Shopping",
      day: "Feb 5th at 2:30am",
      reminder: false,
    },
    {
      id: 2,
      text: "Study",
      day: "Feb 6th at 2:30am",
      reminder: false,
    },
    {
      id: 3,
      text: "Pay bills",
      day: "Feb 1st at 9:00am",
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = id => {
    console.log("Delete:", id);
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = id => {
    console.log("Toggle reminder:", id);
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />
      ) : (
        "No Tasks"
      )}
    </div>
  );
}

export default App;
