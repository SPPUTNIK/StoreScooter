import './Footer.css'

import {FaInstagram, FaFacebookF, FaTwitter, FaPinterestP, FaYoutube} from 'react-icons/fa';

function Footer(){
    return(
        <footer className="grid-footer ht-37">
            <div className="product__footer">
                <h4>Products</h4>
                <ul>
                    <li>
                        <a className='gray' href=''>Rolley</a>
                    </li>
                    <li>
                        <a className='gray'href=''>Connex</a>
                    </li>
                    <li>
                        <a className='gray'href=''>Business</a>
                    </li>
                    <li>
                        <a className='gray'href=''>Stories</a>
                    </li>
                </ul>
                
            </div>
            
            <div className="stores__footer">
                <h4>Scooterson Stores</h4>
                <ul>
                    <li>
                        <a className='gray'href=''>Los Angeles</a>
                    </li>
                </ul>
                
            </div>

            <div className="business__footer">
                <h4>Scooterson Business</h4>
                <ul>
                    <li>
                        <a className='gray'href=''>For Office Buildings</a>
                    </li>
                    <li>
                        <a className='gray'href=''>For Resorts & Hotels</a>
                    </li>
                    <li>
                        <a className='gray'href=''>Rentals solutions</a>
                    </li>
                    <li>
                        <a className='gray'href=''>Golf course solutions</a>
                    </li>
                    <li>
                        <a className='gray'href=''>For Residential Developments</a>
                    </li>
                </ul>
                
            </div>

            <div className="about__footer">
                <h4>About Scooterson</h4>
                <ul>
                    <li>
                        <a className='gray'href=''>News</a>
                    </li>
                    <li>
                        <a className='gray'href=''>Press</a>
                    </li>
                    <li>
                        <a className='gray'href=''>Leadership</a>
                    </li>
                    <li>
                        <a className='gray'href=''>Career</a>
                    </li>
                    <li>
                        <a className='gray'href=''>Investors</a>
                    </li>
                    <li>
                        <a className='gray'href=''>Support</a>
                    </li>
                    <li>
                        <a className='gray'href=''>Creators</a>
                    </li>
                </ul>
                
            </div>

            <div className="app__footer">
                <h4>App</h4>
                <ul>
                    <li>
                        <a className='gray'href=''>iOS</a>
                    </li>
                    <li>
                        <a className='gray'href=''>Android</a>
                    </li>
                </ul>
                
            </div>

            <div className="partnership__footer">
                <h4>Dealer Partnership</h4>
                <ul>
                    <li>
                        <a className='gray'href=''>Become a Dealer</a>
                    </li>
                </ul>
                
            </div>

            <div className="follow">
                <h4>Follow our Ride!</h4>
                <p className='gray'>Exclusive offers, exciting news and more insights of Scooterson in its natural habitat.<br/>
                #RideScooterson
                </p>
                <div className="icons-social">
                    <a className='gray' href=''><FaInstagram/></a>
                    <a className='gray' href=''><FaFacebookF/></a>
                    <a className='gray' href=''><FaTwitter/></a>
                    <a className='gray' href=''><FaPinterestP/></a>
                    <a className='gray' href=''><FaYoutube/></a>
                </div>
                <p className='gray'>Scooterson products are proudly designed in California and manufactured in Singapore with highest quality standards.</p>
            </div>

            <div className="copyright">
                <p className='gray'>Copyright © 2023. All rights reserved.</p>
                <ul className='items-footer__copyright'>
                    <li className='item-footer__copyright'>
                        <a className='gray'href=''>Privacy Policy</a>
                    </li>
                    <li className='item-footer__copyright brdr-side'>
                        <a className='gray'href=''>Term of Use</a>
                    </li>
                    <li className='item-footer__copyright'>
                        <a className='gray'href=''>Refund Policy</a>
                    </li>
                    <li className='item-footer__copyright bg-no-padd bg-blue'>
                        <a className='gray'className='white' href=''>DMCA</a>
                    </li>
                    <li className='item-footer__copyright bg-no-padd bg-gray__footer'>
                        <a className='gray'className='white' href=''>PROTECTED</a>
                    </li>
                </ul>
            </div>
            
        </footer>
    )
}

export default Footer;