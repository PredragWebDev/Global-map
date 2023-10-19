import React, { useState } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import { StyledAddModal, StyledAddButton } from "./AddNewOption.styled"
import {AiOutlineClose} from "react-icons/ai";

const AddNewOptionModal = (props) => {
    const [optionName, setOptionName] = useState("");
    const [defaultValue, setDefaultValue] = useState("");
    const {situationName} = props;

    const handleADD = () => {

        if (optionName === "" || defaultValue === "") {
            alert("Please fill all data!");
            return;
        }

        
        axios.post("http://38.242.156.153:5000api/admin/add_optionName", {
            situationName, optionName, defaultValue
        })
        .then((response) => {
            
            if (response.data.state === "okay") {
                props.setShowAddNewOptionModal(false);
                props.get_optionNames();
            }
            else {
                alert("Faild!");
            }
            console.log(response.data);
            
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

                        <p>Add A New Option</p>
                    </div>
                    <div id="close">

                        <AiOutlineClose style={{width:"25px", height:"25px", cursor:"pointer"}} onClick={() => props.setShowAddNewOptionModal(false)}/>
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
                        onChange={(e) => setOptionName(e.target.value)}
                        />
                        <TextField id="Leans-basic"
                        sx={{
                            marginBottom:"10px",
                            [`@media (max-width: 600px)`]: {
                                width: '100%',
                                marginRight:'0',
                            },   
                        }} label="Default Value(split as comma)" variant="outlined" 
                        onChange={(e) => setDefaultValue(e.target.value)}
                        />
                    </div>
                    <StyledAddButton onClick={handleADD}>ADD</StyledAddButton>
                </div>
            </StyledAddModal>

        </>
    )
}

export default AddNewOptionModal;