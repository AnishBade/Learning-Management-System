import React from 'react'
import {Link} from  'react-router-dom';
export default function Home() {
  return (
    <div className='container mt-4'>
      {/* {Latest Courses} */}
      <h3 className='pb-1 mb-4'>Latest Courses<Link to=''className='float-end'>See All</Link></h3>
      <div className='row'>
        <div className='col-md-3'>
          <div className="card">
            <Link to='/about'><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to=''>Course title</Link></h5>
            </div>
          </div>

        </div>
        <div className='col-md-3'>
          <div className="card">
            <Link to=''><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to=''>Course title</Link></h5>
            </div>
          </div>

        </div>
        <div className='col-md-3'>
          <div className="card">
            <Link to=''><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to=''>Course title</Link></h5>
            </div>
          </div>

        </div>
        <div className='col-md-3'>
          <div className="card">
            <Link to=''><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to=''>Course title</Link></h5>
            </div>
          </div>

        </div>
      </div>     
      {/* {End Latest Courses} */}

      {/* {Popular Courses} */}
      <h3 className='pb-1 mb-4 mt-4'> Popular Courses<Link to=''className='float-end'>See All</Link></h3>
      <div className='row'>
        <div className='col-md-3'>
          <div className="card">
            <Link to=''><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to=''>Course title</Link></h5>
            </div>
          </div>

        </div>
        <div className='col-md-3'>
          <div className="card">
            <Link to=''><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to=''>Course title</Link></h5>
            </div>
          </div>

        </div>
        <div className='col-md-3'>
          <div className="card">
            <Link to=''><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to=''>Course title</Link></h5>
            </div>
          </div>

        </div>
        <div className='col-md-3'>
          <div className="card">
            <Link to=''><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to=''>Course title</Link></h5>
            </div>
          </div>

        </div>
      </div>     
      {/* {End Popular Courses} */}

      {/* {Popular Teachers} */}
      <h3 className='pb-1 mb-4 mt-4'> Popular Teachers<Link to=''className='float-end'>See All</Link></h3>
      <div className='row'>
        <div className='col-md-3'>
          <div className="card">
            <Link to=''><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to=''>Course title</Link></h5>
            </div>
          </div>

        </div>
        <div className='col-md-3'>
          <div className="card">
            <Link to=''><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to=''>Course title</Link></h5>
            </div>
          </div>

        </div>
        <div className='col-md-3'>
          <div className="card">
            <Link to=''><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to=''>Course title</Link></h5>
            </div>
          </div>

        </div>
        <div className='col-md-3'>
          <div className="card">
            <Link to=''><img src="logo512.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to=''>Course title</Link></h5>
            </div>
          </div>

        </div>
      </div>     
      {/* {End Popular Teachers} */}

      {/* {Student Testimonials} */}
      <h3 className='pb-1 mb-4 mt-4'> Student Testimonials</h3>

      <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-5" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">First Carousel</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Second Carousel</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in <cite title="Source Title">Third Carousel</cite>
              </figcaption>
            </figure>
          </div>
        
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      {/* {End Student Testimonials } */}
    </div>
    
  )
}
