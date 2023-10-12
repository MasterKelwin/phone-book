import style from './button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IContact } from '../../../interfaces/contact.interface';

interface Button {
  content?: string;
  icon: IconDefinition;
  status?: string;
  id?: number;
  set?: any;
  type?: 'button' | 'submit';
  action?: (parameter?:any) => any;
}

export default function Button({
  content,
  icon,
  status,
  id,
  set,
  type,
  action
}: Button) {

  type ? type = type : type = 'button'

  function handleClick() {
    if(status === 'delete' && action) {
      action(id);
      set((oldTasks:IContact[]) => oldTasks.filter(task => {
        return task.id !== id;
      }));
    } else if(action) action();
  }

  if(type === 'submit') {
    return(
      <button className={style.button} type={type}>
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        {content}
      </button>
    )
  } else {
    return(
      <button className={status === 'delete' ? style.delete : style.button} onClick={handleClick} type={type}>
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        {content || ''}
      </button>
    )
  }
}