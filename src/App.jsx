import React from 'react'
import Home from './page/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import JobDetails from './components/job/JobDetails';
import MyJobs from './page/MyJobs';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<JobDetails/>}/>
          <Route path="/myjobs" element={<MyJobs/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
