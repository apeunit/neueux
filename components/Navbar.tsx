import React from 'react'


const Navbar = () => (
<nav className="">
    <div className="w-11/12 mx-auto border-b-2 border-gray-200">
        <div className="flex my-8 ">
            <ul className="w-2/6">
                <li><a href="">Neueux logo</a></li>
            </ul>

            <ul className="w-2/6 text-center">
                <li className="inline-block mx-7"><a href="">Screens</a></li>
                <li className="inline-block mx-7"><a href="">Articles</a></li>
                <li className="inline-block mx-7"><a href="">Glossary</a></li>
            </ul>

            <ul className="w-2/6 text-right text-accent-1 text-red">
                <li><a href=""><button>Contribute</button></a></li>
            </ul>
        </div>
        
    </div>
</nav>
);

export default Navbar;