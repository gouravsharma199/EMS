import React from 'react';
import {useState} from 'react'

export const Login = ({handleLogin}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
const submitHandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password);
    setEmail('');
    setPassword('');
}
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded'>
                <form onSubmit={(e)=>{submitHandler(e)}} className ="flex flex-col item-center justify-center">
                    <input 
                    value={email} 
                    onChange={(e)=>{setEmail(e.target.value);}} 
                    required 
                    className="border-2 outline-none background-transparent border-emerald-600 text-xl m-3 py-3 px-5 rounded-full "type='email' placeholder='Enter your Email'/>
                    <input
                    value={password} 
                    onChange={(e)=>{setPassword(e.target.value);}} 
                    required 
                    className="border-2 outline-none background-transparent border-emerald-600 text-xl m-3 py-3 px-5 rounded-full " type='password' placeholder='Enter your Password'/>
                    <button className=" outline-none  bg-emerald-600 text-xl py-3 px-0 m-10 rounded-full text-center" >Login</button>
                </form>

            </div>
            
        </div>
    );
};

