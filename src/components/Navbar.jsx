import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <nav className='bg-green-500 text-white py-4 md:py-6'>
                <div className='container mx-auto flex justify-between items-center'>
                    <h3>Bikri Plus</h3>

                    {/* Mobile Menu Button */}
                    <div>
                        <button onClick={toggleMenu}>
                            {
                                isOpen ? <IoClose /> : <FaBars />
                            }
                            
                        </button>
                    </div>

                    <ul className='flex space-x-4 md:space-x-6'>
                        <li>Home</li>
                        <li>Products</li>
                        <li>Blogs</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>

                    <button>Login</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
