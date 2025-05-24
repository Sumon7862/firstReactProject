import { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState();
    const location = useLocation();

    useEffect(() => {
        setActiveLink(location.pathname || '/')
    }, [location.pathname]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleLinkClick = (path) => {
        setActiveLink(path);
    }
    return (
        <>
            <nav className='bg-black/60 text-white py-3 md:py-4 fixed w-full top-0'>
                <div className='container mx-auto flex justify-between items-center'>
                    <h3 className='text-xl font-medium'>Bikri Plus</h3>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden ml-auto'>
                        <button onClick={toggleMenu}>
                            {
                                isOpen ? <IoClose /> : <FaBars />
                            }
                        </button>
                    </div>

                    <ul className='hidden md:flex space-x-4 md:space-x-6'>
                        <li>
                            <Link
                                to={'/'}
                                onClick={() => handleLinkClick('/')}
                                className = {`${activeLink === '/' ? 'text-yellow-200 font-medium' : 'hover:text-yellow-200'}`}
                            >
                                Home 
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/product'}
                                onClick={() => handleLinkClick('/product')}
                                className = {`${activeLink === '/product' ? 'text-yellow-200 font-medium' : 'hover:text-yellow-200'}`}
                            >
                                Product 
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/blog'}
                                onClick={() => handleLinkClick('/blog')}
                                className = {`${activeLink === '/blog' ? 'text-yellow-200 font-medium' : 'hover:text-yellow-200'}`}
                            >
                                Blog 
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/contact'}
                                onClick={() => handleLinkClick('/contact')}
                                className = {`${activeLink === '/contact' ? 'text-yellow-200 font-medium' : 'hover:text-yellow-200'}`}
                            >
                                Contact 
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/about'}
                                onClick={() => handleLinkClick('/about')}
                                className = {`${activeLink === '/about' ? 'text-yellow-200 font-medium' : 'hover:text-yellow-200'}`}
                            >
                                About 
                            </Link>
                        </li>
                    </ul>

                    <Link to='/login'>
                    <button className='hidden md:block bg-white text-black px-4 rounded cursor-pointer hover:bg-yellow-400 font-medium'> Login </button>
                    </Link>

                    {/* Mobile Menu Collapsed */}
                    <div className={`md:hidden w-full absolute bg-green-950 top-full left-0 ${isOpen ? 'block' : 'hidden'}`}>
                        <ul className='flex flex-col items-center py-3 space-y-2'>
                            <li> <Link to={'/'}> Home </Link>  </li>
                            <li> <Link to={'product'}> Product </Link>  </li>
                            <li> <Link to={'blog'}> Blog </Link>  </li>
                            <li> <Link to={'contact'}> Contact </Link>  </li>
                            <li> <Link to={'about'}> About </Link>  </li>
                            <li>
                                <button className='bg-white text-black px-4 rounded cursor-pointer hover:bg-black hover:text-white'> Login </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
