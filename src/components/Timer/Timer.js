import React from "react";
import {useEffect, useState} from 'react';
import './Timer.css';

export const Timer = () => {
    const countDownDate = new Date("April 06, 2023 00:00:00").getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );





    const days = Math.floor(countDownDate / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDownDate % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDownDate % (1000 * 60)) / 1000);


    return (
        <div className="timer">
            <h1>{days} {hours} {minutes}</h1>
        </div>
    )
}

