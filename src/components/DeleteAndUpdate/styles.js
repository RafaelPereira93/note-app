import styled from "styled-components";

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  margin: 20px auto 0;
  background-color: #252525;
  padding: 10px;
  color: #eee;

  & a {
    display: flex;
    align-items: center;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 3px;
  }

  & h2 {
    font-weight: 500;
    font-size: 1.5em;
    margin-bottom: 0;
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

  @media (max-width: 768px) {
    width: 95%;
  }
`;
