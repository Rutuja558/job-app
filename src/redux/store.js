import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { additionalInfoReducer, educationReducer, initialStateReducer, personalInfoReducer, skillsAndQualificationReducer, workReducer } from "./reducers/applicationReducer"

const rootReducer = combineReducers({
    personalInformation: personalInfoReducer,
    education: educationReducer,
    work: workReducer,
    skillsAndQualification: skillsAndQualificationReducer,
    additionalInformation: additionalInfoReducer,
    // initialState: initialStateReducer
})

export const initialValues = {
    personalInformation: {
        name: '',
        email: '',
        phone: '',
        address: '',
    },
    education: {
        education: [
            { institude: "SSC", university: '', CGPA: '', passYear: '' },
            { institude: "HSC", university: '', CGPA: '', passYear: '' },
            { institude: "Graduation", university: '', CGPA: '', passYear: '' },
            { institude: "PostGraduation", university: '', CGPA: '', passYear: '' },
        ],
    },
    work: {
        work: [
            { companyName: '', jobTitle: '', duration: '' },
        ],
    },
    skillsAndQualification: {
        skills: [],
        certifications: []
    },
    additionalInformation: {
        coverLetter: null,
        resume: null
    }
}
const store = createStore(rootReducer, initialValues, composeWithDevTools(applyMiddleware(thunk)))
export default store