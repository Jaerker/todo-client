import { useState } from "react";
import RemoveTaskIcon from '../../assets/remove-minus-circle-svgrepo-com.svg';
import EditTaskIcon from '../../assets/menu-kebab-horizontal-circle-svgrepo-com.svg';
import SaveTaskIcon from '../../assets/save-icon.svg';

const Task = ({task, onCheckboxClicked, onDeleteClicked, onEditClicked}) => {

  const [_task, _setTask] = useState(task);
  const [updatedTask, setUpdatedTask] = useState({...task});
  const [done, setDone] = useState(task.done);
  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  const handleDeleteClicked = () => {
    console.log('remove task clicked');
  }

  const handleEditClicked = () => {
    console.log('edit task clicked');
    if(editMode){
      setUpdatedTask(_task)
    }
    setEditMode(!editMode);
    onEditClicked(task);
  }
  const handleSaveClicked = (event) => {
    event.preventDefault();

  }

  const handleInputChange = (event) => {
    const {value: task} = event.target;
    setUpdatedTask((prevValue) => {
      console.log(task);
      return {
        ...prevValue,
        task: task
      }
    });
  }


  return (<li>
    <section className={`relative transition-all duration-300 flex py-2 px-2 ${done ? 'bg-green-100 text-gray-500' : 'bg-blue-200 '} `}>
      {editMode ? 
      (<>
        <textarea 
          className=' text-xl font-bold grow w-fit my-1 mr-2 bg-blue-100 ring-1 rounded-sm py-1 pl-2' 
          value={updatedTask.task} 
          onChange={handleInputChange} />

      </>) : 
      (<>
      <h2 className={`select-none grow cursor-pointer text-xl font-bold w-auto pl-2 py-2 ${done ? 'line-through' : ' '}`} onClick={() => {onCheckboxClicked(task); setDone(!done); console.log(editMode)}}>
        {task.task}
      </h2>
      </>)}
      <section className='flex justify-end items-center w-fit'>
        <img 
            src={SaveTaskIcon} 
            className={`justify-end transition-all duration-300 rounded-full object-cover hover:scale-105 ${editMode ? 'h-10 ' : 'h-0'}`} 
            alt='Icon for saving task' 
            onClick={handleSaveClicked} 
            />
        <img 
            src={RemoveTaskIcon} 
            className={`transition-all duration-300 rounded-full object-cover hover:scale-105 ${editMode ? 'h-10' : done ? 'h-10' : 'h-0'}`} 
            alt='Icon for removing task' 
            onClick={handleDeleteClicked} 
            />
        <img 
            src={EditTaskIcon} 
            className={`transition-all duration-300 rounded-full object-cover hover:scale-105 ${done ? 'h-0' : editMode ? 'h-10 rotate-180' : 'h-10 -rotate-90'}`} 
            alt='Icon for editing task' 
            onClick={handleEditClicked} 
            />
        
      </section>
      

    </section>
  </li>);
}

export default Task;