import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchInfo } from '../redux/actions/bookActions';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { useParams } from 'react-router-dom';
import { selectedBooks, addBooks } from "../redux/actions/bookActions";


const SearchBar = () => {
    
    const [searchText, setSearchText] = useState("");
    const [searchList, setSearchList] = useState([])

    const books = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchSearchInfo = async () => {
            const response = await axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=AIzaSyDL5l3YhORLVsrpi8foPebsYCciTeBGmDg`)
            .catch((err) => {
                console.log("err", err);
            });
            console.log("search for:", response.data.items)
            setSearchList(response.data.items)
        };

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const tbrList = useSelector((state) => state.tbrBooks.tbrList);
    const bookState = useSelector((state) => state.allBooks);
    const { bookId } = useParams();
    const allBooks = [
        ...bookState.fantasyBooks,
        ...bookState.mysteryBooks,
        ...bookState.romanceBooks,
        ...bookState.yaBooks,
        ...bookState.bioBooks
    ];
    console.log(allBooks);
    let book;
    for(let i=0; i<allBooks.length; i++) {
        if(allBooks[i].id === bookId) {
            book = allBooks[i];
            console.log("selected book", book);
            break;
        }
    }
    
        
    const AddToTBR = (book) => {
        dispatch(addBooks(book));
        console.log("added", tbrList)
        }

    return (
        <>
        <div className="container row" id="search-bar">
            <div className="main-search-input-wrap">
                <div className="main-search-input fl-wrap">
                    <div className="main-search-input-item">
                        <input type="text"  value={searchText} placeholder="Search Products..." onChange={handleInputChange}/>
                    </div>                                           
                    <button className="main-search-button" onClick={fetchSearchInfo} variant="info">Search</button>
                </div>
            </div>
        </div>
        <div>
                <h2>Search Results</h2>
                <ul>
                    {searchList.length > 0 ? searchList.map((book) => (
                        <li key={book.id}>
                            <Link to={`/book/${book.id}`}> 
                            <h3>{book.volumeInfo.title}</h3>
                            <img src={book.volumeInfo.imageLinks?.smallThumbnail}/>
                            </Link>
                            <p>{book.volumeInfo.authors}</p>
                            <p>{book.volumeInfo.description}</p>
                            <Button onClick={() => AddToTBR(book)} variant="success">Add to TBR</Button>
                        </li>
                    )) :
                    ""}
                </ul>
            </div>
        </>
        
    )

}

export default SearchBar;