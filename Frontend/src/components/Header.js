import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
       <style>{'body { background-color: pink; }'}</style>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
          Museum-Management 
          </a>
          <button
            class="navbar-toggler" 
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/add">
                  Add Articles
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/show">
                  Show Articles
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/update">
                  Update Articles
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
