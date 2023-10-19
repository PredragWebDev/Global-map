import React, { useState } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import { StyledAddModal, StyledAddButton } from "./AddNewOption.styled"
import {AiOutlineClose} from "react-icons/ai";

const AddNewSituationModal = (props) => {
    const [situationName, setSituationName] = useState("");
    const [oneSide, setOneSide] = useState("");
    const [otherSide, setOtherSide] = useState("");

    const handleADD = () => {
        
        if (situationName === "" || oneSide === "" || otherSide==="") {
            alert("Please fill all data!");
            return;
        }
        axios.post("http://38.242.156.153:5000/api/admin/add_sitationName", {
            situationName, oneSide, otherSide
        })
        .then((response) => {
            
            if (response.data.state === "okay") {
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

                        <p>Add A New Situation</p>
                    </div>
                    <div id="close">

                        <AiOutlineClose style={{width:"25px", height:"25px", cursor:"pointer"}} onClick={() => props.setIsAddModal(false)}/>
                    </div>
                </div>
                <div id="inputfield">

                    <div>

                        <TextField id="Leans-basic"
                        sx={{
                            marginBottom:"10px",
                            [`@media (max-width: 600px)`]: {
                                width: '100%',
                                marginRight:'0',
                            },   
                        }} label="situationName" variant="outlined" 
                        onChange={(e) => setSituationName(e.target.value)}
                        /><TextField id="Leans-basic"
                        sx={{
                            marginBottom:"10px",
                            [`@media (max-width: 600px)`]: {
                                width: '100%',
                                marginRight:'0',
                            },   
                        }} label="Side1" variant="outlined" 
                        onChange={(e) => setOneSide(e.target.value)}
                        /><TextField id="Leans-basic"
                        sx={{
                            marginBottom:"10px",
                            [`@media (max-width: 600px)`]: {
                                width: '100%',
                                marginRight:'0',
                            },   
                        }} label="Side2" variant="outlined" 
                        onChange={(e) => setOtherSide(e.target.value)}
                        />
                    </div>
                    <StyledAddButton onClick={handleADD}>ADD</StyledAddButton>
                </div>
            </StyledAddModal>

        </>
    )
}

export default AddNewSituationModal;