import React,{useState,useContext} from 'react';
import {AuthContext} from '../../context/AuthProvider'

const CreateTask = () => {
      const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')
    const { userData, setUserData } = useContext(AuthContext);
    // const [newTask, setNewTask] = useState({});


const handleSubmit = (e) =>{
    e.preventDefault();
    
    const  newTask={taskTitle,taskDescription,taskDate,asignTo,category,newTask:true,active:false,completed:false,failed:false};
    const data = JSON.parse(localStorage.getItem('employees'));
    console.log(data)

    const userEmployeeData = userData?.employees?.map((elem) => {
    if (elem.firstName === asignTo) {
        return {
        ...elem,
        tasks: [...elem.tasks, newTask],
        taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1
        }
        };
    }
    return elem;
    });
    setUserData({...userData,employees:userEmployeeData})

    localStorage.setItem('employees',JSON.stringify(userEmployeeData))
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAsignTo('');
    setCategory('');



}
    return (
        <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
                <form onSubmit={(e)=>handleSubmit(e)} className = "flex flex-wrap w-full itemes-start justify-between">
                   
                    <div className="w-1/2">

                        <div >
                        <h3 className='text-sm text-gray-300 mb-0.5'> Task title</h3>
                        <input value={taskTitle} onChange={(e)=>{setTaskTitle(e.target.value)}}
                        type="text" placeholder="create Task" className=" text-sm py-1 px-2 w-4/5 rounded outline-none border border-grey-400 mb-4"/>
                        </div>

                        <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input value={taskDate} onChange={(e)=>{setTaskDate(e.target.value)}}
                        type="date" className="text-sm py-1 px-2 w-1/2 rounded outline-none bg-transparent border border-grey-400 mb-4"/>
                        </div>
                    
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>asign to </h3>
                        <input value={asignTo} onChange={(e)=>{setAsignTo(e.target.value)}}
                         type="text" placeholder ="employee name" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-grey-400 mb-4"/>
                        </div>
                    
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input value={category} onChange={(e)=>{setCategory(e.target.value)}}
                        type="text" placeholder ="design or dev" className="text-sm bg-black-600 py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-grey-400 mb-4"/>

                        </div>

                    </div>
                    
                    
                    <div className="w-1/2 flex flex-col item-start">
                        <h3 className="test-sm text-grey-300 mb-0.5">Description</h3>
                    <textarea value={taskDescription} onChange={(e)=>{setTaskDescription(e.target.value)}}
                    className="w-full h-44 test-sm py-2 px-4 rounded outline-none bg-transparent border border-grey-400" name="" id="" cols="30" rows="10"></textarea>
                     <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>  
                    </div>
                    
                   

                </form>
            </div>
    );
};

export default CreateTask;

