import styles from './button.module.css';
import {useState} from 'react';

export function Button({
                         rounded,
                         color,
                         bg,
                         border,
                         hoverBorder,
                         size,
                         fontS,
                         hoverBg,
                         hoverColor,
                         children,
                         disabled,
                         icon
                       }) {

  const [isHover, setIsHover] = useState(false);

  return (
    <button
      title="button"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`
        ${styles.button} 
        ${!size ? styles.sizeM : size === 'L' ? styles.sizeL : size === 'S' ? styles.sizeS : ''}
     `}
      style={{
        fontSize: fontS ? fontS : null,
        borderRadius: rounded ? rounded : null,
        border: isHover && hoverBorder ? hoverBorder : (border ? border : null),
        background: isHover && hoverBg ? hoverBg : (bg ? bg : null),
        color: isHover && hoverColor ? hoverColor : (color ? color : null),
        i: icon ? icon : null,
      }}
      disabled={!!disabled}
    >
      {icon ? <i className={icon}></i> : ''}{children ? children : 'Click Me'}
    </button>
  )
}