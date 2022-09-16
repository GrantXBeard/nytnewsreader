import React from "react";
import './Header.css'
import { Link } from 'react-router-dom'

function Header({resetType}) {
    return(
        <>
            <Link to={'/'}>
                <h1 onClick={event => resetType()}>NYT News Reader</h1>
            </Link>
        </>
    )
}

export default Header;