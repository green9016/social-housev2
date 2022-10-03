import { FC } from 'react'
import { CheckoutWithEth } from '@paperxyz/react-client-sdk'
import { sdkClientSecret } from '../../utils/paper.mjs';
import Logo from "../../assets/images/logo.svg";
import "@paperxyz/react-client-sdk/dist/index.css";
import './style.scss'

interface IProps{
    setCheckoutModalOpen: any;
}

const CheckoutModal: FC<IProps> = ({ setCheckoutModalOpen }) => {
    const onPaymentSuccess = (result: any) => {
        console.log('-err-', result)
    }

    const onWalletConnected = ({ userAddress, chainId }: any) => {
        console.log('-err-', userAddress, chainId)
    }
    
    const onError = (err: any) => {
        console.log('-err-', err)
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
                    <CheckoutWithEth
                        // recipient address and the recipient email
                        // are all set in the checkoutSdkIntent
                        sdkClientSecret={sdkClientSecret}
                        receivingWalletType='MetaMask'
                        suppressErrorToast={true}
                        showConnectWalletOptions={true}
                        onSuccess={onPaymentSuccess}
                        onWalletConnected={onWalletConnected}
                        onError={onError}
                        options={{
                            colorBackground: '#ffffff',
                            colorPrimary: '#7300a8',
                            colorText: '#232323',
                            borderRadius: 6,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
export default CheckoutModal
