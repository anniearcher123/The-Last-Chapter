import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./containers/header";
import BookListing from './containers/book-listing';
import BookDetails from './containers/book-details';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<BookListing/>} />
          <Route path="/book/:bookId" exact element={<BookDetails/>} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
