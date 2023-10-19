
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
import Autocomplete from '@mui/material/Autocomplete';

import TextField from '@mui/material/TextField';
import {AiFillPlusCircle} from "react-icons/ai";
import { StyledAdmin,  StyledSideBar } from "./Admin.styled";
import SituationCard from "../components/SituationCard";
import AddSituationModal from "../Modal/AddNewOptionModal";
import AddNewSituationModal from "../Modal/AddNewSituationModal";
import SaveOptionModal from "../Modal/SaveOptionModal";

import './Admin.css';

function Adminpage() {
    const modalRef = useRef(null);
    
    const [showAddSituationModal, setShowAddSituationModal] = useState(true);
    const [situationNames, setSituationNames] = useState([]);
    const [situationNameForSaving, setSituationNameForSaving] = useState({});
    const [isAddRemove, setIsAddRemove] = useState(false);
    const [isAddModal, setIsAddModal] = useState(false);
    const [isSaveOptionsModal, setIsSaveOptionModal] = useState(false);
    const [isSituation, setIsSitaution] = useState(true);
    const [isFeed, setIsFeed] = useState(false);
    let situationContents = {};

    const hadleFeed = () => {
      setIsSitaution(false);
      setIsFeed(true);
    }
    const handleShowSituation = () => {
      setIsSitaution(true);
      setIsAddRemove(false);
      axios.post("http://127.0.0.1:5001/api/admin/get_situationNames")
      .then((response) => {
        
        if (response.data.state === "okay") {

          let tempOptionName = response.data.situationNames.map(situation => {
            return ({
              situationName:situation.situationName, 
              oneSide: situation.oneSide,
              otherSide: situation.otherSide
          })
          })

          console.log("situation names>>>",tempOptionName);

          setSituationNames(tempOptionName);
          
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

    const handleAddRemove = () => {
      setIsAddRemove(true);
      setIsSaveOptionModal(false);
      
    }

    const handleClickOutsideModal = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowAddSituationModal(false);
      }
    };

    const handleAddSituation = () => {
      setIsAddModal(true);

    }
  
    
    // Add event listener when the modal is open
    useEffect(() => {
      handleShowSituation();
      if (showAddSituationModal) {
        document.addEventListener("click", handleClickOutsideModal);
      }
  
      // Clean up the event listener when the modal is closed
      return () => {
        document.removeEventListener("click", handleClickOutsideModal);
      };
    }, [showAddSituationModal]);

    return (
        <StyledAdmin>
            <div id = 'header'>
                <h1>Administrator</h1>
            </div>
            <div id="board">
              <StyledSideBar>
                <button id="situation" onClick={handleShowSituation}>Situation</button>
                <button id="add_remove" onClick={handleAddRemove}>Add/Remove</button>
                <button id="list_edit">List/Edit</button>
                <button id="ssrfeed" onClick={hadleFeed}>Feed</button>
              </StyledSideBar>
              <div id="input-field">
                {isSituation ? (
                  <div id="situations">

                    {situationNames.map((name, key) => {
                      return <SituationCard keys={key} id={key} situationName={name.situationName} oneSide={name.oneSide} otherSide={name.otherSide} isAddRemove={isAddRemove} handleShowSituation={handleShowSituation} setIsAddRemove={setIsAddRemove} setIsSaveOptionModal={setIsSaveOptionModal} setSituationNameForSaving={setSituationNameForSaving}/>
                    })}

                    <div id="add">
                      {isAddRemove && <AiFillPlusCircle style={{width:"50px", height:"50px", cursor:"pointer"}} onClick={handleAddSituation}/>}
                    </div>

                    {isAddModal && <AddNewSituationModal setIsAddModal={setIsAddModal} handleShowSituation={handleShowSituation}/>}

                    {isSaveOptionsModal && <SaveOptionModal situationName={situationNameForSaving} setIsSaveOptionModal={setIsSaveOptionModal}/>}
                  </div>
                ):(
                  <div></div>

                )}
                
                
                {/* <SaveOptionModal/> */}
                
              </div>
            </div>

        
        </StyledAdmin >
    );
}

export default Adminpage;
