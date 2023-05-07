import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchInfo } from '../redux/actions/bookActions';
import axios from 'axios';

const SearchBar = () => {
    const [searchText, setSearchText] = useState("");

    const books = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchSearchInfo = async () => {
            const response = await axios
            .get('https://www.googleapis.com/books/v1/volumes?q=${searchText}+intitle&key=AIzaSyDL5l3YhORLVsrpi8foPebsYCciTeBGmDg')
            .catch((err) => {
                console.log("err", err);
            });
            console.log("search for:", searchText)
            dispatch(setSearchInfo(response.data.items));
        };

    useEffect(() => {
        fetchSearchInfo();
    }, []);

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    return (
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
    )
}

export default SearchBar;