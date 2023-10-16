import { styled } from "styled-components";

export const StyledEvent = styled.div<{ $isAfterDisaster: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: #e4e4e4 1px solid;
  padding: 10px 10px;

  background-color: ${({ $isAfterDisaster }) =>
    $isAfterDisaster ? "#ff8b8b30" : "white"};

  &:last-child {
    border-bottom: none;
  }

  .event-wrapper {
    display: flex;
  }

  .emoji {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin-right: 15px;
  }

  .event-title {
    font-size: 18px;
  }

  .date {
    font-size: 13px;
    color: #7c7c7c;
  }
`;
