import styled from "styled-components";

export const WrapperContentNote = styled.section`
  width: 100%;
  max-width: 500px;
  margin: 0 auto 50px;
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
    line-height: 1.2;
  }

  & p {
    color: #eee;
  }

  & span {
    display: block;
    color: #b8de6f;
    font-size: 0.8em;
    text-align: right;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`;
