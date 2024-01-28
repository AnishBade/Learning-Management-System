import React from 'react'
import {Link} from  'react-router-dom';

import {useParams} from 'react-router-dom'; 
export default function CourseDetail() {
    let {course_id}=useParams();
    return (
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-4'>
            <img src="/logo512.png" className="img-thumbnail" alt="Course Image"/>
          </div>
          <div className='col-8'>
            <h3>Course Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officiis reprehenderit quae ab. Ut, explicabo eligendi eius esse est atque saepe. Eveniet porro adipisci nostrum alias. Iusto perspiciatis facere eos?</p>  
            <p className='fw-bold'>Course By: <a href='#'>Teacher 1</a></p>
            <p className='fw-bold'>Duration: 3 Hours 30 Minutes</p>
            <p className='fw-bold'>Total Enrolled: 456 Students</p>
            <p className='fw-bold'>
              Rating:4/5
            </p>
          </div>
          {/* Course Videos */}
          <div className='card mt-4' >
            <h5 className='card-header'>
              Course Videos
            </h5>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>Introduction<button className='btn btn-sm btn-danger float-end'><i className='bi bi-youtube'></i></button></li>
              <li className='list-group-item'>Introduction<button className='btn btn-sm btn-danger float-end'><i className='bi bi-youtube'></i></button></li>
              <li className='list-group-item'>Introduction<button className='btn btn-sm btn-danger float-end'><i className='bi bi-youtube'></i></button></li>
              <li className='list-group-item'>Introduction<button className='btn btn-sm btn-danger float-end'><i className='bi bi-youtube'></i></button></li>
              <li className='list-group-item'>Introduction<button className='btn btn-sm btn-danger float-end'><i className='bi bi-youtube'></i></button></li>
              <li className='list-group-item'>Introduction<button className='btn btn-sm btn-danger float-end'><i className='bi bi-youtube'></i></button></li>

            </ul>

          </div>
        </div>
      
          {/* {Latest Courses} */}
          <h3 className='pb-1 mb-4 mt-5'>Related Courses</h3>      
          <div className='row'>
            <div className='col-md-3'>
              <div className="card">
              <Link to='/detail/1'><img src="/logo512.png" className="card-img-top" alt="..."/></Link>
                <div className="card-body">
                  <h5 className="card-title"><Link to='/detail/1'>Course title</Link></h5>
                </div>
              </div>

            </div>
            <div className='col-md-3'>
              <div className="card">
              <Link to='/detail/1'><img src="/logo512.png" className="card-img-top" alt="..."/></Link>
                <div className="card-body">
                  <h5 className="card-title"><Link to='/detail/1'>Course title</Link></h5>
                </div>
              </div>

            </div>
          </div>     
          {/* {End Latest Courses} */}
      </div>
  )
}

// Note : this need to be deleted