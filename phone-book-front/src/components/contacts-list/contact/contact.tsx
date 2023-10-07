import { IContact } from '../../../interfaces/contact.interface';
import Button from '../../UI/button/button';
import { faTrash, faPhone } from '@fortawesome/free-solid-svg-icons'
import style from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactService from '../../../services/ContactService';
import { useNavigate } from 'react-router-dom';

interface Props extends IContact {
  set?: any
}

export default function Contact({
  name,
  number,
  id,
  set,
  lastname
}: Props) {

  const navigation = useNavigate();

  function deleteContact(id:number) {
    ContactService.delete(id)
  }

  function doubleClick () {
    navigation(`/contact/${id}`)
  }


  return (
    <div className={style.contact} onDoubleClick={doubleClick}>
      <div>
        <span className={style.name}>{name} {lastname}</span>
        <span className={style.number}> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> {number}</span>
      </div>
      <Button icon={faTrash} action={deleteContact} status='delete' id={id} set={set} />
    </div>
  )
}