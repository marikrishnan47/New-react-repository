

import React, { useState } from 'react'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { SateContext } from '../Context/SateContext';

// localStorage.setItem("logInUser",JSON.stringify([]))
export const Home = () => {
  
  const {state:{forms},dispatch}=useContext(SateContext)
  console.log(forms);
  // let g=JSON.parse(localStorage.getItem('logInUser'));
  // const [rate, setrate] = useState(g)

  // const Context=useContext(SateContext)

  
 
  const Navigate=useNavigate();
 const editForm=(e,index)=>{
     Navigate('/form')
     dispatch({
        type:"EDIT",
        payload:[e,index]
     })
    //  let edit=[g[e],e];
    //  localStorage.setItem('edit',JSON.stringify(edit));
    //  setrate(edit)
 }
  const delChange=(e)=>{
    let newtask=[...forms];
    newtask.splice(e,1)
    dispatch({
      type:"ARRAY",
      payload:newtask,
    })
  }
      // delete g[e];
      // let get=g.flat();
      // localStorage.removeItem('logInUser')
      // localStorage.setItem('logInUser',JSON.stringify(get));
      // setrate(get)
  
  return (
    <>
      <Link to={"/form"} className='home1'> Go to Form Page <span className="iconify" data-icon="material-symbols:arrow-right-alt-rounded"></span></Link>

    <div className='container' >    
       <div className='home'>
        {forms.map((value,index)=>{
          return (<div className='home-con' key={index}>

            <div className='display'>
            <p><span className="iconify" data-icon="mi:circle-check"></span>{value.name}</p>
            <p><span className="iconify" data-icon="mi:circle-check"></span>{value.description}</p>
            <p><span className="iconify" data-icon="mi:circle-check"></span>{value.Answer}</p>

            </div>
             <div>
             <button  onClick={()=>delChange(index)}><span className="iconify" data-icon="fluent:delete-dismiss-20-filled"></span></button>
              <button onClick={()=>editForm(value,index)}><span className="iconify" data-icon="material-symbols:edit-square-outline-rounded"></span></button>
             </div>
        </div>) }
          
         )
        }
       </div>
    </div>
    </>
  )
 }
