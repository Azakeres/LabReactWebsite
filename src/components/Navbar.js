import React from 'react';

function Navbar(){
	return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

    <div className="container-fluid justify-content-left">

        <div className="collapse navbar-collapse order-last order-lg-first" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-left">

                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Projects</a>
                </li>

            </ul>
        </div>

        <button className="navbar-toggler justify-content-left" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Healthcare Journeys Reasearch Lab</a>
    </div>
</nav>


		
       

      );
}

export default Navbar;

