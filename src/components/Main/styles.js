import styled from "styled-components";

export const WrapperPosts = styled.main`
  width: 100%;
  max-width: 500px;
  margin: 20px auto 50px;
  background-color: #252525;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
  padding: 0 0 20px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const HeaderPosts = styled.header`
  display: grid;
  grid-template-columns: 130px 1fr;
  align-items: center;
  width: 100%;
  padding: 5px 15px;

  & h2 {
    font-size: 1.5em;
    font-weight: 300;
    color: #eee;
  }
`;

export const WrapperNotes = styled.section`
  width: 100%;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  color: #eee;
  padding: 5px 10px;
`;
