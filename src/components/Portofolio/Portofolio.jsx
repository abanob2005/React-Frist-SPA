import React, { useState } from 'react';
import style from './Portofolio.module.css';

import CabinImage from '../../assets/port1.png';
import CakeImage from '../../assets/port2.png';
import CircusImage from '../../assets/port3.png';

export default function Portofolio() {
  
const portfolioItems = [
  { id: 1, src: CabinImage, alt: 'Log Cabin', icon: 'fas fa-plus' },
  { id: 2, src: CakeImage, alt: 'Tasty Cake', icon: 'fas fa-plus' },
  { id: 3, src: CircusImage, alt: 'Circus Tent', icon: 'fas fa-plus' },
  { id: 4, src: CabinImage, alt: 'Log Cabin', icon: 'fas fa-plus' },
  { id: 5, src: CakeImage, alt: 'Tasty Cake', icon: 'fas fa-plus' },
  { id: 6, src: CircusImage, alt: 'Circus Tent', icon: 'fas fa-plus' },
];

  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className={`text-center container-fluid py-5 ${style.portfolioBg}`}>

      <h2 className="text-uppercase mb-3 fs-1 fw-bolder">START FRAMEWORK</h2>

      <div className="starSeparator d-flex align-items-center justify-content-center">
        <div className="line"></div>
        <i className="fas fa-star mx-3 fs-3"></i>
        <div className="line"></div>
      </div>

      <div className="row g-5">
        {portfolioItems.map((item) => (
          <div key={item.id} className="col-md-4 ">
            <div
              className={`${style.portfolioItem}`}
              onClick={() => openModal(item)}
              role="button"
              tabIndex="0"
            >
              <img className="img-fluid rounded-3" src={item.src} alt={item.alt} />
              <div className={`${style.portfolioItemCaption} rounded-3`}>
                <div className={style.portfolioItemCaptionContent}>
                  <i className={`${item.icon} text-white fa-3x`}></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className={style.customModalOverlay} onClick={closeModal}>
          <div className={style.customModalContent} onClick={(e) => e.stopPropagation()}>
            <button className={style.closeButton} onClick={closeModal}>
              <i className="fas fa-times fa-2x"></i>
            </button>
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">{selectedItem.alt}</h2>

            <div className={`starSeparator d-flex align-items-center justify-content-center mb-4 ${style.starDark}`}>
              <div className={style.lineDark}></div>
              <i className="fas fa-star mx-3 fs-3"></i>
              <div className={style.lineDark}></div>
            </div>

            <img className="img-fluid rounded mb-5" src={selectedItem.src} alt={selectedItem.alt} />

           
          </div>
        </div>
      )}
    </div>
  );
}