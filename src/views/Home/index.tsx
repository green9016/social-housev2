import  { FC} from 'react'
import './style.scss'
import {ReactComponent as Logo} from '../../assets/images/logo_home.svg';
import HorizonImg from '../../assets/images/s(6).png';

interface IJoinNow{
    setOpenModal: any;
}

const Home: FC<IJoinNow>= ({setOpenModal}) => {

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
                <p className={'m-auto text-center font-dm font-25px'}>A one stop members' club to meet new people and go new places.</p>
                <p className={'m-auto text-center font-dm font-25px'}>This is the Social House.</p>
            </div>

            <div className={'row'}>
                <h1 className={'m-auto text-center font-45px'}>What Makes The Social House Different?</h1>
                <h4 className={'m-auto text-center font-30px'}>Unlike traditional clubs, our memberships are <span className='font-bold'>transferrable</span>. Stored on the blockchain, our member access keys become an asset that you can sell or transfer at any time.</h4>
            </div>

            <div className={'horizon-part'}>
                <h2 className='text-center font-dm font-325px'>ON THE HORIZON</h2>
                <p className='text-center font-228px px-5'>In addition to providing our members free access to some of the best venues and events on the East Coast, we will soon be opening a Social House physical location. </p>
                <div className={'row'}>
                    <img className={'w-100'} alt="horz" src={HorizonImg}></img>
                </div>
            </div>

            <div className='join-house mt-5'>
                <div className={'row mx-0 d-block d-md-flex'}>
                    <p className='me-5 font-45px line-height-45px w-auto m-w-100'>Join the Social House</p>
                    <div className='w-auto'>
                        <button className='btn-gray-back me-3'>BUY NOW</button>
                        <button className='btn-black-back' onClick={setOpenModal}>JOIN WAITLIST</button>
                    </div>
                </div>
                <div className={'row mx-0 mt-3'}>
                    <div className={'col-md-10 col-12'}>
                        <p className='font-277px'>Our various access keys offer a wide array of benefits. Learn more about enrollment and explore our full list of perks here:</p>
                    </div>
                </div>
                <div className={'row mx-0 mt-3'}>
                    <div className={'col-md-10 col-12'}>
                        <button className='btn-black-back border-round py-3 m-py-2'>Explore Access Keys</button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Home
