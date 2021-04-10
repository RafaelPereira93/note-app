import React from "react";
import * as Styles from "./styles.js";
import { getOneNote } from "../../utils/fetchData";
import { useParams } from "react-router-dom";
import SearchNotes from "../../components/SearchNotes";
import DeleteAndUpdate from "../../components/DeleteAndUpdate";

const NoteContent = () => {
  const params = useParams();
  const [noteData, setNoteData] = React.useState([]);

  React.useEffect(() => {
    const { id } = params;

    if (id) {
      getOneNote(id).then((note) => setNoteData(note));
    }
  }, [params]);

  return (
    noteData && (
      <>
        <DeleteAndUpdate noteId={noteData.id} noteTitle={noteData.title} />
        <Styles.WrapperContentNote id={noteData.id}>
          <h2>{noteData.title}</h2>
          <p>{noteData.content}</p>
          <span>{noteData.date}</span>
        </Styles.WrapperContentNote>
      </>
    )
  );
};

export default NoteContent;
