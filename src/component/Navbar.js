import React, { useState } from "react";
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link } from "react-scroll";

const  NavBar=()=>{
    const [nav,setNav]=useState(false);

    const links=[
        {
            id:1,
            link:"home",
        },
        {
            id:2,
            link:"calender",
        },
        {
            id:3,
            link:"map",
        },
        {
            id:4,
            link:"line chart",
        },{
            id:5,
            link:"tab layout",
        },
        {
            id:6,
            link:"table",
        },
        

    ]
    return <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed z-50">
                <div>
                    <h1 className="text-5xl font-signature ml-2">Sourabh</h1>
                </div>
            
                <ul className="hidden md:flex">
                    {
                        links.map(({link,id})=>{
                            return <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                               <Link to={link} smooth duration={500}> {link}</Link>
                            </li>

                        })
                    }
                </ul>

                <div onClick={()=>setNav(!nav)} className="cursor-pointer pr-4 text-gray-500 z-10 md:hidden">
                    {
                        nav ? <FaTimes size={30}/>: <FaBars size={30}/>
                    }
                </div>
                {nav &&
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                {
                        links.map(({link,id})=>{
                            return <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                                <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>
                                    {link}
                                </Link>
                                
                            </li>

                        })
                    }
                </ul>
                }
        
    </div>
}

export default NavBar;