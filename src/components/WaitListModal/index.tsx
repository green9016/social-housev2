import React, {FC, useState} from 'react'
import './style.scss'
import Logo from "../../assets/images/logo.svg";

interface IProps{
    setOpenModal: any;
}

const WaitListModal: FC<IProps> = ({ setOpenModal }) => {
    const msg = {
        to: 'dan@thesocialhouse.io',
        subject: 'Email from Social House',
        // text: 'and easy to do anywhere, even with Node.js',
        html: '',
    };

    const [name, setName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');
    const onClickSubmit = async () =>{

        setOpenModal(false);
        msg.html = `<div style="display: block">
                    <div style="width: 100%">
                        <label style="margin-left: 15px">SOCIAL HOUSE</label>
                    </div>
                    <div style="margin-top: 30px">
                        <div style="width: 100%; display: block">
                            <label>E-mail : </label>
                            <p style="color: #000000">${emailAddress}</p>
                        </div>
                        <div style="width: 100%; display: block">
                            <label>Name : <p style="color: #000000">${name}</p> </label>
                            
                        </div>
                        <div style="width: 100%; display: block">
                            <label>Message : <p style="color: #000000">${message}</p> </label>
                            
                        </div>
                    </div>
                </div>`;
        window['sendEmail'](msg.subject, msg.html, msg.to);
    };
    
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
                    <span className='font-times font-20px'>Enter your email to join our waitlist.</span>
                </div>
                <div className="body">
                    <div className="row p-3">
                        <div className="col-md-12 form-group">
                            <input name="name" placeholder="Full Name" className="form-control custom" value={name} onChange={(evt)=>{setName(evt.target.value)}}/>
                        </div>
                        <div className="col-md-12 form-group">
                            <input name="email" placeholder="Email Address" className="form-control custom" value={emailAddress} onChange={(evt)=>{setEmailAddress(evt.target.value)}} />
                        </div>
                        <div className="col-md-12 form-group">
                            <textarea name="message" placeholder="Leave a message here..." rows={4} className="form-control custom" onChange={(evt)=>{setMessage(evt.target.value)}}/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn-black-round" onClick={onClickSubmit}>SUBMIT</button>
                </div>
            </div>
        </div>
    );
};
export default WaitListModal
