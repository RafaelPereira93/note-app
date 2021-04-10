import React from "react";
import GlobalStyles from "./GlobalStyles";
import "./styles.css";
import Title from "./components/Title";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewNote from "./components/NewNote";
import NoteContent from "./components/NoteContent";
import UpdateNote from "./components/UpdateNote";

function App() {
  const [isNewNoteActive, setIsNewNoteActive] = React.useState(false);

  return (
    <>
      <BrowserRouter>
        <Title title="My Note App"></Title>
        <Routes>
          <Route
            path="/"
            end
            element={
              <Main
                isNewNoteActive={isNewNoteActive}
                setIsNewNoteActive={setIsNewNoteActive}
              />
            }
          />
          <Route
            path="/new-note"
            element={<NewNote setIsNewNoteActive={setIsNewNoteActive} />}
          />
          <Route path="note/:id" element={<NoteContent />} />
          <Route path="note/update/:id" element={<UpdateNote />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
