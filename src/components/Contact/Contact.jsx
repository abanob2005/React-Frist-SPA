import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Contact() {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  function restInput() {
    setUserName('');
    setUserAge('');
    setUserEmail('');
    setPassword('');
  }
  
  const handleSubmit = () => {
    restInput();
  };

  return (
    <>
      <div className={`text-center container-fluid back py-5`}>
        <h2 className='fs-1 fw-bolder text-uppercase'>CONTACT-SECTION</h2>
        <div className="starSeparator d-flex align-items-center justify-content-center">
          <div className="line"></div>
          <i className="fas fa-star mx-3 fs-3"></i>
          <div className="line"></div>
        </div>
        
        <div className='w-50 mx-auto'> 
          
          <div className="form-floating my-3">
            <input 
              type="text" 
              className="form-control" 
              id="floatingName" 
              placeholder="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor="floatingName">userName</label>
          </div>
          
          <div className="form-floating mb-3">
            <input 
              type="number" 
              maxLength="2" 
              className="form-control" 
              id="floatingAge" 
              placeholder="age"
              value={userAge}
              onChange={(e) => setUserAge(e.target.value)}
              min="10" 
              max="99" 
            />
            <label htmlFor="floatingAge">userAge</label>
          </div>
          
          <div className="form-floating mb-3">
            <input 
              type="email" 
              className="form-control" 
              id="floatingEmail" 
              placeholder="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <label htmlFor="floatingEmail">userEmail</label>
          </div>
          
          <div className="form-floating mb-3">
            <input 
              type="password" 
              className="form-control" 
              id="floatingPassword" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          
          <button type='submit' onClick={handleSubmit} className='btn btn-info'>Submit</button>
        </div>
      </div>
    </>
  );
}