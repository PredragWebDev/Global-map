import { styled } from "styled-components";

export const StyledDrawer = styled.div<{
  $isOpen: boolean;
}>`
  right: ${({ $isOpen }) => ($isOpen ? "0px" : "100vw")};
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 11;
  position: absolute;
  background-color: #fefefe;
  transition: right 0.3s ease-in-out;
  box-shadow: -15px 0px 20px #00000008;
  padding: 20px;
  padding-bottom: 0;

  overflow-y: auto;

  h2 {
    font-size: 25px;
  }

  .drawer-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    button {
      font-size: 25px;
      background: none;
      border: none;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .details-row {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price {
      font-size: 18px;
    }

    .status {
      color: #ff4e4e;
      border: 2px solid #ff4e4e;
      border-radius: 4px;
      padding: 1px 5px;
    }
  }

  h3 {
    font-size: 25px;
  }

  .history {
    margin-top: 40px;
    margin-bottom: 15px;
  }

  @media (min-width: 800px) {
    width: 670px;
    right: ${({ $isOpen }) => ($isOpen ? "0px" : "-670px")};

    h2 {
      font-size: 35px;
    }
  }
`;
