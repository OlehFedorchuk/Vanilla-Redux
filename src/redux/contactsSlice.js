const initialState = {
  items: [],
};

export const contactsReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};
