import {FC, useState} from 'react'
import NavBar from '../../components/NavBar'
import Home from '../Home'
import VenusList from '../VenusList'

import JoinNowModal from "../../components/JoinNowModal";
import WaitListModal from "../../components/WaitListModal";

import './style.scss'
import CheckoutModal from '../../components/CheckoutModal';
const Root: FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [waitlistShow, setWaitListShow] = useState(false);
    const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
    
    const onClickWaitList = () =>{
        setModalOpen(false);
        setWaitListShow(true);
    }

    return (
        <div className="main-root">
            {modalOpen && <JoinNowModal setOpenModal={setModalOpen} waitlistEvent = {onClickWaitList}/>}
            {waitlistShow && <WaitListModal setOpenModal={setWaitListShow}/>}
            {checkoutModalOpen && <CheckoutModal setCheckoutModalOpen={setCheckoutModalOpen}/>}
            <NavBar setOpenModal={setModalOpen}/>
            <Home setOpenModal={setModalOpen} setCheckoutModalOpen={setCheckoutModalOpen}/>
            <VenusList/>
            
        </div>
    )
}

export default Root
