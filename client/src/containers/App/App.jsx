import React from 'react';
import './App.css'
import { Form } from '../Form/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { EditBooking } from '../../components/FormSteps/PeopleDetailsStep/PeopleDetailsEdit'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        {/* <Route path="/edit/:id" element={<EditBooking />} /> */}
      </Routes>
    </Router>
  );
};

export default App;