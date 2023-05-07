import React from 'react';
import Header from './header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { removeBooks } from '../redux/actions/bookActions';


const TbrList = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
        };

    const tbrList = useSelector((state) => state.tbrBooks.tbrList);
    const dispatch = useDispatch();

    const RemoveFromTbr = (book) => {
        dispatch(removeBooks(book));
        console.log("removed:", tbrList)
        }

    return <div>
            <h1>My TBR</h1>
            <br />
            <Slider {...settings}>
                {tbrList.map((book) => {
                    console.log("Book", book)
                    console.log("List:", tbrList)
                return(
                    <div className="card d-flex justify-content-center">
                        <img src={book.volumeInfo.imageLinks?.smallThumbnail} className="img-fluid rounded-start m-auto d-flex" alt="..." style={{ height: "200px", width: "150px" }}/>
                        <div>
                        <h5 className="card-title">{book.volumeInfo.title}</h5>
                                <p className="card-text"><small className="text-muted">{book.volumeInfo.authors}</small></p>
                                <p className="card-text scroll">{book.volumeInfo.description}</p>
                                <button type="button" onClick={() => RemoveFromTbr(book)} class="btn btn-dark">Remove from TBR</button>
                        </div>
                    </div>
                )
                })}
            </Slider>
            {/* <ul className="list-group row" id="tbr-unordered-list">
                
                {tbrList.map((book) => {
                    console.log("Book", book)
                    console.log("List:", tbrList)
                return(
                <li className="list-group-item">
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={book.volumeInfo.imageLinks?.smallThumbnail} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{book.volumeInfo.title}</h5>
                                <p className="card-text"><small className="text-muted">{book.volumeInfo.authors}</small></p>
                                <p className="card-text">{book.volumeInfo.description}</p>
                                <button type="button" onClick={() => RemoveFromTbr(book)} class="btn btn-dark">Remove from TBR</button>
                            </div>
                            </div>
                        </div>
                        </div>
                </li>
                )
                })}
            </ul> */}
        </div>
    }

    export default TbrList;