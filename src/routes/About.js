import React from "react";
import { useNavigate } from 'react-router-dom';
import './About.css';

function Btn({text, big}){
    console.log(text, big);
    const navigate = useNavigate();
    return (
        <button style={{
            backgroundColor: "skyblue",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
            fontSize: big ? 32 : 18,
        }}
        onClick={() => {alert('go Back'); navigate(-1);}}
        >
            {text}
        </button>
    );
}

function About() {

    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."
            </span>
            <span>- George Orwell, 1984</span>
            <br />
            <br />
            <br />
            
            <Btn text="goBack" big={false}/>

        </div>
    );
}

export default About;