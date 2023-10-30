import React from "react";
import { StyledLegendModal } from "./LegendModal.styled";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const LegendModal = (props) => {
  const {optionNames, situationNames, selectedOption, selectedSituation, get_CountryColor, setSelectedSituation, setSelectedOption, get_OptionNames, closeFilterModal} = props;

  const handleSituation = (event, value) => {
        if (value !== undefined) {
            get_OptionNames(value.label);
            setSelectedSituation(value.label);
        }
    }

    const handleChangeOption = (event, value) => {

        if (value !== undefined) {
            setSelectedOption(value.label);
        }
    }

    const handleOK = () => {
        get_CountryColor();
        closeFilterModal();
    }

    return (
        <StyledLegendModal>
            <p id="legend"> Filter by:</p>
            <Autocomplete
                id="country-situation"
                sx={{ width: '100%', marginBottom:"10px" }}
                onChange={handleSituation}
                options={situationNames}
                autoHighlight
                getOptionLabel={(option) => option.label}
                value={{label:selectedSituation}}
                renderInput={(params) => (
                    <TextField {...params} label="Choose a situation"/>
                )}
            />
            <Autocomplete
                id="filter-option"
                sx={{ width: '100%', marginBottom:"10px" }}
                options={optionNames}
                autoHighlight
                getOptionLabel={(option) => option.label}
                onChange={handleChangeOption}
                value={{label:selectedOption}}
                renderInput={(params) => (
                    <TextField {...params} label="Choose a Option" />
                )}
            />  
            <div id="button">
                <button id="ok" onClick={handleOK}>OK</button>
            </div>
            
        </StyledLegendModal>
    )
}

export default LegendModal;