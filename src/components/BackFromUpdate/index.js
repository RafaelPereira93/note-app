import React from "react";
import * as Style from "./styles";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Home } from "../../assets/images/left.svg";

const BackFromHome = () => {
  const navigate = useNavigate();

  const handleInput = () => {
    navigate("/");
  };

  return (
    <Style.InputWrapper>
      <h2>Update Note</h2>
      <span onClick={handleInput}>
        <Home style={{ fill: "#eee", width: "23px", height: "23px" }} />
      </span>
    </Style.InputWrapper>
  );
};

export default BackFromHome;
