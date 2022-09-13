import React from "react";
import './Header.css'

function Header() {
    return(
        <>
            <h1>NYT News Reader</h1>
            <form>
                <select>
                    <option defaultValue='home'>Home</option>
                    <option value='arts'>Arts</option>
                    <option value='automobiles'>Automobiles</option>
                    <option value='books'>Books</option>
                    <option value='business'>Business</option>
                    <option value='fashion'>Fashion</option>
                    <option value='food'>Food</option>
                    <option value='health'>Health</option>
                    <option value='insider'>Insider</option>
                    <option value='magazine'>Magazine</option>
                    <option value='movies'>Movies</option>
                    <option value='nyregion'>NY Region</option>
                    <option value='obituaries'>Obituaries</option>
                    <option value='opinion'>Opinion</option>
                    <option value='politics'>Politics</option>
                    <option value='realestate'>Real Estate</option>
                    <option value='science'>Science</option>
                    <option value='sports'>Sporrts</option>
                    <option value='sundayreview'>Sunday Review</option>
                    <option value='technology'>Technology</option>
                    <option value='theater'>Theatre</option>
                    <option value='t-magazine'>T-Magazine</option>
                    <option value='travel'>Travel</option>
                    <option value='upshot'>Upshot</option>
                    <option value='us'>US</option>
                    <option value='world'>Wolrd</option>
                </select>
            </form>
        </>
    )
}

export default Header;