import { useSelector } from "react-redux";
import "./App.css";
import Section from "./Components/Section/Section";
import Container from "./Components/Container/Container";
import MyForm from "./Components/Form/Form";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";
import { getLoading } from "./redux/contacts/contactsSelector";
function App() {
  const loader = useSelector(getLoading);
  return (
    <Container>
      <Section>
        <h1>Phonebook</h1>
        <MyForm />
      </Section>
      <Section>
        <h2>Contacts</h2>
        <Filter />
        <ContactList></ContactList>
      </Section>
      {loader && <p>...Loading...</p>}
    </Container>
  );
}

export default App;
