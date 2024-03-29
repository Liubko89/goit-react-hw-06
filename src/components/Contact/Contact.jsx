import { FaPhone } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import css from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contactName, contactNumber, contactId }) => {
  const contacts = useSelector((state) => state.contacts);
  console.log(contacts);

  const dispatch = useDispatch();
  // const handleDelete = (id) => ;
  return (
    <>
      <div className={css.contactWrapper}>
        <div className={css.contactInfo}>
          <IoIosContact className={css.contactIcon} />
          <p>{contactName}</p>
        </div>
        <div className={css.contactInfo}>
          <FaPhone />
          <span>{contactNumber}</span>
        </div>
      </div>
      <button
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContact(contactId))}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
