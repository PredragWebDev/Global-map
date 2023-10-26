import styled from "@emotion/styled"

export const StyledCard = styled.div`
  width: 25%;
  height: 300px;
  max-height: 300px;
  padding:20px;
  box-sizing: border-box;
  transition: position .1s ease-in-out;

    div#card_border {
        height:260px;
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

    div#link {
        padding:0px 15px;
        margin-bottom:5px;
    }

    div#content {
        height: calc(100% - 60px);
        padding: 0px 15px;
        font-family: fangsong;
        font-size: 15px;
        overflow-y: auto;
        overflow-x: auto;
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