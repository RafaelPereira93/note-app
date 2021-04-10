import React from "react";
import * as Styles from "./styles";
import { useNavigate } from "react-router-dom";

const Note = ({ title, date, background, id }) => {
  const navigate = useNavigate();
  const arrayLetters = title.split("");
  const filteredTitle = arrayLetters
    .filter((letter, index) => {
      if (index >= 60) {
        return false;
      }
      return letter;
    })
    .join("");

  const handleClick = ({ currentTarget }) => {
    const idNote = currentTarget.id;
    navigate(`note/${idNote}`);
  };

  return (
    <Styles.Note id={id} background={background} onClick={handleClick}>
      <Styles.TitleNote>
        {title.length > 60 ? `${filteredTitle}...` : title}
      </Styles.TitleNote>
      <Styles.DateNote>{date}</Styles.DateNote>
    </Styles.Note>
  );
};

export default Note;
