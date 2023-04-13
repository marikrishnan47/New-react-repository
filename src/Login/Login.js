

import React,{ useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SateContext } from '../Context/SateContext'
import { TextField } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
export const Login = () => {



    const [taskName, setTaskName] = useState("")
    const [taskDesp, setTaskDesp] = useState("")
    const [inputEmp, setinputEmp] = useState(false)
    const[emptyInp,setemptyInp]=useState(false)
    const {state,dispatch}=useContext(SateContext)
       console.log(state);
     const inputSubmit=(get)=>{
        if(get.target.name ==="name"){
            setTaskName(get.target.value)
     }
     else{
        setTaskDesp(get.target.value)
     }
    }
    let Navigate = useNavigate()
    const handlSubmit=(get)=>{
        get.preventDefault();
        setinputEmp(true)
         
      let conMember=[
        {
        name:"jegan",
        password:"0107"
     },
     {
        name:"arjun",
        password:"0104"
     },
     {
        name:"marish",
        password:"0103"
     },
     {
        name:"arun",
        password:"0105"
     },
    
    ]
    let Member=conMember.find((get)=>get.name === taskName && get.password === taskDesp) 
    if(Member){
        Navigate("/home")
        { localStorage.setItem('isLoggedIn',JSON.stringify(true))
        dispatch({type:'LOGIN',payload:true
        
        })}
    }
    else{
        setemptyInp(true)
    }
        
    }

  return (
    <div className='container'>
      <h1>Login</h1>
        <div className='row'>
          
        <div className='login-con'>
            
            
          <form onSubmit={handlSubmit} >                               
                <TextField className='input' id="standard-basic" label="userName" name="name" variant="standard" onChange={inputSubmit} /> 
                {taskName === "" && inputEmp &&<div className='Name'> Username is required</div>}  <br/> 

               <TextField className='input' name="password" id="standard-basic" label="password"                
               variant="standard" onChange={inputSubmit} />                
                 {taskDesp===""&& inputEmp &&<div className={'password'}>password is required</div>}
                 
                 <button > login <LoginIcon className='first-icon' /> </button>
                 {emptyInp &&<div className='btn'>not found</div>}
          </form>    
            
        </div>
        <div className='login-con-1'>

        </div>
        </div>
    </div>
  )
}
