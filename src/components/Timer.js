import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./Timer.css";

const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Finish the exercise</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

export default function Timer() {
    const [key, setKey] = useState(0);
    return (
        <div className="Timer">
        <h1>
          Training Timer
        </h1>
        <div className="timer-wrapper">
          <CountdownCircleTimer
            key={key}
            isPlaying
            duration={30}
            size={250}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[20, 15, 0]}
            onComplete={() => navigator.vibrate([500, 500, 1500, 500, 500])}
  
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
        <div className="button-wrapper">
          <button onClick={() => setKey(prevKey => prevKey + 1)}>
            Restart Timer
          </button>
        </div>
      </div>
    )
}