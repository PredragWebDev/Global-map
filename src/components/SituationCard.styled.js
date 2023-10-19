import styled from "@emotion/styled"

export const StyledSituationCard = styled.div`

    padding:20px;
    box-sizing: border-box;
    transition: position .1s ease-in-out;

    div#card_board {
        width: 100%;
        border:1px solid;
        background:white;
        border-radius:10px;
        box-sizing: border-box;
        cursor:pointer;

    }
    .removeCursorPoint {
        cursor:auto !important;
    }

  

    div#removebutton {
        display: flex;
        justify-content: right;
    }
    div#content {
        padding: 0px 15px;
        display:flex;
        align-items:center;

        p {
            margin:0px;
            font-size:30px;
            font-family: cursive;
        }
        p#situationName {
            font-family: fangsong;
            font-size: 70px! important;
            margin-right:10px;
        }
        p#oneSide {
            margin-right:5px;
        }
        

    }

    @media (max-width: 900px) {
        div#content {
    
            p {
                font-size:22px;
                font-family: cursive;
            }
            p#situationName {
                font-family: fangsong;
                font-size: 50px! important;
                margin-right:10px;
            }
            p#oneSide {
                margin-right:5px;
            }
            
    
        }
    }
    @media (max-width: 700px) {
        padding:20px 0px;
        div#content {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            p {
                font-size:22px;
                font-family: cursive;
            }
            p#situationName {
                font-family: fangsong;
                font-size: 40px! important;
                margin-right:10px;
            }
            p#oneSide {
                margin-right:5px;
            }
            
    
        }
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