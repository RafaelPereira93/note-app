import { baseUrl } from "../API";

export const fetchPost = async (data, url) => {
  const response = await fetch(`${url}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
};

export const getAllNotes = async () => {
  const response = await fetch(`${baseUrl}/notes`);
  const json = await response.json();
  return json;
};

export const getOneNote = async (idNote) => {
  const response = await fetch(`${baseUrl}/notes/${idNote}`);
  const json = await response.json();
  return json;
};

export const deleteOneNote = async (noteId) => {
  await fetch(`${baseUrl}/notes/${noteId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateOneNote = async (data, id) => {
  await fetch(`${baseUrl}/notes/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
