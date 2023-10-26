import styled from "@emotion/styled";

export const StyledBody = styled.div`
    width: 88%;

    background: white;
    border: 2px solid #01aff1;
    border-radius: 5px;
    left: 6%;
    padding: 20px;
    position: absolute;
    top: 5%;
    z-index: 1;
    box-sizing: border-box;

    div#title {
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
        p {
            margin: 0px;
            font-size: 53px;
            font-family: fantasy;
            letter-spacing: 3px;
        }
    }

    div#country {
        width: 30%;
        display: flex;
        margin-bottom: 50px;
    }

    div#side {
        width: 30%;
        display: flex;
        margin-bottom: 50px;
    }

    div#options {
        background: whitesmoke;
        border: 1px solid;
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 30px;
        padding:20px;
        justify-content: space-around;

        p {
            text-align: center;
            align-items: center;
            display: flex;
            font-size: 34px;
            font-weight: 500;
            margin:0px;
            position: relative;
            top: -47px;
            left: -30%;
            background: whitesmoke;

        }

        div#select_option {
            display:flex;
            flex-wrap: wrap;
        }
    }

    .plus-circle {
        width:50px;
        height:50px;
        cursor:pointer;
    }
    .plus-circle:hover {
        color:#f99d4b;
    }

    div#stance {
        border: 1px solid;
        border-radius: 10px;
        padding-top: 50px !important;
        padding:20px;
        display: flex;
        flex-wrap: wrap;
    }

    div#stance::before {
        content: "Stance ";
        position: relative;
        top: -73px;
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


    @media (max-width: 800px) {
        
        div#country {
            width: 50%;
        }

        div#side {
            width: 50%;
        }
        div#options {
              
            p {
          
                font-size: 25px;
                font-weight: 400;
                top:-43px;
          
            }
    
            div#select_option {
                display:flex;
                flex-wrap: wrap;
            }
        }
    
        .plus-circle {
            width:40px;
            height:40px;
            cursor:pointer;
        }
    
    }

    
    @media (max-width: 600px) {
        div#country {
            width: 100%;
        }

        div#side {
            width: 100%;
        }
        div#options {
              
            p {
          
                font-size: 20px;
                font-weight: 300;
                top: -37px;
          
            }
    
            div#select_option {
                display:flex;
                flex-wrap: wrap;
            }
        }
        .plus-circle {
            width:30px;
            height:30px;
            cursor:pointer;
        }

        .exitbutton {
        width: 30px;
        height: 50px;
        cursor: pointer;
        position: relative;
        top: -50px;
        right: -12px;
        }
    
    }
`