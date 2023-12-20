import { useState, useEffect } from 'react';
import {Link} from 'react-scroll'
import {Logo} from '../../icons/logo'
function Navbar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive)
    }

    const closeMenu = () =>  {
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 500) {
                closeMenu
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [] )

    useEffect(() => {
        if(window.innerWidth <= 1200) {
            closeMenu
        }
    }, [])

    return (
        <nav className={`navbar ${navActive ? 'active' : ''}`}>
            <div className='navbar--logo'>
                <Logo/>
            </div>
            <a className={`nav__humbergur ${navActive ? 'acttive' : ''}`} onClick={toggleNav}>
                <span className='nav__hambergur__line'></span>
                <span className='nav__hambergur__line'></span>
                <span className='nav__hambergur__line'></span>
            </a>
            <div className={`navbar--items ${navActive ? 'active' : ''}`}>
                <ul>
                    <li>
                        <Link 
                            onClick={closeMenu} 
                            activeClass='navbar--active-content'
                            spy={true} 
                            smooth={true} 
                            offset={70} 
                            duration={500} 
                            to='heroSection' 
                            className='navbar--content'
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            onClick={closeMenu} 
                            activeClass='navbar--active-content'
                            spy={true} 
                            smooth={true} 
                            offset={70} 
                            duration={500} 
                            to='MyPortfolio' 
                            className='navbar--content'
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link 
                            onClick={closeMenu} 
                            activeClass='navbar--active-content'
                            spy={true} 
                            smooth={true} 
                            offset={70} 
                            duration={500} 
                            to='AboutMe' 
                            className='navbar--content'
                        >
                            AboutMe
                        </Link>
                    </li>
                    <li>
                        <Link 
                            onClick={closeMenu} 
                            activeClass='navbar--active-content'
                            spy={true} 
                            smooth={true} 
                            offset={70} 
                            duration={500} 
                            to='Testemoniols' 
                            className='navbar--content'
                        >
                            Testemoniols
                        </Link>
                    </li>
                </ul>
            </div>
            <Link
                onClick={closeMenu} 
                activeClass='navbar--active-content'
                spy={true} 
                smooth={true} 
                offset={70} 
                duration={500} 
                to='Contacts' 
                className='btn btn-primary'
            >Contact</Link>
        </nav>
    )
}

export default Navbar

