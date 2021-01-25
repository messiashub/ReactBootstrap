import React from 'react';
import {Link} from 'react-router'


const NavBar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to='/' className="navbar-brand ">{props.logo}</Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to='/releases' className="nav-link text success">Releases</Link>
                            {/* <a className="nav-link text-success" href="#">Home <span className="sr-only">(current)</span></a> */}
                        </li>
                        <li className="nav-item">
                            <Link to='/backlog' className="nav-link text success">Backlog</Link>
                            {/* <a className="nav-link" href="#">Link</a> */}
                        </li>
                        <li className="nav-item">
                            <Link to='/sprints' className="nav-link text success">Sprint</Link>
                            {/* <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a> */}
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}


export default NavBar;