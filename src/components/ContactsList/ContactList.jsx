import { ContainerItem, ContainerList, ContainerButtons } from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContainerList>
      {contacts.map(({ id, name, number }) => (
        <ContainerItem key={id}>
          {name}: {number}
          <ContainerButtons onClick={() => onDelete({ id })}>Delete</ContainerButtons>
        </ContainerItem>
      ))}
    </ContainerList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired))
    .isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;