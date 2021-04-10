import styled from "styled-components";

export const Note = styled.div`
  padding: 30px 12px;
  cursor: pointer;
  user-select: none;
  background-color: ${(props) => props.background};
  border-radius: 8px;
  margin-bottom: 5px;
`;

export const TitleNote = styled.h2`
  line-height: 1;
  color: #121212;
  font-weight: 400;
  font-size: 1.3em;
`;

export const DateNote = styled.span`
  display: flex;
  color: #333;
  margin-top: 10px;
  font-size: 0.9em;
  font-weight: 300;
`;
