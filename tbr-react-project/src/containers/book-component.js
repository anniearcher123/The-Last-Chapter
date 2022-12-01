import React from 'react';
import { useSelector } from 'react-redux';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const BookComponent = () => {
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
    const fantasyBooks = useSelector((state) => state.allBooks.fantasyBooks);
    const mysteryBooks = useSelector((state) => state.allBooks.mysteryBooks);
    const romanceBooks = useSelector((state) => state.allBooks.romanceBooks);
    const youngAdultBooks = useSelector((state) => state.allBooks.yaBooks);
    const biographyBooks = useSelector((state) => state.allBooks.bioBooks);

    
    return <div>
        <h1>Books by Top 5 Genres</h1>
        <div className="slider-container">
        <h3>Fantasy:</h3>
            <Slider {...settings}>
            {fantasyBooks.map((book) => {
        return(
        <div className="slider">
            <Link to={`/book/${book.id}`}>
            <div className="card">
                <img className="card-img-top" id="card-image"src={book.volumeInfo.imageLinks?.smallThumbnail} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{book.volumeInfo.title}</h5>
                    <p className="card-name">{book.volumeInfo.authors}</p>
                    {/* <p className="card-text scroll"></p> */}
                    {/* <a href="#" className="btn btn-primary">More Info</a> */}
                </div>
            </div>
            </Link>
        </div>
        );
    })}
</Slider>
    </div>
    <h3>Mystery:</h3>
            <Slider {...settings}>
            {mysteryBooks.map((book) => {
        return(
        <div className="slider">
            <Link to={`/book/${book.id}`}>
            <div className="card">
                <img className="card-img-top" id="card-image"src={book.volumeInfo.imageLinks?.smallThumbnail} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{book.volumeInfo.title}</h5>
                    <p className="card-name">{book.volumeInfo.authors}</p>
                    {/* <p className="card-text scroll"></p> */}
                    {/* <a href="#" className="btn btn-primary">More Info</a> */}
                </div>
            </div>
            </Link>
        </div>
        );
    })}
</Slider>
<h3>Romance:</h3>
<Slider {...settings}>
            {romanceBooks.map((book) => {
        return(
        <div className="slider">
            <Link to={`/book/${book.id}`}>
            <div className="card">
                <img className="card-img-top" id="card-image"src={book.volumeInfo.imageLinks?.smallThumbnail} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{book.volumeInfo.title}</h5>
                    <p className="card-name">{book.volumeInfo.authors}</p>
                    {/* <p className="card-text scroll"></p> */}
                    {/* <a href="#" className="btn btn-primary">More Info</a> */}
                </div>
            </div>
            </Link>
        </div>
        );
    })}
</Slider>
<h3>YA:</h3>
<Slider {...settings}>
        {youngAdultBooks.map((book) => {
                return(
                <div className="slider">
                    <Link to={`/book/${book.id}`}>
                    <div className="card">
                        <img className="card-img-top" id="card-image"src={book.volumeInfo.imageLinks?.smallThumbnail} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{book.volumeInfo.title}</h5>
                            <p className="card-name">{book.volumeInfo.authors}</p>
                            {/* <p className="card-text scroll"></p> */}
                            {/* <a href="#" className="btn btn-primary">More Info</a> */}
                        </div>
                    </div>
                    </Link>
                </div>
                );
            })}
</Slider> 
<h3>Biographies: </h3>
<Slider {...settings}>
        {biographyBooks.map((book) => {
                return(
                <div className="slider">
                    <Link to={`/book/${book.id}`}>
                    <div className="card">
                        <img className="card-img-top" id="card-image"src={book.volumeInfo.imageLinks?.smallThumbnail} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{book.volumeInfo.title}</h5>
                            <p className="card-name">{book.volumeInfo.authors}</p>
                            {/* <p className="card-text scroll"></p> */}
                            {/* <a href="#" className="btn btn-primary">More Info</a> */}
                        </div>
                    </div>
                    </Link>
                </div>
                );
            })}
</Slider>
</div>
}


export default BookComponent;