import React, { Component } from 'react';

class Footer extends Component {
    render () {
        return (
            <footer className="w-full bg-fascom-black">
                <div className='w-full py-6 bg-fascom-black'>
                    <p className='text-fascom-grey w-full text-center font-bold'>Ferran Campos Llopart</p>
                    <p className='underline text-fascom-yellow text-center'><a  href="https://ferran98campos.github.io/my-portfolio">See more</a></p>
                </div>
                <a href="https://www.fascom.se/"><img className='m-auto w-28 md:w-56 py-6' src={window.location.origin + "/img/fascom.svg"}></img></a>
            </footer>
        );
    }
}
  
export default Footer;