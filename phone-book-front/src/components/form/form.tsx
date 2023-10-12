import { useNavigate, useParams } from 'react-router-dom';
import Button from '../UI/button/button';
import Input from '../UI/input/input';
import style from './form.module.css';
import { faPhone, faCancel, faSave, faUser } from '@fortawesome/free-solid-svg-icons'
import ContactService from '../../services/ContactService';

interface Props {
  name?: string
  setName: any
  lastname?: string
  setLastName: any
  number?: string
  setNumber: any,
}

export default function Form({
  name,
  setName,
  lastname,
  setLastName,
  number,
  setNumber,
}: Props) {

  const params = useParams();

  const navigation = useNavigate();

  function submit() {
    const formData = {
      name: name,
      lastname: lastname,
      number: number?.toString(),
      id: Number(params.id)
    }

    if(formData.name && formData.lastname && formData.number) {
      ContactService.create(formData);
      navigation('/');
    }
  }

  function cancel() {
    navigation('/')
  }

  return (
    <form className={style.form} id='form' onSubmit={submit}>
      <Input 
      icon={faUser}
      type='text' 
      id={'name'} 
      value={name} 
      setValue={setName}
      label='First Name' 
      placeholder='First Name'/>

      <Input 
      icon={faUser} 
      type='text' 
      id={'lastname'} 
      value={lastname} 
      setValue={setLastName}
      label='Last Name' 
      placeholder='Last Name'/>

      <Input 
      icon={faPhone} 
      type='number' 
      id={'number'} 
      value={number} 
      setValue={setNumber}
      label='Phone Number' 
      placeholder='Phone Number'/>
      <div className={style.buttons}>
        <Button icon={faCancel} content='Cancel' action={cancel}/>
        <Button icon={faSave} content='Submit' type='submit'/>
      </div>
    </form>
  )
}