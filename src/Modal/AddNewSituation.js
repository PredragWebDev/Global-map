import React, { useState } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import { StyledAddModal, StyledAddButton } from "./AddSituation.styled"
import {AiOutlineClose} from "react-icons/ai";

const AddNewSituationModal = (props) => {
    const [situationName, setSituationName] = useState("");

    const handleADD = () => {
        

        axios.post("http://127.0.0.1:5001/api/admin/add_sitationName", {
            situationName
        })
        .then((response) => {
            
            if (response.data.state === "okay") {
                alert("Success!!!");
                props.setIsAddModal(false);
            }
            else {
                alert("Faild!");
            }

            props.handleShowSituation();
          
            
        }).catch((error) => {
            if (error.response) {
                alert(error);
                console.log("error~~~~~~~~~")
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
    }
    return (
        <>
            <StyledAddModal>
                <div id="title">

                    <div id="letter">

                        <p>Add A New Name of Situation</p>
                    </div>
                    <div id="close">

                        <AiOutlineClose style={{width:"25px", height:"25px", cursor:"pointer"}} onClick={() => props.setIsAddModal(false)}/>
                    </div>
                </div>
                <div id="inputfield">

                    <TextField id="Leans-basic"
                    sx={{
                        [`@media (max-width: 600px)`]: {
                            width: '100%',
                            marginRight:'0',
                        },   
                    }} label="situationName" variant="outlined" 
                    onChange={(e) => setSituationName(e.target.value)}
                    />
                    <StyledAddButton onClick={handleADD}>ADD</StyledAddButton>
                </div>
            </StyledAddModal>

        </>
    )
}

export default AddNewSituationModal;