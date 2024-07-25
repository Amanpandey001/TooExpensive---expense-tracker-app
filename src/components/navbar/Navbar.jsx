import React from 'react'
import { useEffect, useState, useRef } from 'react'
import '../navbar/Navbar.css'

const Navbar = () => {
    const [menuExtend, setMenuExtend] = useState(false);
    const menue = useRef(null);

    useEffect(() => {
        if (menuExtend) {
            menue.current.style.display = 'block';
        } else {
            menue.current.style.display = 'none';
        }
    }, [menuExtend]);

    const handleMenuToggle = () => {
        setMenuExtend(prevState => !prevState);
    };
    return (

        <nav>
            <div className="img border w-12 h-12 rounded-full flex justify-center items-center md:ml-[100px]">
                <img className='rounded-full w-11 h-11 selection:bg-transparent' src="https://static.vecteezy.com/system/resources/previews/009/391/394/non_2x/pack-of-dollars-money-clipart-design-illustration-free-png.png" alt="" />
            </div>
            <h2 className='md:text-3xl md:underline md:font-bold md:text-center hidden md:block selection:bg-transparent bg-transparent cursor-default'>TooExpensive</h2>
            <ul>
                <li className=' px-4 py-1 rounded-md bg-gray-600 hover:bg-gray-500 active:bg-gray-700 transition-all duration-200 selection:bg-transparent shadow-lg shadow-black active:shadow-md font-bold'>Tags</li>
                <li><input type="text" className='rounded-md px-4 py-1 text-white shadow-lg shadow-black focus:shadow-md focus:outline-blue-500' placeholder='Search' name="" id="" /></li>
            </ul>
            <div className='md:hidden'>
                <img
                    onClick={handleMenuToggle}
                    src="https://static-00.iconduck.com/assets.00/line-horizontal-3-icon-2048x1472-w7kzp4f5.png"
                    className='menu-ic md:hidden w-10 h-10 bg-gray-600 p-1 rounded-xl'
                    alt=""
                />
                <div ref={menue} className="menu-extend md:hidden border w-full h-full">
                    <div className='flex justify-end'>

                        <img
                            onClick={handleMenuToggle}
                            src="https://png.pngtree.com/png-vector/20230527/ourmid/pngtree-red-cross-paint-clipart-transparent-background-vector-png-image_7110618.png"
                            className='menu-ic md:hidden w-10 h-10 p-1 mt-[14px] mr-[11px] bg-slate-600 rounded-xl'
                            alt=""
                        />
                    </div>
                    <ul>
                        <li className=' px-4 py-1 rounded-md bg-gray-600 hover:bg-gray-500 active:bg-gray-700 transition-all duration-200 selection:bg-transparent shadow-lg shadow-black active:shadow-md font-bold'>Tags</li>
                        <li><input type="text" className='rounded-md px-4 py-1 text-white shadow-lg shadow-black focus:shadow-md focus:outline-blue-500' placeholder='Search' name="" id="" /></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
