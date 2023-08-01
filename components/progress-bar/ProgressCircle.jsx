import './progressCircle.css';
import {Button} from '@/components/button/Button';
import {useState} from 'react';

export default function ProgressCircle({percent, color}) {

  const [currentPercent, setCurrentPercent] = useState(percent);

  const handleButtonClick = () => {
    const newPercent = currentPercent + 10;
    if (newPercent <= 100) {
      setCurrentPercent(newPercent);

    }
  };

  return (
    <div className='progress-circle__block'>
      <div className="progress-circle">
        <span className="progress-circle__percent" style={{color: 'var(--primary)'}}>{currentPercent}%</span>
        <svg width="120" height="120" viewBox="0 0 120 120" className="progress-circle__svg">
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke={`var(--${color})`}
            strokeWidth="12"/>
          <circle
            className="progress-circle__line"
            style={{ strokeDashoffset: `${currentPercent}px` }}
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke={`var(--${color}-hover)`}
            strokeWidth="12"
            pathLength="100"/>
        </svg>
      </div>
      <button onClick={handleButtonClick}>asdfg</button>
      {/*<Button*/}
      {/*  text=" + 10% "*/}
      {/*  rounded="12px"*/}
      {/*  fontS="18px"*/}
      {/*  color="var(--white)"*/}
      {/*  bg="var(--primary)"*/}
      {/*  hoverBg="var(--primary-hover)"*/}
      {/*  onClick={handleButtonClick}*/}
      {/*/>*/}
    </div>
  )
}