import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const home = () => (
    <div>
        <Container style={{backgroundColor: '#f1f1f1'}}>
            <div className="mt-5">
                <h1 className="display-2">Welcome to Blog Site!</h1>
                <hr className='my-4' />
                <Link className="btn btn-primary btn-lg" to='/blogs' role="button">Check out our Blog</Link>
                
            </div>
        </Container>
    </div>
);

export default home;