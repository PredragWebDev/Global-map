import styled from "@emotion/styled";

export const StyledFeed = styled.div`
    
    align-items:center;

    div#country {
        margin-bottom:10px;
    }
    div#situations {
        margin-bottom:10px;
    }
    div#options {
        margin-bottom:10px;
    }
    div#feed {
        
        border:1px solid yellow;
        border-radius:20px;
        margin-bottom:30px;
        padding:2%;

        div#headlinelink {
            justify-content: space-between;
            width: 100%;
            display: flex;
            margin:10px 0px;

            button#test {
                width:7%;
                cursor:pointer;

            }
        }
    }

    div#savebutton {
        display:flex;
        justify-content: center;
    }
    button#save {
        background: cornflowerblue;
        border-radius: 10px;
        border: 0;
        cursor:pointer;
        font-size: 40px;
    }

    @media (max-width: 1000px) {
        
    }
`
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