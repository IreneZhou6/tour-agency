import './Selects.styles.css';
import SelectsImg from '../SelectsImg/SelectsImg';

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import Maldives3 from '../../assets/maldives3.jpg'
import KeyWest from '../../assets/keywest.jpg'

export default function Selects() {
    return (
        <div className='selects-container'>
            <SelectsImg bgImg={BoraBora} text='Bora Bora' />
            <SelectsImg bgImg={BoraBora2} text='Emerald Bay' />
            <SelectsImg bgImg={Maldives} text='Maldives' />
            <SelectsImg bgImg={Maldives2} text='Grenada' />
            <SelectsImg bgImg={Maldives3} text='Barbados' />
            <SelectsImg bgImg={KeyWest} text='Key West' />
        </div>
    )
}