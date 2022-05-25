import './Footer.styles.scss';
import { AiOutlineGithub, AiOutlineMail, AiOutlinePhone, AiFillWechat } from 'react-icons/ai'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-top">
                <h3>BEACHES.</h3>
                <div className="social">
                    <AiOutlineGithub className='icon' />
                    <AiOutlineMail className='icon' />
                    <AiOutlinePhone className='icon' />
                    <AiFillWechat className='icon' />
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <ul>
                        <li>About</li>
                        <li>Partnerships</li>
                        <li>Careers</li>
                        <li>Newsroom</li>
                        <li>Advertising</li>
                    </ul>
                </div>
                <div className="footer-bottom-right">
                    <ul>
                        <li>Contact</li>
                        <li>Terms</li>
                        <li>Policy</li>
                        <li>Privacy</li>
                        <li>Pricing</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}