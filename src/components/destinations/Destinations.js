import './Destinations.styles.scss'

import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Maldives from '../../assets/maldives.jpg';
import Maldives2 from '../../assets/maldives2.jpg';
import KeyWest from '../../assets/keywest.jpg';

export default function Destinations() {
    return (
        <div className='destinations'>
            <h1>All-Inclusive Resorts</h1>
            <p>On the Caribbean's Best Beaches</p>
            <div className='image-container'>
                <img className='active' src={BoraBora} alt="destination1" />
                <img src={BoraBora2} alt="destination1" />
                <img src={Maldives} alt="destination1" />
                <img src={Maldives2} alt="destination1" />
                <img src={KeyWest} alt="destination1" />
            </div>
        </div>
    )
}