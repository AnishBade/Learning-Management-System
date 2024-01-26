import React from 'react'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import {Routes as Switch, Route} from 'react-router-dom';
import About from './About';
import CourseDetail from './CourseDetail';
export default function Main() {
  return (
    <div>
      <Header/>  
      <Switch>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:course_id' element={<CourseDetail/>}/>
      </Switch>
      <Footer/>
    </div>
  )
}
