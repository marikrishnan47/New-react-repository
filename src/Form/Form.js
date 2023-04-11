import React,{ useContext, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { SateContext } from '../Context/SateContext';

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
    Context.state.forms.push(data)
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
      <div className='form'>
        <h1>Form</h1>
        <form onSubmit={handlSubmit} >
           <div>
          <input name="name" placeholder='userName' onChange={inputSubmit} value={inputName}/><br/>
          <span className="iconify" data-icon="ic:baseline-person"></span>

          </div>
          {inputName === "" && inputEmp &&<div className='Name'> Username is required</div>}
            <div>
          <input name="pas" type='text' placeholder='description' onChange={inputSubmit2} value={inputPas}/><br/>
          <span className="iconify" data-icon="cil:description"></span>
          </div>
          {inputPas===""&& inputEmp &&<div className='description'>description is required</div>}

          <input className='checkbox' type='checkbox' id="click" onChange={checked}/> <label htmlFor="click">checkbox</label><br/>
          <input onClick={()=>dispatch({type:"ARRAY",payload:tasks})} type="submit"value={'Go To Home page'} className='inputlast'/>
        </form>
      </div>
    </div>
  )
}
