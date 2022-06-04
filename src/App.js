 
import {useState ,useEffect} from 'react';
import Header from './component/Header'
import Tasks from './component/Tasks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import AddTask from './component/AddTask';
import Modal from './component/Modal'
const header = "Task Tracker";
  // "server": "json-server --watch db.json --port 5000"


const success = () => toast.success("task added successfully");


function App() {
  const [showModal,setshowModal] = useState(false);
 


// const [showAddTask,setShowAddTask]= useState(false)

  const [tasks, setTasks] = useState([])
  useEffect(()=>{
    console.log('renderd')
    const getTasks = async()=>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    
    getTasks()
  },[])
//fetch tasks
const fetchTasks = async()=>{
  const res = await fetch('    http://localhost:5000/tasks')
  const data = await res.json()
    return data}
//fetch one task
const fetchTask = async(id)=>{
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  console.log(data)
  return data
  }



  //delete task
const deleteTask = async (id)=>
{
  await fetch(`    http://localhost:5000/tasks/${id}`,{
    method:'DELETE'
  })
  setTasks(tasks.filter((item)=> item.id !== id))
} 
//delte all 
// const taskNew= {...tasks}
const deleteAll = async ( )=>
{
  await fetch(`  http://localhost:5000/tasks/`,{
    method:'DELETE'
  })
 setTasks("")
} 

//remainder
const toggleReminder = async (id) =>{
  const taskToToggel = await fetchTask(id)
  const upDateTask = {...taskToToggel,reminder:!taskToToggel.reminder}

  const res = await fetch(`    http://localhost:5000/tasks/${id}`,{
    method:'PUT',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(upDateTask)
  })

  const data = await res.json()


  setTasks(tasks.map((task)=>

    task.id === id ? { ...task, reminder:!data.reminder}:task
  ))
}
//add task
const addTask =async (task)=>{
  const res = await fetch('   http://localhost:5000/tasks',{
    method:"POST",
    headers:{
      'Content-type':'application/json'
    },
    body: JSON.stringify(task)
  })
  const data = await res.json()
  setTasks([...tasks,data])
  success()
}

  // const id = Math.floor(Math.random()*10000)+1
  // const newTask ={id,...task}
  // setTasks([...tasks,newTask])
   

//open modal
const openModal =()=>{
     
  setshowModal(showModal =>!showModal)

  
}
  return (
   <>
    <ToastContainer />
    <Modal showModal={showModal}  setshowModal={setshowModal} onAdd={addTask} />
   
    <div className="container">

      <Header  
     openModal={openModal}
      title ={ header}
       />


      {
        //if
        tasks.length >  0?
        //if tasks.length > 0 it will be return this:// "after ? the true return,after : is the false return 
        <Tasks
        tasks={tasks} 
        onDelete={deleteTask}
        deleteAll={deleteAll}
        handelReminder={toggleReminder} 
         />
        //else it will return this message
        : <h4 className="text-xl " style={{color:'#fff'}}>No Tasks To Show ! </h4>

      }

    </div>
    
    </>

  );
}

export default App;
