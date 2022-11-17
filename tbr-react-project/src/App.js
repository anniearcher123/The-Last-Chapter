import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./containers/header";
import BookListing from './containers/book-listing';
import BookDetails from './containers/book-details';
import React, { useEffect, useCallback, } from 'react';
import TbrComponent from './containers/tbr-component';
import Footer from './containers/footer-component';

function App() {
  console.log("app start")

  return (
    <div className="App">
      <div className="container">
      <div id="nav-container"></div>
      <div id="sidebar"></div>
      <div id="banner-container"></div>
      <div id="book-list-container"></div>
      <div id="footer-container"></div>
      </div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<BookListing/>} />
          <Route path="/book/:bookId" exact element={<BookDetails/>} />
          <Route path="/tbr" exact element={<TbrComponent/>} />
          <Route>404 Not Found</Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
