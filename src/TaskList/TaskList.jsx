import React from 'react';
import { AcceptTask } from './AcceptTask';
import { NewTask } from './NewTask';
import { CompleteTask } from './CompleteTask';
import { FailedTask } from './FailedTask';

const TaskList = ({data}) => {
    return (
        <div id='tasklist' className='flex cursor-grab active:cursor-grabbing shrink-0 item-center overflow-x-scroll no-scrollbar justify-start gap-5 flex-nowrap h-[55%] w-full py-5 '>
           {data.tasks.map((e,idx)=>{
            console.log(e);


                if(e.newTask){
                   return <NewTask key={idx} data={e}/>

                }
                if(e.active){
                     return   <AcceptTask key={idx} data={e}/>

                }
                if(e.completed){
                   return  <CompleteTask key={idx} data={e}/>

                }
                if(e.failed){
                  return  <FailedTask key={idx} data={e} />
                }
                

           })}
            
        
           
            
        </div>
    );
};



export default TaskList;