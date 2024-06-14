import '../css/mainpage.css';
import Heart from '../assets/heart.png'
import React, {useState} from 'react';

function HealthBar(){
    
    //hearts is an array of booleans length of 10
    const [hearts, setHearts] = useState(Array(10).fill(true));
    const [image, setImage] = useState(Heart);

    const die = () => {

        //this find the last div that is set to true
        const prevHeart = hearts.lastIndexOf(true);

        //if the last div is not false
        if (prevHeart !== false) {
            //create a new array and use spread operator to fill with the heart array
            const newHeart = [...hearts];
            //find the previous div in the new array and set it to false then push to setHearts()
            newHeart[prevHeart] = false;
            setHearts(newHeart);
        }     

        if(hearts.length == 0){
            setImage();
        }
    };

    return (
        <footer>
            <img src={image} alt="Heart" />
            <ul id="healthbar">
                {hearts.map((elements, index) => (
                    <li key={index}>
                        {elements && <div></div>}
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default HealthBar;