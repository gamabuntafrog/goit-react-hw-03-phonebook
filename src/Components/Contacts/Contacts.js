import PropTypes from "prop-types";

const Contacts = ({ contacts, OnDeleteItem }) => {
  return (
    <ul className="contacts">
      {contacts.map((el) => {
        return (
          <li className="contacts__item" key={el.id}>
            <div>
              <h3>
                {el.name}: {el.number}
              </h3>{" "}
            </div>
            <button
              className="contacts__button"
              onClick={() => OnDeleteItem(el.id)}
            >
              Удалить контакт
            </button>
          </li>
        );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
  OnDeleteItem: PropTypes.func,
};

export default Contacts;
