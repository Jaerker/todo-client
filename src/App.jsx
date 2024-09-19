import { useEffect, useState } from 'react'
import agent from '../utils/agent';
import Task from './Components/Task/Task';
import AddButton from './Components/Button/AddButton';
function App() {
  const [tasks, setTasks] = useState([]);
  const [addMode, setAddMode] = useState(false);


  const handleCheckboxClicked = async (task) => {
    task.done = !task.done;
    await agent.tasks.update(task.sk, task);
  }
  const handleDeleteClicked = async (task) => {

  }
  const handleEditClicked = async (task) => {
    console.log(`edit clicked in ${task.sk}`);
  }
  const handleAddToggle = async (data) => {
    setAddMode(data);

  }


  useEffect(() => {
    agent.tasks.getAll().then(listOfTasks => setTasks(listOfTasks));
  }, [tasks]);

  return (
    <>
    <main className={`mx-5 min-w-56 h-dvh flex transition-all flex-col justify-center sm:justify-start ${addMode ? 'blur-sm' : ''} sm:mt-10 `}>
      <ul className={`container min-w-list mx-auto w-4/5  my-5 divide-y  divide-gray-400 rounded-md overflow-hidden`}>
      {tasks.map((task) => (
        <Task 
          key={task.sk} task={task} 
          onCheckboxClicked={handleCheckboxClicked} 
          onDeleteClicked={handleDeleteClicked}
          onEditClicked={handleEditClicked} />
        ))}
      </ul>
      <AddButton onClick={handleAddToggle}/>    
    </main>
      
    
    </>
  );
}

export default App
