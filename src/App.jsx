import React from 'react'
import Home from './page/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import JobDetails from './components/job/JobDetails';
import MyJobs from './page/MyJobs';
import Elearning from './page/Elearning';
import JobRequirement from './components/job/JobRequirement';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/:category" element={<JobDetails />} />
          <Route path="/job/:category/:item" element={<JobRequirement />} />
          <Route path="/myjobs" element={<MyJobs />} />
          <Route path="/elearning" element={<Elearning />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
