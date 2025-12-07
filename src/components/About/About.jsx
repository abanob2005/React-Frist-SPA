import React from 'react'

export default function About() {
  return <>
    <div className={`text-white container-fluid back mt-5 pt-5`}>
      <h2 className=' fs-1 fw-bolder text-uppercase'>about component</h2>
      <div className="starSeparator d-flex align-items-center justify-content-center">
        <div className="line"></div>
        <i className="fas fa-star mx-3 fs-3"></i>
        <div className="line"></div>
      </div>
<div className="row container mt-4">
  <div className=' col-md-6'><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
  <div className=' col-md-6'><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
</div>
    </div>
  </>
}
