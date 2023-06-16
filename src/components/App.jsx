import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import ContactsList from "./contacts/contactList/ContactsList";
import Form from "./contacts/form/Form";
import Filter from "./contacts/filter/Filter";
import { Container, ContactsContainer, TitleContactList, TitlePhonebook, NullContactsMessage } from "./App.styled";

const KEY_CONTACTS = 'contacts';


const App = () => {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(KEY_CONTACTS)) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(KEY_CONTACTS, JSON.stringify(contacts));
  }, [contacts])

  function newContact({name, number}) {

    const repeatName = contacts.find(contact => contact.name.toLowerCase().includes(name.toLowerCase()));

    if (repeatName) {
      alert(`${name} is already in contacts`)
      return
    } else {
      const contact = {
        id: nanoid(),
        name,
        number
      }
  
      setContacts(prevState =>  [contact, ...prevState])
    }
  }
  
  function deleteContact(id) {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  function contactSearch(event) {
    const {target} = event;

    setFilter(target.value.toLowerCase())
  }

  function getContactSearch() {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter))
  }

  const visableContacts = getContactSearch();

    return (
      <Container>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <Form
          onSubmitForm={newContact}
        />

        <TitleContactList>Contacts</TitleContactList>
        {!contacts.length ? (
          <NullContactsMessage>You don't have any contacts</NullContactsMessage>) 
          : (
            <ContactsContainer>
              <Filter 
                value={filter}
                onSearch={contactSearch}
              />
              <ContactsList 
                contacts={visableContacts}
                onDeleteContact={deleteContact}
              />
            </ContactsContainer>
        )}
      </Container>
    )
};

export default App