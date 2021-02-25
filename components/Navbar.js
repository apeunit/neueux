import React from 'react'


const Navbar = () => (
<nav className="invisible xl:visible">
    <div className="w-11/12 mx-auto border-b-2 border-gray-200">
        <div className="flex my-6 text-sm">
            <ul className="w-2/6">
                <li><a href=""><img src="/img/logo1.png"/> </a></li>
            </ul>

            <ul className="w-2/6 text-center mt-2">
                <div className="navi-item inline-block">
                <li className=" mx-7 active"><a className="nav-item active" href="">Screens</a></li>
                </div>
                <div className="navi-item  inline-block text-gray-500">
                <li className=" mx-7 font-normal"><a href="">Articles</a></li>
                </div>
                <div className="navi-item inline-block text-gray-500">
                <li className=" mx-7 font-normal"><a href="">Glossary</a></li>
                </div>
                
            </ul>

            <ul className="w-2/6 text-right mt-2">
                <li className=" font-bold text-red"><a href="">Contribute</a></li>
            </ul>
        </div>
        
    </div>
</nav>
);

export default Navbar;