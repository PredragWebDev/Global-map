import styled from "styled-components";

export const StyledAdmin = styled.div`
  width: 100%;
  height: 100vh;

  div#input-field {
    padding: 100px 50px;
  }

  div#country {
    width: 30%;
    display: flex;
    margin-bottom: 50px;
    padding: 20px;
  }

  div#setting {
    display: flex;
    flex-wrap: wrap;
  }

  div#input-value-field {
    border: 1px solid;
    border-radius: 10px;
    padding-top: 50px !important;
    padding:20px;
  }
  div#input-value-field::before {
    content: "Setting";
    position: absolute;
    top: 335px;
    left: 20%;
    font-size: 30px;
    font-weight: 500;
    transform: translateX(-30%);
    background-color: white;
    padding: 0 10px;
  }

  div#button {
    display: flex;
    justify-content: center;
    margin-top: 30px;
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

  @media (max-width: 800px) {
    div#country {
        width: 50%;
    }
   
  }

  @media (max-width: 600px) {
    div#country {
        width: 100%;
    }
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
`