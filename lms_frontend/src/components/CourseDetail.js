import React from 'react'
import {useParams} from 'react-router-dom'; 
export default function CourseDetail() {
    let {course_id}=useParams();
    return (
    <h1>Course Detail{course_id}</h1>
  )
}
