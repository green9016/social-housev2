import  { FC, useState} from 'react'
import { ReactComponent as Logo } from '../../assets/images/logo_home.svg';
import { HashLink as Link } from 'react-router-hash-link';
import HorizonImg from '../../assets/images/s(6).png';
import './style.scss'
interface IJoinNow{
    setOpenModal: any;
    setCheckoutModalOpen: any;
}
const Home: FC<IJoinNow>= ({setOpenModal, setCheckoutModalOpen}) => {

    const onClickBuyNow = () => {
        setCheckoutModalOpen(true)
    }

    return (
        <section id='home-page' className='container home-page'>
            <div className={'row'}>
                <div className='col-md-6 pb-150px m-pb-50px'>
                    <div className={'d-flex'}>
                        <div className={'d-block m-w-100'}>
                            <div className={'d-flex'}>
                                <Logo className={"m-auto logo"}></Logo>
                            </div>
                            <h1 className={'logo-text'}>The Social House</h1>
                        </div>
                    </div>

                    <h4 className="font-dm font-30px">We work hard so that you play harder.</h4>
                    <p className='font-dm font-20px'>Delivering elevated nightlife to our members through strong networks and ever-growing venue access.</p>
                </div>
                <div className='col-md-6 home-main-back'>
                    {/*<img className={'home-main-img'} src={HomeBackImg}></img>*/}
                </div>
            </div>

            <div className={'row home-description'}>
                <p className={'m-auto text-center font-dm font-30px'}>A one stop members' club to meet new people and go new places. </p>
                <p className={'m-auto text-center font-dm font-30px'}>This is Social House. </p>
            </div>

            <div className={'row'}>
                <p className={'font-30px m-custom-align'}>What Makes The Social House Different?</p>
                <p className={'font-dm font-20px m-custom-align'}>Unlike traditional clubs, our memberships are <span className='font-bold'>transferrable</span>. Stored on the blockchain, our member access keys become an asset that you can sell or transfer at any time.</p>
            </div>

            <div className={'horizon-part'}>
                <p className='font-30px m-custom-align'>ON THE HORIZON</p>
                <p className='font-dm font-20px m-custom-align'>In addition to providing our members free access to some of the best venues and events on the East Coast, we will soon be opening a Social House physical location. </p>
                <div className={'row'}>
                    <img className={'w-100'} alt="horz" src={HorizonImg}></img>
                </div>
            </div>

            <div className='join-house mt-5'>
                <div className={'row mx-0 d-block d-md-flex'}>
                    <p className='me-5 font-45px line-height-45px w-auto m-w-100'>Join the Social House</p>
                    <div className='w-auto'>
                        <button className='btn-gray-back me-3' onClick={onClickBuyNow}>BUY NOW</button>
                        <button className='btn-black-back' onClick={setOpenModal}>JOIN WAITLIST</button>
                    </div>
                </div>
                <div className={'row mx-0 mt-3'}>
                    <div className={'col-md-10 col-12'}>
                        <p className='font-dm font-20px'>Our various access keys offer a wide array of benefits. Learn more about enrollment and explore our full list of perks here:</p>
                    </div>
                </div>
                <div className={'row mx-0 mt-3'}>
                    <div className={'col-md-10 col-12'}>
                        {/* <button className='btn-black-back border-round py-3 m-py-2'>Explore Access Keys</button> */}
                        <Link className='btn-black-back border-round py-3 m-py-2 link' to="/access-keys/#access-keys">Explore Access Keys</Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home
