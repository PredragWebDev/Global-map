import React from "react";
import Landingpage from "./pages/Landing";
import Adminpage from "./pages/Admin";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path="/admin" element={<Adminpage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
