import PropTypes from 'prop-types';
import { ContactList, ContactText, Contact, ButtonDelete } from './ContactList.styled';
import { FaUserAlt, FaRegTrashAlt } from "react-icons/fa";


const ContactsList = ({ contacts, onDeleteContact}) => {

    return ( 
        <ContactList>
            {contacts.map(({ id, name, number}) => ( 
            <Contact key={id}>
            <FaUserAlt/>
            <ContactText>
                <p>Name: {name}</p>
                <p>Number: {number}</p>
            </ContactText>
                <ButtonDelete type="button" onClick={() => onDeleteContact(id)}><FaRegTrashAlt/></ButtonDelete>
            </Contact>))}
        </ContactList>

    );
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })),
};

export default ContactsList;