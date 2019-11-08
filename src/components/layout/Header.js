import React from 'react';
import { Fa500Px } from 'react-icons/fa'

export const Header = () => {
    return(
        <header className='header' data-testid='header'>
            <nav>
                <div className='logo'>
                    <img src='/images/logo.png' alt='todo' />
                </div>
                <div className='settings'>
                    <ul>
                        <li>++</li>
                        <li>
                            <Fa500Px />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}