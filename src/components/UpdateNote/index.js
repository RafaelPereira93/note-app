import React from "react";
import * as Styles from "./styles";
import BackFromUpdate from "../BackFromUpdate";
import { useParams, useNavigate } from "react-router-dom";
import { getOneNote, updateOneNote } from "../../utils/fetchData";

const UpdateNote = () => {
  const navigate = useNavigate();
  const [noteData, setNoteData] = React.useState("");
  const params = useParams();
  const { id } = params;

  React.useEffect(() => {
    getOneNote(id).then((note) => setNoteData(note));
  }, [id]);

  const handleUpdate = ({ target }) => {
    const inputId = target.id;
    setNoteData({ ...noteData, [inputId]: target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { title, content } = noteData;

    const hasTitle = title.trim().length;
    const hasContent = content.trim().length;

    if (hasTitle && hasContent) {
      await updateOneNote(noteData, id);
      navigate("/");
    }
  };

  return (
    <Styles.WrapperContentNote>
      <BackFromUpdate />
      <Styles.WrapperForm>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="title"
            value={noteData && noteData.title}
            placeholder="Title note ..."
            onChange={handleUpdate}
            autoFocus
          />
          <textarea
            id="content"
            cols="30"
            rows="10"
            value={noteData && noteData.content}
            onChange={handleUpdate}
            placeholder="Content note ..."
          ></textarea>
          <button>Update</button>
        </form>
      </Styles.WrapperForm>
    </Styles.WrapperContentNote>
  );
};

export default UpdateNote;
