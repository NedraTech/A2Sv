import "./App.css";
import DiseaseDiagnosisResultScreen from "./pages/DiseaseDiagnosisResultScreen";
import FirstLoading from "./pages/FirstLoading";

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notfication from "./pages/Notfication";
import Scan from "./pages/Scan";
import SupportHelp from "./pages/Support&Help";
import Shop from "./pages/Shop";
import Harvestprediction from "./pages/Harvestprediction";
import Profile from "./pages/Profile";
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<FirstLoading />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/diseaseDiagnosisResultScreen" element={<DiseaseDiagnosisResultScreen />}/>
        <Route path="/login" element={<Login />}/>  
        <Route path="/notfication" element={<Notfication />}/>  
        <Route path="/scan" element={<Scan />}/>
        <Route path="/support" element={<SupportHelp />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/harvestprediction" element={<Harvestprediction />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="*" element={<Error />}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
