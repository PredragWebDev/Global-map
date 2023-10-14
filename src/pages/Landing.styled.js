import styled from "styled-components";

export const StyledLanding = styled.div`
  width: 100%;
  height: 100vh;

  h1 {
    font-family: "Inter";
    font-size: 20px;
    font-weight: 700;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1;
    color: #ff4e4e;
    background-color: #ffffffe2;
    padding: 5px 25px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 4px 5px 0px 3px #ff4e4e;

    transition: color box-shadow background-color 0.2s ease-in-out;
    transition: box-shadow 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out;

  }

  @media (min-width: 800px) {
    h1 {
      font-family: "Inter";
      font-size: 40px;
      top: 20px;
      left: 20px;
    }
  }
`;
