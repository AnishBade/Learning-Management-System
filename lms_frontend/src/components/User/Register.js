import React from 'react'
import {Link} from 'react-router-dom'
export default function Login() {
  return (
    <div className='container mt-4'>
      <div className="row">
        <div className='col-6 offset-3'>
          <div className='card'>
            <h5 className='card-header'>User Register</h5>
            <div className='card-body'>
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Full Name</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Username</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Interest</label>
                  <textarea className='form-control' name="" id="" cols="30" rows="10"></textarea>
                  <div id="emailHelp" className='form-text'>Php, Python, Javascript, etc</div>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
