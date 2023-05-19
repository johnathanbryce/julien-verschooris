'use client'
import React, { useState } from 'react';

import styles from './CreditExandable.module.css'
// external libraries
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

interface CreditExpandableProps {
    title: string,
    children: any,
    onClick: () => void,
    isExpanded: boolean
}

function CreditExpandable({title, children, onClick, isExpanded}: CreditExpandableProps) {

  return (
    <div className={styles.expandable}>
        <div className={styles.flex_container}>
            <h4>{title}</h4>
            { isExpanded ? <AiOutlineMinus className={styles.icon} onClick={onClick} /> : <AiOutlinePlus className={styles.icon} onClick={onClick} />  }
        </div>
        {isExpanded && (
        <div>
          {children}
        </div>
      )}
    </div>
  )
}

export default CreditExpandable;


