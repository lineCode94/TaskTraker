 import {AiOutlineWarning} from 'react-icons/ai';
 import Task from './Task';

 const Tasks = ({tasks ,onDelete,deleteAll,handelReminder}) => {
    
     return (
         <>
   

        {tasks.map((task) => 
        <Task 
        key ={task.id}
        task = {task} 
        onDelete ={onDelete} 
        toggleReminder ={handelReminder}
         />
        )}
            <button className="btn delete" onClick={
                     ()=>{deleteAll()}
                 } ><AiOutlineWarning className='inline ' style={{color:"#FDBD00",marginBottom:'2px'}}/> Delete All</button>
     

       
         </>
     )
 }
 
 export default Tasks
 