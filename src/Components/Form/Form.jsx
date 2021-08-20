import { useDispatch, useSelector } from "react-redux";
import { RiContactsLine } from "react-icons/ri";
import { BsPhone } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import shortid from "shortid";
import "./Form.module.css";
import { getFiltredContacts } from "../../redux/contacts/contactsSelector";
import { addContact } from "../../redux/contacts/contactsOperations";

function MyForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFiltredContacts);
  const handleSubmit = (newContact) => {
    if (contacts.some(({ name }) => name === newContact.name)) {
      alert(`${newContact.name} already in phonebook`);
      return;
    }
    dispatch(addContact(newContact));
  };

  let nameId = shortid.generate();
  let phoneId = shortid.generate();
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Enter name";
        } else if (!values.number) {
          errors.number = "Enter number";
        } else if (
          !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
            values.number
          )
        ) {
          errors.number =
            "The number can only include numbers, spaces, dashes, brackets and start with +";
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        const { name, number } = values;
        handleSubmit({ name, number });
        resetForm();
      }}
    >
      <Form autoComplete='off'>
        <label htmlFor={`id-${nameId}`}>
          <RiContactsLine color='#c21111e2'></RiContactsLine> Name
        </label>
        <Field
          type='text'
          name='name'
          id={`id-${nameId}`}
          placeholder='enter name'
        />
        <ErrorMessage name='name' />

        <label htmlFor={`id-${phoneId}`}>
          <BsPhone color='#c21111e2'></BsPhone>Number
        </label>
        <Field
          type='tel'
          name='number'
          id={`id-${phoneId}`}
          placeholder='+111-111-11'
        />
        <ErrorMessage name='number' />

        <button type='submit'>Add contact</button>
      </Form>
    </Formik>
  );
}

export default MyForm;
