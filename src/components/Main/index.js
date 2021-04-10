import React from "react";
import * as Style from "./styles";
import Note from "../Note/index";
import getRandomBackground from "../../utils/getRandomBackground";
import { getAllNotes } from "../../utils/fetchData";
import SearchAndAdd from "../SearchAndAdd";

const Main = ({ isNewNoteActive, setIsNewNoteActive }) => {
  const [notes, setNotes] = React.useState();

  React.useEffect(() => setIsNewNoteActive(false), [setIsNewNoteActive]);

  React.useEffect(() => {
    getAllNotes().then((notes) => setNotes(notes));
  }, []);

  return (
    <Style.WrapperPosts>
      <SearchAndAdd />
      <Style.WrapperNotes>
        {notes &&
          notes.map(({ title, content, date, id }, index) => {
            let background = getRandomBackground();
            return (
              <Note
                key={index}
                title={title}
                content={content}
                date={date}
                background={background}
                id={id}
              />
            );
          })}
      </Style.WrapperNotes>
    </Style.WrapperPosts>
  );
};

export default Main;
