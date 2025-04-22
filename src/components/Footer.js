import React from 'react';
import {FaRegCopyright} from "react-icons/fa";

const Footer = ({ navbarColor = "#5864bd" }) => {
    return (
        <div>
            <div className={'fixed flex justify-center text-sm items-center text-center bottom-0 w-full shadow-lg shadow-black z-30 h-8 bg-white'}>
                <strong className={'flex'}><FaRegCopyright className={'mr-1 mt-1'} /> 2025 <span className={'ml-1'} style={{ color: navbarColor }}>MasterSoft</span></strong>. All Rights Reserved for: Omkar Kasale, Aaron Prasad Lingeswaran, Samriddhi S. Datir, Mrinal Gupta
            </div>
        </div>
    );
};

export default Footer;