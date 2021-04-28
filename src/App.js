import Header from "./components/Header";
import Tasks from "./components/Tasks"
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Docter Appointment",
        args: ["Hello World"]
    },
    {
        id: 2,
        text: "Grocery",
        args: ["Good Bye"]
    }
  ])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
