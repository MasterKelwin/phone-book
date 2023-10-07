
import { IContact } from '../../interfaces/contact.interface';
import Contact from './contact/contact';
import style from './contacts-list.module.css';

interface Props {
  contactList: IContact[]
  set: any
}

export default function ContactsList({
  contactList,
  set
}: Props) {
  return (
    <ul className={style.ul}>
      {contactList && contactList.length > 0 ? (
        contactList.map(contact => (
          <Contact 
            key={contact.id} 
            name={contact.name} 
            lastname={contact.lastname}
            number={contact.number}
            id={contact.id}
            set={set}
          />
        ))
      ) : (
        <div className={style.noContacts}>
          <span>You don't have contacts yet</span>
        </div>
      )}
    </ul>
  )
}