import styled from "styled-components";

export const WrapperContentNote = styled.section`
  width: 100%;
  max-width: 500px;
  margin: 20px auto 50px;
  background-color: #252525;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
  padding: 20px 0;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.4);
  padding: 10px;

  & h2 {
    color: #eee;
    margin-bottom: 10px;
  }

  & p {
    color: #eee;
  }

  & span {
    display: block;
    color: #b8de6f;
    font-size: 0.8em;
    text-align: right;
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const WrapperForm = styled.div`
  display: flex;

  & form {
    display: flex;
    flex-direction: column;
    width: 100%;

    & input,
    & textarea {
      display: block;
      width: 100%;
      margin-bottom: 10px;
      background: #444;
      border: none;
      outline: none;
      padding: 10px;
      font-family: "Poppins", sans-serif;
      color: #eee;
      transition: 0.2s;
      &::placeholder {
        color: #aaa;
        font-size: 1.1em;
        font-weight: 300;
      }
      &:focus {
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.6);
      }
    }

    & button {
      width: 100%;
      max-width: 150px;
      margin-left: auto;
      margin-top: 5px;
      border: none;
      outline: none;
      padding: 8px;
      text-transform: uppercase;
      font-weight: 600;
      background: #9ddfd3;
      cursor: pointer;
      border-radius: 3px;
    }
  }
`;
