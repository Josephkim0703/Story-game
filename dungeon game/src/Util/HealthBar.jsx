import '../css/mainpage.css';
import Heart from '../assets/Util/Heart.png'
import React, {useState} from 'react';

function HealthBar(props){
    const [image, setImage] = useState(Heart);

    return (
        <footer>
            <img src={image} alt="Heart" />
            <ul id="healthbar">
                {props.hearts.map((elements, index) => (
                    <li key={index}>
                        {elements && <div></div>}
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default HealthBar;

