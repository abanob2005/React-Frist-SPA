import React from 'react';
import style from './Home.module.css';
import Avatar from '../../assets/avatar.svg';

export default function Home() {
  return (
    <div className={`text-white container-fluid back py-5`}> 
      
      <img src={Avatar} className="w-25  mb-4" alt="avatar" /> 

      <h2 className="text-uppercase mb-3 fs-1 fw-bolder">START FRAMEWORK</h2>
      
      <div className="starSeparator d-flex align-items-center justify-content-center">
        <div className="line"></div>
        <i className="fas fa-star mx-3 fs-3"></i>       
        <div className="line"></div>
      </div>
      
      <p className="mt-3">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}
