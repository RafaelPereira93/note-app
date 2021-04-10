import React from "react";
import * as Styles from "./styles";
import { newNote } from "../../API";
import getActualDate from "../../utils/getDate";
import { useNavigate } from "react-router-dom";
import BackToHome from "../BackToHome";
const NewNote = ({ setIsNewNoteActive }) => {
  const navigate = useNavigate();

  React.useEffect(() => setIsNewNoteActive(true), [setIsNewNoteActive]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;
    const date = getActualDate();

    if (title.trim().length && content.trim().length) {
      newNote({ title, content, date });
      alert(`${title} added`);
      navigate("/");
    } else {
      alert("Please, fill the fields correctly");
    }
  };

  return (
    <Styles.WrapperNotes>
      <BackToHome />
      <Styles.WrapperForm>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="title"
            placeholder="Title note ..."
            autoFocus
          />
          <textarea
            id="content"
            cols="30"
            rows="10"
            placeholder="Content note ..."
          ></textarea>
          <button>Create</button>
        </form>
      </Styles.WrapperForm>
    </Styles.WrapperNotes>
  );
};

export default NewNote;
