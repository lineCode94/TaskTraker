 
// import { useState } from 'react';
// import {VscSaveAs} from 'react-icons/vsc';

// const AddTask = ({onAdd }) => {
//     const [text,setText] =useState('')
//     const [day,setDay] =useState('')
//     const [reminder,setReminder] =useState(false)

//     const onSubmit = (e)=>{
//         e.preventDefault()

//         if(!text){
//             alert('add text')
//             return('')
//         }
//         onAdd({text,day,reminder})
//         setText('')
//         setDay('')
//         setReminder(false)//must put the default value
         
//     }
//     return (


//       <form className='add-form' onSubmit={onSubmit}>

//             <div className="form-control">
//                 <label >Task</label>
//                 <input type="text" placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
//             </div>

//             <div className="form-control">
//                 <label >Day & Time</label>
//                 <input type="date" placeholder='Add Day & Time'
//                 value={day} onChange={(e) => setDay(e.target.value)}
//                 />
//             </div>

//             <div className="form-control form-control-check">
//                 <label >Set Reminder</label>
//                 <input
//                 type="checkbox" 
//                 value={reminder}
//                 checked={reminder}
//                  onChange={(e) => setReminder(e.currentTarget.checked)} />
//             </div>
 
             
//             <button style={{background:"#2DA94F"}} className='btn btn-block' type="submit" ><VscSaveAs style={{color:"#fff",margin:"0px 10px -3px",fontSize:"20px" }}/>Save Task</button>
 
           
//       </form>
//     )
// }

// export default AddTask
