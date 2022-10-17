import React from 'react';
import './Preloader.css'
import preloader from '../../../assets/images/preloader.gif';

const Preloader = (props) => {
    return (
        <svg className="preloader-waive" version="1.1" id="L5"  x="0px" y="0px"
    viewBox="0 0 100 100" enableBackground="new 0 0 0 0" >
    <circle fill="green" stroke="none" cx="6" cy="50" r="6">
      <animateTransform 
         attributeName="transform" 
         dur="1s" 
         type="translate" 
         values="0 15 ; 0 -15; 0 15" 
         repeatCount="indefinite" 
         begin="0.1"/>
    </circle>
    <circle fill="green" stroke="none" cx="30" cy="50" r="6">
      <animateTransform 
         attributeName="transform" 
         dur="1s" 
         type="translate" 
         values="0 10 ; 0 -10; 0 10" 
         repeatCount="indefinite" 
         begin="0.2"/>
    </circle>
    <circle fill="green" stroke="none" cx="54" cy="50" r="6">
      <animateTransform 
         attributeName="transform" 
         dur="1s" 
         type="translate" 
         values="0 5 ; 0 -5; 0 5" 
         repeatCount="indefinite" 
         begin="0.3"/>
    </circle>
  </svg>
        )
};

export default Preloader;