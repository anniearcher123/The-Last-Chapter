import React from 'react';

const Footer = () => {
    return(
        <div className="container-fluid" id="footer">
            <div className="row">
                <div className="col-4">
                    <h2>Useful Links</h2>
                    <ul className="footer-list">
                        <li>
                            <a href="https://www.barnesandnoble.com/">Barnes and Noble</a>
                        </li>
                        <li>
                            <a href="https://www.whatshouldireadnext.com/">What Should I Read Next?</a>
                        </li>
                        <li>
                            <a href="https://archive.org/">Internet Archive</a>
                        </li>
                        <li>
                            <a href="https://lithub.com/">Literary Hub</a>
                        </li>
                    </ul>
                </div>
                <br/>
                <div className="col-4">
                    <h2>Most Popular Book Genres</h2>
                    <p>Fantasy/Science Fiction</p>
                    <p>Mystery</p>
                    <p>Romance</p>
                    <p>Religion</p>
                    <p>Young Adult</p>
                    <br/>
                </div>
                <div className="col-4" >
                    <h2>Follow Us</h2>
                <ul className="social-list">
                    <li><a href="#" class="fa fa-facebook"></a></li>
                    <li><a href="#" class="fa fa-twitter"></a></li>
                    <li><a href="#" class="fa fa-instagram"></a></li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;