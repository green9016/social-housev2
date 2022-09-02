import { FC} from 'react'
interface IProps{
    title: string;
    img: string;
}

const Card: FC<IProps> = ({ title, img }) => {
    
    return (
        <div className='col-md-3 col-sm-6 col-6 venues-item'>
            <img className={'venues-item-img'} alt="item" src={img}></img>
            <p className='font-dm font-20px'>{title}</p>
        </div>
    )
}

export default Card
