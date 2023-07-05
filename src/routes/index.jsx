import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import HomePage from '../pages/Home';
import DetailsPage from '../pages/Details';

const AppRoutes = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/details/:factoryId/:monthNumber" element={ <DetailsPage/> } />
        </Routes>
      </Router>
  )
}

export default AppRoutes;
