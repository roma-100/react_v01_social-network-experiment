import React from 'react';
import './Preloader.css'
import preloaderGif from '../../../assets/images/preloader.gif';

const PreloaderRing = (props) => {
    return (<img src={preloaderGif} className="preloader-ring"/> )
};

export default PreloaderRing;