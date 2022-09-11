import { FC} from 'react'
interface IProps{
    class_name: string;
    img: string;
    position: string;
    name: string;
    description: string;
    link:any;
}

interface ILink{
    url : string;
    text: string;
    icon: any;
}

const TeamCard: FC<IProps> = ({ class_name, img, position, name, description, link }) => {
    
    return (
        <div className={`${class_name?class_name:'col-md-3'} col-12 team-item`}>
            <img alt="our-team" src={img}></img>
            <h5 className='text-center font-dm font-20px'>{position}</h5>
            <h5 className='text-center font-dm font-20px'>{name}</h5>
            <p className='text-center'>{description}</p>
            <div className='row justify-content-center icon-list'>
                {
                    Array.from(link).map((item, index) =>{
                        const data = item as ILink;
                        return (
                            <a key={index} href={data.url} className="person-link" target="_blank" rel="noopener noreferrer">{data.icon()}</a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TeamCard
