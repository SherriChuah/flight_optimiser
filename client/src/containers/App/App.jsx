import React from 'react';
import './App.css'
import { Form } from '../Form/Form';
import { ResultsPage } from '../../components/ResultsPage/ResultsPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { EditBooking } from '../../components/FormSteps/PeopleDetailsStep/PeopleDetailsEdit'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/results" element={<ResultsPage />} />
        {/* <Route path="/edit/:id" element={<EditBooking />} /> */}
      </Routes>
    </Router>
  );
};

export default App;