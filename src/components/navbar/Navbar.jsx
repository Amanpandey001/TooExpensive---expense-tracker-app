import React from 'react'
import '../navbar/Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="img border w-12 h-12 rounded-full flex justify-center items-center ml-[100px]">
                <img className='rounded-full w-11 h-11 selection:bg-transparent' src="https://static.vecteezy.com/system/resources/previews/009/391/394/non_2x/pack-of-dollars-money-clipart-design-illustration-free-png.png" alt="" />
            </div>
            <h2 className='md:text-3xl md:underline md:font-bold md:text-center hidden md:block'>TooExpensive</h2>
            <ul>
                <li className=' px-4 py-1 rounded-md bg-gray-600 hover:bg-gray-500 active:bg-gray-700 transition-all duration-200 selection:bg-transparent shadow-lg shadow-black active:shadow-md font-bold'>Tags</li>
                <li><input type="text" className='rounded-md px-4 py-1 text-white shadow-lg shadow-black focus:shadow-md focus:outline-blue-500' placeholder='Search' name="" id="" /></li>
            </ul>
        </nav>
    )
}

export default Navbar
