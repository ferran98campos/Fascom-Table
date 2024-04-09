import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (
            //Responsive header. Icon resizes depending on screen size
            <header className="w-full bg-fascom-black">
                <div className='w-full py-2 md:py-5 bg-fascom-black'>
                    <a href="https://www.fascom.se/"><img className='w-28 md:w-56 m-auto' src={window.location.origin + "/img/fascom.svg"}></img></a>
                </div>
            </header>
        );
    }
}
  
export default Header;