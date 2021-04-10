import styled from "styled-components";

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 35px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto 10px;
  background-color: #252525;
  padding: 0;
  color: #eee;

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
`;
