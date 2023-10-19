import React, {useState} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";
import TextField from '@mui/material/TextField';
import {AiFillPlusCircle} from "react-icons/ai";
import SituationCard from "../components/SituationCard";
import AddSituationModal from "../Modal/AddNewOptionModal";
import AddNewSituationModal from "../Modal/AddNewSituationModal";
import SaveOptionModal from "../Modal/SaveOptionModal";

const Situation = () => {
    const [situationNames, setSituationNames] = useState([]);
    const [situationNameForSaving, setSituationNameForSaving] = useState({});
    const [isAddRemove, setIsAddRemove] = useState(false);
    const [isAddModal, setIsAddModal] = useState(false);
    const [isSaveOptionsModal, setIsSaveOptionModal] = useState(false);
    
    const handleAddSituation = () => {
        setIsAddModal(true);
  
      }
    const handleShowSituation = () => {
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
    return (
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
                
    )
}

export default Situation;