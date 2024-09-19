import { useState } from 'react';
import addTaskIcon from '../../assets/add-plus-circle-svgrepo-com.svg';


const AddButton = ({onClick}) => {
    const [isAddingTask, setIsAddingTask] = useState(false)

    const handleImageRotation = () => {
        onClick(!isAddingTask);
        setIsAddingTask(!isAddingTask);
    }
    
    return (
    <section className='fixed bottom-5 w-dvw overflow-hidden'>
        <img 
            src={addTaskIcon} 
            className={`transition-all duration-300 mx-auto rounded-full hover:scale-105 hover:bg-green-200 hover:cursor-pointer object-contain h-20 ${isAddingTask ? 'rotate-45' : ''}`} 
            alt='Icon for removing task' 
            onClick={handleImageRotation}
            />
    </section>
    );
}

export default AddButton;