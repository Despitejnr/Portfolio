import React from 'react';
import Home from './Pages/Home/Home';
import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import WorkExperience from './Pages/Work Experience/WorkExperience';
import Blog from './Pages/Blog/Blog';
import CaseStudy from './Pages/CaseStudy/CaseStudy';



function App() {

  return (
      <>
      
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/work-experience' element={<WorkExperience/>}/> 
       <Route path='/blog' element={<Blog/>}/>
       <Route path='/caseStudy' element={<CaseStudy/>}/>
      </Routes> 
      </BrowserRouter>
      
      </>
  )
}

export default App
