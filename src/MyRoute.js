import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import React from 'react'
import App from "./App"
import Dashboard from "./pages/Dashboard"
import Admin from "./admin/Admin"
import Student from "./Student/Student"
import Teacher from "./Teacher/Teacher"

const MyRoute = () => {
   return (
      <Router>
         <Routes>
            <Route>
               <Route path="/" element={<Dashboard />} />
               <Route path="/Admin" element={<Admin/>} />
               <Route path="/Student" element={<Student/>} />
               <Route path="/Teacher" element={<Teacher/>} />
            </Route>
         </Routes>
      </Router >
   )
}

export default MyRoute