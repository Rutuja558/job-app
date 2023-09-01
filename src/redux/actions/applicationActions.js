import { ADD_COVER_LETTER_AND_RESUME, ADD_EDUCATIONAL_DETAILS, ADD_PERSONAL_INFORMATION, ADD_SKILLS_AND_QUALIFICATIONS, ADD_WORK_EXPERIENCE_DETAILS, RESET_ALL_FORM, RESET_ALL_REDUCER } from "../constants/applicationConstants"

export const handleAddPersonalInformation = values => async dispatch => {
    dispatch({ type: ADD_PERSONAL_INFORMATION, payload: values })
}

export const handleAddEducationalDetails = values => async dispatch => {
    dispatch({ type: ADD_EDUCATIONAL_DETAILS, payload: values })
}

export const handleAddWorkExperienceDetails = values => async dispatch => {
    dispatch({ type: ADD_WORK_EXPERIENCE_DETAILS, payload: values })
}

export const handleAddSkillsAndQualifications = values => async dispatch => {
    dispatch({ type: ADD_SKILLS_AND_QUALIFICATIONS, payload: values })
}

export const handleAddAdditionalDetails = values => async dispatch => {
    dispatch({ type: ADD_COVER_LETTER_AND_RESUME, payload: values })
}

export const handleResetAllForms = () => async dispatch => {
    dispatch({ type: RESET_ALL_REDUCER })
}