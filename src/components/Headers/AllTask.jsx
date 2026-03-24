import React from 'react'
import {useContext} from 'react'
import {AuthContext} from '../../context/AuthProvider'

const AllTask = () => {

    //  const authData = useContext(AuthContext);
     const { userData,setUserData } = useContext(AuthContext);
     console.log(userData.employees)
    return (
        <div className="p-5 bg-[#1c1c1c] mt-7 rounded overflow-auto hide-scrollbar ">
            <div className="flex justify-between rounded px-2 py-4 bg-blue-400 mb-4 text-black">
                <h3>Employee Name</h3>
                <h3>New Task</h3>
                <h3>Active Task</h3>
                <h3>Completed</h3>
                <h3>Failed</h3>
            </div>
            {userData?.employees?.map((elm,idx)=>{ 
                return<div key={idx} className="flex justify-between rounded px-2 py-4 border-emerald-400 mb-4 border-2">
                <h3>{elm.firstName}</h3>
                <h3>{elm.taskCounts.newTask}</h3>
                <h3>{elm.taskCounts.active}</h3>
                <h3>{elm.taskCounts.completed}</h3>
                <h3>{elm.taskCounts.failed}</h3>
            </div>
                
            })}
           
        </div>
        
    )
}

export default AllTask

