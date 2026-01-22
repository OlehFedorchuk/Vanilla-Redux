import clsx from "clsx";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  console.log("filteredContacts", filteredContacts);

  return (
    <ul className={clsx(css.list)}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={clsx(css.item)}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
