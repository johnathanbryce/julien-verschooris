import styles from './CreditsAccordian.module.css'
import React, { useState } from 'react';
// external libraries
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';

interface CreditsAccordianProps {
    title: string,
    children: any
}

const CreditsAccordion= ({ title, children }: CreditsAccordianProps) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className={styles.expandable}>
      <div className={styles.flex_container} onClick={() => setIsActive(!isActive)}>
        <h4>{title}</h4>
        <div>{isActive ? <AiOutlineMinus className={styles.icon} /> : <AiOutlinePlus className={styles.icon}  />}</div>
      </div>
      {isActive && <div>{children}</div>}
    </div>
  );
};

export default CreditsAccordion;