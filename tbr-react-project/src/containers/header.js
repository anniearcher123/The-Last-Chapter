import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <div className="home-header">
                <h2>The Last Chapter</h2>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Discover</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tbr">My TBR</Link>
                    </li>
                </ul>
            </div>
            <div className="jumbotron">
                <h1 className="display-4">Discover books now!</h1>
                <p className="lead">Find the books you love or don't know that you love yet and organize them all in one place. </p>
                <hr className="my-4"/>
                <p>You can also leave reviews and see other book lover's reviews, lists, and more!</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Sign up now</a>
                </p>
            </div>
        </div>
    )
}

export default Header