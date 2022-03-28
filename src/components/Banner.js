import React from 'react';
import '../styles/banner.css';
import ghibli from '../images/Ghibli_Banner.png'

function Banner() {
        return (
            <div className='banner'>
              <h1>Welcome to Studio Ghibli Info</h1>
                {/* <img src={ghibli}></img> */}
            </div>
        );
    }


export default Banner;