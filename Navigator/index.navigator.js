import React from 'react';
import './index.navigator.css'

export default function Navigator(props) {
    return (
        <nav className="tk_navigator">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </nav>
    )
}