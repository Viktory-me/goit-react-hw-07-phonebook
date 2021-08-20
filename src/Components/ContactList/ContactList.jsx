import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { RiContactsLine, RiDeleteBinLine } from "react-icons/ri";
import { BsPhone } from "react-icons/bs";
import {
  ListContact,
  ItemContact,
  Paragraph,
  Button,
  Contain,
  Load,
} from "./ContactList.styled";
import {
  getFiltredContacts,
  getLoading,
} from "../../redux/contacts/contactsSelector";
import {
  deleteContact,
  fetchContacts,
} from "../../redux/contacts/contactsOperations";

function ContactList() {
  const contacts = useSelector(getFiltredContacts);
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  const onDeleteContact = (id) => dispatch(deleteContact(id));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ListContact>
      {contacts.map(({ id, name, number }) => (
        <ItemContact key={id}>
          <Contain>
            <RiContactsLine color='#c21111e2'></RiContactsLine>
            <Paragraph>{name}</Paragraph>
          </Contain>
          <Contain>
            <BsPhone
              width='16px'
              viewBox='0 0 16 16'
              color='#c21111e2'
            ></BsPhone>
            <Paragraph>{number}</Paragraph>{" "}
          </Contain>

          <Button onClick={() => onDeleteContact(id)}>
            <RiDeleteBinLine></RiDeleteBinLine>
          </Button>
        </ItemContact>
      ))}
      {loading && <Load>...Wait load...</Load>}
    </ListContact>
  );
}
export default ContactList;
