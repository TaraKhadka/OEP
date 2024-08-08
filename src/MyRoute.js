import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import React from 'react'
import App from "./App"
import Dashboard from "./pages/Dashboard"

const MyRoute = () => {
   return (
      <Router>
         <Routes>
            <Route>
               <Route path="/" element={<Dashboard />} />
            </Route>
         </Routes>
      </Router >
   )
}

export default MyRoute