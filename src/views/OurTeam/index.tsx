import {FC} from 'react'
import './style.scss'
import TeamCard from "./TeamCard";
import NavBar from '../../components/NavBar';
import person_1 from "../../assets/images/person1.png";
import person_2 from "../../assets/images/person2.png";
import person_3 from "../../assets/images/person3.png";
import person_4 from "../../assets/images/person4.png";
import person_5 from "../../assets/images/person10.png";
import person_6 from "../../assets/images/person11.png";
import person_7 from "../../assets/images/person12.png";
import person_8 from "../../assets/images/person8.png";
import person_9 from "../../assets/images/person9.png";
import person_10 from "../../assets/images/person6.png";
import person_11 from "../../assets/images/person5.jpg";
import person_12 from "../../assets/images/person7.png";
import person_13 from "../../assets/images/person13.png";
import {AiOutlineGlobal, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/all";

let managements = [
    {
        class_name: "col-md-4",
        img: person_1,
        position: "",
        name: "Dan Cantando",
        description:"Serial entrepreneur and creative thinker. B.S. degree in Entrepreneurship and Innovation Management.",
        link:[
            {url:"https://www.linkedin.com/in/dancantando/", text:"@Dan C.", icon:FaLinkedin}
        ]
    },
    {
        class_name: "col-md-4",
        img: person_2,
        position: "",
        name: "Collin Cavanaugh",
        description:"Experienced in event planning, sales, and management.",
        link:[
            {url:"https://www.instagram.com/collincavanaugh/", text:"@Collin Cavanaugh", icon:FaInstagram},
            {url:"https://www.linkedin.com/in/collincavanaugh/", text:"@Collin Cavanaugh", icon:FaLinkedin},
        ]
    },
    {
        class_name: "col-md-4",
        img: person_3,
        position: "",
        name: "Dorian Xerri",
        description:"NFT Investor, Visionary, and Macro Planner.",
        link:[
            {url:"https://Twitter.com/DCGDorian", text:"@DCGDorian", icon:FaTwitter},
            {url:"https://instagram.com/DorianX.eth", text:"@DorianX.eth", icon:FaInstagram},
            {url:"https://opensea.io/DorianX", text:"@DorianX", icon:AiOutlineGlobal}
        ]
    },
];
let hospitality = [
    {
        class_name: "col-md-4",
        img: person_4,
        position: "",
        name: "Anthony/Doc",
        description:"Major hospitality group owner with operations in NYC, Miami, and the Hamptons.",
        link:[
            {url:"https://www.linkedin.com/in/anthony-shnayderman-a0619659/", text:"@Anthony Shnayderman", icon:FaLinkedin},
            {url:"https://linktr.ee/DOC_NYC", text:"@anthonydoc", icon:FaInstagram},
            {url:"https://www.aimtickets.com/about/", text:"@aimtickets", icon:AiOutlineGlobal}
        ]
    },
    {
        class_name: "col-md-4",
        img: person_5,
        position: "",
        name: "Mike",
        description:"Partner at Aim Hospitality, Temakase, and Hidden Lane. Operations in NYC, Miami, and the Hamptons.",
        link:[
            {url:"https://instagram.com/mikekanevsky?igshid=YmMyMTA2M2Y=", text:"@Mike", icon:FaInstagram},
        ]
    },
    {
        class_name: "col-md-4",
        img: person_6,
        position: "",
        name: "Maksim",
        description:"Partner at Aim Hospitality, the Miami Experience, Temakase, and Hidden Lane. Focused on Miami.",
        link:[
            {url:"https://www.linkedin.com/in/maksim-vladimirskiy-b4508521", text:"@Maksim", icon:FaLinkedin},
            {url:"https://instagram.com/MagnuMax", text:"Co-Founder @maksim", icon:FaInstagram},
        ]
    },
    {
        class_name: "col-md-4",
        img: person_7,
        position: "",
        name: "Richie Romero",
        description:"Partner at Nebula, Zazzy's Pizza, Innocent Yesterday, Sushi by Bou, Summer Club NYC, and more.",
        link:[
            {url:"https://www.linkedin.com/in/richie-romero-7169996", text:"@Richie", icon:FaLinkedin},
            {url:"https://instagram.com/richieromero1?igshid=YmMyMTA2M2Y=", text:"@richie", icon:FaInstagram},
        ]
    },
    {
        class_name: "col-md-4",
        img: person_8,
        position: "",
        name: "JP",
        description:"Owner of The Dean, Plugged University, and partner at Aim Hospitality.",
        link:[
            {url:"https://linktr.ee/JP_NYC", text:"@jpnyc__", icon:FaInstagram}
        ]
    },
    {
        class_name: "col-md-4",
        img: person_9,
        position: "",
        name: "Sahil",
        description:"NFT Investor, Nightlife Entrepreneur, Creative Director, Producer, and DJ. Owner of ABNYGROUP & ABNYLIVE.",
        link:[
            {url:"https://www.instagram.com/sahil.omm/", text:"@sahil.omm", icon:FaInstagram},
            {url:"https://www.abnygroup.com/", text:"@abnygroup", icon:AiOutlineGlobal}
        ]
    },
];
let additional = [
    {
        class_name: "col-md-3",
        img: person_10,
        position: "Developer",
        name: "Ryo Tanaka",
        description:"Experienced blockchain engineer, leader, and Web3 expert.",
        link:[
            {url:"https://www.linkedin.com/in/ryo-tanaka-612179199/", text:"@Ryo Tanaka", icon:FaLinkedin},
            {url:"https://github.com/DevT999", text:"@DevT999", icon:FaGithub}
        ]
    },
    {
        class_name: "col-md-3",
        img: person_11,
        position: "Crypto Artist & Animator",
        name: "Marc-o-matic",
        description:"Featured Superrare, MakersPlace, 1stDibs NY, Decentraland, Adobe AR Ambassador.",
        link:[
            {url:"https://www.linkedin.com/in/marc0matic/", text:"@Marc-O-Matic", icon:FaLinkedin},
            {url:"https://www.instagram.com/marcomatic/?hl=en", text:"@marcomatic", icon:FaInstagram},
            {url:"https://www.marcomatic.com/", text:"@marcomatic", icon:AiOutlineGlobal}
        ]
    },
    {
        class_name: "col-md-3",
        img: person_12,
        position: "DJ & Crypto Investor",
        name: "Greg S",
        description:"Experienced crypto investor by day. DJ by night.",
        link:[
            {url:"https://www.instagram.com/p/CTFi9nyl4F-/", text:"@itsgreg.s", icon:FaInstagram}
        ]
    },
    {
        class_name: "col-md-3",
        img: person_13,
        position: "Advisor",
        name: "Teddy Jungreis",
        description:"Serial entrepreneur with vast experience and network.",
        link:[
            {url:"https://www.linkedin.com/in/teddyjungreis/", text:"@Richie", icon:FaLinkedin},
        ]
    },
];
const OurTeam: FC = () => {

    return (
        <>
            <NavBar/>
            <section className="container our-team" id="our-team">
                <div className={'row'}>
                    <h1 className='font-times font-50px'>Our Team</h1>
                    <div className={'col-md-10 col-12'}>
                        <p className='font-dm font-20px'>Our team is dedicated to solidifying new partnerships and expanding our networks, all to invest in the ways YOU want to see The Social House grow.</p>
                    </div>
                </div>

                <div className={'row'}>
                    <div className='col-md-12'>
                        <h4 className='font-dm font-30px'>Management and Operations</h4>
                    </div>
                    {managements.map((item, index) =>
                        <TeamCard key={index} {...item}/>
                    )}
                </div>

                <div className={'row'}>
                    <div className='col-md-12'>
                        <h4 className='font-dm font-30px'>Hospitality</h4>
                    </div>
                    {hospitality.map((item, index) =>
                        <TeamCard key={index} {...item}/>
                    )}
                </div>

                <div className={'row'}>
                    <div className='col-md-12'>
                        <h4 className='font-dm font-30px'>Additional Team Members</h4>
                    </div>
                    {additional.map((item, index) =>
                        <TeamCard key={index} {...item}/>
                    )}
                </div>

            </section>
        </>
        
    )
}

export default OurTeam
