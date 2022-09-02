import {FC} from 'react'
import NavBar from '../../components/NavBar'
import Home from '../Home'
import AccessKeys from '../AccessKeys'
import VenusList from '../VenusList'

import './style.scss'
const Root: FC = () => {
    
    return (
        <div className="main-root">
            <NavBar/>
            
            <Home/>
            <VenusList/>
            <AccessKeys/>
        </div>
    )
}

export default Root
