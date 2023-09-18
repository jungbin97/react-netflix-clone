import React, { useEffect, useState } from 'react'
import "./Nav.css"

export default function Nav() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if (window.scrollY > 50){
                setShow(true);
            }else{
                setShow(false);
            }
        });
        return () =>{
            window.removeEventListener("scroll", () => {});
        }
    }, []);


    return (
        <nav className={`nav ${show && "nav__black"}`}>
            <img
                alt='Netflix logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
                className='nav__logo'
                onClick={() => window.location.reload()}
            />
            <img
                alt="User logged"
                src='https://occ-0-4342-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQCGZsPZkkge9gjpGTUiItx80-VPjlgTVtHXz2Y95VFPZ9WIfBIZ9ifMh6TYgM8QEgTYXohTNRdp89xz6U2sy34w4gAQczo.png?r=897'
                className='nav__avatar'
            />
        </nav>
    );
}
