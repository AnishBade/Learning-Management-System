import React from 'react'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import {Routes as Switch, Route} from 'react-router-dom';
import About from './About';
import CourseDetail from './CourseDetail';
import Register from './User/Register';
import Login from './User/Login'; 
export default function Main() {
  return (
    <div>
      <Header/>  
      <Switch>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:course_id' element={<CourseDetail/>}/>
        <Route path='/user-login/:course_id' element={<Login/>}/>
        <Route path='/user-register/:course_id' element={<Register/>}/>
      </Switch>
      <Footer/>
    </div>
  )
}
