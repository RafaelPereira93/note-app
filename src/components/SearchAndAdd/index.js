import React from "react";
import * as Style from "./styles";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import { ReactComponent as Add } from "../../assets/images/add.svg";
import { useNavigate } from "react-router-dom";

const SearchAndAdd = () => {
  const refInput = React.useRef();
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/new-note");
  };

  return (
    <Style.InputWrapper>
      <h2>Notes</h2>
      <form>
        <input type="text" ref={refInput} />
        <span onClick={handleAdd}>
          <Add style={{ fill: "#eee", width: "23px", height: "23px" }} />
        </span>
      </form>
    </Style.InputWrapper>
  );
};

export default SearchAndAdd;
