import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ImgCarousel.styles.scss';

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'

export default function ImgCarousel() {
    return (
        <Carousel name='carousel' className='carousel container' autoPlay={true} infiniteLoop={true} showArrows={true}>
            <div>
                <img src={BoraBora} alt='BoraBora' />
            </div>
            <div>
                <img src={BoraBora2} alt='BoraBora2' />
            </div>
            <div>
                <img src={Maldives} alt='Maldives' />
            </div>
        </Carousel>
    )
}