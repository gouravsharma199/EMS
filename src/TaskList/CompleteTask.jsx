import React from 'react'

export const CompleteTask = ({data}) => {
    return (
        <div className='shrink-0 h-full w-75 p-5 bg-green-400 rounded-xl'>
               <div className='flex justify-between item-center'>
                <h3 className='bg-red-400 px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h4 className='text-base'>{data.taskDate}</h4>
                </div>
                <h3 className='mt-4 text-2xl font-semibold'>{data.taskTitle}</h3> 
                <p className='text-sm mt-4'>{data.taskDescription}  
                </p>
                <div className="flex justify-between item-center">
                    <button className='bg-blue-400 px-3 py-1 rounded text-sm w-full'>Completed</button>
                </div>
                
            </div>
    )
}