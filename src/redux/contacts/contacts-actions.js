// import types from "./contacts-types";
import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add", (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
const deleteContact = createAction("contacts/delete");
const changeFilter = createAction("contacts/changeFilter");

export default { addContact, deleteContact, changeFilter };

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
