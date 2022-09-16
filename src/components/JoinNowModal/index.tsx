import React, {FC} from 'react'
import './style.scss'
import Logo from "../../assets/images/logo.svg";

interface IProps{
    setOpenModal: any;
    waitlistEvent: any;
}

const JoinNowModal: FC<IProps> = ({ setOpenModal, waitlistEvent }) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button className="titleCloseBtn"
                    onClick={() => {
                        setOpenModal(false);
                    }}
                >X</button>
                <div className="title">
                    <img className='modal-logo' alt="access" src={Logo}></img>
                    <div className='font-times font-20px title-desc'>Purchase is currently unavailable</div>                    
                </div>
                <div className="body d-block m-t-10">
                    <div className="row">
                        <p className='font-20px text-start'>Access keys will be available for purchase in waves. Each wave will be active for 72 hours, during which time you can purchase an access key for the following price:</p>
                    </div>
                    <div className={'row'}>
                        <div className={'col-md-12'}>
                            <p className='font-dm font-20px text-start'>
                                <span className='font-bold'>Wave 1 - </span>
                                <span>$1000</span>
                            </p>
                        </div>
                        <div className={'col-md-12'}>
                            <p className={'font-dm font-20px text-start'}>
                                <span className='font-bold'>Wave 2 - </span>
                                <span>$2500</span>
                            </p>
                        </div>
                        <div className={'col-md-12'}>
                            <p className={'font-dm font-20px text-start'}>
                                <span className='font-bold'>Wave 3 + - </span>
                                <span>$5000</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className='row w-100 m-0 justify-content-between'>
                        <div className='w-auto d-flex px-0'>
                            <p className='m-auto'>Join our waitlist to be notified when each wave opens</p>
                        </div>

                        <button className="btn-black-back w-auto" onClick={()=>{waitlistEvent()}}>WAITLIST</button>
                    </div>

                </div>
            </div>

        </div>
    );
};
export default JoinNowModal
