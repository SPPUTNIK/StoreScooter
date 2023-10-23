import {FiChevronRight} from 'react-icons/fi';
import {BsPlayCircle} from 'react-icons/bs';
import {IoMdSpeedometer} from 'react-icons/io';
import {GiSpeedometer} from 'react-icons/gi';
import './Context.css';

import vid_scooter_red from '../../../assests/rolley-scooterson-fundamentally-unique-white.mp4';
import vid_scooter_blue from '../../../assests/rolley-scooterson-an-extension-of-you-white.mp4';
import container_two_video from '../../../assests/scooterson-video-loop.mp4';
import vid_scooter_app from '../../../assests/index-mobile-app-prototype.mp4';
import vid_scooter_setting from '../../../assests/scooterson-app.mp4';


// IoMdSpeedometer
// GiSpeedometer
function Context(){
    return(
        <section className="containers">
            <div className="buy-scooter">
                <div className="content__scooter">
                    <h1 className='font-sty style-white'>Ride Beyond the Ordinary.</h1>
                    <p>Introducing Rolley - the e-scooter that's unlike any other.<br/>
                    Redesigned and engineered from scratch to help you ride more, easier and smarter than ever.</p>
                    <div className="buy">
                        <a className="underline red" href="">Buy Now</a>
                        <FiChevronRight className="icon-right red"/>
                    </div>
                </div>
                <div className="video__scooter">
                    <video  autoplay="autoplay" muted>
                        <source src={vid_scooter_red} type="video/mp4"/>
                    </video>
                </div>
            </div>

            <div className="scooter-presentation">
                <video autoplay="autoplay" loop muted>
                    <source src={container_two_video} type="video/mp4"></source>
                </video>
                <h2>rolley</h2>
                <h1 className='font-sty'>Simply Brilliant.</h1>
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
                        <a className="red underline" href="">Specs Sheet</a>
                        <FiChevronRight className="icon-right red"/>
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
                        <a className="red underline" href="">Specs Sheet</a>
                        <FiChevronRight className="icon-right red"/>
                    </div>
                </div>
            </div>

            <div className="buy-scooter">
                <div className="video__scooter">
                    <video  autoplay="autoplay" muted>
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
                        <a className="red underline" href="">Get Yours Now</a>
                        <FiChevronRight className="icon-right red"/>
                    </div>
                </div>
                <div className="video__scooter">
                    <video  autoplay="autoplay" muted loop>
                        <source src={vid_scooter_app} type="video/mp4"/>
                    </video>
                </div>
            </div>

            <div className="buy-scooter padding-zero">
                <div className="video__scooter">
                    <video  autoplay="autoplay" muted>
                        <source src={vid_scooter_setting} type="video/mp4"/>
                    </video>
                </div>
                <div className="content__scooter bg-gradians">
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

        </section>
    )
}

export default Context;