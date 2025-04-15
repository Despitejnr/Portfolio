import React from 'react';
import Home from './Pages/Home/Home';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import WorkExperience from './Pages/Work Experience/WorkExperience';
import Blog from './Pages/Blog/Blog';


function App() {

  return (
      <>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/work-experience' element={<WorkExperience/>}/> 
       <Route path='/blog' element={<Blog/>}/>
      </Routes> 
      </BrowserRouter>
      </>
  )
}

export default App
