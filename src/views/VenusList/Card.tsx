import { FC} from 'react'
interface IProps{
    title: string;
    img: string;
    link: string;
}

const Card: FC<IProps> = ({ title, img, link }) => {
    
    return (
        <a className='col-md-3 col-sm-6 col-6 venues-item' href={link}>
            <img className={'venues-item-img'} alt="item" src={img}></img>
            <p className='font-dm font-20px'>{title}</p>
        </a>
    )
}

export default Card
