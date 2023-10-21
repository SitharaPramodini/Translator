import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './components/Home/Home';
import Phasebook from './components/Phasebook/Phasebook';
import AddPhase from './components/Phasebook/AddPhase';
import ViewPhase from './components/Phasebook/ViewPhase';
import EditPhase from './components/Phasebook/EditPhase';
import Navbar from './components/Header/Navbar';

import Header from './components/Header/Navbar';

import Synonym from './components/similar&opposite/Synonyms';
import Antonym from './components/similar&opposite/Antonyms';
import AddSynonyms from './components/similar&opposite/AddSynonyms/AddSynonyms';
import UpdateSynonyms from './components/similar&opposite/UpdateSynonyms/UpdateSynonyms';
import AddAntonyms from './components/similar&opposite/AddAntonyms/AddAntonyms';
import UpdateAntonyms from './components/similar&opposite/UpdateAntonyms/UpdateAntonyms';

import TranslationApp from './translator/Translator';

import KeywordExtractor from "./components/KeywordExtractor/KeywordExtractor";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>

          <Route path="/" element={<TranslationApp />} />
          <Route path="/phasebook" element={<Phasebook />} />
          <Route path="/addphase" element={<AddPhase />} />
          <Route path="/viewphase" element={<ViewPhase />} />
          <Route path="/editphase/:id" element={<EditPhase />} />
        
          <Route path="/synonym" exact element={<Synonym />} />
          <Route path="/antonym" exact element={<Antonym />} />
          <Route path="/addSynonyms" exact element={<AddSynonyms />} />
          <Route path="/updateSynonyms" exact element={<UpdateSynonyms />} />
          <Route path="/addAntonyms" exact element={<AddAntonyms />} />
          <Route path="/updateAntonyms" exact element={<UpdateAntonyms />} />
        
          <Route path="/extract-keywords" exact element={<KeywordExtractor />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
