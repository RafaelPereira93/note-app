import React from "react";
import * as Style from "./styles";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import { ReactComponent as Add } from "../../assets/images/add.svg";
import { Link, useNavigate } from "react-router-dom";

const HeaderNotes = ({ isNewNoteActive, setIsNewNoteActive }) => {
  const navigate = useNavigate();
  const refInput = React.useRef();

  const handleClick = (e) => {
    e.preventDefault();

    const inputHasClassShow = refInput.current.classList.contains("show");

    if (inputHasClassShow) {
    }
  };

  const handleInput = () => {
    const input = refInput.current;
    input.classList.toggle("show");
    input.focus();
  };

  const handleAdd = () => {
    setIsNewNoteActive((value) => !value);
    navigate("/new-note");
  };

  return (
    <Style.InputWrapper>
      {isNewNoteActive ? <Link to="/">Back</Link> : <h2>Notes</h2>}
      <form onSubmit={handleClick}>
        {isNewNoteActive ? (
          ""
        ) : (
          <>
            <input type="text" ref={refInput} />
            <span onClick={handleInput}>
              <Search style={{ fill: "#eee", width: "23px", height: "23px" }} />
            </span>
            <span onClick={handleAdd}>
              <Add style={{ fill: "#eee", width: "23px", height: "23px" }} />
            </span>
          </>
        )}
      </form>
    </Style.InputWrapper>
  );
};

export default HeaderNotes;
