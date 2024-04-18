import React from "react";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponets/HeaderComponent";
import { MainPage } from "./Pages/MainPage/MainPage";
import Balance from "./Pages/Balance/Balance";
import DoctorProfile from "./Pages/DoctorProfile/DoctorProfile";
import Notes from "./Pages/Notes/Notes";
import NotFound from "./Pages/NotFound/NotFound";
import FooterGeneralContainer from "./Components/FooterComponents/FooterGeneralContainer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/balance/:id" element={<Balance />} />
          <Route path="/doctorProfile" element={<DoctorProfile />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

        <FooterGeneralContainer />

    </div>
  );
}

export default App;
