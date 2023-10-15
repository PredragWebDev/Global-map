import styled from "styled-components";

export const StyledAdmin = styled.div`
  width: 100%;
  height: 100vh;

  div#input-field {
    padding: 100px 50px;

    div#country {
      width: 30%;
      display: flex;
      margin-bottom: 50px;
    }
  }

  div#input-value-field {
    
  }

  div#setting {
    border: 1px solid;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    padding-top: 50px !important;
    padding:20px;
  }

  div#setting::before {
    content: "Setting";
    position: absolute;
    top: 295px;
    left: 20%;
    font-size: 30px;
    font-weight: 500;
    transform: translateX(-30%);
    background-color: white;
    padding: 0 10px;
  }

  div#situation {
    border: 1px solid;
    border-radius: 10px;
    padding-top: 50px !important;
    padding:20px;
    display: flex;
    flex-wrap: wrap;
  }

  div#situation::before {
    content: "Situation";
    position: absolute;
    top: 630px;
    left: 20%;
    font-size: 30px;
    font-weight: 500;
    transform: translateX(-30%);
    background-color: white;
    padding: 0 10px;
  }
 
  

  div#submit {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  form {
    width: 100%;
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
    div#input-field {
        div#country {
          width: 50%;
        }
    }
   
  }

  @media (max-width: 600px) {
    div#input-field {
        div#country {
          width: 100%;
        }
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
`;

export const StyledTextArea = styled.textarea`
    width: 80%;
    height: 200px;
    border-radius: 10px;
    font-size: 20px;
    font-family: serif;
    margin-top: 30px;
    padding: 20px;

`;