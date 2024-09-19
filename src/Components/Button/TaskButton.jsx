const TaskButton = ({src, alt, onClick, isDone}) => {
    return (
        <img 
            src={src} 
            className={`transition-all duration-300 rounded-full object-cover h-10 ${isDone ? 'h-0' : 'hover:scale-105'}`} 
            alt={alt} 
            onClick={onClick} 
            
            />
    );
}

export default TaskButton;