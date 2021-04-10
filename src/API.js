import { fetchPost, deleteOneNote } from "./utils/fetchData";

export const baseUrl = "https://rafael93-note-app.herokuapp.com";

export const newNote = async (userData) => {
  await fetchPost(userData, baseUrl);
};

export const deleteNote = async (noteId) => {
  await deleteOneNote(noteId);
};
