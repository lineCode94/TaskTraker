 import {FaTrash} from 'react-icons/fa';
 import {FaCalendarDay} from 'react-icons/fa';
 import {MdNotificationsActive} from 'react-icons/md';
 const styleDelete ={
     color:'#EA4335',
     cursor:"pointer"
 }
 const styleCalender ={
    color:'#3A81F1',
     
}
const Task = ({task, onDelete , toggleReminder}) => {
    return (    
        <div className={`task ${task.reminder?'reminder' :''}`} 
        onDoubleClick={()=> toggleReminder(task.id)}>
                 <h3 className="text-xl   font-bold " >
                     {task.text} 
                 <FaTrash
                  onClick={()=>  onDelete(task.id)    }
                    {...styleDelete}
                    
                    /></h3>
                 <p><FaCalendarDay className='inline' {...styleCalender} /> {task.day} </p>            
                 {
                 task.reminder?<p>
                     <MdNotificationsActive className='inline' style={{marginBottom:'-3px',color:"#3A81F1"}}  />
                      reminder
                       </p>
                    :''
                 }
                 
                 
        </div>
  

    )
}

export default Task
