import './progressbar.css';
import {Button} from '@/components/button/Button';
import {useState} from 'react';

export default function Progressbar({percent, color}) {

  const [currentPercent, setCurrentPercent] = useState(percent);

  const handleButtonClick = () => {
    const newPercent = currentPercent + 10;
    if (newPercent <= 100) {
      setCurrentPercent(newPercent);
    }
  };

  return (
    <div className="progress__block">
      <div className="progress__container" style={{maxWidth: 'max-width'}}>
        <span className="progress__percent" style={{color: `var(--${color})`}}>{currentPercent}%</span>
        <div className="progress" style={{background: `var(--${color}-hover)`}}>
          <div className="progress__bar" style={{width: `${currentPercent}%`, background: `var(--${color})`}}></div>
        </div>
      </div>
      <Button
        text=" + 10% "
        rounded="12px"
        fontS="18px"
        color="var(--white)"
        bg="var(--primary)"
        hoverBg="var(--primary-hover)"
        click={handleButtonClick}
      />
    </div>
  )
}