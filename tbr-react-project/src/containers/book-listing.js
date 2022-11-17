import React, { useEffect, useCallback } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setFantasyBooks, setRomanceBooks,setMysteryBooks, setYaBooks, setBioBooks } from '../redux/actions/bookActions';
import BookComponent from './book-component';


const BookListing = () => {
    const books = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchFantasyBooks = async () => {
            const response = await axios
            .get('https://www.googleapis.com/books/v1/volumes?q=+subject:fantasy&key=AIzaSyDL5l3YhORLVsrpi8foPebsYCciTeBGmDg')
            .catch((err) => {
                console.log("err", err);
            });
            // console.log("Data:", response.data.items);
            dispatch(setFantasyBooks(response.data.items));
        };

        const fetchRomanceBooks = async () => {
            const response = await axios
            .get('https://www.googleapis.com/books/v1/volumes?q=+subject:romance&key=AIzaSyDL5l3YhORLVsrpi8foPebsYCciTeBGmDg')
            .catch((err) => {
                console.log("err", err);
            });
            // console.log("Data:", response.data.items);
            dispatch(setRomanceBooks(response.data.items));
        };

        const fetchMysteryBooks = async () => {
            const response = await axios
            .get('https://www.googleapis.com/books/v1/volumes?q=+subject:mystery&key=AIzaSyDL5l3YhORLVsrpi8foPebsYCciTeBGmDg')
            .catch((err) => {
                console.log("err", err);
            });
            // console.log("Data:", response.data.items);
            dispatch(setMysteryBooks(response.data.items));
        };

        const fetchYoungAdultBooks = async () => {
            const response = await axios
            .get('https://www.googleapis.com/books/v1/volumes?q=+subject:fiction&key=AIzaSyDL5l3YhORLVsrpi8foPebsYCciTeBGmDg')
            .catch((err) => {
                console.log("err", err);
            });
            console.log("YaData:", response.data.items);
            dispatch(setYaBooks(response.data.items));
        };

        const fetchBiographyBooks = async () => {
            const response = await axios
            .get('https://www.googleapis.com/books/v1/volumes?q=+subject:biography&key=AIzaSyDL5l3YhORLVsrpi8foPebsYCciTeBGmDg')
            .catch((err) => {
                console.log("err", err);
            });
            console.log("BioData:", response.data.items);
            dispatch(setBioBooks(response.data.items));
        };
        
    useEffect(() => {
        fetchFantasyBooks();
        fetchRomanceBooks();
        fetchMysteryBooks();
        fetchBiographyBooks();
        fetchYoungAdultBooks();
        // console.log("Books:", books);

    }, [])


    
    return(
        <div>
            <BookComponent />
        </div>
    )
}

export default BookListing;