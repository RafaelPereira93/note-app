import React from "react";
import * as Style from "./styles";
import { ReactComponent as Delete } from "../../assets/images/delete.svg";
import { ReactComponent as Update } from "../../assets/images/edit.svg";
import { ReactComponent as Home } from "../../assets/images/left.svg";
import { Link } from "react-router-dom";
import { deleteNote } from "../../API";
import { useNavigate } from "react-router-dom";

const DeleteAndUpdate = ({ noteId, noteTitle }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const userAnswer = window.confirm(
      `Are you sure you want to delete: ${noteTitle} ? `
    );

    if (userAnswer) {
      await deleteNote(noteId);
      alert("Note deleted");
      navigate("/");
    }
  };

  const handleUpdate = () => {
    navigate(`/note/update/${noteId}`);
  };

  return (
    <Style.InputWrapper>
      <Link to="/">
        <Home style={{ fill: "#eee", width: "23px", height: "23px" }} />
      </Link>
      <div>
        <span onClick={handleDelete}>
          <Delete style={{ fill: "#eee", width: "23px", height: "23px" }} />
        </span>
        <span onClick={handleUpdate}>
          <Update style={{ fill: "#eee", width: "23px", height: "23px" }} />
        </span>
      </div>
    </Style.InputWrapper>
  );
};

export default DeleteAndUpdate;
