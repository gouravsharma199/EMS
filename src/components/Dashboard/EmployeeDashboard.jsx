 import React from 'react';
 import {Header} from '../Headers/Header'
 import {NumberOfTask} from '../Headers/NumberOfTask'
import TaskList from '../../TaskList/TaskList';

export const EmployeeDashboard = (props) => {

    
    return (
        <div className="employee-dashboard p-5 bg-[#1C1C1C] h-screen">
            
            <Header changeUser={props.changeUser} data={props.data}/>

            
            <NumberOfTask data={props.data}/>
            <TaskList data={props.data}/>
            
        </div>
    );
};
