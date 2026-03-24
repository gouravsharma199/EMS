import React from 'react'
import { Header } from '../Headers/Header'
import CreateTask from '../Headers/CreateTask'
import AllTask from '../Headers/AllTask'

const AdminDashboard = (props) => {

//     if (!data) {
//   return <div>Loading...</div>;
// }
    return (
        <div className='h-screen w-full p-10'>
            <Header changeUser={props.changeUser} data={props.data}/>
            <CreateTask/>
            <AllTask/>
        </div>
    )
}

export default AdminDashboard