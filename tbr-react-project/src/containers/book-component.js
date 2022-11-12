import React from 'react';
import { useSelector } from 'react-redux';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
    const youngAdultBooks = useSelector((state) => state.allBooks.youngAdultBooks);
    const biographyBooks = useSelector((state) => state.allBooks.biographyBooks);

    
    return <div>
            <Slider {...settings}>
            {fantasyBooks.map((book) => {
        console.log("Test:", book)
        return(
        <div>
            <div className="card">
                <img className="card-img-top" src={book.volumeInfo.imageLinks.thumbnail} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{book.volumeInfo.title}</h5>
                    <p className="card-name">{book.volumeInfo.authors}</p>
                    <p className="card-text">{book.volumeInfo.description}</p>
                    <a href="#" className="btn btn-primary">More Info</a>
                </div>
            </div>
        </div>
        );
    })}
</Slider>
<Slider {...settings}>
            {mysteryBooks.map((book) => {
        console.log("Test:", book)
        return(
        <div>
            <div className="card">
                <img className="card-img-top" src={book.volumeInfo.imageLinks.thumbnail} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{book.volumeInfo.title}</h5>
                    <p className="card-name">{book.volumeInfo.authors}</p>
                    <p className="card-text">{book.volumeInfo.description}</p>
                    <a href="#" className="btn btn-primary">More Info</a>
                </div>
            </div>
        </div>
        );
    })}
</Slider>
</div>

}

export default BookComponent;