import React from 'react';
import { Link } from 'react-router-dom';

export default function home() {
    return(
    <div>
        <div className="jumbotron mt-5">
            <h1 className="display-4">Welcome to Blog Site!
            <Link className="btn btn-primary btn-lg" to='/blog' role="button">Check out our Blog</Link>
            </h1>
        </div>
    </div>
);
}