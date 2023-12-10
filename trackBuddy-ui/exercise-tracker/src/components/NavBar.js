import React from 'react';
import {Link} from 'react-router-dom';


const  NavBar = ()=>{
    return (
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg navbar-expand-md '>
            <Link to="/" className='navbar-brand '>Exercise Tracker</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className='collapse navbar-collapse' id="navbarSupportedContent" >
                <ul className='navbar-nav mr-auto'>
                    <li className='navbar-item'>
                        <Link to="/" className='nav-link'>Exercises</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/create" className='nav-link'>Create Exercises</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/user" className='nav-link'>Create Users</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default NavBar