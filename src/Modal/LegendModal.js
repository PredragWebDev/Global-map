import React, { useState } from "react";
import { StyledLegendModal } from "./LegendModal.styled";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const LegendModal = (props) => {
  const {optionNames, situationNames, get_CountryColor, get_OptionNames, closeFilterModal} = props;
  const [selectedSituation, setSelectedSituation] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

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
        get_CountryColor(selectedSituation, selectedOption);
        closeFilterModal();
    }

    return (
        <StyledLegendModal>
            <p id="legend"> Filter by:</p>
            {console.log("situationNames>>>>>>>><<<<<<<<<<<<", situationNames)}
            <Autocomplete
                id="country-situation"
                sx={{ width: '100%', marginBottom:"10px" }}
                onChange={handleSituation}
                options={situationNames}
                autoHighlight
                getOptionLabel={(option) => option.label}
                
                renderInput={(params) => (
                    <TextField
                    {...params}
                    label="Choose a situation"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                    />
                )}
                />
                {console.log("optoinNames<<<<<<<<<<<<", optionNames)}
                <Autocomplete
                id="filter-option"
                sx={{ width: '100%', marginBottom:"10px" }}
                options={optionNames}
                autoHighlight
                getOptionLabel={(option) => option.label}
                onChange={handleChangeOption}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    label="Choose a Option"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                    />
                )}
                />
                <div id="button">
                  <button id="ok" onClick={handleOK}>OK</button>
                </div>
            {/* <div>
                <div id="israel"></div>
                <p id="israel">Israel</p>
            </div>
            <div>
                <div id="palestine"></div>
                <p id="palestine">Palestine </p>
            </div>
            <div>
                <div id="neutral"></div>
                <p id="neutral">Neutral</p>
            </div> */}
        </StyledLegendModal>
    )
}

export default LegendModal;