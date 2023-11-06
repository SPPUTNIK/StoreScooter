import {FiChevronRight} from 'react-icons/fi';
import {BsPlayCircle} from 'react-icons/bs';
import {IoMdSpeedometer} from 'react-icons/io';
import {GiSpeedometer} from 'react-icons/gi';

import './Context.css';

import vid_scooter_red from '../../../assests/rolley-scooterson-fundamentally-unique-white.mp4';
import vid_scooter_blue from '../../../assests/rolley-scooterson-an-extension-of-you-white.mp4';
import vid_scooter_yellow from '../../../assests/Scooterson_Yellow.mp4';
import vid_scooter_black from '../../../assests/rolley-carbon-2.mp4';


import container_two_video from '../../../assests/scooterson-video-loop.mp4';
import vid_scooter_back from '../../../assests/rolley-drive-train.mp4';
import vid_scooter_app from '../../../assests/index-mobile-app-prototype.mp4';
import vid_scooter_setting from '../../../assests/scooterson-app.mp4';

//img
import img_love from '../../../assests/sharing-is-caring.jpeg';
import stone_wheel from '../../../assests/scooterson-first-stone-wheel.png';
import scotter_colors from '../../../assests/rolley-colors-compressed.jpeg';
import scotter_anti from '../../../assests/anti-shenneningans-tech.jpeg';
import smart_bms from '../../../assests/smart-bms-rolley-finder.png';


//small img
import Battery from '../../../assests/small/anti-shenneningans-tech.png';
import Balanced from '../../../assests/small/icon-battery-display-1.png';
import Temperature from '../../../assests/small/icon-battery-display-2.png';
import Overdischarge from '../../../assests/small/icon-battery-display-3.png';
import Circuit from '../../../assests/small/icon-battery-display-4.png';
import Overcurrent from '../../../assests/small/icon-battery-display-5.png';
import Overvoltage from '../../../assests/small/icon-battery-display-6.png';
import Overcharge from '../../../assests/small/icon-battery-display-7.png';



function Context(){
    return(
        <section className="containers">
            <div className="buy-scooter">
                <div className="content__scooter">
                    <h1 className='font-sty style-white'>Ride Beyond the Ordinary.</h1>
                    <p>Introducing Rolley - the e-scooter that's unlike any other.<br/>
                    Redesigned and engineered from scratch to help you ride more, easier and smarter than ever.</p>
                    <div className="buy">
                        <a className="underline orange" href="">Buy Now</a>
                        <FiChevronRight className="icon-right orange"/>
                    </div>
                </div>
                <div className="video__scooter">
                    <video  autoPlay="autoplay" muted>
                        <source src={vid_scooter_red} type="video/mp4"/>
                    </video>
                </div>
            </div>

            <div className="scooter-presentation">
                <video autoPlay="autoplay" loop muted>
                    <source src={container_two_video} type="video/mp4"></source>
                </video>
                <h2>rolley</h2>
                <h1 className='font-sty style-white'>Simply Brilliant.</h1>
                <a className="white underline" href='../../assests/the_new_rolley_movie.mp4'>
                    <div className="watch-presentation">
                        <h2>See Scooterson in Action</h2>
                        <BsPlayCircle className='start-watching'/>
                    </div>
                </a>
            </div>

            <div className="types_scooter">
                <div className="type_scooter yellow_scooter">
                    <div className="img_scooter">
                        <img width="100%" src='../../assests/scooter-yellow.png'></img>
                    </div>
                    <h2>rolley</h2>
                    <div className="features_scooter">
                        <IoMdSpeedometer className='icon__features'/>
                        <p>Media Range: Up to 28 miles (45 Km)</p>
                    </div>
                    <div className="features_scooter">
                        <GiSpeedometer className='icon__features'/>
                        <p>Top Speed: 28 MPH (45 KPH)<br/>
                            North America: 15-20 MPH*<br/>
                            Europe: 20-25 KPH*
                        </p>
                    </div>
                    <div className="buy features_scooter">
                        <a className="orange underline" href="">Specs Sheet</a>
                        <FiChevronRight className="icon-right orange"/>
                    </div>

                </div>
                <div className="type_scooter red_scooter">
                    <div className="img_scooter">
                        <img width="100%" src='../../assests/scooter-red.png'></img>
                    </div>
                    <h2>rolley +</h2>
                    <div className="features_scooter">
                        <IoMdSpeedometer className='icon__features'/>
                        <p>Media Range: Up to 28 miles (45 Km)</p>
                    </div>
                    <div className="features_scooter">
                        <GiSpeedometer className='icon__features'/>
                        <p>Top Speed: 28 MPH (45 KPH)<br/>
                            North America: 15-20 MPH*<br/>
                            Europe: 20-25 KPH*
                        </p>
                    </div>
                    <div className="buy features_scooter">
                        <a className="orange underline" href="">Specs Sheet</a>
                        <FiChevronRight className="icon-right orange"/>
                    </div>
                </div>
            </div>

            <div className="buy-scooter">
                <div className="video__scooter">
                    <video  autoPlay="autoplay" muted>
                        <source src={vid_scooter_blue} type="video/mp4"/>
                    </video>
                </div>
                <div className="content__scooter">
                    <h1 className='font-sty style-darkly margin-zero'>Perfectly Balanced.</h1>
                    <h1 className='three-rem margin-zero blue'>Riding Made Easy.</h1>
                    <p>Master riding instantly. Rolley's passive Auto-Balance design makes it incredibly easy to ride, even for those who struggle with<br/>
                    bicycles or kick-scooters. Effortlessly glide through the streets at the speed of thought, experiencing the joy of true freedom and convenience.</p>
                    <div className="buy">
                        <a className="blue underline" href="">Start Your Scooterson Journey</a>
                        <FiChevronRight className="icon-right blue"/>
                    </div>
                </div>
            </div>

            <div className="buy-scooter bg-gray">
                <div className="content__scooter">
                    <h1 className='font-sty style-darkly margin-zero'>The Perfect Companion or Your Ride</h1>
                    <p>Transform your smartphone into the ultimate e-scooter hub with our app!<br/>
                    Access the coolest features and control your ride like never before. Enjoy a seamless, hassle-free experience.</p>
                    <div className="buy">
                        <a className="orange underline" href="">Get Yours Now</a>
                        <FiChevronRight className="icon-right orange"/>
                    </div>
                </div>
                <div className="video__scooter">
                    <video  autoPlay="autoplay" muted loop>
                        <source src={vid_scooter_app} type="video/mp4"/>
                    </video>
                </div>
            </div>

            <div className="buy-scooter padding-zero">
                <div className="video__scooter">
                    <video  autoPlay="autoplay" muted>
                        <source src={vid_scooter_setting} type="video/mp4"/>
                    </video>
                </div>
                <div className="content__scooter bg-gradians ht">
                    <h1 className='font-sty margin-zero white'>Scooterson Display.</h1>
                    <h1 className='font-sty margin-zero blue'>Ride in Style,<br/>
                        Day and Night.</h1>
                    <p>Scooterson's innovative display is engineered to provide optimal visibility. Whether under the sun or<br/>
                    beneath the stars, our light and dark modes cover them all.</p>
                    <div className="buy">
                        <a className="blue underline" href="">Level Up Your Ride</a>
                        <FiChevronRight className="icon-right blue"/>
                    </div>
                </div>
            </div>

            <div className="buy-scooter">
                <div className="content__scooter">
                    <h1 className='font-sty style-darkly'>A piece of Art.</h1>
                    <p>Scoot in style with our Award-Winning design. Experience the beauty of urban transportation with Rolley - a true work of art!<br/>
                    Say goodbye to boring, clunky scooters and hello to this sleek and modern ride. Get ready to turn heads and make a statement.</p>
                    <div className="buy padding-three-top-btm">
                        <a className="underline orange" href="">Join the Celebration -<br/>
                        Watch Us Win an Award!
                        <BsPlayCircle className="icon-right orange padding-three-right-left"/>
                        </a>
                    </div>
                    <div className="buy brdr-top padding-three-top-btm">
                        <a className="underline orange" href="">Grab The Coolest Ride in Town Now</a>
                        <FiChevronRight className="icon-right orange"/>
                    </div>
                </div>
                <div className="video__scooter">
                    <video  autoPlay="autoplay" muted>
                        <source src={vid_scooter_yellow} type="video/mp4"/>
                    </video>
                </div>
            </div>

            <div className="buy-scooter">
                <div className="video__scooter">
                    <img width="100%" src={img_love}></img>
                </div>
                <div className="content__scooter">
                    <h1 className='font-sty style-white margin-zero'>Share the Ride.</h1>
                    <h1 className='font-sty red margin-zero'>Share the Love.</h1>
                    <p>There is no better way to show that you care other than sharing the joy of riding your Rolley+ with your friends and family.<br/>
                    Sharing has never been easier with the Scooterson App.</p>
                    <div className="buy">
                        <a className="underline red" href="">Grab Yours Today</a>
                        <FiChevronRight className="icon-right red"/>
                    </div>
                </div>
            </div>

            <div className="buy-scooter">
                <div className="content__scooter">
                    <h1 className='font-sty style-darkly margin-zero'>Extraordinary materials.</h1>
                    <h1 className='font-sty style-darkly margin-zero'>Exceptional Ride.</h1>
                    <p>
                        Introducing our top-notch e-scooter, featuring the most exquisite materials ever used on a scooter.
                        Carbon fiber reinforced polymer for strength and durability,
                        precision-machined aerospace-grade alloy parts, and a 3D-bent aluminium alloy chassis for lightweight strength.
                    </p>
                    <div className="buy">
                        <a className="underline orange" href="">Experience it today</a>
                        <FiChevronRight className="icon-right orange"/>
                    </div>
                </div>
                <div className="video__scooter">
                    <video  autoPlay="autoplay" muted>
                        <source src={vid_scooter_black} type="video/mp4"/>
                    </video>
                </div>
            </div>

            <div className="buy-scooter bg-gray">
                <div className="video__scooter text-center">
                    <img id="stone-img" width="100%" src={stone_wheel}></img>
                </div>
                <div className="content__scooter">
                    <h1 className='font-sty style-darkly margin-zero'>Specs-less.</h1>
                    <p>
                        The Rolley design has been relentlessly refined to perfection,
                        offering an unrivaled user experience that surpasses all specifications in its class. Just like the 7000-year-old stone wheel,
                        Rolley speaks for itself, no words required.
                    </p>
                    <div className="buy">
                        <a className="underline orange" href="">I’m a geek, I want specs</a>
                        <FiChevronRight className="icon-right orange"/>
                    </div>
                </div>
            </div>

            <div className="buy-scooter">
                <div className="content__scooter">
                    <h1 className='font-sty orange margin-zero'>Eye-Catching Colors</h1>
                    <h1 className='font-sty style-darkly margin-zero'>Not More. Not Less.</h1>
                    <p>Say no to being invisible and match your scooter color with your fearless personality.</p>
                    <div className="buy">
                        <a className="underline orange" href="">Choose Your Color Now</a>
                        <FiChevronRight className="icon-right orange"/>
                    </div>
                </div>
                <div className="video__scooter text-end">
                    <img width="100%" src={scotter_colors}></img>
                </div>
            </div>

            <div className="buy-scooter padding-zero bg-gradians">
                <div className="video__scooter">
                    <video  autoPlay="autoplay" muted>
                        <source src={vid_scooter_back} type="video/mp4"/>
                    </video>
                </div>
                <div className="content__scooter ht_25">
                    <h1 className='font-sty margin-zero orange'>Scooterson Motors</h1>
                    <h1 className='font-sty margin-zero white'>Engineered For Adventure.</h1>
                    <p>Conquer the steepest roads. Ride uphill with the powerful Scooterson motors, on gradients up to 25%. The best in its class.</p>
                    <div className="buy">
                        <a className="orange underline" href="">Upgrade Your Scoot </a>
                        <FiChevronRight className="icon-right orange"/>
                    </div>
                </div>
            </div>

            <div className="buy-scooter">
                <div className="content__scooter">
                    <h1 className='font-sty orange margin-zero'>Peace of Mind.</h1>
                    <h1 className='font-sty style-darkly margin-zero'>Anti-Shenanigans Tech.</h1>
                    <p>Easily track the location of your Rolley+ wherever you go with the Scooterson
                        App's 'Find My Scooter' feature. Plus, our anti-tampering alarm system
                        sends real-time notifications straight to your phone whenever anyone tries to pull any shenanigans with your Rolley+.</p>
                    <div className="buy">
                        <a className="underline orange" href="">Buy Now</a>
                        <FiChevronRight className="icon-right orange"/>
                    </div>
                </div>
                <div className="video__scooter text-center">
                    <img width="100%" src={scotter_anti}></img>
                </div>
            </div>

            <div className="all">
                <div className="grid blue-dark">
                    <div className="video__scooter text-center">
                        <img width="100%" src={smart_bms}></img>
                    </div>
                    <div className="content__scooter">
                        <h1 className='font-sty style-white margin-zero'>Long-Range Battery</h1>
                        <h1 className='font-sty style-white margin-zero'>with <span className='red'>Smart BMS</span></h1>
                        <p className='white'>Experience uninterrupted freedom throughout the day without getting the low-battery anxiety
                        syndrome with Rolley’s swappable battery system and an intelligent Smart Battery Management System.</p>
                        <p className='white'>Our battery cells have UL1642, UL2271, UN38.3, and IEC62133 safety certifications for your peace of mind.</p>
                        <div className="buy">
                            <a className="underline red" href="">Experience Limitless Mobility Now</a>
                            <FiChevronRight className="icon-right red"/>
                        </div>
                    </div>
                </div>

                <div className="content_hr">
                    <hr className='line'/>
                    <p className='gray text-center'>Rolley's smart batteries are built with redundant circuits<br/>
                    for total operational safety in mind:</p>
                    <hr className='line'/>
                </div>


                <div className="flex margin-four-side">
                    <div className="features-batairie">
                        <div className="feature">
                            <img width="50%" src={Battery}></img>
                            <span className='gray fnt-size'>Battery Health Monitor</span>
                        </div>
                        <div className="feature">
                            <img width="50%" src={Balanced}></img>
                            <span className='gray fnt-size'>Balanced Charging</span>
                        </div>
                        <div className="feature">
                            <img width="50%" src={Temperature}></img>
                            <span className='gray fnt-size'>Temperature Protection</span>
                        </div>
                        <div className="feature">
                            <img width="50%" src={Overdischarge}></img>
                            <span className='gray fnt-size'>Overdischarge Protection</span>
                        </div>
                    </div>


                    <div className="features-batairie">
                        <div className="feature">
                            <img width="50%" src={Circuit}></img>
                            <span className='gray fnt-size'>Short-Circuit Protection</span>
                        </div>
                        <div className="feature">
                            <img width="50%" src={Overcurrent}></img>
                            <span className='gray fnt-size'>Overcurrent Protection</span>
                        </div>
                        <div className="feature">
                            <img width="50%" src={Overvoltage}></img>
                            <span className='gray fnt-size'>Overvoltage Protection</span>
                        </div>
                        <div className="feature">
                            <img width="50%" src={Overcharge}></img>
                            <span className='gray fnt-size'>Overcharge Protection</span>
                        </div>
                    </div>
                </div>
            </div>
            

        </section>
    )
}

export default Context;