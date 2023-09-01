import { ADD_COVER_LETTER_AND_RESUME, ADD_EDUCATIONAL_DETAILS, ADD_PERSONAL_INFORMATION, ADD_SKILLS_AND_QUALIFICATIONS, ADD_WORK_EXPERIENCE_DETAILS, RESET_ALL_FORM, RESET_ALL_REDUCER } from "../constants/applicationConstants"
import { initialValues } from "../store"

export const personalInfoReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ADD_PERSONAL_INFORMATION: return payload
        case RESET_ALL_REDUCER: return initialValues.personalInformation
        default: return state
    }
}

export const educationReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ADD_EDUCATIONAL_DETAILS: return payload
        case RESET_ALL_REDUCER: return initialValues.education
        default: return state
    }
}

export const workReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ADD_WORK_EXPERIENCE_DETAILS: return payload
        case RESET_ALL_REDUCER: return initialValues.work
        default: return state
    }
}

export const skillsAndQualificationReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ADD_SKILLS_AND_QUALIFICATIONS: return payload
        case RESET_ALL_REDUCER: return initialValues.skillsAndQualification
        default: return state
    }
}

export const additionalInfoReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ADD_COVER_LETTER_AND_RESUME: return payload
        case RESET_ALL_REDUCER: return initialValues.additionalInformation
        default: return state
    }
}

// export const initialStateReducer = (state = {}, { type, payload }) => {
//     switch (type) {
//         case RESET_ALL_REDUCER: return initialValues
//         default: return state
//     }
// }