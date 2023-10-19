import styled from "styled-components";

export const StyledAdmin = styled.div`
  width: 100%;
  height: 100vh;

  div#input-field {
    width: 100%;
    padding: 10px 50px;
    position: relative;
    
  }

  div#board {
    display:flex;
    min-height:100%;
  }

  h1 {
    font-family: "Inter";
    font-size: 40px;
    font-weight: 700;
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

`;
 
export const StyledButton = styled.button`
    width: 200px;
    height: 50px;
    border-radius: 20px;
    color: blue;
    font-size: 30px;
    font-weight: 700;

    &:hover {
        color: red;
    }
`;

export const StyledTextArea = styled.textarea`
    width: 100%;
    height: 200px;
    border-radius: 10px;
    font-size: 20px;
    font-family: serif;
    margin-top: 30px;
    padding: 20px;
    box-sizing: border-box;
`;

export const StyledSideBar = styled.div`
  width: 20%;
  padding: 1%;
  border-right: 1px solid;
  button {
    width: 100%;
    height: 40px;
    background: burlywood;
    border: 0;
    border-radius: 10px;
    font-size: 25px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      background:grey;
    }
  }
`