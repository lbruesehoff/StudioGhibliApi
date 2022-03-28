import React from 'react';
import '../styles/icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faImage } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/Rotten_Tomatoes_logo.svg'


function icons() {
    return (
        <div className='icons'>

            <div className='info'>
                <FontAwesomeIcon icon={faCircleInfo} size="5x" />
                <p>View Info</p>
            </div>


            <div className='rottenTomato'>
                <img className="rtLogo" src={logo} />
                <p>View Rattings</p>
            </div>



            <div className='poster'>
                <FontAwesomeIcon icon={faImage} size="5x" />
                <p>View Posters</p>
            </div>
            
        </div>
    );
}

export default icons;