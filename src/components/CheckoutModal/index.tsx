import { FC, useState } from 'react'
import { CheckoutWithCard } from '@paperxyz/react-client-sdk'
import { getPaperSdkClientSecret } from '../../utils/paper.mjs';
import Logo from "../../assets/images/logo.svg";
import "@paperxyz/react-client-sdk/dist/index.css";
import './style.scss'

interface IProps{
    setCheckoutModalOpen: any;
}

type CheckoutStep = 'user' | 'card' | 'done'

const isValidEmail = (email:string)  => {
    return /\S+@\S+\.\S+/.test(email);
}
const CheckoutModal: FC<IProps> = ({ setCheckoutModalOpen }) => {
    const [step, setStep] = useState<CheckoutStep>('user')
    const [sdkClientSecret, setSdkClientSecret] = useState('')
    const [walletAddress, setWalletAddress] = useState('')
    const [email, setEmail] = useState('')
    const [progressing, setProgressing] = useState(false)

    const onPaymentSuccess = (result: any) => {
        console.log('-onPaymentSuccess-', result)
        setCheckoutModalOpen(false)
    }

    const onReview = (result: any) => {
        console.log('-onReview-', result)
    }
    
    const onError = (err: any) => {
        console.log('-err-', err)
        alert(`Paper payment checkout error`)
    }

    const onClickNext = () => {
        if (!walletAddress || !walletAddress.startsWith('0x') || walletAddress.length != 42) {
            alert('Please input valid wallet address')
            return
        }
        if (!email || !isValidEmail(email)) {
            alert('Please input valid email address')
            return
        }

        setProgressing(true)
        getPaperSdkClientSecret({
            walletAddress,
            email,
            priceInEth: '0.002',
            quantity: 1
        }).then(res => {
            setSdkClientSecret(res)
            setStep('card')
        }).finally(() => setProgressing(false))
    }

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button className="titleCloseBtn"
                    onClick={() => {
                        setCheckoutModalOpen(false);
                    }}
                >X</button>
                <div className="title">
                    <img className='modal-logo' alt="access" src={Logo}></img>
                    <div className='font-times font-20px title-desc'>Purchase an NFT with Card</div>                    
                </div>
                
                <div className="body d-block m-t-10">
                    {step === 'user' && (
                        <>
                            <div className="row p-3">
                                <div className="col-md-12 form-group">
                                    <input name="name" placeholder="Wallet Address" className="form-control custom" value={walletAddress} onChange={(evt)=>{setWalletAddress(evt.target.value)}}/>
                                </div>
                                <div className="col-md-12 form-group">
                                    <input name="email" placeholder="Email Address" className="form-control custom" value={email} onChange={(evt)=>{setEmail(evt.target.value)}} />
                                </div>
                            </div>

                            <div className="footer">
                                <button className="btn-black-round" onClick={onClickNext} disabled={progressing}>NEXT</button>
                            </div>
                        </>
                    )}

                    {step != 'user' && (
                        <CheckoutWithCard
                            // recipient address and the recipient email
                            // are all set in the checkoutSdkIntent
                            sdkClientSecret={sdkClientSecret}
                            onPaymentSuccess={onPaymentSuccess}
                            onReview={onReview}
                            onError={onError}
                            options={{
                                colorBackground: '#ffffff',
                                colorPrimary: '#7300a8',
                                colorText: '#232323',
                                borderRadius: 6,
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
export default CheckoutModal
