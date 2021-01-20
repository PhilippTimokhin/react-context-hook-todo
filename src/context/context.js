import React, { useState, createContext } from "react";
import { nanoid } from "nanoid";

export const NoteContext = createContext({
  notes: [{ text: "", id: "" }],
});

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const handleOnSubmit = (text) => {
    setNotes([...notes, { text, id: nanoid() }]);
  };

  const handleOnDelete = (id) => {
    setNotes(notes.filter((item) => item.id !== id));
  };

  const handleChangeValueInput = (e, i) => {
    const value = [...notes];
    const { result } = e.target.value;
    value[i].text = result;
    setNotes(value);
  };

  return (
    <NoteContext.Provider
      value={{ notes, handleOnSubmit, handleOnDelete, handleChangeValueInput }}
    >
      {children}
    </NoteContext.Provider>
  );
};
