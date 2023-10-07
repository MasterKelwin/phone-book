import React from 'react';
import style from './title.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Title {
  title: string,
  icon: IconDefinition
}

export default function Title({
  title,
  icon
}: Title) {
  return(
    <h1 className={style.title} >
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      {title}
    </h1>
  )
}