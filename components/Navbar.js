import React from 'react'
import Image from 'next/image'


const Navbar = () => (
<nav className="">
    <div className="w-11/12 mx-auto border-b-2 border-gray-200">
        <div className="flex my-8 text-sm">
            <ul className="w-2/6">
                <li><a href=""><Image src="/public/img/logo.svg" width={10} height={10}/></a></li>
            </ul>

            <ul className="w-2/6 text-center ">
                <li className="inline-block mx-7 "><a href="">Screens</a></li>
                <li className="inline-block mx-7"><a href="">Articles</a></li>
                <li className="inline-block mx-7"><a href="">Glossary</a></li>
            </ul>

            <ul className="w-2/6 text-right">
                <li className=" font-bold text-red-600"><a href="">Contribute</a></li>
            </ul>
        </div>
        
    </div>
</nav>
);

export default Navbar;