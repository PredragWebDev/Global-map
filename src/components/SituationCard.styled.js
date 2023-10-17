import styled from "@emotion/styled"

export const StyledSituationCard = styled.div`

  padding:20px;
  box-sizing: border-box;
  transition: position .1s ease-in-out;

  div#card_border {
    width: 100%;
    border:1px solid;
    background:white;
    border-radius:10px;
    box-sizing: border-box;
  }

  div#removebutton {
    display: flex;
    justify-content: right;
  }
    div#content {
        padding: 0px 15px;
        font-family: fangsong;
        font-size: 70px;
    }

    .sel-card {
        div#card_border {

            width: 600px;
            height: 600px !important;
            max-height: 600px !important;
            position: absolute;
            top: -500px;
            left: calc((100% - 600px) / 2);
        }

        p#title {
            font-size: 40px !important;
        }

        div#content {
            font-size: 25px !important;
        }

        button#zoom {
            width: 90px !important;
            height: 40px !important;
            font-size: 20px !important;
            border-radius: 10px !important;
        }
    }

    @media (max-width: 700px) {
        width: 50%;

        .sel-card {
            div#card_border {
    
                width: 300px;
                height: 300px !important;
                max-height: 300px !important;
                position: absolute;
                top: -500px;
                left: calc((100% - 300px) / 2);
            }
    
            p#title {
                font-size: 30px !important;
            }
    
            div#content {
                font-size: 20px !important;
            }
    
            button#zoom {
                width: 90px !important;
                height: 40px !important;
                font-size: 20px !important;
                border-radius: 10px !important;
            }
        }
    }
`

export const StyledButton = styled.button`
    width:60px;
    height:30px;
    border-radius: 5px;
    background: green;
    cursor: pointer;

    

`