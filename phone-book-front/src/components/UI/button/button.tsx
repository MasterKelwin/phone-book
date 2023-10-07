import style from './button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IContact } from '../../../interfaces/contact.interface';

interface Button {
  content?: string
  icon: IconDefinition
  status?: string
  id?: number
  action: (parameter?:any) => any 
  set?: any
}

export default function Button({
  content,
  icon,
  status,
  id,
  set,
  action
}: Button) {

  function handleClick() {
    if(status === 'delete') {
      action(id);
      set((oldTasks:IContact[]) => oldTasks.filter(task => {
        return task.id !== id;
      }));
    } else action();
  }

  return(
    <button className={status === 'delete' ? style.delete : style.button} onClick={handleClick}>
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      {content || ''}
    </button>
  )
}