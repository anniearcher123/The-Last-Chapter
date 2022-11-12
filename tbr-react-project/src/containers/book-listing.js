import React, { useEffect, useCallback } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks } from '../redux/actions/bookActions';
import BookComponent from './book-component';


const BookListing = () => {
    const books = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchFantasyBooks = async () => {
            const response = await axios
            .get('https://www.googleapis.com/books/v1/volumes?q=+subject:fantasy&key=AIzaSyCHMP32kETXlytY8KQCvIq6OvIy4BP2k90')
            .catch((err) => {
                console.log("err", err);
            });
            console.log("Data:", response.data.items);
            dispatch(setBooks(response.data.items));
        };

        const fetchRomanceBooks = async () => {
            const response = await axios
            .get('https://www.googleapis.com/books/v1/volumes?q=+subject:romance&key=AIzaSyCHMP32kETXlytY8KQCvIq6OvIy4BP2k90')
            .catch((err) => {
                console.log("err", err);
            });
            console.log("Data:", response.data.items);
            dispatch(setBooks(response.data.items));
        };

        const fetchMysteryBooks = async () => {
            const response = await axios
            .get('https://www.googleapis.com/books/v1/volumes?q=+subject:mystery&key=AIzaSyCHMP32kETXlytY8KQCvIq6OvIy4BP2k90')
            .catch((err) => {
                console.log("err", err);
            });
            console.log("Data:", response.data.items);
            dispatch(setBooks(response.data.items));
        };

        const fetchHorrorBooks = async () => {
            const response = await axios
            .get('https://www.googleapis.com/books/v1/volumes?q=+subject:horror&key=AIzaSyCHMP32kETXlytY8KQCvIq6OvIy4BP2k90')
            .catch((err) => {
                console.log("err", err);
            });
            console.log("Data:", response.data.items);
            dispatch(setBooks(response.data.items));
        };

        const fetchYoungAdultBooks = async () => {
            const response = await axios
            .get('https://www.googleapis.com/books/v1/volumes?q=+subject:ya&key=AIzaSyCHMP32kETXlytY8KQCvIq6OvIy4BP2k90')
            .catch((err) => {
                console.log("err", err);
            });
            console.log("Data:", response.data.items);
            dispatch(setBooks(response.data.items));
        };

        const fetchBiographyBooks = async () => {
            const response = await axios
            .get('https://www.googleapis.com/books/v1/volumes?q=+subject:biography&key=AIzaSyCHMP32kETXlytY8KQCvIq6OvIy4BP2k90')
            .catch((err) => {
                console.log("err", err);
            });
            console.log("Data:", response.data.items);
            dispatch(setBooks(response.data.items));
        };
        
    useEffect(() => {
        fetchFantasyBooks();
        fetchRomanceBooks();
        fetchMysteryBooks();
        fetchBiographyBooks();
        fetchYoungAdultBooks();
        console.log("Books:", books);

    }, [])


    
    return(
      <div>
            <BookComponent />
        </div>
    )
}

export default BookListing;