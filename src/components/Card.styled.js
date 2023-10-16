import styled from "@emotion/styled"

export const StyledCard = styled.div`
  width: 25%;
  height: 300px;
  max-height: 300px;
  padding:20px;
  box-sizing: border-box;
  transition: position .5s ease-in-out;

  div#card_border {
    height:100%;
    border:1px solid;
    background:white;
    border-radius:10px;
    box-sizing: border-box;
  }
  div#title {
    align-items:center;
    display:flex;
    justify-content: space-around;
    
        p#title {
            text-align: center;
            font-size: 20px;
            font-family: fantasy;
            letter-spacing: 1.5px;
            margin-top:10px;
            margin-bottom:10px;
        }
    }

    div#content {
        height: calc(100% - 44px);
        padding: 0px 15px;
        font-family: fangsong;
        font-size: 15px;
        overflow-y: auto;
        overflow-x: auto;
    }

    .sel-card {
        width: 600px;
        height: 600px !important;
        max-height: 600px !important;
        position: absolute;
        top: -500px;
        left: calc((100% - 600px) / 2);
    }
`

export const StyledButton = styled.button`
    border-radius: 5px;
    background: green;
    cursor: pointer;
`