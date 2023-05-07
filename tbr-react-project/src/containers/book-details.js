import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedBooks, addBooks } from "../redux/actions/bookActions";
import Button from 'react-bootstrap/Button';




const BookDetails = () => {
    const tbrList = useSelector((state) => state.tbrBooks.tbrList);
    const dispatch = useDispatch()
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

    return(
        <div className="container">
            <div className="">
                <div className="">
                    <h1>{book.volumeInfo.title}</h1>
                    <img className="detail-image" id="card-image"src={book.volumeInfo.imageLinks?.smallThumbnail} alt="Card image cap"/>
                    <h3>{book.volumeInfo.authors}</h3>
                    <Button onClick={() => AddToTBR(book)} variant="success">Add to TBR</Button>
                    <h3>Overview</h3>
                    <p>{book.volumeInfo.description}</p>
                    <h3>Average Reader Rating</h3>
                    <p>{book.volumeInfo.averageRating}</p>

                </div>
            </div>
            
        </div>
    )
}

export default BookDetails;