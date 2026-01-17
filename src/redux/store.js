import { createStore } from "redux";

const initialState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  filters: {
    name: "",
  },
};

const reducer = (state = initialState, action) => {
  console.log(state.contacts.items);
  switch (action.type) {
    case "contacts/add":
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload],
        },
      };
    case "contacts/delete":
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter((contact) => {
            return contact.id !== action.payload;
          }),
        },
      };
  }
  return state;
};

export const store = createStore(reducer);
