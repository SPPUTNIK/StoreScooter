import './Header.css';

function Header(){
    return(
        <header className='main-header'>
            <div className="container-header">
                <div className="logo-header">
                    <a href=''>SCOOTERSON</a>
                </div>
                <div className="list-header">
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

                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;