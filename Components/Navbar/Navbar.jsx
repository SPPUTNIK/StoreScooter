import './Navbar.css'
import '../Header/Header.css'

function Navbar(){
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
            </div>
        </nav>
    )
}

export default Navbar