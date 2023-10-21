import React from "react";
import './Header.css';

const Navbar = () => {
  return (
    <nav class="navbar fixed-top navbar-expand-lg bg-dark bg-body-tertiary" data-bs-theme="dark" style={{ height: 80 }}>
      <div class="container-fluid">
        <a class="navbar-brand" href="/" style={{ color: "white" }}>SINHALA - ENGLISH TRANSLATOR</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/extract-keywords" style={{ color: "#bdc1c6 " }}>Extract Keywords</a>
            </li>
            
            <li class="nav-item">
              <div class="dropdown">
                <a class="nav-link" style={{ color: "#bdc1c6" }}>Find Synonyms & Antonyms</a>
                <div class="dropdown-content">
                  <a href="/synonym">Synonyms</a>
                  <a href="/antonym">Antonyms</a>
                </div>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/addphase" style={{ color: "#bdc1c6" }}>Notepad</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{ color: "#bdc1c6" }}>Articles</a>
            </li>
          </ul>
        </div>
        <button type="button" class="btn btn-secondary btn-sm">Login / SignUp</button>
      </div>
    </nav>
  )
}

export default Navbar