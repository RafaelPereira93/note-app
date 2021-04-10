import React from "react";
import { Title } from "./styles.js";
import { ReactComponent as Note } from "../../assets/images/notes.svg";

const TitleApp = ({ title }) => {
  return (
    <Title>
      {title}
      <Note style={{ width: "35px" }} />
    </Title>
  );
};

export default TitleApp;
