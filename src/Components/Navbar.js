import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.logo}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.about}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form> */}

                    {/*Radio button*/}
                    <label htmlFor="inlineRadioOptions" style={props.mode === 'light' ? {color: 'black'} : {color:'white'}}>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" onClick={props.themeSelect} defaultChecked type="radio" name="inlineRadioOptions" id="inlineRadio1" value="primary"/>
                            <label className="form-check-label" htmlFor="inlineRadio1">Blue</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" onClick={props.themeSelect} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="secondary"/>
                            <label className="form-check-label" htmlFor="inlineRadio2">Gray</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" onClick={props.themeSelect} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="success"/>
                            <label className="form-check-label" htmlFor="inlineRadio2">Green</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" onClick={props.themeSelect} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="danger"/>
                            <label className="form-check-label" htmlFor="inlineRadio2">Red</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" onClick={props.themeSelect} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="warning"/>
                            <label className="form-check-label" htmlFor="inlineRadio2">Yellow</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" onClick={props.themeSelect} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="info"/>
                            <label className="form-check-label" htmlFor="inlineRadio2">Aqua</label>
                        </div>
                    </label>

                    {/*Toggle Dark Mode button */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    logo: PropTypes.string.isRequired, //used to specify that it is required
    about: PropTypes.string
}

Navbar.defaultProps = {
    logo: 'Default Logo',
    about: 'Insert title here',
    btnText: 'Toggle Mode'
}
