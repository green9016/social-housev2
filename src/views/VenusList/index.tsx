import { FC} from 'react'
import './style.scss'
import Card from "./Card";
import img_1 from '../../assets/images/s2(1).png'
import img_2 from '../../assets/images/s2(3).png'
import img_3 from '../../assets/images/s2(2).png'
import img_4 from '../../assets/images/s2(4).png'
import img_5 from '../../assets/images/s(7).png'
import img_6 from '../../assets/images/s2(5).png'
import img_7 from '../../assets/images/s(8).png'
import img_8 from '../../assets/images/s3.png'
import img_9 from '../../assets/images/s2(6).png'
import img_10 from '../../assets/images/s2(7).png'
import img_11 from '../../assets/images/s(9).png'
import img_12 from '../../assets/images/s(10).png'
import {FaDiscord, FaInstagram, FaTwitter} from "react-icons/all";

let items_1 = [
    {
        title: "Vendome",
        img: img_1
    },
    {
        title: "SLS Hyde Beach",
        img: img_2
    },
    {
        title: "Mr.Jones",
        img: img_3
    },
    {
        title: "Swan",
        img: img_4
    }
];
let items_2 = [
    {
        title: "Monarch Rooftop",
        img: img_5
    },
    {
        title: "Paradise Club",
        img: img_6
    },
    {
        title: "The Delancey",
        img: img_7
    },
    {
        title: "Lavo",
        img: img_8
    }
];
let items_3 = [
    {
        title: "Capri Southampton",
        img: img_9
    },
    {
        title: "AM Southampton",
        img: img_10
    },
    {
        title: "Buddha Bar",
        img: img_11
    },
    {
        title: "Pilo's Beach Club",
        img: img_12
    }
];

const VenusList: FC = () => {

      return (
          <section className="container venus-list-page" id="venus-list">
              <div className={'row'}>
                  <h1 className='font-times font-45px'>Venues</h1>
                  <div className={'col-md-10 col-12'}>
                      <p className='font-dm font-15px'>We partnered with major hospitality groups, each with their own unique set of networks, to bring our members free access to some of the best clubs, hotels, bars, and restaurants on the East Coast. </p>
                  </div>
              </div>

              <div className={'row mb-4'}>
                  <div className={'col-md-12 col-12'}>
                      <h4 className='font-dm font-30px'>Miami</h4>
                  </div>
                  {items_1.map((item, index) =>
                      <Card key={index} {...item}/>
                  )}
              </div>

              <div className={'row mb-4'}>
                  <div className={'col-md-12 col-12'}>
                      <h4 className='font-dm font-30px'>New York City</h4>
                  </div>
                  {items_2.map((item, index) =>
                      <Card key={index} {...item}/>
                  )}
              </div>

              <div className={'row mb-4'}>
                  <div className={'col-md-12 col-12'}>
                      <h4 className='font-dm font-30px'>Hamptons</h4>
                  </div>
                  {items_3.map((item, index) =>
                      <Card key={index} {...item}/>
                  )}
              </div>

              <div className={'row mt-5 mb-5'}>
                  <div>
                      <p className='font-dm font-25px text-center'>Visit our Discord to see our full list of venues</p>
                  </div>
                  <div className='text-center'>
                      <a rel="noopener noreferrer" href="https://discord.gg/dU8aWeq9SU" target="_blank" className="social-link"><FaDiscord/></a>
                      <a rel="noopener noreferrer" href="https://twitter.com/socialhouseio" target="_blank" className="social-link"><FaTwitter/></a>
                      <a rel="noopener noreferrer" href="https://www.instagram.com/thesocialhouse.io/" target="_blank" className="social-link"><FaInstagram/></a>
                  </div>
              </div>

          </section>
    )
    
}

export default VenusList
