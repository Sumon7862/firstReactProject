import { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleLinkClick = (path) => {
        setActiveLink(path);
    }
    return (
        <>
            <nav className='bg-green-800 text-white py-3 md:py-4 sticky top-0'>
                <div className='container mx-auto flex justify-between items-center'>
                    <h3 className='text-xl font-medium'>Bikri Plus</h3>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
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
                                to={'product'}
                                onClick={() => handleLinkClick('product')}
                                className = {`${activeLink === 'product' ? 'text-yellow-200 font-medium' : 'hover:text-yellow-200'}`}
                            >
                                Product 
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'blog'}
                                onClick={() => handleLinkClick('blog')}
                                className = {`${activeLink === 'blog' ? 'text-yellow-200 font-medium' : 'hover:text-yellow-200'}`}
                            >
                                Blog 
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'contact'}
                                onClick={() => handleLinkClick('contact')}
                                className = {`${activeLink === 'contact' ? 'text-yellow-200 font-medium' : 'hover:text-yellow-200'}`}
                            >
                                Contact 
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'about'}
                                onClick={() => handleLinkClick('about')}
                                className = {`${activeLink === 'about' ? 'text-yellow-200 font-medium' : 'hover:text-yellow-200'}`}
                            >
                                About 
                            </Link>
                        </li>
                    </ul>

                    <button className='hidden md:block bg-white text-black px-4 rounded cursor-pointer hover:bg-black hover:text-white'> Login </button>

                    {/* Mobile Menu Collapsed */}
                    <div className={`md:hidden w-full absolute bg-green-600 top-full left-0 ${isOpen ? 'block' : 'hidden'}`}>
                        <ul className='flex flex-col items-center py-3 space-y-2'>
                            <li> <Link to={'/'} className='hover:text-green-900'> Home </Link>  </li>
                            <li> <Link to={'product'} className='hover:text-green-900'> Product </Link>  </li>
                            <li> <Link to={'blog'} className='hover:text-green-900'> Blog </Link>  </li>
                            <li> <Link to={'contact'} className='hover:text-green-900'> Contact </Link>  </li>
                            <li> <Link to={'about'} className='hover:text-green-900'> About </Link>  </li>
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
