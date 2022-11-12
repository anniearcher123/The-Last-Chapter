import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="home-header">
                <h2>To Be Read Title</h2>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Discover</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">My TBR</a>
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