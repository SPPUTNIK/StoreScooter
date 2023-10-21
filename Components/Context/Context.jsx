import {FiChevronRight} from 'react-icons/fi';
import './Context.css';

import vid_scooter from '../../assests/rolley-scooterson-fundamentally-unique-white.mp4';

function Context(){
    return(
        <section className="containers">
            <div className="buy-scooter">
                <div className="content__scooter">
                    <h1>Ride Beyond the Ordinary.</h1>
                    <p>Introducing Rolley - the e-scooter that's unlike any other.<br/>
                    Redesigned and engineered from scratch to help you ride more, easier and smarter than ever.</p>
                    <div className="buy">
                        <a href="">Buy Now</a>
                        <FiChevronRight className="icon-right"/>
                    </div>
                </div>
                <div className="video__scooter">
                    <video  autoplay="autoplay" muted>
                        <source src={vid_scooter} type="video/mp4"/>
                    </video>
                </div>
            </div>

        </section>
    )
}

export default Context;