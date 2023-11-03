import './Navbar.css'
import '../Header/Header.css'

import {RiMenuLine} from 'react-icons/ri';
import { useState } from 'react';

// function menuClick(){
//     return(
//         <div className="mobile-list-header">
//             <ul className='items-header'>
//                 <li className='item-header'>
//                     <a href=''>Rolley</a>
//                 </li>

//                 <li className='item-header'>
//                     <a href=''>Connex</a>
//                 </li>

//                 <li className='item-header'>
//                     <a href=''>Dealer</a>
//                 </li>

//                 <li className='item-header'>
//                     <a href=''>Stories</a>
//                 </li>
//                 <hr width="100%"></hr>
//                 <li className="item-header">
//                     <a href="">Overview</a>
//                 </li>
//                 <li className="item-header">
//                     <a href="">Specs</a>
//                 </li>
//                 <div className="item-buy">
//                     <button className="button-buy">
//                         <a href="">Buy Now</a>
//                     </button>
//                 </div>

//             </ul>
//         </div>
//     )
// }

function Navbar(){

    const [isClickedMenu, setIsClickedMenu] = useState(false);

    const clickMenu = () => {
        setIsClickedMenu(!isClickedMenu);
    }

    return(
        <nav className="navbar">
            <div className="container-navbar">
                <div className="logo-nav">
                    <a href="">rolley</a>
                </div>
                <div className="list-items__nav">
                    <div className="list-nav">
                        <ul className="items-nav">
                            <li className="item-nav">
                                <a href="">Overview</a>
                            </li>
                            <li className="item-nav">
                                <a href="">Specs</a>
                            </li>
                        </ul>
                    </div>
                    <div className="item-buy">
                        <button className="button-buy">
                            <a href="">Buy Now</a>
                        </button>
                    </div>
                </div>
                <div className="icon-menu" onClick={clickMenu}>
                    <RiMenuLine/>
                    {isClickedMenu ? 
                        <div className="mobile-list-header">
                            <ul className='items-header'>
                                <li className='item-header'>
                                    <a href=''>Rolley</a>
                                </li>
                
                                <li className='item-header'>
                                    <a href=''>Connex</a>
                                </li>
                
                                <li className='item-header'>
                                    <a href=''>Dealer</a>
                                </li>
                
                                <li className='item-header'>
                                    <a href=''>Stories</a>
                                </li>
                                <hr width="100%"></hr>
                                <li className="item-header">
                                    <a href="">Overview</a>
                                </li>
                                <li className="item-header">
                                    <a href="">Specs</a>
                                </li>
                                <div className="item-buy">
                                    <button className="button-buy">
                                        <a href="">Buy Now</a>
                                    </button>
                                </div>
                
                            </ul>
                        </div>
                        : null}
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar