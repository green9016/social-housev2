import { FC} from 'react'
interface IProps{
    class_name: string;
    img: string;
    title: string;
    size: string;
    descriptions: any;
}

interface IChild{
    text: string;
    class_name: string;
}

interface IDes{
    text: string;
    class_name: string;
    child: IChild[];
}

const KeyCard: FC<IProps> = ({ class_name, img, title, size, descriptions }) => {
    
    return (
        <div className={class_name}>
            <div className={'row py-3 access-key-item'}>
                <div className={'col-md-4 col-12 access-key-img'}>
                    <img alt="access" src={img}></img>
                </div>
                <div className={'col-md-8 col-12'}>
                    <h3 className='font-times font-30px'>{title}</h3>
                    <p className='font-times font-20px font-bold mb-0'>Number available at : {size}</p>
                    <p className='font-dm font-20px mb-0'>Benefits include:</p>
                    <ul>
                        <li>Access to members only events</li>
                        <li>Access to members only discord</li>
                        <li>+1 allowed (event dependent)</li>
                        {
                            Array.from(descriptions).map((item, index) =>{
                                const data = item as IDes;
                                return (
                                    <li className={data.class_name} key={index}>
                                        {data.text}
                                        {
                                            Array.from(data.child).map((child, indexChild) =>{
                                                const child_data = child as IChild;
                                                return (
                                                    <ul key={indexChild}>
                                                        <li className={child_data.class_name}>{child_data.text}</li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default KeyCard
