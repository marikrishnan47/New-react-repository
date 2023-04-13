import React,{ useContext, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { SateContext } from '../Context/SateContext';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';

let tasks = [];
// localStorage.setItem('edit',JSON.stringify([]))
export const Form = () => {
  
  // const [inputName, setinputName] = useState(JSON.parse(localStorage.getItem("edit"))?.length ?JSON.parse(localStorage.getItem('edit'))[0].name:"")
  // const [inputPas, setinputPas] = useState(JSON.parse(localStorage.getItem("edit"))?.length ?JSON.parse(localStorage.getItem('edit'))[0].description:"")
  // const [inputAns, setinputAns] = useState(JSON.parse(localStorage.getItem('logInUser')) ||[])
  const {state,dispatch}=useContext(SateContext)
  console.log(state);
  const [inputPas, setinputPas] = useState(state.edit?state.edit[0] ?.description:'')
  const [inputName, setinputName] = useState(state.edit?state.edit[0] ?.name:'')
  const [inputEmp, setinputEmp] = useState(false)
  const [isComp,seIscomp]=useState('false')

  const Context=useContext(SateContext)
   console.log(Context);
 tasks=state.forms;
//  let editItems=JSON.parse(localStorage.getItem('edit'))
const inputSubmit=(get)=>{
  
      setinputName(get.target.value)
     
}

const inputSubmit2=(get)=>{
  setinputPas(get.target.value)

}
const checked=(e)=>{
  seIscomp(e.target.checked?"true":"false")
}
 let Navigate = useNavigate()
 const handlSubmit=(get)=>{
  console.log(get)
     get.preventDefault();
     setinputEmp('true')
       console.log(inputName,inputPas);
       
     let data = {
      name : inputName,
      description : inputPas,
      Answer:isComp
    }
   // Context.state.forms.push(data)
    if(state.edit?.lenght>0){
      tasks[state.edit[1]]=data;
      dispatch({
        type:"EDIT",
        payload:[]
      })
  }
  else{
    tasks.push(data)
  }
  dispatch({
    type : "ARRAY",
    payload : tasks
  })
    // if(editItems?.length>0){
    //   inputAns[editItems[1]]=data;
    //   localStorage.removeItem('edit');
    //   localStorage.setItem('edit',JSON.stringify([]));
    //   localStorage.setItem('logInUser',JSON.stringify([...inputAns]))

    // }
    // else{
    //   setinputAns([...inputAns,data]);
    //   localStorage.setItem('logInUser',JSON.stringify([...inputAns,data]))
    // }
  
  
    
      
    Navigate('/home')
     
 }
  return (
    <div className='container'>
       <div className="row">
       <div className='form'>
        <h1>Form</h1>
        <form onSubmit={handlSubmit} >
        <TextField className='input' id="standard-basic" label="userName" name="name" variant="standard" onChange={inputSubmit} value={inputName} /> 
          {inputName === "" && inputEmp &&<div className='Name'> Username is required</div>}
            
            <TextField className='input' name="pas" type='text' id="standard-basic" label="description"  variant="standard" onChange={inputSubmit2} value={inputPas} /> 
          {inputPas===""&& inputEmp &&<div className='description'>description is required</div>}
          <FormControlLabel control={<Checkbox  />} label="Checkbox" className='checkbox' type='checkbox' id="click" onChange={checked}/>
 
        
          <Button color="secondary" type="submit"value={'Go To Home page'} className='inputlast'>submit</Button>

        </form>
      </div>
       <div className="login-con-1">

        </div>
      </div>
    </div>
  )
}
