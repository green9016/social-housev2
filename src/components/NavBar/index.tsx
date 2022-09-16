import {FC, useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './style.scss'

interface IJoinNow{
    setOpenModal: any;
}

const NavBar: FC<IJoinNow> = ({setOpenModal}) => {
    const [active, setActive] = useState("active");    
    const onClickNav = () =>{
        if(active === "active")
        {
            setActive("inactive");
        }
        else{
            setActive("active");
        }
    }
    

    return (
        <header className={"main-nav"}>
            <div className='container header-div'>
                <nav className="links d-md-flex">
                    <ul className={`ps-0 ${active}`}>
                        <li className='d-none d-md-flex'><Link to="/#home-page" className="link">SOCIAL HOUSE</Link></li>
                        <li><Link to="/#home-page" className="link">About</Link></li>
                        <li><Link to="/access-keys/#access-keys" className="link">Access Keys</Link></li>
                        <li><Link to="/our-team/#our-team" className="link">Our Team</Link></li>

                        {/*<li className='d-flex d-md-none'><Link onClick={onClickBuyNow} className="link" to='#'>BUY NOW</Link></li>*/}
                        <li className='d-flex d-md-none'><Link onClick={()=>{setOpenModal(true)}} className="link" to='#'>JOIN NOW</Link></li>
                    </ul>
                </nav>
                <div className='d-none d-md-flex'>
                    <button onClick={()=>{setOpenModal(true)}} className='btn-black-back border-round'>
                        JOIN NOW
                    </button>
                </div>

                <div className='row m-0 d-flex d-md-none w-100 justify-content-between'>
                    <div className='d-flex w-auto'>
                        <Link to="/#home-page" className="m-logo w-auto">SOCIAL HOUSE</Link>
                    </div>

                    <button className="toggle-nav w-auto" onClick={onClickNav}>&#9776;</button>
                </div>

            </div>            
        </header>
        
    )
}

export default NavBar
