import styled from "styled-components";

export const StyledAdmin = styled.div`
  width: 100%;
  height: 86vh;

  div#input-field {
    width: 100%;
    padding: 10px 50px;
    position: relative;
    
  }

  div#board {
    display:flex;
    min-height:100%;
  }

  div#add {
    display:flex;
    justify-content:center;
  }
  h1 {
    font-family: "Inter";
    font-size: 40px;
    font-weight: 700;
    z-index: 1;
    background-color: #ffffffe2;
    padding: 5px 25px;
    border-radius: 5px;
    cursor: pointer;
    border-bottom:1px solid;

    transition: color box-shadow background-color 0.2s ease-in-out;
    transition: box-shadow 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out;

  }

  @media (max-width: 800px) {
    div#input-field {
      width: 100%;
      padding: 10px 30px;
      position: relative;
      
    }
  }
  @media (max-width: 600px) {
    div#input-field {
      width: 100%;
      padding: 10px 15px;
      position: relative;
      
    }
  }
`;
 
export const StyledButton = styled.button`
    width: 200px;
    height: 50px;
    background: white;
    border: 0px;
    color: black;
    cursor: pointer;
    font-size: 30px;
    font-weight: 700;

    &:hover {
        color: #f99d4b;
    }
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
 

  .selected-button {
    background:grey !important;
  }

  @media (max-width: 800px) {
    button {
      font-size: 17px;
    }
  }

  @media (max-width: 500px) {
    button {
      font-size: 13px;
    }
  }
`