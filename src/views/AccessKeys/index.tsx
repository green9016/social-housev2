import {FC} from 'react'
import './style.scss'
import KeyCard from "./KeyCard";

import card_1 from "../../assets/images/s.png";
import card_2 from "../../assets/images/s(1).png";
import card_3 from "../../assets/images/s(2).png";
import card_4 from "../../assets/images/s(3).png";
import card_5 from "../../assets/images/s(4).png";

let items = [
    {
        class_name: 'col-12 green-key mb-3',
        img: card_1,
        title: 'GREEN',
        size: '1,500',
        descriptions: [
            {
                'text': 'Access to top clubs and venues',
                'class_name': '',
                'child': [],
            }
        ],
    },
    {
        class_name: 'col-12 gold-key mb-3',
        img: card_2,
        title: 'GOLD',
        size: '1,000',
        descriptions: [
            {
                'text': 'Access to top clubs and venues (including VIP table reservation)',
                'class_name': '',
                'child': [],
            },
            {
                'text': 'VIP discounts',
                'class_name': 'font-bold',
                'child': [],
            }
        ],
    },
    {
        class_name: 'col-12 rose-gold-key mb-3',
        img: card_3,
        title: 'ROSE GOLD',
        size: '750',
        descriptions: [
            {
                'text': 'Access to top clubs and venues (including VIP table reservation)',
                'class_name': '',
                'child': [],
            },
            {
                'text': 'VIP discounts',
                'class_name': '',
                'child': [],
            },
            {
                'text': 'Access to festivals and special events ',
                'class_name': 'font-bold',
                'child': [
                    {
                        'text': 'VIP Electric Zoo, etc.',
                        'class_name': 'font-bold',
                    }
                ],
            }
        ],
    },
    {
        class_name: 'col-12 platinum-key mb-3',
        img: card_4,
        title: 'PLATINUM',
        size: '450',
        descriptions: [
            {
                'text': 'Access to top clubs and venues (including VIP table reservation)',
                'class_name': '',
                'child': [],
            },
            {
                'text': 'VIP discounts',
                'class_name': '',
                'child': [],
            },
            {
                'text': 'Access to festivals and special events ',
                'class_name': '',
                'child': [
                    {
                        'text': 'VIP Electric Zoo, etc.',
                        'class_name': '',
                    }
                ],
            },
            {
                'text': 'Access to restaurant reservation service',
                'class_name': 'font-bold',
                'child': [
                    {
                        'text': 'Catch Steak, Lavo, Both Tao\'s, etc.',
                        'class_name': 'font-bold',
                    }
                ],
            },
            {
                'text': 'Automatic whitelist spot on all future projects',
                'class_name': 'font-bold',
                'child': [],
            }
        ],
    },
    {
        class_name: 'col-12 black-key mb-3',
        img: card_5,
        title: 'BLACK',
        size: '77',
        descriptions: [
            {
                'text': 'Access to top clubs and venues (including VIP table reservation)',
                'class_name': '',
                'child': [],
            },
            {
                'text': 'VIP discounts',
                'class_name': '',
                'child': [],
            },
            {
                'text': 'Access to festivals and special events ',
                'class_name': '',
                'child': [
                    {
                        'text': 'VIP Electric Zoo, etc.',
                        'class_name': '',
                    }
                ],
            },
            {
                'text': 'Access to restaurant reservation service',
                'class_name': '',
                'child': [
                    {
                        'text': 'Catch Steak, Lavo, Both Tao\'s, etc.',
                        'class_name': '',
                    }
                ],
            },
            {
                'text': 'Automatic whitelist spot on all future projects',
                'class_name': '',
                'child': [],
            },
            {
                'text': 'Priority access to ALL events',
                'class_name': 'font-bold',
                'child': [],
            },
            {
                'text': 'Full concierge service with private line \n',
                'class_name': 'font-bold',
                'child': [],
            }
        ],
    }
];

const Root: FC = () => {

    return (
        <section className="container access-keys" id="access-keys">
            <div className={'row'}>
                <h1 className='font-times font-50px'>Access Keys</h1>
                <div className={'col-md-10 col-12'}>
                    <p className='font-dm font-20px'>Our access keys are minted at random. Each purchase grants you ownership of one of the following keys, distributed randomly. </p>
                </div>
            </div>

            <div className={'row'}>
                {items.map((item, index) =>
                    <KeyCard key={index} {...item}/>
                )}
            </div>


            <div className='row mt-5'>
                <p className={'text-center font-dm font-20px mb-0'}>*Events and club access will be run</p>
                <p className={'text-center font-dm font-20px'}>through an RSVP system*</p>
            </div>

        </section>
    )
}

export default Root
