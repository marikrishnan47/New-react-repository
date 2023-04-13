import React, { useReducer } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './Login/Login'
import { Home } from './Home/Home'
import { Form } from './Form/Form'
import { SateContext } from './Context/SateContext'
import { initialstate, stateReducer } from './Context/Reducer'

export const MainRoutung = () => {
  const [state,dispatch]=useReducer(stateReducer,initialstate)
  return (
    <div>
      <SateContext.Provider value={{state,dispatch}}>
        <BrowserRouter>
        {state ?.isLoggedIn ? (
          <Routes>
                <Route path='/Form' element={<Form/>}></Route>
                <Route path="/home" element={<Home/>}></Route>  
                <Route path="*" element={<Navigate to={"/home"}></Navigate>}></Route>
     
          </Routes>
            ):(<Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>
          </Routes>
            )}
        </BrowserRouter>
        </SateContext.Provider>
    </div>
  )
}
