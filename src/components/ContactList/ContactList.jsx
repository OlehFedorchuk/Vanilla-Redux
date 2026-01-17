import clsx from "clsx";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => {
    return state.contacts.items;
  });
  console.log("contact", contacts);
  return (
    <ul className={clsx(css.list)}>
      {contacts.map((contact) => (
        <li key={contact.id} className={clsx(css.item)}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
