import styles from './button.module.css';
import { useState} from 'react';

export function Button({
                         rounded,
                         color,
                         bg,
                         size,
                         fontS,
                         hoverBg,
                         hoverColor,
                         children,
                         disabled
                       }) {

  const [isHover, setIsHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`
        ${styles.button} 
        ${!size ? styles.sizeM : size === 'l' ? styles.sizeL : size === 's' ? styles.sizeS : ''}
     `}
      style={{
        fontSize: fontS ? fontS : null,
        borderRadius: rounded ? rounded : null,
        background: isHover && hoverBg ? hoverBg : (bg ? bg : null),
        color: isHover && hoverColor ? hoverColor : (color ? color : null),
      }}
      disabled={!!disabled}
    >
      {children ? children : 'Click Me'}
    </button>
  )
}