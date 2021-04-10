import styled from "styled-components";

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  width: 100%;
  max-width: 500px;
  margin: 0 auto 0;
  background-color: #252525;
  padding: 12px;
  color: #eee;

  & h2 {
    font-weight: 500;
  }

  & form {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 3px;
  }

  & input {
    display: inline-block;
    width: 0;
    padding: 5px;
    border: none;
    outline: none;
    background-color: #3b3b3b;
    color: #eee;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 1em;
    transform: translateX(20px);
    transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  & input.show {
    width: 100%;
    transform: translateX(0);
  }

  & span {
    display: inline-block;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: #3b3b3b;
    padding: 6px;
    position: relative;
    z-index: 1;
  }

  & svg {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
