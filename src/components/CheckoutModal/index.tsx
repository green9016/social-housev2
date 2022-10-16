import { FC } from 'react'
import { CHECKOUT_SHAREABLE_LINK } from '../../utils/paper.mjs';
import "@paperxyz/react-client-sdk/dist/index.css";
import './style.scss'

interface IProps{
    setCheckoutModalOpen: any;
}

const CheckoutModal: FC<IProps> = ({ setCheckoutModalOpen }) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button className="titleCloseBtn"
                    onClick={() => {
                        setCheckoutModalOpen(false);
                    }}
                >X</button>
                <iframe src={CHECKOUT_SHAREABLE_LINK} width="100%" height="600px"></iframe>
            </div>
        </div>
    );
};
export default CheckoutModal
