import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { AdditionalnfoForm, EducationForm, Home, PersonalInfoForm, ReviewForm, SkillsForm, WorkExperienceForm } from './pages';
import { Steps } from './components';

function App() {

  return (
    <BrowserRouter>
      <Steps />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/1' element={<PersonalInfoForm />} />
        <Route path='/2' element={<EducationForm />} />
        <Route path='/3' element={<WorkExperienceForm />} />
        <Route path='/4' element={<SkillsForm />} />
        <Route path='/5' element={<AdditionalnfoForm />} />
        <Route path='/6' element={<ReviewForm />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
