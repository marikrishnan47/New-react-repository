

import React,{ useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SateContext } from '../Context/SateContext'

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
    }
    else{
        setemptyInp(true)
    }
        
    }

  return (
    <div className='container'>
        <div className='login-con'>
            
            <h1>Login</h1>
            <form onSubmit={handlSubmit} >
                 
                <div>
                <input  name="name"  placeholder='userName' onChange={inputSubmit}/>
                <span className="iconify" data-icon="ic:baseline-person"></span>
                </div>
                {taskName === "" && inputEmp &&<div className='Name'> Username is required</div>}
                <br/>

                 <div>
                 <input type="password" name="password"placeholder='password' onChange={inputSubmit}/>
                 <span className="iconify" data-icon="material-symbols:lock-open-outline-rounded"></span>
                 </div>
                 {taskDesp===""&& inputEmp &&<div className={'password'}>password is required</div>}
                 <br/>
                 <button> login </button>
                 {emptyInp &&<div className='btn'>not found</div>}
            </form>    
            <button onClick={()=>dispatch({type:'LOGIN',payload:true})}> Chnage </button>
        </div>
    </div>
  )
}
