import React from 'react';
import headerLogo from '../../utilities/image/lws-logo 1.svg'

const Header = () => {
    return (
        <div>
            {/* <!-- header --> */}
            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <img src={headerLogo} alt="logo" className="logo" />
                        <h1 className="name">Scoreboard</h1>
                        <h5 className="total">Total</h5>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;