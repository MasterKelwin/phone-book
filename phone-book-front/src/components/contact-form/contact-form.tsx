import { useParams } from 'react-router'
import Title from '../UI/title/title'
import Form from '../form/form'
import style from './contact-form.module.css'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import ContactService from '../../services/ContactService'
import { IContact } from '../../interfaces/contact.interface'

export default function ContactForm() {
  const params = useParams();
  let contact: Partial<IContact> = {};
  const [name, setName] = useState<string>();
  const [lastname, setLastName] = useState<string>();
  const [number, setNumber] = useState<string>();

  useEffect(() => {
    if(params.id) {
      showOne(params.id);
    }
  }, [])

  async function showOne(id:string) {
    contact = await ContactService.show(+id);
    setName(contact.name);
    setLastName(contact.lastname);
    setNumber(contact.number?.toString());
  }

  return (
    <div className={style.contactForm}>
      <Title title={'Phone Book App'} icon={faPhone} />

      <Form 
      name={name}
      setName={setName}
      lastname={lastname}
      setLastName={setLastName}
      number={number}
      setNumber={setNumber}
       />

    </div>
  )
}