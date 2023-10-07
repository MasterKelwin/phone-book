import './App.css';
import Title from './components/UI/title/title';
import { faPhone, faAdd, faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from './components/UI/button/button';
import ContactsList from './components/contacts-list/contacts-list';
import ContactService from './services/ContactService';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router'
import { IContact } from './interfaces/contact.interface';
import Input from './components/UI/input/input';

function App() {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    getAll();
  },[])

  const navigation = useNavigate();

  async function getAll() {
    const contacts = await ContactService.read();
    setContacts(contacts);
  }

  function handleFilter(search: string) {
    search = search.toLowerCase().trim();
  
    setContacts((oldContacts) =>
      oldContacts.filter((contact) =>
        contact.lastname.toLowerCase().includes(search)
      )
    );

    if(search == '') {
      getAll();
    }
  }

  return (
    <div className='App'>
      <Title title={'Phone Book App'} icon={faPhone} />

      <div className='add-contact'>
        <span>Contacts</span>
        <Button content={'Add contact'}
        icon={faAdd}
        action={() => {navigation('/contact')}} />
      </div>

      <Input icon={faSearch}
      placeholder='Search for contact by last name...'
      type='text'
      id='search'
      value={search}
      setValue={handleFilter} />

      <ContactsList contactList={contacts} set={setContacts} />

    </div>
  );
}

export default App;
