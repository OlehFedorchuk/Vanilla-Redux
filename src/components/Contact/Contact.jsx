import { FaUser, FaPhoneAlt } from "react-icons/fa";
import clsx from "clsx";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";

const Contact = ({ data: contact }) => {
  const dispatch = useDispatch();
  if (!contact) return null;
  const handleDelete = () => {
    dispatch({ type: "contacts/delete", payload: contact.id });
  };
  return (
    <div className={clsx(css.item)}>
      <div className={clsx(css.info)}>
        <div className={clsx(css.row)}>
          <FaUser className={clsx(css.icon)} />
          <p>{contact.name}</p>
        </div>
        <div className={clsx(css.row)}>
          <FaPhoneAlt className={clsx(css.icon)} />
          <address>{contact.number}</address>
        </div>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
export default Contact;
