import Header from "./components/Header";
import Tasks from "./components/Tasks"
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Docter Appointment",
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: "Movies",
        day: 'March 8th at 8:30pm',
        reminder: false
    },
    {
      id: 3,
      text: "Grocery",
      day: 'April 1st at 10:30am',
      reminder: false
  }
  ])

  // Delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No Tasks To Show 2'}
    </div>
  );
}

export default App;
